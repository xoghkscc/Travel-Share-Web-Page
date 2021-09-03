<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/header/header.css">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/header/headerAlram.css">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/header/headerLogin.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<header id="guide_header">
	<nav>
		<div class="logo">
				<b><a class="guide_link" href="../site/index"> Travel<span
					style="color: orangered; font-size: 35px;">ers</span></a></b>

		</div>
		<ul class="nav-links">
			<li><a class="guide_link" href="../board/mainBoard">여행지</a></li>
			<li><a class="guide_link" href="../qna/qnaList">QNA</a></li>
			<li><a class="guide_link" href="../notice/main">공지사항</a></li>
			<c:choose>
				<c:when test="${empty sessionScope.loginCheck}">
					<li><a class="guide_link" href="../site/login">로그인</a></li>
				</c:when>
				<c:when test="${sessionScope.manager eq 'member'}">
					<li id="popupmenu-item">
						<ul class="popupmenu-menu">
							<li><a href="../membership/userinfo">회원정보</a></li>
							<li><a href="../logoutProcess">로그아웃</li>
						</ul> <a class="guide_link">${sessionScope.name}님</a>
					</li>
					<div>
						<div id="haeder_alram" class="haeder_alram">
							<div class="alramImg">
								<li><a class="guide_link"><span
										id="alramClick" class="material-icons-outlined">notifications</span></a></li>
							</div>
							<div id="alramCount">
								<!-- 									<div class="alramcontent"></div> -->
							</div>
							<!-- 									<div id="alramContentText" class="alramContentText"> -->
							<!-- 										<div><img class="alramImg" src="/travelShare/resources/files/board_img/b79453b5-7e61-48bb-99c8-622cb5fba539.jpg" alt="" />  -->
							<!-- 											<div class="alramText">게시글에 답글이 달림 -->
							<!-- 											<div class="alramTime">1시간전</div> -->
							<!-- 											</div> -->
							<!-- 										</div> -->
							<!-- 									</div> -->
						</div>
					</div>

				</c:when>
				<c:otherwise>
					<li id="popupmenu-item">
						<ul class="popupmenu-menu">
							<li><a href="/travelShare/site/admin">관리자정보</a></li>
							<li><a href="../membership/userinfo">회원정보</a></li>
							<li><a href="../logoutProcess">로그아웃</li>
						</ul> <a class="guide_link">${sessionScope.name }님</a>
					</li>
					<div>
						<div id="haeder_alram" class="haeder_alram">
							<div class="alramImg">
								<li><a class="guide_link"><span
										id="alramClick" class="material-icons-outlined">notifications</span></a></li>
							</div>
							<div id="alramCount">
								<!-- 									<div class="alramcontent"></div> -->
							</div>
							<!-- 									<div id="alramContentText" class="alramContentText"> -->
							<!-- 										<div><img class="alramImg" src="/travelShare/resources/files/board_img/b79453b5-7e61-48bb-99c8-622cb5fba539.jpg" alt="" />  -->
							<!-- 											<div class="alramText">게시글에 답글이 달림 -->
							<!-- 											<div class="alramTime">1시간전</div> -->
							<!-- 											</div> -->
							<!-- 										</div> -->
							<!-- 									</div> -->
						</div>
					</div>
				</c:otherwise>
			</c:choose>
		</ul>
		<div id="burger" class="burger">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
		</div>
	</nav>
</header>
<script src="<%=request.getContextPath()%>/resources/js/header.js"
	charset="UTF-8"></script>
<script src="<%=request.getContextPath()%>/resources/js/headerAlram.js"
	charset="UTF-8"></script>

