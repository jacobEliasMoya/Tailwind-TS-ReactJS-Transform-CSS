let jellyFoll = {

    jellyHome : document.querySelector('#contactSection'), 
    jellys : document.querySelectorAll('#contactSection .jelz'),
    xAxis:undefined,
    yAxis:undefined,

    getAxisXnY(event){
        this.xAxis = event.pageX-(this.jellyHome.clientHeight/9);
        this.yAxis = event.pageY-(this.jellyHome.clientWidth/.5);
        // jellyFoll.jellyHome.innerHTML = `${event.pageX} ${event.pageY}`;
    },

    setCursorPosition(div){
        // div.style.position = 'absolute';
        div.style.top = `${this.yAxis}px `;
        div.style.left = `${this.xAxis}px`;
    },

    clearCursorPosition(div){
        div.style.top = ``;
        div.style.left = ``;
    },

}

let counter = 0;
jellyFoll.jellyHome.addEventListener('mousemove',(e)=>{
    if(window.innerWidth>1000){
        jellyFoll.getAxisXnY(e);
        jellyFoll.jellys.forEach(j => {
            jellyFoll.setCursorPosition(j);
            j.style.top = `${jellyFoll.yAxis}px + ${counter} `;
            j.style.left = `${jellyFoll.xAxis}px + ${counter}`;
        });
    }
    
})

jellyFoll.jellyHome.addEventListener('mouseleave',(e)=>{
    if(window.innerWidth>1000){
        jellyFoll.jellys.forEach(j => {
            jellyFoll.clearCursorPosition(j);
        });
    }
})

