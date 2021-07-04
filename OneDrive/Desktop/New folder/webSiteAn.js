//declaring object for navigation bar
let webSiteAnimate = {

    //declaring key value pairs of DOM to be manipulated
    navObj : document.querySelector('.nav .top.row'),
    midObj : document.querySelector('.nav .middle.row'),
    workObj : document.querySelector('.work.section'),

    //project elements
    leftProj:  document.querySelector('.work.section .top'),
    midProj:  document.querySelector('.work.section .middle'),

    rightProj:  document.querySelector('.work.section .bottom'),

    clouds : document.querySelectorAll('.cloud'),
    redBouy : document.querySelector('.bouy'),
    moon : document.querySelector('.moon'),

    projects : document.querySelectorAll('.work.section .bottom .wrapper'),
    introTexts : document.querySelectorAll('.mainText'),

    skillContainers: document.querySelector('.experience.section .top'), 
    bubbleFact: document.querySelectorAll('.bubbleContainer *'), 
    aboutP:document.querySelector('.about.section p'),

    contForm:document.querySelector('.contact.section .contactForm'),
    contPara:document.querySelector('.contact.section .contactP'),
    contLinks:document.querySelectorAll('.contact.section .contactLinks a'),

    

    

    //method to restyle navigation
    //nav is standalone due to bug preventing proper function of code
    reStyleNav(){

        // declaring various heights 
        //using getboundingclinet rectangle I am getting the height of the nav
        let newHeight = window.innerHeight/1.7;
        let workHeight = this.workObj.getBoundingClientRect().top;


        // if the new height is less than 0, do the following
        if( newHeight > workHeight){
            //simple restylings to ensure that the javigation bar 
            // reflects appropriate styles
            this.navObj.style.position ='fixed';
            this.midObj.style.marginTop ='40vh';       
            this.navObj.style.animationName = 'appearSmoothly';
            this.navObj.style.animationDuration = '1s'; 
            this.navObj.style.animationFillMode= 'forwards';
        } else if(newHeight < workHeight/1.05) {
            this.navObj.style.position ='';
            this.midObj.style.marginTop ='';       
            this.navObj.style.animationName = '';
            this.navObj.style.animationDuration = ''; 
            this.navObj.style.animationFillMode= '';

            
        }
    },

    reAppearOpactiy(topElement,dec){
        let newHeight = window.innerHeight/dec;
        let elementHeight = topElement.getBoundingClientRect().bottom;


        if(elementHeight<newHeight){
            topElement.style.opacity ='1';
        } else{
            topElement.style.opacity ='0';

        }



    },

    returnToOpacity(topElement,dec,lev){
        let newHeight = window.innerHeight/dec;
        let elementHeight = topElement.getBoundingClientRect().bottom;

        topElement.style.transition='all ease 1s'

        if(elementHeight<newHeight){
            topElement.style.opacity =lev;


        } else{
            topElement.style.opacity ='0';

        }
    },

    cloudAnimate(topElement,dec,lev){
        let newHeight = window.innerHeight/dec;
        let elementHeight = topElement.getBoundingClientRect().bottom;

        topElement.style.transition='all ease 1s'

        if(elementHeight > newHeight){
            topElement.style.opacity =lev;


        } else{
            topElement.style.opacity ='0';

        }
    },

    slideInAnim(topElement,dec){
        let newHeight = window.innerHeight/dec;
        let elementHeight = topElement.getBoundingClientRect().bottom;

        topElement.style.transition='all ease 6s'

        if(elementHeight > newHeight){
            topElement.style.left ='';


        } else{
            topElement.style.left ='10%';

        }
    },

    popUpAnim(topElement,dec){
        let newHeight = window.innerHeight/dec;
        let elementHeight = topElement.getBoundingClientRect().top;

        topElement.style.transition='all ease 3s'

        if(elementHeight > newHeight){
            topElement.style.marginTop ='50rem';


        } else{
            topElement.style.paddingTop ='0rem';

        }
    },

    bubUpAnim(topElement,dec){
        let newHeight = window.innerHeight/dec;
        let elementHeight = topElement.getBoundingClientRect().top;

        topElement.style.transition='all ease 1s'

        if(elementHeight > newHeight){
            topElement.style.height ='0rem';
            topElement.style.width ='0rem';
            topElement.style.overflow ='hidden';


        } else{
            topElement.style.height ='';
            topElement.style.width ='';
            topElement.style.overflow ='visible';

        }

    }



}

//onscroll event listener to tun function to check newHeight
window.addEventListener('scroll',()=>{
    webSiteAnimate.slideInAnim(webSiteAnimate.moon,1.5);
    webSiteAnimate.reStyleNav();
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.leftProj,1.75);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.midProj,1.5);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.aboutP,1.25);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.contForm,1);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.contPara,1.25);


    webSiteAnimate.projects.forEach(p=>{
        webSiteAnimate.reAppearOpactiy(p,1);
    })

    webSiteAnimate.introTexts.forEach(t=>{
        webSiteAnimate.reAppearOpactiy(t,1.15);
    })

    webSiteAnimate.reAppearOpactiy(webSiteAnimate.skillContainers,.8);

    webSiteAnimate.bubbleFact.forEach(b=>{
        webSiteAnimate.bubUpAnim(b,1.25);
    })

    webSiteAnimate.contLinks.forEach(b=>{
        webSiteAnimate.reAppearOpactiy(b,1);
        b.style.transition='all ease 3s';

    }) 


    
    webSiteAnimate.clouds.forEach(c=>{

        if(window.innerWidth<700){
            return;
        } else {
            webSiteAnimate.cloudAnimate(c,1.5,'.7');
        }
        c.style.transition='all ease 2s'
    })



})

window.addEventListener('load',()=>{
    webSiteAnimate.reStyleNav();
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.leftProj,1.75);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.midProj,1.5);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.aboutP,1.25);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.contForm,1);
    webSiteAnimate.reAppearOpactiy(webSiteAnimate.contPara,1.25);

    


    webSiteAnimate.projects.forEach(p=>{
        webSiteAnimate.reAppearOpactiy(p,1);
    })

    webSiteAnimate.introTexts.forEach(t=>{
        webSiteAnimate.reAppearOpactiy(t,1.15);
    })


    webSiteAnimate.bubbleFact.forEach(b=>{
        webSiteAnimate.bubUpAnim(b,1.25);
    })
    
    // webSiteAnimate.contLinks.forEach(b=>{
    //     webSiteAnimate.bubUpAnim(b,1.9);
    // }) 

    webSiteAnimate.clouds.forEach(c=>{

        if(window.innerWidth<700){
            return;
        } else {
            webSiteAnimate.cloudAnimate(c,1.5,'.7');
        }
        c.style.transition='all ease 2s'
    })



})

