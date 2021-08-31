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
	<div class="loing_container" style="width: 100%; height: 100vh"></div>
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
		  <jsp:include page="../footer/footer.jsp"></jsp:include>
<%--       	<script src="<%=request.getContextPath()%>/resources/js/notice_app.js?ver=1.23"></script> --%>
      	     
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</body>
</html>