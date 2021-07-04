let mainGame = {
    
    gameOn: undefined,

    rules : document.querySelector('.theRules'),

    //main control buttons stored in an obj
    controlButtons : {
        begin: document.querySelector('.beginButton'),
        rules: document.querySelector('.ruleButton'),
        close: document.querySelector('.closeButton')
    },

    //gameBoard goal Zones
    goals : {
        p1Goal:document.querySelector('.p1Goal'),
        p2Goal:document.querySelector('.p2Goal'),
    },

    turnIndicators : {
        p1 : document.querySelector('.turn-indicator .p1'),
        p2: document.querySelector('.turn-indicator .p2'),
    },

    // all gameBoardSlots 
    allSlots : document.querySelectorAll('.piece'),
    
    // gameBoard slots
    //player 1  
    p1Slots: document.querySelectorAll('.p1Slot'),
    p1GamePces:[],

    // gameBoard slots
    //player 2 
    p2Slots:document.querySelectorAll('.p2Slot'),
    p2GamePces:[],

    //setting a val for total num of game pieces, should not exceed (48)
    totalGamePce : 0,

    //after a slot is clicked, the selected spot will be assigned
    selectedSlot: undefined,

    //nextSpot
    nextSpot : undefined,

    //setting turn counter to 0, will either fluctuate between 0/1
    turnCount : 0,

    //end spot
    endSpot : undefined,
    
    //opposite spot
    oppositeSpot:undefined,

    //function to act as a cleanup function to gather the last bead 
    getlastPlayer:undefined,


    // empty arrays to assign flow of moves
    gameFlowArr: [],
    p1GameFlow: [],
    p2GameFlow: [],

    // method to obtain the opposite spot from player  to player 
    getOppositeSpot(){
        // declaring an empty array to be used array
        let arr = [];

        // pushing all slots into my array using for each loop
        this.allSlots.forEach(s=>{
            arr.push(s);
        })
        // using a switch statement to determing the case of the endspot
        switch(this.endSpot){
            //all cases are indexes of the array with their respective opposites directly across from them
            case arr[0]:
                this.oppositeSpot=arr[6];
                break;
            case arr[1]:
                this.oppositeSpot=arr[7];
                break;
            case arr[2]:
                this.oppositeSpot=arr[8];
                break;
            case arr[3]:
                this.oppositeSpot=arr[9];
                break;
            case arr[4]:
                this.oppositeSpot=arr[10];
                break;
            case arr[5]:
                this.oppositeSpot=arr[11];
                break;
            case arr[6]:
                this.oppositeSpot=arr[0];
                break;
            case arr[7]:
                this.oppositeSpot=arr[1];
                break;
            case arr[8]:
                this.oppositeSpot=arr[2];
                break;
            case arr[9]:
                this.oppositeSpot=arr[3];
                break;
            case arr[10]:
                this.oppositeSpot=arr[4];
                break;
            case arr[11]:
                this.oppositeSpot=arr[5];
                break;
        }
        // clearing out array after function is run
        arr=[];
        

    },

    //iff last mancala piece is in own goal, you get to take a turn again
    goAgain(){
        // declaring var to store index of spot
        let spotInd= this.gameFlowArr.indexOf(this.nextSpot);
        // declaring var to store new spot, which is the var above - 1
        let newSpotInd = spotInd-1;

        // if statements to check if the spot is equal to the first index in the gameflow
        if(this.nextSpot===this.gameFlowArr[0]){
            // perameters are met, var is reassigned to 13
            newSpotInd=13;
        }

        // if statement to check if the newspot index is in either p1/p2 goal to determine if a new turn will be awarded
        if(newSpotInd === 6 || newSpotInd === 13){
            //using method with perameter of newspotindex 
            this.initiateTurn(this.gameFlowArr[newSpotInd]);
        } 
    },

    //method that will assign the overall gameflow as well as 1st player and 2nd player gameflows  
    setGameFlows(){

        // using unshift to add data into existing arrays
        this.gameFlowArr.unshift(this.goals.p1Goal);
        this.p1GameFlow.unshift(this.goals.p1Goal);

        // using a forEach loop on p1slots
        this.p1Slots.forEach(slot=>{
            // using unshift to add data into existing arrays
            this.gameFlowArr.unshift(slot);
            this.p1GameFlow.unshift(slot);
            this.p2GameFlow.unshift(slot);
        });
        // using a forEach loop on p1slots

        this.p2Slots.forEach(slot=>{
            // using unshift to add data into existing arrays
            this.gameFlowArr.push(slot);
            this.p1GameFlow.push(slot);
            this.p2GameFlow.push(slot);


        }) 

        // pushing last of data into existing arrays
        this.gameFlowArr.push(this.goals.p2Goal);
        this.p2GameFlow.push(this.goals.p2Goal);

    },

    //method to select spot, will be used in conjunction with eventListener
    selectSpot(spot){
        // assigning selected spot based off of parameter
        this.selectedSlot = spot;
    },

    // method to assign the next spot in the rototation 
    assignNextSpot(currentSpot,turn){
        //wrapped in if statement that takes a turn 
        if(turn === 1){
            // storing variable to hold index of perameter
            let currentIndex = this.p1GameFlow.indexOf(currentSpot);
            // if currents spot is not equal to 12
            if(currentIndex !== 12){
                // the next spot is then assigned to the following spot
                this.nextSpot = this.p1GameFlow[currentIndex+1];
            } else {
                // the next spot is then assigned to the 1st index in the p1 gameflow
                this.nextSpot = this.p1GameFlow[0];
            }
        } else {
            // storing variable to hold index of perameter
            let currentIndex = this.p2GameFlow.indexOf(currentSpot);
            // if currents spot is not equal to 12
            if(currentIndex !== 12){
                // the next spot is then assigned to the following spot
                this.nextSpot = this.p2GameFlow[currentIndex+1];
            } else {
                // the next spot is then assigned to the 1st index in the p1 gameflow
                this.nextSpot = this.p2GameFlow[0];
            }
        }

    },

    //function to show the ending location, to be used in conjuction with an event listener, takes spot and a turn 
    showEndLocation(spot,turn){
        if(turn===0){
            // declaring var to store num of moves based on total children of Node
            let numOfMoves = spot.childElementCount;
            // checking to see if any game pieces are inside of the spot
            if(numOfMoves>0){
                //getting index 
                let currentInd = this.p1GameFlow.indexOf(spot);
                // basing the end location on the current index plus total moves
                let endInd = currentInd + numOfMoves;
                //if statement ot fix bug, allowing for proper flow of the locations
                if(endInd>12){
                    // reassigning endind val 
                    endInd = endInd-this.p1GameFlow.length;
                }
                //assigning end spot to the last spot
                this.endSpot=this.p1GameFlow[endInd];
                //styling the endspot to give visual indication, makes the game easier to play through
                this.endSpot.style='box-shadow: inset 0 0 2rem lime';
                
            } else {
                return;
            }
        } else {
            // declaring var to store num of moves based on total children of Node
            let numOfMoves = spot.childElementCount;
            // checking to see if any game pieces are inside of the spot
            if(numOfMoves>0){
                //getting index 
                let currentInd = this.p2GameFlow.indexOf(spot);
                // basing the end location on the current index plus total moves
                let endInd = currentInd + numOfMoves;
                //if statement ot fix bug, allowing for proper flow of the locations
                if(endInd>12){
                    // reassigning endind val 
                    endInd = endInd-this.p2GameFlow.length;
                }
                //assigning end spot to the last spot
                this.endSpot=this.p2GameFlow[endInd];
                //styling the endspot to give visual indication, makes the game easier to play through
                this.endSpot.style='box-shadow: inset 0 0 2rem lime';
            } else {
                return;
            }

        }


    },

    //method to clear the effects of showend location function
    showEndLocationClear(spot){

        let numOfMoves = spot.childElementCount;
        if(numOfMoves===0){
            return;
        } else {
            // styling clear to endspot
            this.endSpot.style='box-shadow: inset 0 1rem 1rem';
        }

    },

    //method to 'light' p1/p2 header to indicate whos turn it is
    displayTurn(turn){
        //if turn equals zero, p1 will be 'lit' and any other styles on p2 are colored to default
        if(turn===0){
            this.turnIndicators.p1.style = 'color:green';
            this.turnIndicators.p2.style = 'color:tan';

        //else turn equals zero, p2 will be 'lit' and any other styles on p1 are colored to default

        } else {
            this.turnIndicators.p2.style = 'color:green';
            this.turnIndicators.p1.style = 'color:tan';

        }
    },

    //function that either displays/removes displayed rules takes 1 arguement
    displayRules(action){
        // switch statement that takes the function arguement for next action
        switch(action){
            // if open is the case, then the rules will be displayed, 
            case "open":
                this.rules.style = 'display: flex; height: 95%;';
                break;
            // if anything else they will not be displayed 
            default:
                this.rules.style = 'display: none; height: 0;';
        }
    },

    //method to create game pieces, takes element to add children
    createGamePiece(element){
        // array of colors to be used to style pieces
        let colorArr = ['red','lightgreen','lightblue','silver','white','orange','salmon']
        
        //creating element in var gamepiece
        let gamePiece = document.createElement('div');
        
        //adding class to style appropriately
        gamePiece.classList.add('gamePiece');

        //adding a random color to the game piece
        gamePiece.style.background = colorArr[Math.floor(Math.random()* colorArr.length)];

        //appending game piece to the  parameter element 
        element.appendChild(gamePiece);

        //increment total pieces
        this.totalGamePce++;
    },

    //method to start game, adding in game pieces in p1/p2spots
    startGame(){
        //using a while loop, (4) game pieces will be added to each play slot
        while(this.totalGamePce< 48){
            //will loop through p1slots to add gamePieces
            this.p1Slots.forEach(slot=>{
                this.createGamePiece(slot);
                this.createGamePiece(slot);
                this.createGamePiece(slot);
                this.createGamePiece(slot);
            })
            //will loop through p1slots to add gamePieces
            this.p2Slots.forEach(slot=>{
                this.createGamePiece(slot);
                this.createGamePiece(slot);
                this.createGamePiece(slot);
                this.createGamePiece(slot);
            })
        }
        //begin button will not be displayed after the above code is exceuted
        mainGame.controlButtons.begin.style = 'display: none';
    },

    //function move the game piece, to be used in conjuction with event listener 
    movePiece(selectedSlot){
        this.gameFlowArr.forEach(slot=>{
            // inserted here to prevent bug that was leaving slot colored green on mouseout
            this.showEndLocationClear(slot);


            if (slot === this.goals.p1Goal|| slot ===this.goals.p2Goal){
                return;            
            } else {
                if(selectedSlot===slot){

                    let slotGamePcs = selectedSlot.children;
                    let numOfMoves = selectedSlot.childElementCount;
                    // let color = slotGamePcs[0].style.background;
                    while(numOfMoves>0){
                        slot.removeChild( slotGamePcs[0]); 
                        this.createGamePiece(this.nextSpot);
                        this.assignNextSpot(this.nextSpot,this.turnCount);
                        numOfMoves--;
                    }
                    //running a function which will choose if player gets another turn
                    this.goAgain();

                }
            }
        });        
        
    },

    //will either change the turncount up/back to zero dependant on moves
    initiateTurn(element){
        //checing to see if child elements are more than 0
        if(element.childElementCount === 0){
            return;
            //if it is not 0, then the turncount will increment
        } else {
            this.turnCount++;

            //once the count is greater than 1, the count will reset to 0
            if(this.turnCount>1){
                this.turnCount = 0;
            }
        }
    },

    // method that will take a spot and turn to obtain the beads of opposite space  
    getP2Beads(spot,turn){
        // if the turn count is at 0
        if(turn===0){
            // num of moves is equal to child element count 
            let numOfMoves = spot.childElementCount;

            //if there is more than 0 pieces in a spot
            if(numOfMoves>0){
                //getting p1 index
                let currentInd = this.p1GameFlow.indexOf(spot);
                //obtaining end index
                let endInd = currentInd + numOfMoves;
                //if stament to fix bug which now ensures smooth gameflow 
                if(endInd>12){
                    endInd = endInd-this.p1GameFlow.length;
                }
                this.endSpot=this.p1GameFlow[endInd];
                let endSpotCount = this.endSpot.childElementCount;
                //if statement to check if endspot is equal to p1 slots
                this.p1Slots.forEach(slot=>{
                    if(this.endSpot===slot && endSpotCount === 0 ){
                        let oppCount=this.oppositeSpot.childElementCount;
                        //shortcut to clear all inner nodes from parent 
                        this.oppositeSpot.innerHTML =''

                        //while loop to add in as many pieces are in opposite spot
                        while(oppCount>0){
                            //creating game piece in respective goal
                            this.createGamePiece(this.goals.p1Goal);
                            //decrementing the oppCount to ensure loop function properly
                            oppCount--;
                        }
                        //chainging val of getlastplayer to ensure another function gets run 
                        this.getlastPlayer=true;
                        

                    }
                });
            } else {

                return;
            }
        } else {
            // num of moves is equal to child element count 
            let numOfMoves = spot.childElementCount;
            //if there is more than 0 pieces in a spot
            if(numOfMoves>0){
                //getting p2 index
                let currentInd = this.p2GameFlow.indexOf(spot);
                //obtaining end index
                let endInd = currentInd + numOfMoves;
                //if stament to fix bug which now ensures smooth gameflow 
                if(endInd>12){
                    endInd = endInd-this.p2GameFlow.length;
                }
                this.endSpot=this.p2GameFlow[endInd];
                let endSpotCount = this.endSpot.childElementCount;
                //if statement to check if endspot is equal to p2 slots
                this.p2Slots.forEach(slot=>{
                    if(this.endSpot===slot && endSpotCount === 0 ){
                        let oppCount=this.oppositeSpot.childElementCount;
                        //shortcut to clear all inner nodes from parent 
                        this.oppositeSpot.innerHTML =''
                        //while loop to add in as many pieces are in opposite spot
                        while(oppCount>0){
                            //creating game piece in respective goal
                            this.createGamePiece(this.goals.p2Goal);
                            //decrementing the oppCount to ensure loop function properly
                            oppCount--;
                        }
                        //chainging val of getlastplayer to ensure another function gets run 
                        this.getlastPlayer=true;
                    }
                });
            } else {
                return;
            }

        }
    },

    //cleanup method to work in conjuction with getp2Beads
    getP1Beads(turn){
        // if getlast player is true
        if(this.getlastPlayer===true){
            // if turn is 0
            if(turn===0){
                // saving total count to variable
                let lastSCount=this.endSpot.childElementCount;
                // if count is greater than 0 
                while(lastSCount>0){
                    // create game piece in goal
                    this.createGamePiece(this.goals.p2Goal);
                    // decrement count
                    lastSCount--;
                }
            } else {
                // saving total count to variable
                let lastSCount=this.endSpot.childElementCount;
                // if count is greater than 0 
                while(lastSCount>0){
                    // create game piece in goal
                    this.createGamePiece(this.goals.p1Goal);
                    // decrement count
                    lastSCount--;
                }
    

            }
            this.endSpot.innerHTML='';
            this.getlastPlayer=undefined;


        }

    },

    //method to check for no beads left
    noBeadsLeft(){

        // setting variables to zero
        let totalBeadsP1 =0;
        let totalBeadsP2 =0;

        // setting above variables to total value of beads based on p1/p2 slots through for each loop
        this.p1Slots.forEach(s=>{
            totalBeadsP1 = totalBeadsP1 + s.childElementCount;
        })
        this.p2Slots.forEach(s=>{
            totalBeadsP2 = totalBeadsP2 + s.childElementCount;
        })

        //if there are no more beads for p1
        if(totalBeadsP1 ===0 ){
            // alerts decalring game over
            alert('game over');
            // while loop to create beads based off total number of beads
            while(totalBeadsP2>0){
                //creating game pieces in p2 goal
                this.createGamePiece(this.goals.p2Goal);
                // decrementing count for loop
                totalBeadsP2--;
            }
            // quick clear all nodes shortcute in p2 slots
            this.p2Slots.forEach(s=>{
                s.innerHTML='';

            })
            //if there are no more beads for p2
        } else if (totalBeadsP2 ===0){
            // alerts decalring game over
            alert('game over');
            // while loop to create beads based off total number of beads
            while(totalBeadsP1>0){
                //creating game pieces in p2 goal
                this.createGamePiece(this.goals.p1Goal);
                // decrementing count for loop
                totalBeadsP1--;

            }
            // quick clear all nodes shortcute in p2 slots
            this.p1Slots.forEach(s=>{
                s.innerHTML='';

            })


        }
    }
}

