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
	${qna_view.title } <br>
	
	<label>작성자</label>
	${qna_view.writer } <br>
	
	<label>내용</label>
	${qna_view.content } <br>
	
	<div>
		<a href="./qnaModify?qno=${qna_view.qno }">게시물 수정</a>
		<a href="./qnaDelete?qno=${qna_view.qno }">게시물 삭제</a>
	</div>
</body>
</html>