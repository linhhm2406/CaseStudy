let Bullet = function (left, top, direction) {
    this.left = left;
    this.top = top;
    this.direction = direction;
    this.speed = BULLET_DEFAULT_SPEED;

    this.drawBullet = function () {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.rect(this.left, this.top, BULLET_SIZE, BULLET_SIZE);
        ctx.fill();
        ctx.closePath();
    };
    this.move = function () {
        switch (this.direction) {
            case DIRECTION_UP :
                this.moveUp();
                break;
            case DIRECTION_DOWN :
                this.moveDown();
                break;
            case DIRECTION_LEFT :
                this.moveLeft();
                break;
            case DIRECTION_RIGHT :
                this.moveRight();
                break;
        }
    };

    this.moveUp = function () {
        this.top -= this.speed;
    };
    this.moveDown = function () {
        this.top +=this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveRight = function () {
        this.left += this.speed;
    };
};

