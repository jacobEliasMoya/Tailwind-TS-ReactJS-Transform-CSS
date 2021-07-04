let mainGame  = {
    //decalaring all keyvalue pairs
    skyArea : document.querySelector('.sky'),
    skyDiv : document.querySelector('.sky .x'),
    skyFlash : document.querySelector('.sky .flash'),
    mainNav : document.querySelector('.main-nav'),
    ground : document.querySelector('.ground'),
    
    fireSound : document.querySelector('#myAudio'),
    emptySound : document.querySelector('#myAudioEmpty'),
    reloadSound : document.querySelector('#myAudioReload'),
    coughSound : document.querySelector('#myAudioCough'),
    ufoSound : document.querySelector('#myAudioUfo'),
    ufoBoomSound : document.querySelector('#myAudioBoom'),
    celebrateSound : document.querySelector('#myAudioCelebrate'),
    dancingMan : document.querySelector('.dancer'),



    scoreCounter : document.querySelector('.score-count'),
    scoreTotal : undefined,

    //shotCounts 1/2/3 kay value pairs
    allSyringe : document.querySelectorAll('.fa-syringe'),
    syringeOne : document.querySelector('.fa-syringe.one'),
    syringeTwo : document.querySelector('.fa-syringe.two'),
    syringeThree : document.querySelector('.fa-syringe.three'),

    // reload function as well
    emptyShot : document.querySelector('.empty-shot'),
    shotContainer : document.querySelector('.shot-container'),
    lungHits : document.querySelectorAll('.check-lung'),

    coronaVirus : document.querySelector('.fa .fa-virus .covid'),
    
    covidxAxis:undefined,
    covidyAxis:undefined,


    //storing x and y axis as undefined until function sets value
    xAxis:undefined,
    yAxis:undefined,
    shotCount:undefined,
    shotPosition:undefined,
    confirmedShots:-1,

    //
    maxVirusCount:3,
    currentVirusCount:0,

    //
    ufoBonus : document.querySelector('.ufo'),

    getAxisXnY(event){
        this.xAxis = event.pageX-(this.skyDiv.clientHeight/1.5);
        this.yAxis = event.pageY-(this.skyDiv.clientWidth*1.65);
        // mainGame.skyArea.innerHTML = `${event.pageX} ${event.pageY}`;
    },

    setCursorPosition(div){
        div.style.position = 'absolute';
        div.style.top = `${this.yAxis}px `;
        div.style.left = `${this.xAxis}px`;
        div.style.display = ``;
    },

    clearCursorPosition(div){
        div.style.position = '';
        div.style.top = ``;
        div.style.left = ``;
        div.style.display = `none`;
    },

    initFireSound(){
        if(this.shotCount < 4 ){
            this.fireSound.play();
            this.fireSound.currentTime = 0;
        }
    },

    initEmptySound(){
        if(this.shotCount>3){
            this.emptySound.play();
            this.emptySound.currentTime = 0;
        }
    },

    initReloadSound(){
        this.reloadSound.play();
        this.reloadSound.currentTime = 0;
    },

    initCoughSound(){
        this.coughSound.play();
        this.coughSound.currentTime = 0;
    },

    initHoverSound(){
        this.ufoSound.play();
        this.ufoSound.currentTime = 0;

    },

    stopHoverGoBoom(){
        this.ufoSound.pause();
    },

    initBoom(){
        this.ufoBoomSound.play(); 
        this.ufoSound.currentTime = 0;

    },

    initCelebrateSong(){
        this.celebrateSound.play();
        this.celebrateSound.currentTime=0;
    },

    shotCounter(){
        if(this.shotCount > 0){
            this.shotCount++;
        } else{
            this.shotCount =1;
        }
    },

    displayShots(){
        switch(this.shotCount){
            case 1:
                this.syringeOne.style.color = 'grey';
                this.syringeTwo.style.textShadow ='0 0 1rem white';
                this.syringeOne.style.textShadow ='none';

                break;
            case 2:
                this.syringeTwo.style.color = 'grey';
                this.syringeThree.style.textShadow ='0 0 1rem white';
                this.syringeTwo.style.textShadow ='none';

                break;
            case 3:
                this.syringeThree.style.color = 'grey';
                this.syringeThree.style.textShadow ='0 0 1rem white';
                this.syringeThree.style.textShadow ='none';

                break;  
            default:
            return;
        }
    },

    emptyShots(){
        switch(this.shotCount){
            case 3:
                this.skyFlash.style.height='0px';
                this.skyFlash.style.width='0px';
                this.emptyShot.style.display = 'block';
                this.shotContainer.style.display = 'none';
   
                break;
            default :

        }

    },

    reloadShots(){

        this.shotCount=0;

        this.skyFlash.style.height='';
        this.skyFlash.style.width='';

        this.emptyShot.style.display = 'none';
        this.shotContainer.style.display = 'flex';

        this.allSyringe.forEach(s=>{
            s.style.color='red';
            this.syringeOne.style.textShadow ='0 0 1rem white';
        })

    },

    scoreIncrement(){
        if(this.scoreTotal===undefined){
            this.scoreTotal=100;
            this.scoreCounter.innerHTML=this.scoreTotal;
        } else {
            this.scoreTotal += 100;
            this.scoreCounter.innerHTML = this.scoreTotal ;

        }
    },

    confirmedShot(){
        
        this.confirmedShots++;
        this.scoreIncrement();
        this.initCoughSound();
    },

    displayConfirmedShot(ind){
        this.lungHits[ind].innerHTML='X';
    },

    insertCoronaVirus(){
        
        let virus = document.createElement('I');
        virus.classList.add('fas');
        virus.classList.add('fa-virus');
        virus.classList.add('covid');
        
        this.coronaVirus=virus;

        this.skyArea.appendChild(this.coronaVirus);

    },

    resetPos(){
        let animations = [] ;
        let startingPoint = ['5%','10%','15%','20%','25%','30%','35%','40%','45%','50%','55%','60%','65%','70%','75%','80%','85%','90%','95%']
        this.coronaVirus.style.left = startingPoint[Math.floor(Math.random()*startingPoint.length)]
        //resetting animation
        this.coronaVirus.style.animation = 'none';
        this.coronaVirus.offsetHeight;
        this.coronaVirus.style.animation = null;
    },

    bonusPoints(){
        this.ufoBonus.style.display='none';
        
        if(this.scoreTotal===undefined){
            this.scoreTotal=500;
            this.scoreCounter.innerHTML=this.scoreTotal;
        } else {
            this.scoreTotal += 500;
            this.scoreCounter.innerHTML = this.scoreTotal ;

        }



    },

    startUfo(){
        if(this.confirmedShots===4){
            this.ufoBonus.style ='animation: ufoGo 12s 1 0s forwards; display:inline'
            this.initHoverSound();
        }
    },

    gameOver(){
        alert('GAME OVER');
        this.coronaVirus.style.display='none';
        this.dancingMan.style.display='inline';
    },

    gameOverVer(){
        if(this.confirmedShots===9){
            this.gameOver();
            this.initCelebrateSong();ko
        }
    }



}

