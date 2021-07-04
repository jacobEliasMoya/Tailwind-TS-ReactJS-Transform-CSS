let mobileNav = {
    mainButton : document.querySelector('.hamburgers'),
    mobileUlist : document.querySelector('nav .top .mobileUl'),
    desktopUlist : document.querySelector('nav .top .nonMobile'),
    mobileUlistItems : document.querySelectorAll('nav .top .mobileUl li'),
    logoA :  document.querySelector('.logo'),
    

    counter : 0,

    activateNav(){
        switch(this.counter){
            case 0:

                if(window.innerWidth<1000){
                    this.mobileUlist.style.display = 'flex'; 
                    this.mobileUlist.style.height    = '100%'; 
                    this.mobileUlist.style.width = 'auto'; 
                    this.mainButton.style.height = '1rem';
                    this.mainButton.style.width = '2rem';
                    this.mainButton.style.marginLeft = '.25rem';
                    this.mobileUlistItems.forEach(i=>{
                        this.mobileUlistItems.forEach(i=>{
                            i.style.display='flex';
                            })
                        })
                    this.counter++;
                    break;
                } else {
                    return
                }

            case 1:

                if(window.innerWidth<1000){
                    this.mainButton.style.height = '';
                    this.mainButton.style.width = '';
                    this.mainButton.style.marginLeft = '';
                    this.mobileUlistItems.forEach(i=>{
                        i.style.display='';
                    })

                    this.counter =0;
                    break;
                } else {
                    return
                }

            break;

            
        } 
    },

}

window.addEventListener('resize',()=>{
    if(window.innerWidth>1000){
        mobileNav.activateNav();
        mobileNav.mobileUlist.style.display = 'none';

    } else {
        mobileNav.mobileUlist.style.display = '';

    }
})

mobileNav.mainButton.addEventListener('click',()=>{
    mobileNav.activateNav();
})

mobileNav.mobileUlistItems.forEach(m=>{
    m.addEventListener('click',()=>{
        mobileNav.activateNav();
    })
})

mobileNav.logoA.addEventListener('click',()=>{
    if(mobileNav.counter === 1){
        mobileNav.activateNav();
    }
})

window.addEventListener('scroll',()=>{
    if(mobileNav.counter === 1){
        mobileNav.activateNav();
    }
})






