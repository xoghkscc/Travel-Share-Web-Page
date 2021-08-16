<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
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
	<jsp:include page="../header/top.jsp"></jsp:include>
	<div class="password_search_box">
		<div>
			<div id="password_search1">비밀번호 찾기</div>

			<div id="red">
				<div class="id_text">
					<b>아이디</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"
						class="info">
				</div>
				<div class="phone_text">
					<b>전화번호</b>&nbsp;&nbsp;<input type="text" class="info"
						id="phone_text1" maxlength="11">
				</div>
			</div>
			<div id="password_search">
				<span><a href="./idsearch"><b>아이디 찾기<b></a></span> <span
					id="submit"><input id="passwordsearch_sub" type="submit"
					value="비밀번호 찾기"></span>
			</div>

		</div>
	</div>


	<script>
      $('.password_search_box').css('border','3px solid skyblue');
      $('.password_search_box').css('width','400px');
      $('.password_search_box').css('height','300px');
      $('.password_search_box').css('margin','auto');
  </script>
	<script
		src="<%=request.getContextPath()%>/resources/membershipJS/passwordsearch.js"></script>
</body>
</html>