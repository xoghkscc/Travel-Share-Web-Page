<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>QNA �ۼ�</title>
</head>
<body>
<form action="../qna/qnaWrite" method="post">
	<label>����</label>
	<input type="text" name="title" /><br />
	
	<label>�ۼ���</label>
	<input type="text" name="writer" /><br />
	
	<label>����</label>
	<textarea rows="5" cols="50" name="content"></textarea>
	
	<button type="submit">�ۼ�</button>
</form>
</body>
</html>