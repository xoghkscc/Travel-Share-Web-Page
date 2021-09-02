<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보</title>
<script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/membership/user_info.css">
<link
	href="https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Sharp%7CMaterial+Icons+Outlined"
	rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/main_board.css">
</head>

<body>

	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="loing_container">
	<div id="main">

		<div id="user_info">
			<div id="user_img_div">
				<img src="<%=request.getContextPath()%>${user_img }" id="user_img">
			</div>
			<div class="user_name">
				<div id="user_name">
					<strong id="name">${user_name } </strong> | <span
						style="color: rgb(255, 109, 0);">${user_like }</span>명 찜한사람
				</div>
				<div id="user_zim"><a href="./userImgChange">[프로필 사진 바꾸기]</a> </div>
			</div>
			<div id="user_profile">
				<a href="./membershipChange"><button id="user_button">프로필설정></button></a>
				
			</div>
		</div>

		<div id="board_name">
			<div id="my_travel"><a href="./userinfo">나의 여행</a></div>
			<div id="my_zim"><a href="./userinfoLike">나의 찜</a></div>
		</div>
		
		<div id="board_main">
		<div class="board_list_travel">
			<c:forEach items="${boardDB }" var="board" begin="0" end="11">
				<div class="board_content" id="board_content">
					<div class="board_imgContent">
						<img class="${board.board_id }"
							onclick='imgClick(${board.board_id}, ${board.user_id})' alt=""
							src="${board.board_mainimg }"> <img alt=""
							src="<%=request.getContextPath()%>/resources/files/null.jpg">
					</div>
					<div class="board_textContent">
						<div class="board_text1">${board.user_nickname }</div>
						<div class="board_textTit">${board.board_title }</div>
					</div>
					<div class="board_option">
						<div class="board_areaPan">
							<span class="material-icons-outlined board_area_img">
								location_on </span>
							<div class="board_area">${board.sigungu }</div>
						</div>
							<c:choose>
								<c:when test="${board.like_cnt>=5 &&  board.like_cnt<10}">
									<div class="board_likePan board_middle">
										<span class="material-icons-outlined board_like_img">
											favorite </span>
										<div id="${board.board_id}" class="like">${board.like_cnt}명</div>
									</div>
								</c:when>
								<c:when test="${board.like_cnt>=10 }">
									<div class="board_likePan board_top">
										<span class="material-icons-outlined board_like_img">
											favorite </span>
										<div id="${board.board_id}" class="like">${board.like_cnt}명</div>
									</div>
								</c:when>
								<c:otherwise>
									<div class="board_likePan">
										<span class="material-icons-outlined board_like_img">
											favorite </span>
										<div id="${board.board_id}" class="like">${board.like_cnt}명</div>
									</div>
								</c:otherwise>
							</c:choose>
						</div>
				</div>
			</c:forEach>
		</div>
		<div class="board_paging">
			<c:forEach begin="1"
				end="${boardDB.size()/12+1>=6 ? 5 : (boardDB.size() % 12)==0 ? (boardDB.size() / 12) : (boardDB.size() / 12)+1 }"
				var="i">
				<c:choose>
					<c:when test="${i == 1 }">
						<div class="board_choose board_paging_number" id="${i }">${i }</div>
					</c:when>
					<c:otherwise>
						<div class="board_paging_number" id="${i }">${i }</div>
					</c:otherwise>
				</c:choose>
			</c:forEach>
			<c:choose>
				<c:when test="${boardDB.size()/12+1>=6 ? true : false }">
					<div class="nextBtn">
						다음 <span class="material-icons-round next_btn">
							arrow_forward_ios </span>
					</div>
				</c:when>
			</c:choose>
		</div>
	</div>
	<div id="board_clickPan" class="board_hide">
		<div onclick="imgClickRollback()" class="x_box">
			<span class="material-icons-outlined "> close </span>
		</div>
		<div id="board_detailContent">
			<div class="board_detailPan">
				<div class="board_left_pan">
					<iframe id="board_googleMap"
						src="https://www.google.com/maps?q= 서울 관악구 관악로 85 &output=embed"
						style='border: 0;' allowfullscreen="" aria-hidden="false"
						tabindex="0" frameborder="0"></iframe>
					<!-- q= 뒤에 주소를 입력하면 됨 -->
					<hr style="color: black; width: 100%; margin-bottom: 50px;">
					<div id="board_main_content" class="board_main_content">
						<!-- 게시판 콘텐츠들이 들어가는 곳  -->
					</div>

					<div class="board_comment">
						<div id="board_comment_tit" class="board_comment_tit">
							<p>한줄댓글</p>
