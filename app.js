document.addEventListener('DOMContentLoaded', ()=>{
    const bird=document.querySelector('.bird');
    const ground=document.querySelector('.ground');
    const game=document.querySelector('.game');

    let birdLeft = 220;
    let birdBottom = 400;
    let gravity = 3;
    let isGameOver = false;

    function startGame(){
        birdBottom = birdBottom-gravity;
        bird.style.left=birdLeft + 'px';
        bird.style.bottom=birdBottom + 'px' 
    }
    let timer = setInterval(startGame,15);
    //setInterval -> code iig hyzgaargvv ajiluulah
    function jump(){
        if(birdBottom<500){
            birdBottom = birdBottom + 80;
        }
        bird.style.bottom=birdBottom + "px";
    }
    document.addEventListener('keyup', jump);

    function randomBlock(){
        let blockLeft = 1560;
        let blockBottom = Math.random()*120; 
        let block = document.createElement('div');
        block.classList.add('block');
        //classLsit -> class
        game.appendChild(block)
        block.style.left = blockLeft+'px';
        block.style.bottom = blockBottom + 'px';
        function moveBlock(){
            blockLeft = blockLeft-10;
            block.style.left = blockLeft + 'px';
            if(blockLeft == 0){
                clearInterval(blocks);
                game.removeChild(block);
            }
            if(birdBottom==0 || blockLeft>200 && blockLeft<280 && birdLeft==220 && birdBottom < blockBottom +190){
                gameOver();
                clearInterval(blocks)
            }
        }
        let blocks = setInterval(moveBlock, 15)
    }
    if(isGameOver==false){
        setInterval(randomBlock, 900)
    }
    function gameOver(){
        isGameOver = true;
        clearInterval(timer);
        document.removeEventListener('keyup', jump)
        alert("Game over")
    }
});