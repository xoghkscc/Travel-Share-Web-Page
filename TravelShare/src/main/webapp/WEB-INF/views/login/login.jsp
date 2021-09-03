<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html lang="UTF-8">
<head>
<meta charset="utf-8">
<title>로그인</title>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/login_start.css?ver=1.7">
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<!-- 네이버아이디로로그인 버튼 노출 영역 -->
	<form id="login" action="../login" method="POST" autocomplete='off'></form>
	<div class="loing_container">
	<div class="loginBox">
		<div id="basic_login">
			<div id="login_text">
				로그인
			</div>
				<div class="login_info" id="email_info">
					<input form="login" name="user_email" placeholder="이메일주소" id="user_email"  type="text">
				</div>

				<div class="login_info" id="password_info">
					<input form="login" name="user_password" placeholder="비밀번호" id="user_password" type="password">
				</div>
				<div id="login_warning"></div>
		</div>
		<div id="button"><button form="login" id="login_loginbtn" value="로그인"> 로그인 </button></div>
	
			<div id="search_box">
				<a href="../membership/idsearch" class="search_text" id="id_search"> 아이디 찾기 </a> / <a href="../membership/passwordsearch" class="search_text" id="password_search"> 비밀번호 찾기 </a>
            </div>
			<div id="membership">
				<a href="../membership/membership" id="membership_text"> 회원 가입 </a>
			</div>

	</div>
	</div>
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	
	<script src="<%=request.getContextPath() %>/resources/loginJS/login.js" charset="UTF-8"></script>
	<script>
	  $('.loginBox').css('border','1px solid black');
      $('.loginBox').css('width','350px');
      $('.loginBox').css('height','380px');
      $('.loginBox').css('margin','auto');
 	</script>
</html>