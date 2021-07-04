let projAb = {

    pText:document.querySelector('.work.section .middle p'),

    ps: document.querySelectorAll('.work.section .bottom .wrapper'),
    p1:document.querySelector('.work.section .bottom .wrapper.one'),
    p2:document.querySelector('.work.section .bottom .wrapper.two'),
    p3:document.querySelector('.work.section .bottom .wrapper.three'),
    p4:document.querySelector('.work.section .bottom .wrapper.four'),

    p1Text: 'This is my <span>Most Recent</span> development project! It is a mock portfolio website design! I am incorporating some eye popping perspective & design styles to get my project done. I am almost completed with this one, a couple more bugs & some more responsiveness should do it! <br><br> <span>Languages Used:</span> HTML/CSS3/SCSS/JavaScript',
    p2Text: 'I consider this to be one my <span>Funniest & Most Entertaining</span> projects that I have worked on yet. We all know 2020 has been a roller coaster & we still have more to come! I thought why be sour, & why not take a comedic yet simple point & click stance on the corona virus. We can all stop the spread, but what better way than through the web! <br><br> <span>Languages Used:</span> HTML/CSS3/SCSS/JavaScript',
    p3Text: 'Mancala has always been a <span>Family Favorite</span> of ours! I have never been the board game type, but I will sit & play Mancala all day long if I can! This app is very simple to use, just read the rules first via the rules menu, which can be used at any time, then hit begin. I hope you have fun! I did also include a small display to let you know where your pieces will end up if there is any confusion. <br><br> <span>Languages Used:</span> HTML/CSS3/SCSS/JavaScript',
    p4Text: 'Music is <span>Part of my Soul</span> & will always have a place deep in my heart! This site is aimed at the guitarrist who aspires to become a pro! There are advanced musical theories as well as simple sheets to follow along with. I incorperated multiple HTML pages which all communicate back & forth properly to ensure a fun & discoverable UX. There are additions currently being added in soon, such as musical artist suggestions! <br><br> <span>Languages Used:</span> HTML/CSS3/SCSS/JavaScript',

    oText : 'Here are some of my more recent <span>Development</span> projects, each of them are linked to the live project & GIT repository to check out the projects & their respective code. My projects contain clean, well-written object-oriented JavaScript code, & beautiful responsive CSS3 stylings. If you have any questions about them, <a href="mailto: jemoya1994@gmail.com">Email Me.</a> <br><br> <span> Hover over or Tap</span> on a project for more information!',


    resetHTML(element){
        element.innerHTML = this.oText;
    }



}


projAb.p1.addEventListener('mouseover',()=>{
    projAb.pText.innerHTML = projAb.p1Text;
 })
 projAb.p2.addEventListener('mouseover',()=>{
    projAb.pText.innerHTML = projAb.p2Text;
})
projAb.p3.addEventListener('mouseover',()=>{
    projAb.pText.innerHTML = projAb.p3Text;
})
projAb.p4.addEventListener('mouseover',()=>{
    projAb.pText.innerHTML = projAb.p4Text;
})

projAb.ps.forEach(b=>{
    b.addEventListener('mouseout',()=>{
        projAb.resetHTML(projAb.pText);
    })
})
