<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>회원 정보</title>
<script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/user_info.css">
</head>
<body>
	<jsp:include page="../header/top.jsp"></jsp:include>
	<div id="info_main">
		<div id="profile">
			<div>
				Travelers 프로필<i class="fas fa-angle-down" onclick=toggleMute()></i>
			</div>
			<div>
				<a href="./profile_modify"><i id="user_img"
					class="far fa-user-circle"></i></a> <span id="nickname">닉네임: </span>
			</div>
			<div>
				<a href="./profile_modify"><button id="profile_modify">수정</button></a>
			</div>
		</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
</body>
</html>