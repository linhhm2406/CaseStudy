const CANVAS_SIZE = 1500;

const BULLET_SIZE = 15;

const MAIN_TANK_DEFAULT_POSITION_LEFT = 700;
const MAIN_TANK_DEFAULT_POSITION_TOP = 1200;

const NUM_0 = 96;
const ARROW_UP = 38;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

const DIRECTION_UP = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_DOWN = 3;
const DIRECTION_LEFT = 4;

let playerName;
let arrayDirection =[DIRECTION_LEFT,DIRECTION_RIGHT,DIRECTION_DOWN,DIRECTION_UP];

let MAIN_TANK_DEFAULT_SIZE = 100;
let ENEMY_DEFAULT_SIZE = 100;

let MAIN_TANK_DEFAULT_SPEED=20;
let ENEMY_DEFAULT_SPEED=2;
let BULLET_DEFAULT_SPEED=20;

let imgUp = document.getElementById('mainTankImage_up');
let imgLeft = document.getElementById('mainTankImage_left');
let imgRight = document.getElementById('mainTankImage_right');
let imgDown = document.getElementById('mainTankImage_down');
let img = imgUp;
let imgEnemyUp = document.getElementById('enemy_up');
let imgEnemyLeft = document.getElementById('enemy_left');
let imgEnemyDown = document.getElementById('enemy_down');
let imgEnemyRight = document.getElementById('enemy_right');
let imgBackground = document.getElementById('background');
let imgTrees = document.getElementById('trees');