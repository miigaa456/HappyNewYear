document.addEventListener('DOMContentLoaded', function() {
    // Цас үүсгэх
    createSnowflakes();
    
    // Шинэ он хүртэлх хугацаа тоолуур
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Цас үүсгэх функц
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeCount = 150;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Санамсаргүй хэмжээ (2-10px)
        const size = Math.random() * 8 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // Санамсаргүй байршил
        snowflake.style.left = `${Math.random() * 100}vw`;
        
        // Санамсаргүй унах хугацаа (2-10 секунд)
        const duration = Math.random() * 8 + 2;
        snowflake.style.animationDuration = `${duration}s`;
        
        // Санамсаргүй хойшилт
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        // Санамсаргүй бөгжөр байдал
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        
        snowflakesContainer.appendChild(snowflake);
    }
}

// Шинэ он хүртэлх хугацааг тооцоолох
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
    
    const timeLeft = newYear - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = 
        `${days} өдөр ${hours} цаг ${minutes} минут ${seconds} секунд`;
}
window.addEventListener("load", () => {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0.5;       // дууны хүч тохируулах
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked, touch дээр тоглуулах шаардлагатай");
  });
});

document.addEventListener("touchstart", () => {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play();
}, { once: true });