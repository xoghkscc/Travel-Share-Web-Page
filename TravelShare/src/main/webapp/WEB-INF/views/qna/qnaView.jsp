<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 조회</title>
</head>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/main_board.css">
	
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
<body>


		  
<!-- 	<label>글번호</label> -->
	<div class="qna_view_qno">${QnaViewModel.qno }</div>

	<div id="board_clickPan">
		<div onclick="imgClickRollback()" class="x_box">
			<span class="material-icons-outlined "> close </span>
		</div>
		<div id="board_detailContent">
			<div class="board_detailPan">
				<div class="board_left_pan">
					<div>
						<label style="font-size: 30px;">${QnaViewModel.title }</label>
					</div>
					<hr style="color: black; width: 100%; margin-bottom: 50px;">
					<div id="board_main_content" class="board_main_content">
						${QnaViewModel.content }
					</div>
					<div class="board_comment">
						<div id="board_comment_tit" class="board_comment_tit">
							<p>한줄댓글</p>
						</div>
						<div class="board_comment_write">
							<form action="#" id="board_commentId">
								<input type="text" id="board_commnet" name="board_commnet"
									placeholder="한 줄 댓글을 남겨주세요." autocomplete="off"> <input type="hidden"
									id="user_id" name="user_id" value="${id }"> <input
									type="submit" name="board_commnet_submit" value="댓글남기기">
							</form>
						</div>
						<div id="board_comment_show" class="board_comment_show"></div>
					</div>
				</div>


				<div class="board_right_pan">
					<div id="board_user_info" class="board_user_info">
						<img id="board_mainimg"
							src="<%=request.getContextPath()%>${QnaViewModel.user_imgurl }"
							alt="">
					</div>
					<div id="board_user_name" class="board_user_name">${QnaViewModel.user_nickName }</div>

					<div id="board_content_id" class="board_content_id"></div>
					<div id="board_title" class="board_title"></div>
					<div class="board_sub_info">
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined">visibility</span>
								<div>조회수</div>
							</div>
							<div id="board_bestplace">${QnaViewModel.viewcnt }</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined">event</span>
								<div>작성날짜</div>
							</div>
							<div id="board_besteat">${QnaViewModel.regdate }</div>
						</div>
					</div>

					<div class="board_travelPlans">
						<div id="singo" class="singo" >
							<span class="material-icons singo_img"> lightbulb </span> <span
								class="board_singo">신고하기</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script src="<%=request.getContextPath()%>/resources/js/qna_view.js?ver=1.13"></script>
</body>
</html>