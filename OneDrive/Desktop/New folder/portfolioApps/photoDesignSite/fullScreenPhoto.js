let fullScreener={

    ph : document.querySelector('.photoHolder'),
    
    ph2 : document.querySelector('.aboutDes'),

    ph3 : document.querySelectorAll('.photoHolder div'),

    fullScreenCheck(elm,elm2){
        // if(imgHovChange.)
        if(imgHovChange.curPhotoT === "Gallery"){
            // if(elm.style.height === '90vh'){
            //     elm.style.height = '';
            //     elm.style.width = '';
            //     elm2.style.height = '';
            //     elm2.style.width = '';
    
            //     elm.style.border = '';
            //     elm.style.borderBottom = '';
            //     elm.style.boxShadow = '';
    
            //     elm2.style.border = '';
                
            //     elm2.style.borderBottom = '';
            //     elm2.style.boxShadow = '';
            //     elm.style.zIndex = '';
    
    
    
    
            // } else{
            //     elm.style.height = '90vh';
            //     elm.style.width = '60%';
            //     elm2.style.height = '90vh';
            //     elm2.style.width = '60%';
    
            //     elm.style.border = '0rem solid rgb(201, 201, 201)';
            //     elm.style.borderBottom = '0rem solid rgb(201, 201, 201)';
    
            //     elm.style.zIndex = '100';
            //     elm.style.boxShadow = '1rem .5rem 1rem black';
    
            // }

        } else {
            if(elm.style.height === '90vh'){
                elm.style.height = '';
                elm.style.width = '';
                elm2.style.height = '';
                elm2.style.width = '';
    
                elm.style.border = '';
                elm.style.borderBottom = '';
                elm.style.boxShadow = '';
    
                elm2.style.border = '';
                
                elm2.style.borderBottom = '';
                elm2.style.boxShadow = '';
                elm.style.zIndex = '';
    
            } else{
                elm.style.height = '90vh';
                elm.style.width = '60%';
                elm2.style.height = '90vh';
                elm2.style.width = '60%';
    
                elm.style.border = '0rem solid rgb(201, 201, 201)';
                elm.style.borderBottom = '0rem solid rgb(201, 201, 201)';
    
                elm.style.zIndex = '100';
                elm.style.boxShadow = '1rem .5rem 1rem black';
    
            }
    
        }

    },

    fullScreenCheck2(elm){
        
        if(elm.style.height === '105%'){
            elm.style.height = '';
            elm.style.width = '';
            elm.style.border = '';
            elm.style.borderBottom = '';
            elm.style.boxShadow = '';
            elm.style.position = '';
            elm.style.zIndex = '';

            elm.style.margin= '';
            elm.style.marginBottom = '';
            

        } else{

            elm.style.height = '105%';
            elm.style.width = '100%';
            elm.style.position = 'absolute';

            elm.style.border = '.5rem solid rgb(201, 201, 201)';
            elm.style.borderBottom = '.5rem solid rgb(201, 201, 201)';
            elm.style.zIndex = '1000';

            elm.style.margin= '0rem -.125rem';
            elm.style.marginBottom = '1rem';



        }
        
    },


}

fullScreener.ph.addEventListener('click',()=>{
    fullScreener.fullScreenCheck(fullScreener.ph,fullScreener.ph2);
})

let selectedP;


fullScreener.ph3.forEach(p=>{
   p.addEventListener('click',()=>{
        selectedP = p;
        fullScreener.fullScreenCheck2(p);

    })
    p.addEventListener('mouseover',()=>{
        p.style.cursor = 'pointer';

    })

})

