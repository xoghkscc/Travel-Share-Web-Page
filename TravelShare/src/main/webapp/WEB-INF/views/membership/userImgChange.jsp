<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>프로필 변경</title>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/userImgChange.css">
<link
	href="https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Sharp%7CMaterial+Icons+Outlined"
	rel="stylesheet">
</head>
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="loing_container" style="width: 100%; height: 100vh"></div>
	<form id="profile_change" enctype="multipart/form-data" action="./profileChange" method="POST" autocomplete='off'></form>
		<div class="profile_change_box">
		<div id="basic">
			<div id="profile_change1">프로필 바꾸기</div>
					<img src="<%=request.getContextPath()%>${user_img2 }" id="output">
					<div id="file_input">
							<input type="file" id="user_img" form="profile_change" accept="image/*" name="userImgurl" onchange="fileCheck(this, event)"  required />
					</div>			
		
			<div id="file_change">
				<input id="profile_sub" form="profile_change" type="submit" value="프로필 바꾸기">
			</div>
		</div>
	</div>
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	<script>
      $('.profile_change_box').css('border','1px solid black');
      $('.profile_change_box').css('width','350px');
      $('.profile_change_box').css('height','430px');
      $('.profile_change_box').css('margin','auto');
  	</script>
  	
  	<script src="<%=request.getContextPath() %>/resources/membershipJS/userImgChange.js" charset="UTF-8"></script>
  	
</body>
</html>