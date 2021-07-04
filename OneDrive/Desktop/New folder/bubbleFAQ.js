let bubbleFacts = {

    bText:document.querySelector('.about.section p'),

    bs: document.querySelectorAll('.bubble'),
    b1:document.querySelector('.bubble.one'),
    b2:document.querySelector('.bubble.two'),
    b3:document.querySelector('.bubble.three'),
    b4:document.querySelector('.bubble.four'),

    b1Text: 'I am a very <span>happily married father of 3</span> of the most precious children in the world. My little monkies are all loving & caring kids who love to be artsy just like me! My wife of 7 years is my rock who keeps me grounded & with my eyes on the prize! I love my family more than words can describe! <br> <br> <span>Keep Hovering or Tapping On</span>',
    b2Text: 'I am at heart a <span>wanna-be rockstar</span>, who has been playing guitar for over a decade now! I love to come home after a long day at work & just jam away my worries. I am currently trying to get my kids to catch the musical itch, but to no avail, however I am not giving up yet. Music is something that is not only a part of me, but an extension of how I can express myself. You can always find me listening to some Jack Johnson or John Mayer! <br> <br> <span>Keep hovering or Tapping</span>',
    b3Text: 'I am a <span>complete geek</span> when it comes to technology and computers. I currently operate using a nice Alienware 15 R3, it is louder than a helicopter when it gets heated & the fans kick in, but it gets the job done. From coding to gaming, to looking up completly random fun facts, technology is my lifeblood. I currently spend a good amount of my fun time coding & developing on my technology, & I would not have it any other way. <br> <br> <span>Hover or Tap Away</span>',
    b4Text: 'I would not call myself Jeremy Wade, but I am a <span>fishing lover</span>! I am more of a nature loving individual that enjoys to be out on a nice day enjoying Gods beauty. Fishing is the best of practicing patience & preseverance, with the added bonus of some real quality time with my family!  <br> <br> <span>Keep on hovering</span>',

    oText : 'I am a very <span> mindful & observant</span>  person, to me the little things count. You can say that my approach is the same in all aspects of my life. Now, close to 2 years ago I found web development, & have been able to apply that very same mindset to the design & development that goes into my work. I am always willing to collaborate with other creators. <br> <br> <span>Hover or Tap Over the bubbles</span> to learn more.',

    resetHTML(element){
        element.innerHTML = this.oText;
    }



}


bubbleFacts.b1.addEventListener('mouseover',()=>{
    bubbleFacts.bText.innerHTML = bubbleFacts.b1Text;
 })
bubbleFacts.b2.addEventListener('mouseover',()=>{
    bubbleFacts.bText.innerHTML = bubbleFacts.b2Text;
})
bubbleFacts.b3.addEventListener('mouseover',()=>{
    bubbleFacts.bText.innerHTML = bubbleFacts.b3Text;
})
bubbleFacts.b4.addEventListener('mouseover',()=>{
    bubbleFacts.bText.innerHTML = bubbleFacts.b4Text;
})

bubbleFacts.bs.forEach(b=>{
    b.addEventListener('mouseout',()=>{
        bubbleFacts.resetHTML(bubbleFacts.bText);
    })
})
