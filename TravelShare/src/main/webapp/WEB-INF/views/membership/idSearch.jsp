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
	<form id="id_search" action="./idSearch" method="POST" autocomplete='off'></form>
	<div class="id_search_box">
		<div id="basic">
			<div id="id_search1">아이디 찾기</div>
				<div class="name_text" id="name_text">
					<input type="text" class="info" placeholder="이름" name="user_name" form="id_search" id="user_name">
				</div>
				<div class="phone_text" id="phone_text">
					<input type="text" name="user_phonenumber" placeholder="전화번호" form="id_search" class="info"
						id="user_phone" maxlength="11">
						<button id="check_button">인증하기</button>
				</div>
				<div class="phone_text">
					<input type="text" class="info" placeholder="인증번호 4자리입력"  id="phone_check" maxlength="4">
					<input type="hidden" id="checkNum">	
				</div>
				<div id="phone_warning"></div>				
			</div>
			<div id="password_search">
				<input id="idsearch_sub" form="id_search" type="submit" value="아이디 찾기"></span>
			</div>
            <div>
                <a href="./passwordsearch">비밀번호찾기</a>
            </div>
	</div>
	<script>
      $('.id_search_box').css('border','1px solid black');
      $('.id_search_box').css('width','350px');
      $('.id_search_box').css('height','430px');
      $('.id_search_box').css('margin','auto');
  	</script>
	<script
		src="<%=request.getContextPath()%>/resources/membershipJS/id_search.js"></script>
</body>
</html>