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
	href="<%=request.getContextPath()%>/resources/css/membership/id_search.css">
</head>
<body>
	<jsp:include page="../header/top.jsp"></jsp:include>
	<form id="id_search" action="./membership" method="POST" autocomplete='off'></form>
	<div class="id_search_box">
		<div>
			<div id="id_search1">아이디 찾기</div>

			<div id="red">
				<div class="name_text">
					<b> 이름</b><input
						type="text" class="info">
				</div>
				<div class="phone_text">
					<b>전화번호</b>&nbsp;&nbsp;<input type="text" class="info"
						id="phone_text1" maxlength="11">
				</div>
			</div>
			<div id="password_search">
				<span><a href="./passwordsearch"><b>비밀번호찾기<b></a></span> <span
					id="submit"><input id="idsearch_sub" type="submit"
					value="아이디 찾기"></span>
			</div>

		</div>
	</div>


	<script>
      $('.id_search_box').css('border','3px solid skyblue');
      $('.id_search_box').css('width','400px');
      $('.id_search_box').css('height','300px');
      $('.id_search_box').css('margin','auto');
  </script>
	<script
		src="<%=request.getContextPath()%>/resources/membershipJS/id_search.js"></script>
</body>
</html>