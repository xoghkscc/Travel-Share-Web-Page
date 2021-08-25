<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>게시물 조회</title>
</head>
<body>
	<label>제목</label>
	${view.title } <br>
	
	<label>작성자</label>
	${view.writer } <br>
	
	<label>내용</label>
	${view.content } <br>
	
	<div>
		<a href="/qna/modify?qno=${view.qno }">게시물 수정</a>
		<a href="/qna/delete?qno=${view.qno }">게시물 삭제</a>
	</div>
</body>
</html>