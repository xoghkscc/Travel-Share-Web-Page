<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>�Խù� ����</title>
</head>
<body>
	<form method="post">
		<label>����</label>
		<input type="text" name="title" /><br />
		
		<label>�ۼ���</label>
		<input type="text" name="title" /><br />
		
		<label>����</label>
		<textarea rows="5" cols="50" name="content">${view.content }</textarea><br />
		
		<button type="submit">�Ϸ�</button>
	</form>
</body>
</html>