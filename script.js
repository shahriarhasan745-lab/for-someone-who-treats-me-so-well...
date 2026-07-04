<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wanna Be Yours 💖</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <audio id="bg-music" loop preload="auto" crossorigin="anonymous">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>

    <div id="music-indicator" class="music-box" onclick="toggleMusic()">
        <span class="disc">🎵</span>
    </div>

    <div class="bg-hearts">
        <div class="heart-particle">❤️</div>
        <div class="heart-particle">💖</div>
        <div class="heart-particle">🌸</div>
        <div class="heart-particle">✨</div>
    </div>

    <div id="lock-screen" class="screen active">
        <div class="lock-container">
            <div class="left-panel">
                <div class="heart-frame">
                    <img src="IMG_20260704_181355.jpg.jpeg" alt="Special Memory">
                </div>
            </div>
            <div class="right-panel">
                <h3>Enter a passcode</h3>
                <p class="hint">(Hint: Our special day? 🤭)</p>
                <div class="dots-container">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="keypad">
                    <button type="button" onclick="pressKey('1')">1</button>
                    <button type="button" onclick="pressKey('2')">2</button>
                    <button type="button" onclick="pressKey('3')">3</button>
                    <button type="button" onclick="pressKey('4')">4</button>
                    <button type="button" onclick="pressKey('5')">5</button>
                    <button type="button" onclick="pressKey('6')">6</button>
                    <button type="button" onclick="pressKey('7')">7</button>
                    <button type="button" onclick="pressKey('8')">8</button>
                    <button type="button" onclick="pressKey('9')">9</button>
                    <button type="button" onclick="pressKey('*')">*</button>
                    <button type="button" onclick="pressKey('0')">0</button>
                    <button type="button" onclick="pressKey('#')">#</button>
                </div>
            </div>
        </div>
    </div>

    <div id="wrong-screen" class="screen">
        <div class="wrong-container">
            <h1>WRONG PASSCODE</h1>
            <div class="peeking-penguin">❓🐧</div>
            <p>Oops! That's not the right code. Try again! 👀</p>
            <button type="button" class="btn" onclick="tryAgain()">TRY AGAIN</button>
        </div>
    </div>

    <div id="gift-screen" class="screen">
        <div class="gift-container-box">
            <h2>CLICK ON GIFTS TO OPEN 🎁</h2>
            <p style="color: #ffb3c1; margin-bottom: 20px;">Take your time to unlock all 3 secrets carefully...</p>
            <div class="gifts-grid">
                <div class="gift-box" id="box-camera" onclick="openGift('camera')">💌 <p>My Feelings</p></div>
                <div class="gift-box" id="box-cake" onclick="openGift('cake')">🔒 <p>The Love Vault</p></div>
                <div class="gift-box" id="box-gallery" onclick="openGift('gallery')">📸 <p>Our Gallery</p></div>
            </div>
        </div>
    </div>

    <div id="gift-camera" class="screen">
        <div class="split-view">
            <div class="text-side">
                <h2>To the love of my life... 🌸</h2>
                <div id="typing-container" class="typewriter-text"></div>
            </div>
            <div class="visual-side">
                <div class="camera-mockup-frame">
                    <img src="IMG_20260704_181521.jpg.jpeg" alt="Camera Memory">
                    <div class="frame-caption">Just You & Me ✨</div>
                </div>
            </div>
        </div>
        <button type="button" class="btn back-btn" onclick="backToGifts()">Back to Choices</button>
    </div>

    <div id="gift-cake" class="screen">
        <div class="split-view reverse">
            <div class="visual-side">
                <div class="vault-card" onclick="flipVaultCard(this)">
                    <div class="vault-front">
                        <div class="lock-icon">❤️</div>
                        <h3>CLICK TO UNLOCK</h3>
                        <p>[ read the secret note inside ]</p>
                    </div>
                    <div class="vault-back">
                        <p class="flirt-line">"Your smile makes every space feel brighter, and your laugh feels like a warm day."</p>
                        <p>I pray that all your dreams come true and that you are always happy... truly want to see you smile everyday. 🥰</p>
                    </div>
                </div>
            </div>
            <div class="text-side">
                <h2>A Little Secret 🤫</h2>
                <p>May this year be full of little wins, warm conversations and moments that remind just how loved you are.</p>
                <p style="color: #ffb3c1; font-size: 1rem;">(Click on the red card to flip and read the note!)</p>
            </div>
        </div>
        <button type="button" class="btn back-btn" onclick="backToGifts()">Back to Choices</button>
    </div>

    <div id="gift-gallery" class="screen">
        <div class="gallery-window">
            <h2 class="gallery-title">Moments I Cherish With You 💖</h2>
            <p id="gallery-counter" style="color: #ffb3c1; margin-bottom: 10px;">View all photos to unlock the surprise: (1/6)</p>
            
            <div class="slider-container">
                <div class="slide active">
                    <div class="premium-polaroid">
                        <img src="FB_IMG_17831668821594879.jpg.jpeg" alt="Pic 3">
                        <p class="caption">Your Beautiful Smile ✨</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="premium-polaroid">
                        <img src="FB_IMG_17831670241742378.jpg.jpeg" alt="Pic 4">
                        <p class="caption">Vibing Together 🎵</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="premium-polaroid">
                        <img src="IMG_20260704_181614.jpg.jpeg" alt="Pic 5">
                        <p class="caption">Classroom Memories 🌸</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="premium-polaroid">
                        <img src="IMG_20260704_181633.jpg.jpeg" alt="Pic 6">
                        <p class="caption">Sharing Secrets 🤫</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="premium-polaroid">
                        <img src="IMG_20260704_181703.jpg.jpeg" alt="Pic 7">
                        <p class="caption">Studying Together 📚</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="premium-polaroid">
                        <img src="IMG_20260704_181722.jpg.jpeg" alt="Pic 8">
                        <p class="caption">Focused & Prettiest 👀</p>
                    </div>
                </div>
            </div>

            <div class="slider-controls">
                <button type="button" class="btn-arrow" onclick="prevSlide()">❮ Prev</button>
                <button type="button" class="btn-arrow" onclick="nextSlide()">Next ❯</button>
            </div>

            <button type="button" id="final-surprise-btn" class="btn final-proposal-trigger" onclick="goToProposal()" style="display:none; margin-top: 25px; background: #ff4d6d; color: white; box-shadow: 0 0 15px #ff4d6d;">Continue to Final Surprise 💌</button>
        </div>
    </div>

    <div id="final-screen" class="screen">
        <div class="split-view">
            <div class="text-side proposal-text">
                <h1>To the love of my life... ❤️</h1>
                <div class="letter-scroll">
                    <p>To the man who has stolen my heart (and never returned it 🤭).</p>
                    <p>Tell you how I feel, no amount of time is ever enough with you.</p>
                    <p>You feel like home 🏡. You make my world feel softer, safer, real. I will always believe that God knew I needed you. Someone safe, someone steady, someone kind. Someone who sees me fully and still chooses me.</p>
                    <p>The little me always dreamed to have someone like you. You've shown me the kind of love that makes me want to become a better person for you. I hope you know how much I appreciate everything you do for me, every day no matter how tired you are.</p>
                    <p>And I hope in every smile, every fight, every laugh and every moment together you feel my love and know just how much you mean to me.</p>
                    <h3 class="final-ask">I WANT TO ANNOY YOU for the rest of your life. 🥰</h3>
                </div>
                <div class="action-buttons">
                    <button type="button" class="btn yes-btn" onclick="celebrate()">YES! 💖</button>
                    <button type="button" class="btn no-btn" onmouseover="moveNoButton()" id="no-btn">NO 🥺</button>
                </div>
            </div>
            <div class="visual-side">
                <div class="premium-polaroid final-frame">
                    <img src="IMG_20260704_181355.jpg.jpeg" alt="The One">
                    <p class="caption">I love you ohhhuu 🐧 (you'll always be my fvrt)</p>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
