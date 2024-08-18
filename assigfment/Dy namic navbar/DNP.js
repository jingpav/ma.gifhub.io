

/*document.addEventListener('DOMContentLoaded', function () {
    var buttonYes = document.querySelector(".btn-yes");
    var buttonNo = document.querySelector(".btn-no");

    buttonNo.addEventListener('mouseover', function () {
        const randomPosition = (max) => Math.floor(Math.random() * max);
        
        buttonNo.style.position = 'absolute';
        buttonNo.style.left = `${randomPosition(window.innerWidth - buttonNo.offsetWidth)}px`;
        buttonNo.style.top = `${randomPosition(window.innerHeight - buttonNo.offsetHeight)}px`;
    });

    buttonYes.addEventListener('click', function () {
        alert("Yay! I knew it!");
    });

    buttonNo.addEventListener('click', function () {
        alert("Oh no! Why not?");
    });
});*/

// Select the element with the class 'box-text1'
var box1 = document.querySelector(".box-text1");
var box2=document.querySelector(".box-text2");
var box3=document.querySelector(".box-text3");
var box4=document.querySelector(".box-text4");




box1.addEventListener('click', function() {
  
    alert("Hello! Are you okay?");
});




box2.addEventListener('mouseover',function () {
    const randomPosition = (max) =>Math.floor(Math.random()*max);
    box2.style.position='absolute';
    box2.style.left=`${randomPosition(window.innerWidth-box2.offsetWidth)}px`;
    box2.style.top=`${ randomPosition(window.innerHeight-box2.offsetHeight)}px`;

 
    
});

box3.addEventListener('mouseover',function(){

    const randomPosition = (max) =>Math.floor(Math.random()*max);
    box3.style.position='absolute',
    box3.style.left=`${randomPosition(window.innerWidth-box3.offsetWidth)}px`;
    box3.style.top=`${randomPosition(window.innerHeight-box3.offsetHeight)}px`;

}   
);
box4.addEventListener('mouseover',function () {

    const randomPosition = (max) =>Math.floor(Math.random()*max);
    box4.style.position='absolute',
    box4.style.left=`${randomPosition(window.innerWidth-box4.offsetWidth)}px`;
    box4.style.top=`${randomPosition(window.innerHeight-box4.offsetHeight)}px`;

    
})

