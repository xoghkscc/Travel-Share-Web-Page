const burger = document.querySelector(".burger");
const navlinks = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav-links"); 
const guide_header = document.querySelector("#guide_header");
const guide_link = document.querySelectorAll(".guide_link");

window.addEventListener('scroll', function(e){
	if (window.scrollY > 0) {
		guide_header.classList.add('down');
		for (let i = 0; i < guide_link.length; i++) {
			guide_link[i].style.color= 'black';	
		}
		
	} else {
		if (guide_header.classList.contains('down'))
		guide_header.classList.remove('down');
		for (let i = 0; i < guide_link.length; i++) {
			guide_link[i].style.color= 'black';			
		}
		
	}
});


const navAnimation = () => { 
  navlinks.forEach((link, index) => {
    // 애니메이션이 있을 때 
    if (link.style.animation) { 
	// 애니메이션 비움 
      link.style.animation = ""; 
    } else { 
      // 애니메이션 없을 때 애니메이션을 추가 
      // 딜레이 간격을 줘서 li가 하나씩 차례대로 나타나도록 설정 
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5 }s`;		
	
      } 
    }); 
  };

  const handleNav = () => { 
    nav.classList.toggle("nav-active"); 
    //nav Animation 
    navAnimation(); 
    //burger Animation 
    burger.classList.toggle("toggle"); 
  }; 
  const navSlide = () => { 
    burger.addEventListener("click", handleNav); 
  };
  const setNavTransition = (width) => { 
    if (width > 768) { 
      nav.style.transition = ""; 
    } 
  };

  const handleResize = () => { 
    const width = EventTarget.innerWidth; 
    setNavTransition(width); 
  }; const init = () => { 
    // Toggle Nav 
    window.addEventListener("resize", handleResize); 
    navSlide(); 
  }; 
  init();
/*
$(function(){
  var $header = $('header'); //헤더를 변수에 넣기
  var $page = $('body'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
	console.log(scrolled); 
});

});
*/

