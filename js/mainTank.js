let MainTank = function (left, top, direction) {
    this.left = left;
    this.top = top;
    this.width = MAIN_TANK_DEFAULT_SIZE;
    this.height = MAIN_TANK_DEFAULT_SIZE;
    this.speed = MAIN_TANK_DEFAULT_SPEED;
    this.direction = direction;
    this.isShoot = false;

    this.setDirection = function (direction) {
        this.direction = direction;
    };

    this.drawMainTank = function () {
        ctx.beginPath();
        ctx.drawImage(img, this.left, this.top, this.width, this.height);
        ctx.closePath();
    };

    this.moveLeft = function (imgLink) {
        img = imgLink;
        if (this.left > 0) {
            this.left -= this.speed;
        }
    };
    this.moveRight = function (imgLink) {
        img = imgLink;
        if (this.left + this.width < canvas.width) {
            this.left += this.speed;
        }
    };
    this.moveUp = function (imgLink) {
        img = imgLink;
        if (this.top > 0) {
            this.top -= this.speed;
        }
    };

    this.moveDown = function (imgLink) {
        img = imgLink;
        if (this.top + this.height < canvas.height) {
            this.top += this.speed;
        }
    };

    this.fire = function () {
        if (this.isShoot) {
            let bullet = new Bullet(this.left + ((MAIN_TANK_DEFAULT_SIZE / 2)-10), this.top + (MAIN_TANK_DEFAULT_SIZE / 2), this.direction);
            gameBoard.bullet_array.push(bullet);
            this.isShoot = false;
        }
        for (let i = 0; i < gameBoard.bullet_array.length; i++) {
            if (gameBoard.bullet_array[i].top < 0) {
                gameBoard.bullet_array.splice(i, 1);
                i--;
            } else {
                gameBoard.bullet_array[i].drawBullet();
                gameBoard.bullet_array[i].move();

            }
        }
    };
};