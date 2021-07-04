let spinRevealer = {
    aboutSelectors : document.querySelectorAll('.mainAboutType'),
    ph : document.querySelector('.photoHolder'),
    ph2 : document.querySelector('.aboutDes'),
    insper: document.querySelectorAll('.aboutDes .insp'),
    aboutMe: document.querySelectorAll('.aboutDes .ab'),

    abType : undefined,

    flipCard(elm,elm2){
        if(imgHovChange.curPhotoT === "Gallery"){
            if(elm.style.transform === 'rotateY(180deg)'){
                elm.style.transform = 'rotateY(0deg)';
                elm2.style.transform = '';
                elm.style.zIndex = '2';
                elm2.style.zIndex = '1';
                elm2.style.opacity = '0';
    
            } else {
                elm.style.transform = 'rotateY(180deg)';
                elm2.style.transform = 'rotateY(0deg)';
                elm.style.zIndex = '1';
                elm2.style.zIndex = '2';
                elm2.style.opacity = '1';
            }


        } else {
            if(elm.style.transform === 'rotateY(180deg)'){
                elm.style.transform = 'rotateY(0deg)';
                elm2.style.transform = '';
                elm.style.zIndex = '2';
                elm2.style.zIndex = '1';
                elm2.style.opacity = '';
    
            } else {
                elm.style.transform = 'rotateY(180deg)';
                elm2.style.transform = 'rotateY(0deg)';
                elm.style.zIndex = '1';
                elm2.style.zIndex = '2';
                elm2.style.opacity = '.8';
            }
    
    
        }
    },

    flipCardClear(elm,elm2){
        elm.style.transform = 'rotateY(0deg)';
        elm2.style.transform = '';
        elm.style.zIndex = '2';
        elm2.style.zIndex = '1';
        elm2.style.opacity = '0';
    },

    getAboutType(elm){
        this.abType = elm.innerHTML;
    },

    checkType(){
        if(this.abType === "Inspiration"){
            this.aboutMe.forEach(a=>{
                a.style.display = 'none'
            })
            this.insper.forEach(a=>{
                a.style.display = 'flex'
            })

        } else {
            this.aboutMe.forEach(a=>{
                a.style.display = 'flex'
            })
            this.insper.forEach(a=>{
                a.style.display = 'none'
            })


        }

    }


}
spinRevealer.aboutSelectors.forEach(as=>{
    as.addEventListener('click',()=>{
        spinRevealer.flipCard(spinRevealer.ph,spinRevealer.ph2)
        spinRevealer.ph.style.transition = 'all ease .5s';
        spinRevealer.ph2.style.transition = 'all ease .5s';
        spinRevealer.getAboutType(as);
        spinRevealer.checkType();
    })
})

spinRevealer.aboutSelectors.forEach(as=>{
    as.addEventListener('mouseleave',()=>{
        spinRevealer.flipCardClear(spinRevealer.ph,spinRevealer.ph2)
        spinRevealer.ph.style.transition = 'all ease .5s';
        spinRevealer.ph2.style.transition = 'all ease .5s';

    })
})

