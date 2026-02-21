const clickBtn = document.getElementById('clickBtn')
const scoreDisplay = document.getElementById('score');
const rewardImg = document.getElementById('reward');
const clickSound = new Audio('click.mp3')

let score = 0;

clickBtn.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;
    console.log(`click: ${score}`);
    clickSound.play();
    if (score >= 10) {
        rewardImg.src = 'ps.webp';
    }
});