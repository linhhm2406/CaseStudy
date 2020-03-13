let SaveScore = function (userName, userScore) {
    this.userName = userName;
    this.userScore = userScore;
};

let index = 1;
function addScore() {
    let saveScore = new SaveScore(playerName,gameBoard.score);
    window.localStorage.setItem(index.toString(),JSON.stringify(saveScore));
    index++;
}

function setTable () {
    let playerList = [];
    for (let i = 1; i <= localStorage.length; i++) {
        let a = JSON.parse(window.localStorage.getItem(i.toString()));
        playerList.push(a);
    }
    let html='';
    for (let i = 0; i < playerList.length ; i++) {
        html += '<tr>';
        html += '<td>';
        html += i+1;
        html += '</td>';
        html += '<td>';
        html += playerList[i].userName;
        html += '</td>';
        html += '<td>';
        html += playerList[i].userScore;
        html += '</td>';
        html += '</tr>';
        console.log(html);
    }
    document.getElementById('tableBody').innerHTML = html;
}

// window.localStorage.clear();