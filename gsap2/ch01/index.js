// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.square', {
// 	x: 1000,
// 	duration: 8,
// 	scrollTrigger: {
// 		trigger: '.square',
// 		start: 'top 60%',
// 		markers: true,
// 		toggleActions: 'restart pause resume complete',
// 		// 			    onEnter onLeave onEnterBack	onLeaveBack
// 		// toggleClass: 'red',
// 		end: () => `+=${document.querySelector('.square').offsetHeight} 40%`
// 	}
// });

// для toggleActions
	// toggleActions: 'restart pause   resume 		complete',
	// 			       onEnter onLeave onEnterBack	onLeaveBack
	// play - играть, запускать
	// pause - пауза
	// resume - продолжить
	// reverse - проигрывание обратно
	// restart - перезапустить 
	// reset - сброс
	// complete - завершить, довести до конца
	// none - ничего

// 1-3 parts end


// 4 part start

// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.square', {
// 	x: 1000,
// 	duration: 8,
// 	scrollTrigger: {
// 		trigger: '.square',
// 		start: 'top 80%',
// 		end:`top 30%`,
// 		scrub: 4,
// 		toggleActions: 'restart none none none',
// 		markers: true,
// 	}
// });

// 4 part end 



// 5 part start

gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
	// x: 1000,
	duration: 8,
	scrollTrigger: {
		trigger: '.square2',
		start: 'top 80%',
		end:`top 30%`,
		scrub: 1,
		pinSpacing: true, // or false
		toggleActions: 'restart none none none',
		pin: '.square',
		markers: true,
	}
});

// 5 part end 