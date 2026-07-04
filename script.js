// পাসকোড সেট করো (যেমন: ক্রাশের জন্মদিন অথবা তোমাদের কোনো স্পেশাল ডেট)
const CORRECT_PIN = "1234"; 
let currentInput = "";
let musicStarted = false;

// প্রথম ক্লিকেই ব্যাকগ্রাউন্ড মিউজিক প্লে করার জন্য (ব্রাউজার পলিসির কারণে এটি দরকার)
function playMusicOnce() {
    if (!musicStarted) {
        const music = document.getElementById('bg-music');
        music.play().catch(error => console.log("Audio play delayed"));
        musicStarted = true;
    }
}

function pressKey(num) {
    playMusicOnce(); // মিউজিক সেফটি চেক
    if (currentInput.length < 4) {
        currentInput += num;
        updateDots();
    }

    if (currentInput.length === 4) {
        setTimeout(() => {
            if (currentInput === CORRECT_PIN) {
                switchScreen("lock-screen", "gift-screen");
            } else {
                switchScreen("lock-screen", "wrong-screen");
            }
        }, 300);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < currentInput.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function tryAgain() {
    currentInput = "";
    updateDots();
    switchScreen("wrong-screen", "lock-screen");
}

function openGift() {
    switchScreen("gift-screen", "final-screen");
}

function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.remove('active');
    document.getElementById(toId).classList.add('active');
}

// "NO" বাটনটি মাউস নিলেই দূরে সরে যাওয়ার ফানি ট্রিক
function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    // স্ক্রিনের যেকোনো র্যান্ডম পজিশনে বাটনটি পাঠাবে
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// "YES" চাপলে অভিনন্দন অ্যানিমেশন অ্যালার্ট
function celebrate() {
    alert("Yayyy! 🥰 ❤️ I knew it! You just made my world beautiful!");
}
