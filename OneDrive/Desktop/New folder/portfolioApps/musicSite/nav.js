//creating an object that will contain the navigation bar/dropdown portion of the site

let dropDown = {
    // saving hamburger menu to var button 
    button : document.querySelector('.hamburger-menu'),
    // saving dropdown list to var button 
    list : document.querySelector('.dropdown-list'),
    // saving list items to var button 
    listItems : document.querySelectorAll('.dropdown-list li'),
    // setting boolean false to represent if the button has been clicked or not
    buttonClick : false,

    // method to check if button has been clicked or not
    clickAuth(){
        switch(this.buttonClick){
            case false:
                // if case is false, then margins will be adjusted as well as the boolean value 
                // of button click
                this.list.style.marginTop = '8vh'; 
                this.buttonClick = true;
                break;
            default:
                // if case is not false, then margins will be adjusted as well as the boolean value 
                // of button click to undo a 'click'
                this.list.style.marginTop = '-30vh'; 
                this.buttonClick = false;
        }
    }

}

//event listener listening for clicks to effect dropdown menu
dropDown.button.addEventListener('click',()=>{
    dropDown.clickAuth();
})

//event listener listening to see if any item within the list is click
dropDown.listItems.forEach(item=>{
    item.addEventListener('click',()=>{
        dropDown.clickAuth();
    })
})