////////end of object

// setting overall gameflows
mainGame.setGameFlows();

//for loop for general game array spots ('s')
mainGame.gameFlowArr.forEach(s=>{
    // event listener
    s.addEventListener('mouseover',()=>{
        //if statement to prevent mouseover event triggering on p1/p2 goals
        if(s===mainGame.goals.p1Goal||s===mainGame.goals.p2Goal){
            return
        } else {
            //all othere slots aside from goals will trigger function
            mainGame.showEndLocation(s,mainGame.turnCount);
        }
    })

    //  mouse out event listener to clear coloring that show end location creates
    s.addEventListener('mouseout',()=>{
        mainGame.showEndLocationClear(s);
    })

    // onclick event listener
    s.addEventListener('click',()=>{
        // running method to get opposite spot
        mainGame.getOppositeSpot();
        // running opposite spot to check if beads can be obtained
        mainGame.getP2Beads(s,mainGame.turnCount);

        //if turn cout is zero
        if(mainGame.turnCount===0){
            // using for loop to loop through p1 slots
            mainGame.p1Slots.forEach(p1slot=>{
                if(s !== p1slot){
                    return;
                } else {
                    // running below methods
                    //initiate turn based on a spot
                    mainGame.initiateTurn(s)
                    //assigns current spot with what space was clicked
                    mainGame.selectSpot(s);
                    // assigns the next spot based off current spot assigned above 
                    mainGame.assignNextSpot(mainGame.selectedSlot,mainGame.turnCount)
                    //moves piece
                    mainGame.movePiece(mainGame.selectedSlot,mainGame.turnCount);
                    //colors p1 or p2 sign
                    mainGame.displayTurn(mainGame.turnCount);        
                   
                }        
            })
        } else {
            // using for loop to loop through p1 slots
            mainGame.p2Slots.forEach(p2slot=>{
                if(s !== p2slot){
                    return;
                } else {
                    // running below methods
                    //initiate turn based on a spot
                    mainGame.initiateTurn(s);
                    //assigns current spot with what space was clicked
                    mainGame.selectSpot(s);
                    // assigns the next spot based off current spot assigned above 
                    mainGame.assignNextSpot(mainGame.selectedSlot,mainGame.turnCount)
                    //moves piece
                    mainGame.movePiece(mainGame.selectedSlot,mainGame.turnCount);
                    //colors p1 or p2 sign
                    mainGame.displayTurn(mainGame.turnCount);

                }        
            })
        }

        // running clean up mehod
        mainGame.getP1Beads(mainGame.turnCount);
        //checking to see if there are no beads left
        mainGame.noBeadsLeft();

    })

})

mainGame.controlButtons.close.addEventListener('click',()=>{
    mainGame.displayRules();
})

mainGame.controlButtons.rules.addEventListener('click',()=>{
    mainGame.displayRules('open');
})

mainGame.controlButtons.begin.addEventListener('click',()=>{
    mainGame.gameOn = true;
    mainGame.displayTurn(mainGame.turnCount);
    mainGame.startGame();
})



