// const block = document.querySelector('.block');
// let counter = 0;
// let a = false;

// function anim() {
//   counter++;
//   block.style.transform = `translateX(${counter}px)`;
  
//   if (counter < 200) {
//     a = requestAnimationFrame(anim);
//   }
// }

// requestAnimationFrame(anim);

// 1) to
// gsap.to('.block', {duration: 2, delay: 1, x: 200, y: 100, opacity: 1, ease: 'elastic.out(1, 0.3)'})

// 2) from
// gsap.from('.block', {duration:1, x:200});

// 3) fromTo
gsap.fromTo(".block", {width: 0, height: 0}, {duration: 1.5, delay: 1, width: 100, height: 200});