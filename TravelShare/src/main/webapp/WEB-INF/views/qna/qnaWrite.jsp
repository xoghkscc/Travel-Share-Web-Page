<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>QNA 작성</title>
</head>
<body>
<form action="../qna/qnaWrite" method="post">
	<label>제목</label>
	<input type="text" name="title" /><br />
	
	<label>작성자</label>
	<input type="text" name="writer" /><br />
	
	<label>내용</label>
	<textarea rows="5" cols="50" name="content"></textarea>
	
	<button type="submit">작성</button>
</form>
</body>
</html>