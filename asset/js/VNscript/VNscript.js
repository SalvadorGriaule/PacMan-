const area = document.getElementById("area");
const scoreS = document.getElementById("Score");

var niveau = document.getElementById("nivT");
var fantom = document.getElementById("fantom");
var PacMan = document.getElementById("PacMan");
var esp = area.getElementsByClassName("esp");
var pointI = area.getElementsByClassName("point");
var rotateTui = area.getElementsByClassName("rotate");

var score = 0, life = 0,turn = 0;

var PCX = 1, PCX2 = 2;
var PCY = 1, PCY2 = 2;
var px = 0, py = 0;

var FCX = 5, FCX2 = 6;
var FCY = 5, FCY2 = 6;
var fx = 0, fy = 0;
var MouvPossFnt = [];
var lastMouv = "";
var MouvPoss = 0, Mouv = 0;
var bordure = [0,0,0,0];

var x = 0, p = 0;
var f = 24;
var i = 0, i2 = 0, i3 = 0;

const soundBegin = new Audio('asset/audio/pacman_beginning.wav');
const soundDeath = new Audio('asset/audio/pacman_death.wav');

balayArena();

initPC();

eventPacMan();