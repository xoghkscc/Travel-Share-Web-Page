<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호 찾기</title>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/password_search.css">
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="loing_container">
	<form id="password_search" action="./passwordsearch" method="POST" autocomplete='off'></form>
	<div class="password_search_box">
		<div>
			<div id="password_search1">비밀번호 찾기</div>
				<div class="email_text" id="email_text">
					<input type="text" class="info" name="user_email" placeholder="아이디" form="password_search" id="user_email">
				</div>
				<div class="phone_text" id="phone_text">
					<input type="text" name="user_phonenumber" placeholder="핸드폰 번호" form="password_search" class="info"
						id="user_phone" maxlength="11">
						<button id="check_button">인증하기</button>
				</div>
				<div class="phone_text" id="check_num">
					<input type="text" class="info" placeholder="인증번호 4자리 입력"  id="phone_check" maxlength="4">
					<input type="hidden" id="checkNum">	
				</div>
				<div id="phone_warning"></div>				
			</div>
			<div id="id_search">
				<input id="password_sub" form="password_search" type="submit" value="비밀번호찾기">
			</div>
			<div>
				<a href="./idsearch" id="id_search">아이디 찾기</a>
			</div>
		</div>
	</div>
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	<script>
      $('.password_search_box').css('border','1px solid black');
      $('.password_search_box').css('width','350px');
      $('.password_search_box').css('height','400px');
      $('.password_search_box').css('margin','auto');
  </script>
	<script
		src="<%=request.getContextPath()%>/resources/membershipJS/passwordsearch.js"></script>
</body>
</html>