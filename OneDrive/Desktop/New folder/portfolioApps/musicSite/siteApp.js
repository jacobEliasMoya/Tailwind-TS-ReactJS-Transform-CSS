//creating an object that will contain the actual 'app' portion of the site
let scaleApp = {

    //guitar preference as undefined until selected
    guitarPref : undefined,
    //buttons used to select acoustic or electric guitar
    guitarPrefButtons: document.querySelectorAll('.switch'),

    // select pref guitar function that takes 1 parameter
    preferredGuitar(button){
        // switch statement to check button inner html
        switch(button.innerHTML){
            // if acoustic or electric, assign guitar pref with respective type
            case 'Acoustic':
                this.guitarPref = 'acoustic';
                break;
            case 'Electric':
                this.guitarPref = 'electric';
        }     
    },

    genres : document.querySelectorAll('.genre-container h1'),

    genreButtons : document.querySelectorAll('.genre-switches button'),
    genresRockBtn : document.querySelector('.rock.switch'),
    genresBluesBtn : document.querySelector('.blues.switch'),
    genresJazzBtn : document.querySelector('.jazz.switch'),
    genresCountryBtn : document.querySelector('.country.switch'),

    prefGenre(){

    },

    genreIndicator(button){
        
        switch(button){
            case this.genresRockBtn:
                    this.genres.forEach(genre=>{

                        if(genre!== 'Rock'){
                            let g = genre;
                            g.style='color:black'
                        }

                        switch(genre.innerHTML){
                            case 'Rock':
                                let text = genre;
                                text.style = 'color: red'
                                break;
                        }

                    })
                break;
            case this.genresBluesBtn:
                this.genres.forEach(genre=>{

                    if(genre!== 'Blues'){
                        let g = genre;
                        g.style='color:black'
                    }

                    switch(genre.innerHTML){
                        case 'Blues':
                            let text = genre;
                            text.style = 'color: red'
                            break;
                    }
                })
                break;
            case this.genresJazzBtn:
                this.genres.forEach(genre=>{

                    if(genre!== 'Jazz'){
                        let g = genre;
                        g.style='color:black'
                    }

                    switch(genre.innerHTML){
                        case 'Jazz':
                            let text = genre;
                            text.style = 'color: red'
                            break;
                    }
                })
                break;
            case this.genresCountryBtn:
                this.genres.forEach(genre=>{

                    if(genre!== 'Country'){
                        let g = genre;
                        g.style='color:black'
                    }

                    switch(genre.innerHTML){
                        case 'Country':
                            let text = genre;
                            text.style = 'color: red'
                            break;
                    }
                })
                break;
        }



    },

    growFullSize(element){

    }
}


scaleApp.guitarPrefButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        scaleApp.preferredGuitar(button);
    })
})

scaleApp.genreButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        scaleApp.genreIndicator(button);
        console.log('x')
    })
})