mainGame.insertCoronaVirus();

mainGame.skyArea.addEventListener('mousemove',(e)=>{
    mainGame.getAxisXnY(e);
    mainGame.setCursorPosition(mainGame.skyDiv);
    mainGame.setCursorPosition(mainGame.skyFlash);
})

mainGame.skyArea.addEventListener('click',(e)=>{
    mainGame.shotCounter();
    mainGame.initFireSound();
    mainGame.initEmptySound();
    mainGame.displayShots();
    mainGame.emptyShots();
    mainGame.gameOverVer();


})

mainGame.skyArea.addEventListener('mouseleave',(e)=>{
    mainGame.clearCursorPosition(mainGame.skyDiv);
})

//reload button also ** more than one use from var
mainGame.emptyShot.addEventListener('click',()=>{
    mainGame.reloadShots();
    mainGame.initReloadSound();
})

mainGame.coronaVirus.addEventListener('click',()=>{

    if(mainGame.shotCount>0 && mainGame.shotCount<3){
        mainGame.confirmedShot();
        mainGame.displayConfirmedShot(mainGame.confirmedShots);
        mainGame.resetPos();
        mainGame.startUfo();


    } else{
        return;
    }
    

})

mainGame.ufoBonus.addEventListener('click',()=>{
    if(mainGame.shotCount>0 && mainGame.shotCount<3){
        mainGame.bonusPoints();
        mainGame.stopHoverGoBoom();
        mainGame.initBoom();
    }
})