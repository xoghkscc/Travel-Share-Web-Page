<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 조회</title>
</head>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/qna_view.css">

<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	
	<div class="qna_view_qno">${QnaViewModel.qno }</div>
	<div class="qna_user_position">${QnaViewModel.user_position }</div>
	
	<div id="board_main">
		<div class="qna_tit">
			<div class="qna_tit_pan">
				<h1>Q&A</h1>
				<div class="sub">Travelers의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</div>
			</div>
			<div class="qna_content">
				<div class="qna_color">제목</div>
				<div class="qna_title_text">${QnaViewModel.title}</div>
				<div class="qna_color">작성자</div>
				<div class="qna_title_text">${QnaViewModel.writer}</div>
				<div class="qna_color">작성일</div>
				<div class="qna_title_text qna_title_last">
					<div>${QnaViewModel.regdate}</div>
					<div class="qna_color qna_cnt">조회수</div>
					<div class="qna_cntContent">${QnaViewModel.viewcnt}</div>
				</div>
			</div>
			<div class="qna_mainContent">${QnaViewModel.content}</div>

			<div class="qna_button_pan">
				<div></div>
				<div class="qna_button">
					<button id="qna_button_modify">수정</button>
					<button id="qna_button_delete">삭제</button>
				</div>
			</div>

			<div class="board_comment_write">
				<form action="#" id="board_commentId">
					<input type="text" id="board_commnet" name="board_commnet"
						placeholder="한 줄 댓글을 남겨주세요." autocomplete="off"> <input
						type="hidden" id="user_id" name="user_id" value="${id }">
					<input type="submit" name="board_commnet_submit" value="댓글남기기">
				</form>
			</div>

			<div id="board_comment_show" class="board_comment_show">
				<!--                 <div class="board_comment_see">  -->
				<!--                     <div class="board_comment_see_img"> -->
				<%--                     <img src="<%=request.getContextPath() %>${QnaViewModel.user_imgurl}" alt=""> --%>
				<!--                     </div> -->
				<!--                 <div class="board_comment_see_text"> -->
				<!--                     <div> -->
				<!--                         <strong>닉네임</strong> <span class="board_comment_see_text_date">2021.08.12</span>  -->
				<!--                     </div> -->
				<!--                     <div> -->

				<!--                     </div> -->
				<!--                 </div> -->
				<!--             </div> -->
				<!--             <hr style="color: black; width: 900px; margin-bottom: 50px;"> -->
			</div>
		</div>
	</div>
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	<script
		src="<%=request.getContextPath()%>/resources/js/qna_view.js"></script>
</body>
</html>