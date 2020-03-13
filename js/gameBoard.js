let GameBoard = function () {
    let self = this;
    this.enemy = [];
    this.count = 0;
    this.directionChangeValue = 110;
    this.bullet_array = [];
    this.player = new MainTank(MAIN_TANK_DEFAULT_POSITION_LEFT, MAIN_TANK_DEFAULT_POSITION_TOP, DIRECTION_UP);
    this.score = 0;

    this.control = function () {
        window.addEventListener("keydown", move);

        function move(evt) {
            switch (evt.keyCode) {
                case CTRL_BUTTON :
                    self.player.isShoot = true;
                    break;
                case ARROW_LEFT :
                    self.player.setDirection(DIRECTION_LEFT);
                    self.player.moveLeft(imgLeft);
                    break;
                case ARROW_UP :
                    self.player.setDirection(DIRECTION_UP);
                    self.player.moveUp(imgUp);
                    break;
                case ARROW_RIGHT :
                    self.player.setDirection(DIRECTION_RIGHT);
                    self.player.moveRight(imgRight);
                    break;
                case ARROW_DOWN :
                    self.player.setDirection(DIRECTION_DOWN);
                    self.player.moveDown(imgDown);
                    break;
            }
        }
    };
    this.drawBoard = function () {
        ctx.beginPath();
        ctx.drawImage(imgBackground, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        if (document.getElementById('level_input').value === 2) {
            drawHeart()
        }
        ctx.closePath();

    };
    this.getRandomPosition = function () {
        return Math.floor(Math.random() * (CANVAS_SIZE - ENEMY_DEFAULT_SIZE));
    };

    this.createEnemy = function () {
        let enemy1 = new Enemy(imgEnemyRight, this.getRandomPosition(), this.getRandomPosition(), DIRECTION_RIGHT);
        this.enemy.push(enemy1);

        let enemy2 = new Enemy(imgEnemyLeft, this.getRandomPosition(), this.getRandomPosition(), DIRECTION_LEFT);
        this.enemy.push(enemy2);

        let enemy3 = new Enemy(imgEnemyDown, this.getRandomPosition(), this.getRandomPosition(), DIRECTION_DOWN);
        this.enemy.push(enemy3);

        let enemy4 = new Enemy(imgEnemyUp, this.getRandomPosition(), this.getRandomPosition(), DIRECTION_UP);
        this.enemy.push(enemy4);
    };

    this.resetDirection = function () {
        this.count++;
        if (this.count >= this.directionChangeValue) {
            for (let i = 0; i < this.enemy.length; i++) {
                this.enemy[i].changeDirection();
                this.count = 0
            }
        }
    };

    this.checkCollisionMainTank = function () {
        for (let i = 0; i < this.enemy.length; i++) {
            this.enemy[i].checkCollisionMainTank();
        }
    };

    this.enemyMove = function () {
        for (let i = 0; i < this.enemy.length; i++) {
            switch (this.enemy[i].direction) {
                case DIRECTION_RIGHT :
                    this.enemy[i].moveRight();
                    break;
                case DIRECTION_UP  :
                    this.enemy[i].moveUp();
                    break;
                case DIRECTION_LEFT :
                    this.enemy[i].moveLeft();
                    break;
                case DIRECTION_DOWN  :
                    this.enemy[i].moveDown();
                    break;
            }
            this.enemy[i].drawEnemyTank();
            this.enemy[i].enemyFire();
        }
    };

    this.checkCollisionEnemy = function () {
        for (let i = 0; i < this.bullet_array.length; i++) {
            for (let j = 0; j < this.enemy.length; j++) {
                let distanceX = Math.abs((this.bullet_array[i].left + BULLET_SIZE / 2) - (this.enemy[j].left + ENEMY_DEFAULT_SIZE / 2));
                let distanceY = Math.abs((this.bullet_array[i].top + BULLET_SIZE / 2) - (this.enemy[j].top + ENEMY_DEFAULT_SIZE / 2));
                if (distanceX <= (BULLET_SIZE + ENEMY_DEFAULT_SIZE) / 2 && distanceY <= (BULLET_SIZE + ENEMY_DEFAULT_SIZE) / 2) {
                    this.score++;
                    this.enemy.splice(j, 1);
                }
            }
        }
        document.getElementById('score_input').value = this.score;
    };

    this.checkPlayAgain = function () {
        let checkPlayAgain = confirm('Play Again ?');
        if (checkPlayAgain === true) {
            cancelAnimationFrame(repeat());
            this.enemy.splice(0, this.enemy.length);
            this.score = 0;
            MAIN_TANK_DEFAULT_SPEED = 20;
            ENEMY_DEFAULT_SPEED = 2;
            BULLET_DEFAULT_SPEED = 20;
            img = imgUp;
            this.player.left = MAIN_TANK_DEFAULT_POSITION_LEFT;
            this.player.top = MAIN_TANK_DEFAULT_POSITION_TOP;
            isGameOver = false
        }
    };
    this.checkWin = function () {
        if (this.score === 12) {
            alert('Win');
            addScore();
            setTable();
            isGameOver = true;
        }
    }
};

