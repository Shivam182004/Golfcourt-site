// document query selector is basic DOM used get the html element used in js file .
var crs = document.querySelector("#cursor")
var crsBlur = document.querySelector("#cursor-blur")


// In JavaScript, addEventListener is a method that is used to attach an event handler function to an HTML element. An event handler is a function that will be executed when a specific event occurs on the specified element, such as a click, mouseover, keypress, etc.

// "dets" yaha jo bhi ghtna hor rahi cursor ke sath uski info deta he x or y axis me .

document.addEventListener("mousemove",function(dets){
  crs.style.left = dets.x+20+"px";
  crs.style.top = dets.y+"px"
  crsBlur.style.left = dets.x - 250 +"px";
  crsBlur.style.top = dets.y - 250 +"px";
});


// var h4all = document.querySelectorall("#nav h4");
// h4all.forEach(function(elem) {
//   elem.addEventListener("mouseenter",function(){
//     crs.style.scale = 3;
//     crs.style.border ="1px solid #fff";
//     crs.style.backgroundColor = "transparent";

//   })
// });


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crs.style.scale = 3;
    crs.style.border = "1px solid #fff";
    crs.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crs.style.scale = 1;
    crs.style.border = "0px solid #95C11E";
    crs.style.backgroundColor = "#95C11E";
  });
});

// gsap.from("#about-us img , about-us-in",{
//   y:50,
//   duration:1,
//   opacity:0,
//   stagger:0.4,
//   scrollTrigger{
//     trigger:"#about-us",
//     scroller:"body",
//     markers:"true",
//     start:"top 60%",
//     end: "top 50%",
//     scrub:3,
//   }


// })
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});


























// gsap.to is an library of js for animation things.
// used over here for the transitu=ion effect of nav bar 

gsap.to("#nav", {
      backgroundColor: "#000" ,
      height:"100px",
      duration:0.5,
      scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true , 
        start:"top -10%",
         end : "top -11%",
        scrub :2
      }
})
// used these for giving the effect of transition to one page tho another 
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    markers:true,
    start : "top -25%",
    end: "top -70",
    scrub :2

  }
})

