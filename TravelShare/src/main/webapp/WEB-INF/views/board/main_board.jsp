<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Travelers</title>
</head>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/main_board.css">
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div id="board_main">
		<div class="sel">
			<div class="sel_pan">
				<div class="region_sel">
					<select class="region_area" id="board_sido"
						onchange="cat1_change(this.value)">
						<option value="0" ${sidoName=='전체' ? "selected" : "" }>전체</option>
						<option value="11" ${sidoName=='서울' ? "selected" : "" }>서울</option>
						<option value="26" ${sidoName=='부산' ? "selected" : "" }>부산</option>
						<option value="27" ${sidoName=='대구' ? "selected" : "" }>대구</option>
						<option value="28" ${sidoName=='인천' ? "selected" : "" }>인천</option>
						<option value="29" ${sidoName=='광주' ? "selected" : "" }>광주</option>
						<option value="30" ${sidoName=='대전' ? "selected" : "" }>대전</option>
						<option value="31" ${sidoName=='울산' ? "selected" : "" }>울산</option>
						<option value="36" ${sidoName=='세종' ? "selected" : "" }>세종</option>
						<option value="41" ${sidoName=='경기도' ? "selected" : "" }>경기도</option>
						<option value="47" ${sidoName=='경상북도' ? "selected" : "" }>경상북도</option>
						<option value="48" ${sidoName=='경상남도' ? "selected" : "" }>경상남도</option>
						<option value="42" ${sidoName=='강원도' ? "selected" : "" }>강원도</option>
						<option value="43" ${sidoName=='충청북도' ? "selected" : "" }>충청북도</option>
						<option value="44" ${sidoName=='충청남도' ? "selected" : "" }>충청남도</option>
						<option value="45" ${sidoName=='전라북도' ? "selected" : "" }>전라북도</option>
						<option value="46" ${sidoName=='전라남도' ? "selected" : "" }>전라남도</option>
						<option value="50" ${sidoName=='제주시' ? "selected" : "" }>제주시</option>
					</select>
				</div>

				<div class="region_sel2" id="region_sel2">
					<select id="h_area2" onchange="locationFilter()">
						<option>-선택-</option>
						<option value="0">전체</option>
					</select>
				</div>
			</div>

			<div class="board_board_tit">
				<div>
					<h2>
						<c:choose>
							<c:when test="${empty sidoName }">
								<strong>전체 조건</strong>에 맞는 여행지가 <strong>${boardDB.size() }</strong>개 있습니다.
							</c:when>
							<c:when test="${sidoName == '전체' and  sidogunName == '전체'}">
								<strong>전체 조건</strong>에 맞는 여행지가 <strong>${boardDB.size() }</strong>개 있습니다.
							</c:when>
							<c:otherwise>
								<strong>${sidoName }[${sidogunName }]</strong>에 맞는 여행지가 <strong>${boardDB.size() }</strong>개 있습니다. 
							</c:otherwise>
						</c:choose>

					</h2>
				</div>
				<div>
					<select id="board_tit_area" class="board_tit_area" onchange="boardSort()">
						<option value="board_id">최신순 정렬</option>
						<option value="board_lookupcnt">조회순 정렬</option>
						<option value="like_cnt">찜순 정렬</option>
					</select>
				</div>
			</div>
		</div>
		<div class="board_list_travel">
			<c:forEach items="${boardDB }" var="board" begin="0" end="11">
				<div class="board_content" id="board_content">
					<div class="board_imgContent">
						<div><img class="${board.board_id }"
							onclick='imgClick(${board.board_id}, ${board.user_id})' alt=""
							src="${board.board_mainimg }"></div>
							<img alt="" onclick='profileClick(${board.user_id})'
							src="/travelShare${board.user_imgurl }">
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
									<div class="board_likePan board_malramContentdle">
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
		<div id="board_create" class="board_create" >
			<button onclick="createBoardLocation(${id})"><span class="material-icons">create</span><p>글쓰기</p></button>
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
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	<script src="<%=request.getContextPath()%>/resources/js/main_border.js"
		charset="UTF-8"></script>
</body>
</html>