<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호 찾기</title>
<head>
<meta charset="UTF-8">
<title>아이디 찾기</title>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/passwordChange.css">
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="loing_container" style="width: 100%; height: 100vh"></div>
	<form id="password_change" action="./passwordchange" method="POST" autocomplete='off'></form>
	<div class="password_change_box">
		<div>
			<div id="Password_change">비밀번호 찾기</div>
		
				<div id="input_password">
					 <input type="password" form="password_change" placeholder="새로운 비빌번호" id="password_change_input" name="user_password">
				</div>
					<div id=password_warning></div>
				<div id="password_check">
					<input type="password" placeholder="비빌번호 확인" id="password_check_input">
				</div>
					<div id=password_check_warning></div>	
				</div>
			
			<div id="id_search">
				<input type="submit" form="password_change" id="passwordchange_sub" value="비밀번호 변경하기">
			</div>
	</div>
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	<script>
      $('.password_change_box').css('border','1px solid black');
      $('.password_change_box').css('width','360px');
      $('.password_change_box').css('height','380px');
      $('.password_change_box').css('margin','auto');
  </script>
  	<script
		src="<%=request.getContextPath()%>/resources/membershipJS/passwordChange.js"></script>
</html>