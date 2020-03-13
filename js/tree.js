function drawBasicTree(left, top){
    ctx.beginPath();
    ctx.drawImage(imgTrees,left,top,100,100);
    ctx.closePath();
}

function drawHeart() {
    drawBasicTree(400,400);
    drawBasicTree(500,400);
    drawBasicTree(900,400);
    drawBasicTree(1000,400);
    for (let i = 300; i <=600 ; i=i+100) {
        drawBasicTree(i,500)
    }
    for (let i = 800; i <=1100 ; i=i+100) {
        drawBasicTree(i,500)
    }
    for (let i = 600; i <= 700; i=i+100) {
        for (let j = 200; j <=1200 ; j=j+100) {
            drawBasicTree(j,i)
        }
    }
    for (let i = 300; i <=1100 ; i=i+100) {
        drawBasicTree(i,800)
    }
    for (let i = 400; i <=1000 ; i=i+100) {
        drawBasicTree(i,900)
    }
    for (let i = 500; i <=900 ; i=i+100) {
        drawBasicTree(i,1000)
    }for (let i = 600; i <=800 ; i=i+100) {
        drawBasicTree(i,1100)
    }
    drawBasicTree(700,1200);
}