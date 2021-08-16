<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/header/header.css">
<!-- 	<style type="text/css">
		* { 
  margin: 0px; 
  padding: 0px; 
  box-sizing: border-box; 
}


.logo a {
  font-size: 35px;
  color: blanchedalmond;
  text-decoration: none;
}
nav { 
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center; 
  min-height: 5vh; 
  background-color: transparent; 
  font-family: "Poppins", sans-serif;
}

.nav-links { 
  width: 30%; 
  display: flex; 
  justify-content: space-around;
}
.nav-links li {
  list-style: none; 
  }
.nav-links a {
  color: blanchedalmond;
  text-decoration: none; 
  letter-spacing: 3px; 
  font-weight: bold; 
  font-size: 20px; 
  }
.nav-links a:hover {
  color: blanchedalmond;
  opacity: 0.4;
}
.burger { 
  display: none;
  cursor: pointer;
  margin-right: 10px; 
} 
.burger div {
  width: 25px; 
  height: 3px; 
  background-color: white; 
  margin: 5px; 
  transition: all 0.3s ease;
}
@media screen and (max-width: 1024px) {
  .nav-links { 
    width: 60%; 
  } 
}
@media screen and (max-width: 768px) { 
  body { 
    overflow-x: hidden; 
  } 
  .nav-links {
    position: absolute; 
    top: 5vh; 
    right: 0; 
    height: 92vh; 
    background-color: transparent; 
    flex-direction: column;
    align-items: center; width: 40%; 
    transform: translateX(100%); 
  }
  .nav-links li { 
    opacity: 0; 
  } .burger { 
    display: block; 
  } .nav-active { 
    transform: translateX(0%); 
  } 
  @keyframes navLinkFade { 
    from { 
      opacity: 0; 
      transform: translateX(5px);
    } to { 
      opacity: 1; 
      transform: translateX(0);
    } 
  } 
} 
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px); 
} 
.toggle .line2 { 
  opacity: 0; 
} 
.toggle .line3 { 
  transform: rotate(45deg) translate(-5px, -6px); 
}
	
	</style>
	 -->
<!-- <script type="text/javascript"> 
const burger = document.querySelector(".burger"); 
const nav = document.querySelector(".nav-links"); 
const navlinks = document.querySelectorAll(".nav-links li");

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
</script>-->

</head>
<body>
	
	<header id="guide_header">
		<nav>
			<div class="logo">
				<h1>
					<a href="#"> Travel<span style="color: red; font-size: 35px;">ers</span></a>
				</h1>

			</div>
			<ul class="nav-links">
				<li><a href="#">여행지</a></li>
				<li><a href="#">카테고리</a></li>
				<li><a href="#">게시판</a></li>
				<li><a href="#">로그인</a></li>
			</ul>
			<div class="burger">
				<div class="line1"></div>
				<div class="line2"></div>
				<div class="line3"></div>
			</div>
		</nav>
	</header>
	<script src="<%=request.getContextPath()%>/resources/js/header.js"
		charset="UTF-8"></script>



</body>
</html>