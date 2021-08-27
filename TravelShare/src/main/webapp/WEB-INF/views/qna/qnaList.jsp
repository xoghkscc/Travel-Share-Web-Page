<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>게시물 목록</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/qna_list2.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone|Material+Icons+Sharp|Material+Icons+Outlined" rel="stylesheet">
</head>

<body class="qna_guide">
<jsp:include page="../header/top.jsp"></jsp:include>
	
	<div class="qna_container">
		<div>QNA 게시판</div>
		<div>
			<input type="text" class="qna_searchText" placeholder="제목을 검색하세요."/>
			<button class="qna_searchBtn" type="submit">검색</button>
		</div>
		    <table id="qnaTable" class="table table-hover">
		        <thead class=qna_head>
		          <tr>
		            <th class="text-center">번호</th>
		            <th class="text-center">제목</th>
		            <th class="text-center">작성자</th>
		            <th class="text-center">작성일</th>
		            <th class="text-center">조회수</th>
		          </tr>
		        </thead>
		        <tbody class="qna_tbody">
		        	  
		        	<c:forEach items="${qna_list }" var="list">
				          <tr>
				           	<td>${list.qno}</td>
				           	<td>
				           		<a href="./qnaView?qno=${list.qno }">${list.title }</a>
				           	</td>
				           	<td>${list.writer }</td>
				           	<td>${list.regdate }</td>
				           	<td>${list.viewcnt }</td>
				          </tr>
		          	</c:forEach>
		          	
		        </tbody>
		      </table>
		      	<a class="write_btn btn btn-default" href="./qnaWrite">글쓰기</a>
      	</div>
      	<div class="qna_Popup">
		   <div class="qna_cancel">
			   <span class="material-icons-outlined "> close </span>
		   </div>
		   <div class="qna_textContainer">
		       <div>공지사항 게시판</div>
		       <div class="qna_PopupTitle">제목~~~</div>
		       <hr>
		       <div class="qna_PopupTop">
		           <div class="qna_PopupImg">user_img</div>
		           <div>
		               <div class="qna_PopupId">user_id</div>
<!-- 		               <hr> -->
		               <div class="qna_PopupDate">date</div>
		           </div>
		           <div class="qna_cntBoard">
			           <span class="material-icons-outlined">
							visibility
					   </span>
			           <span class="qna_PopupCnt">viewcnt</span>
		           </div>
		       </div>
		       <hr>
		       <div class="qna_PopupText"></div>
		  	</div>
		  </div>
      	<script src="<%=request.getContextPath()%>/resources/js/notice_app.js?ver=1.23"></script>
      	     
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</body>
</html>