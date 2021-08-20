<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>게시물 목록</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/qna_list.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>

<body class="qna_guide">
<jsp:include page="../header/top.jsp"></jsp:include>
	<h2>QNA 게시판</h2>
    <hr>
    <div>
      <select class="search_op">
        <option class="content">제목</option>
        <option class="title_content">내용</option>
        <option class="title_content">닉네임</option>
        <input class="search_text" type="text">
        <button type="button" class="search_btn btn btn-info">검색</button>
      </select>
     </div> 
  
  <div class="qna_table">
    <table class="qna table table-hover">
        <thead class=qna_head>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
        	  
        	<c:forEach items="${qna_list }" var="list">
		          <tr>
		           	<td>${list.qno}</td>
		           	<td>
		           		<a href="/qna/view?qno=${list.qno }">${list.title }</a>
		           	</td>
		           	<td>${list.writer }</td>
		           	<td>${list.regdate }</td>
		           	<td>${list.viewcnt }</td>
		          </tr>
          	</c:forEach>
          	<tr>
            <td>3</td>
            <td>안녕하세요</td>
            <td>john</td>
            <td>08-17</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      </div>
      	<a class="write_btn btn btn-default" href="./qna_write">글쓰기</a>
	
		<div>
			<c:if test="${page.prev }">
				<span>[ <a href="/qna/listPage?num=${page.startPageNum -1 }">이전</a>]</span>
			</c:if>
			
			<c:forEach begin="${page.startPageNum }" end="${page.endPageNum }" var="num">
				<span>
					<c:if test="${select != num }">
					<a href="/qna/listPage?num=${num }"></a>
					</c:if>
					
					<c:if test="${select == num }">
					<b>${num }</b>
					</c:if>
				</span>
			</c:forEach>
			
			<c:if test="${page.next }">
				<span>[<a href="/qna/listPage?num=${page.endPageNum + 1 }">다음</a>]</span>
			</c:if>
		</div>
		
	
      
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</body>
</html>