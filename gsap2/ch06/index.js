// // 6 part start

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: '.box',
// 		markers: true,
// 		start: 'top 80%',
// 		end: 'top 30%',
// 		scrub: 1,

// 	}
// });

// tl.to('.box', { x: 500, duration: 5 })
// 	.to('.box', { y: 200, duration: 3})
// 	.to('.box', { x: 0, duration: 2})

// // gsap.to('.box', { x: 500, duration: 2, });
// // gsap.to('.box', { y: 200, duration: 3, delay: 2 });
// // gsap.to('.box', { x: 0, duration: 2, delay: 5 });

// // 6 part end 

// 7 part start

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
	markers: true,
	start: 'top 80%',
	end: 'top 20%',
	trigger: '.box',
	onUpdate: (self) => console.log(self),
	// toggleClass: 'box-red',
	// onEnter: () => console.log("enter"),
	// onLeave: () => console.log("leave"),
	// onEnterBack: () => console.log("enter back"),
	// onLeaveBack: () => console.log("leave back"),
})

// gsap.to('.box', { x: 500, duration: 2, });
// gsap.to('.box', { y: 200, duration: 3, delay: 2 });
// gsap.to('.box', { x: 0, duration: 2, delay: 5 });

// 7 part end 