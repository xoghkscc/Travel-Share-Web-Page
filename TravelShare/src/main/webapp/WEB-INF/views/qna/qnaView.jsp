<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>�Խù� ��ȸ</title>
</head>
<body>
		
	<label>����</label>
	${qna_view.title } <br>
	
	<label>�ۼ���</label>
	${qna_view.writer } <br>
	
	<label>����</label>
	${qna_view.content } <br>
	
	<div>
		<a href="./qnaModify?qno=${qna_view.qno }">�Խù� ����</a>
		<a href="./qnaDelete?qno=${qna_view.qno }">�Խù� ����</a>
	</div>
</body>
</html>