let currentPasscode = "";
const correctPasscode = "2026"; // তোমার ৪ ডিজিটের কোড
let musicStarted = false;
let currentSlideIdx = 0;

// Tracking items for unlocking final screen
let viewedGifts = new Set();
let viewedSlides = new Set([0]); // Starts with the first slide checked

// Lines for the cinematic typewriter effect
const paragraphTexts = [
    `"I want to be your vacuum cleaner, breathing in your dust.<br>I want to be your Ford Cortina, I will never rust."`,
    `You bring a soft kind of magic to every single day. Out of all the people in the world, my eyes always secretly search for you.`,
    `Spending time with you is my absolute favorite escape.`
];

function playMusicOnce() {
    if (!musicStarted) {
        const audio = document.getElementById("bg-music");
        audio.play().then(() => {
            musicStarted = true;
            document.getElementById("music-indicator").classList.add("playing");
        }).catch(err => console.log("Audio deferred"));
    }
}

function toggleMusic() {
    const audio = document.getElementById("bg-music");
    const indicator = document.getElementById("music-indicator");
    if (audio.paused) {
        audio.play();
        indicator.classList.add("playing");
    } else {
        audio.pause();
        indicator.classList.remove("playing");
    }
}

function pressKey(num) {
    playMusicOnce();
    if (currentPasscode.length < 4) {
        currentPasscode += num;
        updateDots();
    }
    if (currentPasscode.length === 4) {
        setTimeout(verifyPasscode, 300);
    }
}

function updateDots() {
    const dots = document.querySelectorAll(".dots-container .dot");
    dots.forEach((dot, idx) => {
        if (idx < currentPasscode.length) dot.classList.add("filled");
        else dot.classList.remove("filled");
    });
}

function verifyPasscode() {
    if (currentPasscode === correctPasscode) {
        switchScreen("lock-screen", "gift-screen");
    } else {
        switchScreen("lock-screen", "wrong-screen");
    }
}

function tryAgain() {
    currentPasscode = "";
    updateDots();
    switchScreen("wrong-screen", "lock-screen");
}

function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.remove("active");
    document.getElementById(toId).classList.add("active");
}

function openGift(type) {
    viewedGifts.add(type);
    switchScreen("gift-screen", `gift-${type}`);
    
    if (type === 'camera') {
        startTypingEffect();
    }
    if (type === 'gallery') {
        showSlide(currentSlideIdx);
    }
    checkFinalUnlock();
}

function startTypingEffect() {
    const container = document.getElementById("typing-container");
    container.innerHTML = ""; // Clear old text
    
    paragraphTexts.forEach((text, index) => {
        const p = document.createElement("p");
        if(index === 0) p.classList.add("lyrics-style");
        p.innerHTML = text;
        // Introduce artificial timing delays between lines for longer immersion
        p.style.animationDelay = `${index * 2.5}s`; 
        container.appendChild(p);
    });
}

function flipVaultCard(card) {
    if(!card.querySelector('.vault-card-inner')){
        card.innerHTML = `<div class="vault-card-inner">${card.innerHTML}</div>`;
    }
    card.classList.toggle("flipped");
}

function showSlide(idx) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(s => s.classList.remove("active"));
    slides[idx].classList.add("active");
    
    viewedSlides.add(idx);
    
    // Update visual count indicator
    document.getElementById("gallery-counter").innerText = `View all photos to unlock the surprise: (${viewedSlides.size}/7)`;
    checkFinalUnlock();
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    showSlide(currentSlideIdx);
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    showSlide(currentSlideIdx);
}

function checkFinalUnlock() {
    // Requires all 3 main gifts visited AND all 7 unique photos actively scrolled through
    if (viewedGifts.size === 3 && viewedSlides.size === 7) {
        document.getElementById("final-surprise-btn").style.display = "inline-block";
    }
}

function backToGifts() {
    const vault = document.querySelector('.vault-card');
    if(vault) vault.classList.remove('flipped');
    
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("gift-screen").classList.add("active");
}

function goToProposal() {
    switchScreen("gift-gallery", "final-screen");
}

function moveNoButton() {
    const noBtn = document.getElementById("no-btn");
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function celebrate() {
    alert("Yay! Best day ever! ❤️ I love you too!");
}
