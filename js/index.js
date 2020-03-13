let gameBoard = new GameBoard();
let isGameOver = false;

gameBoard.drawBoard();
gameBoard.control();

function startClick() {
    createLevel1();
    mainStart();
}

function mainStart() {
    if (!isGameOver) {
        createLevel2();
        gameBoard.drawBoard();
        gameBoard.player.drawMainTank();
        gameBoard.resetDirection();
        gameBoard.enemyMove();
        gameBoard.player.fire();
        if (gameBoard.score >= 4) {
            drawHeart()
        }
        gameBoard.checkCollisionEnemy();
        gameBoard.checkCollisionMainTank();
        gameBoard.checkWin();

        repeat()
    }
}

function repeat() {
    return requestAnimationFrame(mainStart);
}


