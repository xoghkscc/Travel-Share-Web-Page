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
	${view.title } <br>
	
	<label>�ۼ���</label>
	${view.writer } <br>
	
	<label>����</label>
	${view.content } <br>
	
	<div>
		<a href="/qna/modify?qno=${view.qno }">�Խù� ����</a>
		<a href="/qna/delete?qno=${view.qno }">�Խù� ����</a>
	</div>
</body>
</html>