<!-- 									<div class="board_ud"> -->
<!-- 										<button>수정</button> -->
<!-- 										<button>삭제</button> -->
<!-- 									</div> -->
						</div>
						<div class="board_comment_write">
							<form action="#" id="board_commentId">
								<input type="text" id="board_commnet" name="board_commnet"
									placeholder="한 줄 댓글을 남겨주세요." autocomplete="off"> <input type="hidden"
									id="user_id" name="user_id" value="${id }"> <input
									type="submit" name="board_commnet_submit" value="댓글남기기">
							</form>
						</div>
						<div id="board_comment_show" class="board_comment_show">
							<!-- 							<div class="board_comment_see"> -->
							<!-- 								<div class="board_comment_see_img"> -->
							<%-- 									<img src="<%=request.getContextPath()%>/resources/files/null.jpg" alt=""> --%>
							<!-- 								</div> -->
							<!-- 								<div class="board_comment_see_text"> -->
							<!-- 									<div> -->
							<!-- 										<strong>닉네임</strong> <span class="board_comment_see_text_date">2021.08.12</span> -->
							<!-- 									</div> -->
							<!-- 									<div>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</div> -->
							<!-- 								</div> -->
							<!-- 							</div> -->
							<!-- 							<hr style="color: black; width: 100%; margin-bottom: 50px;"> -->
						</div>
					</div>
				</div>


				<div class="board_right_pan">
					<div id="board_user_info" class="board_user_info">
						<img id="board_mainimg"
							src="<%=request.getContextPath()%>/resources/files/null.jpg"
							alt="">
					</div>
					<div id="board_user_name" class="board_user_name">닉네임</div>

					<div id="board_content_id" class="board_content_id"></div>
					<div id="board_title" class="board_title"></div>
					<div class="board_sub_info">
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined board_area_img">
									location_on </span>
								<div>추천 여행지</div>
							</div>
							<div id="board_bestplace">몰라</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined"> local_dining</span>
								<div>추천 맛집</div>
							</div>
							<div id="board_besteat">몰라</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined board_like_img">
									favorite </span>
								<div>스크랩</div>
							</div>
							<div id="board_scarp_cnt">0</div>
						</div>
					</div>

					<div>
						<div id="board_scrap_btn" class="board_scrap_btn">
							<span class="material-icons-outlined board_like_img">
								favorite </span>
							<div>스크랩</div>
						</div>
					</div>

					<div class="board_travelPlans">
						<div id="singo" class="singo" >
							<span class="material-icons singo_img"> lightbulb </span> <span
								class="board_singo">신고하기</span>
						</div>

						<!-- 						<div class="board_Plans"> -->
						<!-- 							<div class="board_Plans_tit">여행경로</div> -->
						<!-- 							<div class="board_Plans_list"> -->
						<!-- 								<div>여정1</div> -->
						<!-- 							</div> -->
						<!-- 							<div class="board_Plans_list"> -->
						<!-- 								<div>여정2</div> -->
						<!-- 							</div> -->
						<!-- 							<div class="board_Plans_list"> -->
						<!-- 								<div>여정3</div> -->
						<!-- 							</div> -->
						<!-- 							<div class="board_Plans_list"> -->
						<!-- 								<div>여정4</div> -->
						<!-- 							</div> -->
						<!-- 						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
		</div>
		<script src="<%=request.getContextPath()%>/resources/membershipJS/membershipBoard.js" charset="UTF-8"></script>
		
	<jsp:include page="../footer/footer.jsp"></jsp:include>
</body>
</html>