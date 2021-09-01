<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
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
		        		<c:if test="${list.cs_open eq 'N' }">
		        		<c:choose>	
		        			<c:when test="${list.user_id eq sessionScope.id || (sessionScope.manager ne 'member' && not empty sessionScope.id) }">
				         	 <tr>
				           		<td>${list.qno}</td>
				           		<td>
				           			<a href="./qnaView?qno=${list.qno }">${list.title }</a>
				           		</td>
				           		<td>${list.writer }</td>
				           		<td>${list.regdate }</td>
				           		<td>${list.viewcnt }</td>
				          	</tr>
				          	</c:when>
				          	<c:otherwise>
				          		<tr>
				           		<td>${list.qno}</td>
				           		<td>
				           		<span class="material-icons-outlined" style="font-size: 20px;">lock</span>
				           		비밀글은 작성자와 관리자만 볼 수 있습니다.</td>
				           		<td>${list.writer }</td>
				           		<td>${list.regdate }</td>
				           		<td>${list.viewcnt }</td>
				          	</tr>
				          	</c:otherwise>
				          </c:choose>
				        </c:if>
				        <c:if test="${list.cs_open eq 'Y' }">
				        	<tr>
				           		<td>${list.qno}</td>
				           		<td>
				           			<a href="./qnaView?qno=${list.qno }">${list.title }</a>
				           		</td>
				           		<td>${list.writer }</td>
				           		<td>${list.regdate }</td>
				           		<td>${list.viewcnt }</td>
				          	</tr>
				        </c:if>
		          	</c:forEach>
		          	
		        </tbody>
		      </table>
		      <div class="qna_bottomBox">
			    <div class="qna_paging"></div>	
			    <div>
					<input type="text" class="qna_searchText" placeholder="제목을 검색하세요."/>
					<button class="qna_searchBtn" type="submit">검색</button>
				</div>
	        </div>
		      <c:if test="${not empty sessionScope.id }">
		      	<a class="write_btn btn btn-default" href="./qnaWrite">
		      	<span class="material-icons-outlined" style="font-size: 16px;">edit</span>글쓰기</a>
      		 </c:if>
      		</div>
		  <jsp:include page="../footer/footer.jsp"></jsp:include>
       <!--  	<script src="<%=request.getContextPath()%>/resources/js/qna_paging.js?ver=1.23"></script> -->
          
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</body>
</html>