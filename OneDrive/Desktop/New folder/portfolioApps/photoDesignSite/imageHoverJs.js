let imgHovChange = {

    photos: document.querySelectorAll('.photoSelections .photo'),
    photoSel: document.querySelector('.photoSelections'),
    

    gallPhotos: document.querySelectorAll('.photoHolder div'),
    backDrop : document.querySelector('.photoHolder'),
    backDropText : document.querySelector('.photoHolder h1'),

    abDescr : document.querySelector('.aboutDes'),

    // need all the photos in an array
    // if index is equal to 0-5 then either add a class list of one and so on

    photoArr : [],
    currentInd : 0,

    photoT : document.querySelector('.photoType'),
    photoT2 : document.querySelector('.logo'),

    mainPhotoT : document.querySelectorAll('.mainPhotoType'),

    curPhotoT : 'Nature',

    createPhotoArray(){
        this.photos.forEach(photo=>{
            this.photoArr.push(photo);
        })
    },

    setInd(e){
        this.currentInd = this.photoArr.indexOf(e);
    },
    
    createClasses(e){

        switch(this.curPhotoT){
            case 'Nature':
                switch(this.currentInd){
                    case 0:
                        e.classList.add('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');

                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


        
        
                    break
                    case 1:
                        e.classList.add('naturetwo');
                        e.classList.remove('natureone');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
        
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


                    break
                    case 2:
                        e.classList.add('naturethree');
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');

                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


                        

                        break
                    case 3:
                        e.classList.add('naturefour');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('natureone');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
        
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


                    break
                    case 4:
                        e.classList.add('naturefive');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('natureone');
                        e.classList.remove('naturesix');

                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


        
                    break
                    case 5:
                        e.classList.add('naturesix');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('natureone');

                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


                    break
        
                }
            break;
            case 'Birthdays':
                switch(this.currentInd){
                    case 0:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.add('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


        
        
                    break
                    case 1:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        
                        e.classList.add('bdaytwo');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');

                        
                    break
                    case 2:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.add('bdaythree');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');

                    break
                    case 3:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.add('bdayfour');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');

                    break
                    case 4:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.add('bdayfive');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaysix');

                        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');
        
                    break
                    case 5:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.add('bdaysix');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdayone');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


                    break
        
                }
            break;
            case 'Weddings':
                switch(this.currentInd){
                    case 0:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');

                        e.classList.add('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');


        
        
                    break
                    case 1:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.add('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');

                        
                    break
                    case 2:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.add('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');

                    break
                    case 3:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaysix');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.add('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.remove('wedsix');

                    break
                    case 4:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayone');
                        e.classList.remove('bdaysix');

                        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.add('wedfive');
                        e.classList.remove('wedsix');
        
                    break
                    case 5:
                        //remove all
                        e.classList.remove('natureone');
                        e.classList.remove('naturetwo');
                        e.classList.remove('naturethree');
                        e.classList.remove('naturefour');
                        e.classList.remove('naturefive');
                        e.classList.remove('naturesix');
                        //add em in
                        e.classList.remove('bdaysix');
                        e.classList.remove('bdaytwo');
                        e.classList.remove('bdaythree');
                        e.classList.remove('bdayfour');
                        e.classList.remove('bdayfive');
                        e.classList.remove('bdayone');
        
                        e.classList.remove('wedone');
                        e.classList.remove('wedtwo');
                        e.classList.remove('wedthree');
                        e.classList.remove('wedfour');
                        e.classList.remove('wedfive');
                        e.classList.add('wedsix');


                    break
        
                }
            break;

        }

    },

    changeImgText(){
        switch(this.curPhotoT){
            case 'Nature':
                switch(this.currentInd){
                    case 0:
                        this.backDropText.innerHTML = '1/12/2020 | ..Lake Beauty..'
                    break
                    case 1:
                        this.backDropText.innerHTML = '4/21/2020 | ..Dock Duty..'
        
                    break
                    case 2:
                        this.backDropText.innerHTML = '2/26/2020 | ..Flowery Bed..'
        
                    break
        
                }
        
                break;
            case 'Weddings':
                switch(this.currentInd){
                    case 0:
                        this.backDropText.innerHTML = '3/22/2019 | ..Hearts of a Pair..'
                    break
                    case 1:
                        this.backDropText.innerHTML = '4/1/2019 | ..Pillow Fight!.'
        
                    break
                    case 2:
                        this.backDropText.innerHTML = '1/1/2020 | ..Just Married..'
        
                    break
        
                }
        
                break;
            case 'Birthdays':
                switch(this.currentInd){
                    case 0:
                        this.backDropText.innerHTML = '4/12/2009 | ..Pretty Pink..'
                    break
                    case 1:
                        this.backDropText.innerHTML = '2/7/2015 | ..Make a Wish!.'
        
                    break
                    case 2:
                        this.backDropText.innerHTML = '5/26/2017 | ..Puppy Years..'
        
                    break
        
                }
        
                break;
        }
    },

    reAssignPhotoT(listItem){
        this.curPhotoT = listItem.innerHTML;
        this.photoT.innerHTML = this.curPhotoT;
        this.photoT2.innerHTML = this.curPhotoT;

    },
    //standalone
    galleryView(){
        switch(this.curPhotoT){
            case 'Gallery':
                this.gallPhotos.forEach(p=>{
                    if(p.style.display==='flex'){
                        // p.style.display='none';
                        // this.backDrop.style.background ='';
                        // this.backDropText.style.display ='';
                        // this.backDrop.style.border = '';
                        // this.backDrop.style.borderBottom = '';
                        // this.backDrop.style.padding = '';
                        // this.abDescr.style.opacity ='';
                        // this.photoSel.style.opacity = '1';
                        // this.photoSel.style.height = '';


            

                    } else {
                        p.style.display='flex';
                        this.backDrop.style.background ='none';
                        this.backDropText.style.display ='none';
                        this.backDrop.style.border = '0rem solid rgb(201, 201, 201)';
                        this.backDrop.style.borderBottom = '0rem solid rgb(201, 201, 201)';
                        this.backDrop.style.padding = '0rem';
                        this.abDescr.style.opacity ='0';
                        this.photoSel.style.opacity = '0';
                        this.photoSel.style.height = '0rem';






                    }
                })
                break;
                default:
        }
    },

    galleryClear(){
        if(this.curPhotoT!=='Gallery'){
            this.gallPhotos.forEach(p=>{
                if(p.style.display==='flex'){
                    p.style.display='none';
                    this.backDrop.style.background ='';
                    this.backDropText.style.display ='';
                    this.backDrop.style.border = '';
                    this.backDrop.style.borderBottom = '';
                    this.backDrop.style.padding = '';
                    this.abDescr.style.opacity ='';
                    this.photoSel.style.opacity = '1';
                    this.photoSel.style.height = '';
                }
            })
        }
    },



}

imgHovChange.createPhotoArray();

imgHovChange.photos.forEach(p=>{
    p.addEventListener('mouseover',()=>{
        imgHovChange.setInd(p);
        imgHovChange.createClasses(imgHovChange.backDrop);
        imgHovChange.changeImgText(imgHovChange.backDropText)


    })
})

imgHovChange.mainPhotoT.forEach(li=>{
    li.addEventListener('click',()=>{
        imgHovChange.reAssignPhotoT(li);
        imgHovChange.createClasses(imgHovChange.backDrop)
        imgHovChange.changeImgText(imgHovChange.backDropText)
        imgHovChange.galleryView();
        imgHovChange.galleryClear();
        imgHovChange.photos.forEach(p=>{
            imgHovChange.setInd(p);
            imgHovChange.createClasses(p)
            imgHovChange.changeImgText(imgHovChange.backDropText)


        })
        if(imgHovChange.curPhotoT==="Gallery"){
            if(fullScreener.ph.style.height !== '90vh'){
                fullScreener.fullScreenCheck(fullScreener.ph,fullScreener.ph2);

            }
        }
    })

})

