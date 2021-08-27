<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보</title>
<script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/user_info.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Sharp%7CMaterial+Icons+Outlined" rel="stylesheet">
</head>

<body>
	
	<jsp:include page="../header/top.jsp"></jsp:include>
	<div id="main">
		
		<div id="user_info">
			<div>
		
				<img src="./img.jfif" id="user_img">
			</div>
			<div class="user_name">
				<div id="user_name"><strong id="name">이름</strong> | <span style="color: rgb(255, 109, 0);">0</span>명 찜한사람</div>
				<div id="user_zim">
					아직 찜당한 계시글이 없습니다.
					 [글쓰러가기]</div>
			</div>
			<div id="user_profile">
				<a href="./membership"><button id="user_button">
					프로필설정></button></a>
			</div>
		</div>

		<div id="board_name">
			<div id="my_travel">My Travel</div>
			<div id="my_zim">My Zim</div>
		</div>

	</div>
	
</body>
</html>