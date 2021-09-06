<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 목록</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/notice_list.css?ver=1.45">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone|Material+Icons+Sharp|Material+Icons+Outlined" rel="stylesheet">
</head>

<body>
	<jsp:include page="../header/top.jsp"></jsp:include>
		<div class="notice_background"></div>
	  	<div class="notice_container">
	  		<div>공지사항 게시판</div>

		    <table id="notice_table" class="table table-hover">
		        <thead class=qna_head>
		          <tr>
		            <th class="text-center">번호</th>
		            <th class="text-center">작성자</th>
		            <th class="text-center">제목</th>
		            <th class="text-center">날짜</th>
		            <th class="text-center">조회수</th>
		          </tr>
		        </thead>
		        <tbody class="notice_tbody"></tbody>
	        </table>
	        <div class="notice_bottomBox">
			    <div class="notice_paging"></div>	
			    <div>
					<input type="text" class="notice_searchText" placeholder="제목을 검색하세요."/>
					<button class="notice_searchBtn" type="submit">검색</button>
				</div>
	        </div>
	  	</div>

	<div class="notice_Popup">  
		<div class="notice_cancel">
			   <span class="material-icons-outlined "> close </span>
		</div>
		<div id="board_main">
			<div class="notice_tit">
				<div class="notice_tit_pan">
					<h1>공지사항 게시판</h1>
					<div class="sub">공지사항은 관리자만이 글쓰기를 할 수 있습니다.</div>
				</div>
				<div class="notice_content">
					<div class="notice_color">제목</div>
					<div class="notice_title_text notice_PopupTitle"></div>
					<div class="notice_color">작성자</div>
					<div class="notice_title_text notice_PopupId"></div>
					<div class="notice_color">작성일</div>
					<div class="notice_title_text notice_title_last">
						<div class="notice_PopupDate"></div>
						<div class="notice_color">조회수</div>
						<div class="notice_cntContent notice_PopupCnt"></div>
					</div>
				</div>
				<div class="notice_mainContent notice_PopupText"></div>

			</div>
		</div>
	</div>
		  <jsp:include page="../footer/footer.jsp"></jsp:include>
      	<script src="<%=request.getContextPath()%>/resources/js/notice_app.js?ver=1.46"></script>
<!--       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script> -->
</body>
</html>