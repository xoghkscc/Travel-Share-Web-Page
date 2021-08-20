<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>네이버 로그인</title>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/login_start.css?ver=1.7">
</head>
<body>
	<jsp:include page="../header/top.jsp"></jsp:include>
	<!-- 네이버아이디로로그인 버튼 노출 영역 -->
	<form id="login" action="../login" method="POST" autocomplete='off'></form>
	<div class="loginBox">
		<div id="basic_login">
			<div>
				Travel<span style="color: orangered;">ers</span>
			</div>
			<div>
				<div class="login_text">
					이메일<input form="login" name="user_email"  type="text">
				</div>
			</div>
			<div>
				<div class="login_text">
					비밀번호<input form="login" name="user_password" type="text">
				</div>
			</div>
		</div>
		<div id="login_loginbtn"><input type="submit" form="login" value="로그인"></div>
		<div id="naver_id_login"></div>
		<div class="login_find">
			<div>
				<a href="../membership/idsearch"> 아이디찾기 </a>
			</div>
			<div>
				<a href="../membership/passwordsearch"> 비밀번호찾기 </a>
			</div>
		</div>
	</div>
	<div class="login_backgroundImg"></div>

	<script>
      $('.loginBox').css('border','3px solid skyblue');
      $('.loginBox').css('width','350px');
      $('.loginBox').css('height','300px');
      $('.loginBox').css('margin','auto');
  </script>

	<!-- //네이버아이디로로그인 버튼 노출 영역 -->
	<script type="text/javascript">
  	var naver_id_login = new naver_id_login("9P_2H_B7Lveve_S05JNP", "http://localhost:8080/project/site/callback");
  	var state = naver_id_login.getUniqState();
  	naver_id_login.setButton("white", 3,50);
  	naver_id_login.setDomain("YOUR_SERVICE_URL");
  	naver_id_login.setState(state);
  	naver_id_login.setPopup();
  	naver_id_login.init_naver_id_login();

      //
    // https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=9P_2H_B7Lveve_S05JNP&client_secret=39z4tUOQVk&access_token=AAAANgh82T2oDKPedK_24pXBwzgbGvtALWDreSkyWNOlg7dMhsYUVxexsVhx5GbVjPxCkHNLAd7AZ-6NBsEFnwKv3X8&service_provider=NAVER
  </script>
</html>