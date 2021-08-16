<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/header/header.css">
	<header id="guide_header">
		<nav>
			<div class="logo">
				<h1>
					<a href="../site/index"> Travel<span style="color: red; font-size: 35px;">ers</span></a>
				</h1>

			</div>
			<ul class="nav-links">
				<li><a href="#">여행지</a></li>
				<li><a href="#">QnA</a></li>
				<li><a href="../board/mainBoard">게시판</a></li>
				<li><a href="../site/login">로그인</a></li>
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

