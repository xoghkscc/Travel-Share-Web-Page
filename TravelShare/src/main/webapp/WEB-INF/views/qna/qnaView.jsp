<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>게시물 조회</title>
</head>
<body>
	
	<div class="qna_Popup">
		   <div class="qna_cancel">
			   <span class="material-icons-outlined "> close </span>
		   </div>
		   <div class="qna_textContainer">
		       <div>공지사항 게시판</div>
		       <div class="qna_PopupTitle">제목~~~</div>
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