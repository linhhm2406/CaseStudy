let Enemy = function (img_enemy, left, top, direction) {
    this.left = left;
    this.top = top;
    this.width = ENEMY_DEFAULT_SIZE;
    this.height = ENEMY_DEFAULT_SIZE;
    this.speed = ENEMY_DEFAULT_SPEED;
    this.direction = direction;
    this.bullet_array_enemy = [];
    this.reload = 120;
    this.reloadCount = 0;

    this.drawEnemyTank = function () {
        ctx.beginPath();
        ctx.drawImage(img_enemy, this.left, this.top, this.width, this.height);
        ctx.closePath();
    };

    this.enemyFire = function () {
        this.reloadCount++;
        if (this.reloadCount >= this.reload) {
            let bullet = new Bullet(this.left + this.width / 2 - 10, this.top + this.height / 2, this.direction);
            this.bullet_array_enemy.push(bullet);
            this.reloadCount = 0;
        }
        for (let i = 0; i < this.bullet_array_enemy.length; i++) {
            if (this.bullet_array_enemy[i].top < 0) {
                this.bullet_array_enemy.splice(i, 1);
                i--;
            } else {
                this.bullet_array_enemy[i].drawBullet();
                this.bullet_array_enemy[i].move();
            }
        }
    };

    this.moveLeft = function () {
        img_enemy = imgEnemyLeft;
        if (this.left > 0) {
            this.left -= this.speed;
        }
    };
    this.moveRight = function () {
        img_enemy = imgEnemyRight;
        if (this.left + this.width < canvas.width) {
            this.left += this.speed;
        }
    };
    this.moveUp = function () {
        img_enemy = imgEnemyUp;
        if (this.top > 0) {
            this.top -= this.speed;
        }
    };
    this.moveDown = function () {
        img_enemy = imgEnemyDown;
        if (this.top + this.height < canvas.height) {
            this.top += this.speed;
        }
    };

    this.changeDirection = function () {
        this.direction = arrayDirection[Math.floor(Math.random() * 4)];
    };

    this.checkCollisionMainTank = function () {
        for (let i = 0; i < this.bullet_array_enemy.length; i++) {
            let distanceX = Math.abs((this.bullet_array_enemy[i].left + BULLET_SIZE / 2) - (gameBoard.player.left + MAIN_TANK_DEFAULT_SIZE / 2));
            let distanceY = Math.abs((this.bullet_array_enemy[i].top + BULLET_SIZE / 2) - (gameBoard.player.top + MAIN_TANK_DEFAULT_SIZE / 2));
            if (distanceX <= (BULLET_SIZE + MAIN_TANK_DEFAULT_SIZE) / 2 && distanceY <= (BULLET_SIZE + MAIN_TANK_DEFAULT_SIZE) / 2) {
                this.bullet_array_enemy.splice(i, 1);
                isGameOver = true;
                playerName = document.getElementById('playerName_input').value;
                alert('GAME OVER');
                addScore();
                setTable();
                gameBoard.checkPlayAgain();

            }
        }
    }
};
