<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>�Խù� ��ȸ</title>
</head>
<body>
	
	<div class="qna_Popup">
		   <div class="qna_cancel">
			   <span class="material-icons-outlined "> close </span>
		   </div>
		   <div class="qna_textContainer">
		       <div>�������� �Խ���</div>
		       <div class="qna_PopupTitle">����~~~</div>
		       <hr>
		       <div class="qna_PopupTop">
		           <div class="qna_PopupImg">user_img</div>
		           <div>
		               <div class="qna_PopupId">user_id</div>
<!-- 		               <hr> -->
		               <div class="qna_PopupDate">date</div>
		           </div>
		           <div class="qna_cntBoard">
			           <span class="material-icons-outlined">
							visibility
					   </span>
			           <span class="qna_PopupCnt">viewcnt</span>
		           </div>
		       </div>
		       <hr>
		       <div class="qna_PopupText"></div>
		  	</div>
		  </div>
      	<script src="<%=request.getContextPath()%>/resources/js/notice_app.js?ver=1.23"></script>
	

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