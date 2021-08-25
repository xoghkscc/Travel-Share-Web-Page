<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>아이디 찾기</title>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/id_search_find.css">
</head>
<body>
	<jsp:include page="../header/top.jsp"></jsp:include>
	<form id="id_search" action="./idSearch" method="POST" autocomplete='off'></form>
		<div class="id_search_box">
		<div>
			<div id="id_search1">아이디 찾기</div>
				<div class="name_text" id="name_text">
					${email } ${text }
				</div>
			</div>
			<div id="password_search">
				<a href="./passwordsearch">비밀번호찾기</a> / <a href="../site/login">로그인하기</a>
			</div>
		</div>
	</div>
	<script>
      $('.id_search_box').css('border','3px solid skyblue');
      $('.id_search_box').css('width','350px');
      $('.id_search_box').css('height','300px');
      $('.id_search_box').css('margin','auto');
  </script>
</body>
</html>