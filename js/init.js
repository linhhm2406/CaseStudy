let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

function createLevel1() {
    document.getElementById('level_input').value = 1;
    MAIN_TANK_DEFAULT_SPEED = 20;
    ENEMY_DEFAULT_SPEED = 2;
    BULLET_DEFAULT_SPEED = 20;
    gameBoard.createEnemy();
}

function createLevel2() {
    if (document.getElementById('level_input').value < 2 && gameBoard.score === 4) {
        alert('Up to Level 2');
        document.getElementById('level_input').value = 2;
        MAIN_TANK_DEFAULT_SPEED += 20;
        ENEMY_DEFAULT_SPEED += 2;
        BULLET_DEFAULT_SPEED += 20;
        gameBoard.createEnemy();
        gameBoard.createEnemy();
    }
}