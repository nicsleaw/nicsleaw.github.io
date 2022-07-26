let $petFront = $( '.pet .front' );
let $pet = $( '.pet' );

let $bush = $('.bush');

let $bushFront = $('.bush .front');
let $lamppostFront = $('.lamppost .front');
let $bubblesFront = $('.bubbles .front');
let $handFront = $('.hand .front');

let rx = -20;
let ry = -20;

const rotateScene = function (event) {
    rx -= event.originalEvent.movementY;
    ry += event.originalEvent.movementX;
    
    if ( ry < -200) ry = -200;
    if (ry > 200) ry = 200;
        // limits rotation

    $scene.css( '--ry', ry/4+'deg' );
    
    $petFront.css( '--ry', -ry/4+'deg' );
    $bushFront.css( '--ry', -ry/4+'deg' );
    $lamppostFront.css( '--ry', -ry/4+'deg' );
    $bubblesFront.css( '--ry', -ry/4+'deg' );
    $handFront.css( '--ry', -ry/4+'deg' );
}

const movePet = function ( event ) {
    let tx = Math.random() * 200 + 200;
    let tz = Math.random() * 150 + 100;
    
    $pet.css( '--tx', tx+'px' );
    $pet.css( '--tz', tz+'px' );
}

function playAudio(url) {
  new Audio(url).play();
}

/*document.getElementById(".bush .ghost").style.AnimationPlayState = "running";

var ghost = document.queryCommandEnabled('.ghost .bush')
ghost.style.animationPlayState = 'running';
var isPlaying = true;
ghost.addEventListener('click', togglePlay);
function togglePay(event){
    if (isPlaying) {
         ghost.style.animationPlayState = 'paused'; }
    else {
        ghost.style.animationPlayState = 'running'; }
    isPlaying = !isPlaying;
    } 
$bush.on('mouseover', function(), document.getElementById(".bush .ghost").style.AnimationPlayState = "running";) */

let $body = $('body');
let $scene = $('.scene');


$body.on('mousedown', function () { $body.on( 'mousemove', rotateScene ) });
$body.on('mouseup', function () { $body.off( 'mousemove', rotateScene ) });

$pet.on( 'mouseover', movePet );

$('img').prop('draggable', false);