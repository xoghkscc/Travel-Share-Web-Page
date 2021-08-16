<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>해먹남녀</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/main_board.css">
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
</head>
<body>
	<div id="board_main">
		<div class="sel">
			<div class="sel_pan">
				<div class="region_sel">
					<select class="region_area" onchange="cat1_change(this.value)">
						<option value="0">전체</option>
						<option value="11">서울</option>
						<option value="26">부산</option>
						<option value="27">대구</option>
						<option value="28">인천</option>
						<option value="29">광주</option>
						<option value="30">대전</option>
						<option value="31">울산</option>
						<option value="36">세종</option>
						<option value="41">경기도</option>
						<option value="47">경상북도</option>
						<option value="48">경상남도</option>
						<option value="42">강원도</option>
						<option value="43">충청북도</option>
						<option value="44">충청남도</option>
						<option value="45">전라북도</option>
						<option value="46">전라남도</option>
						<option value="50">제주시</option>
					</select>
				</div>

				<div class="region_sel2" id="region_sel2">
					<select id="h_area2">
						<option>-선택-</option>
					</select>
				</div>
			</div>

			<div class="board_board_tit">
				<div>
					<h2>
						조건에 맞는 여행지가 <strong>${boardDB.size() }</strong>개 있습니다.
					</h2>
				</div>
				<div>
					<select class="board_tit_area">
						<option value="">최신순 정렬</option>
						<option value="">조회순 정렬</option>
						<option value="">찜순 정렬</option>
					</select>
				</div>
			</div>
		</div>
		<div class="board_list_travel">
			<c:forEach items="${boardDB }" var="board" begin="0" end="11">
				<div class="board_content" id="board_content">
					<div class="board_imgContent">
						<img onclick='imgClick()' alt=""
							src="<%=request.getContextPath()%>/resources/files/1.jpg">
						<img alt=""
							src="<%=request.getContextPath()%>/resources/files/2.jpg">
					</div>
					<div class="board_textContent">
						<div class="board_text1">${board.user_name }</div>
						<div class="board_textTit">${board.board_name }</div>
					</div>
					<div class="board_option">
						<div class="board_areaPan">
							<span class="material-icons-outlined board_area_img">
								location_on </span>
							<div class="board_area">${board.area }</div>
						</div>
						<div class="board_likePan">
							<span class="material-icons-outlined board_like_img">
								favorite </span>
							<div class="like">0명</div>
						</div>
					</div>
				</div>
			</c:forEach>
		</div>
		<div class="board_paging">
			<c:forEach begin="1"
				end="${boardDB.size()/12+1>=6 ? 5 : boardDB.size()/12+1}" var="i">
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
				<c:when test="${boardDB.size()/12+1>=3 ? true : false }">
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
					<iframe
						src="https://www.google.com/maps?q= 서울 관악구 관악로 85 &output=embed"
						style='border: 0;' allowfullscreen="" aria-hidden="false"
						tabindex="0" frameborder="0"></iframe>
					<!-- q= 뒤에 주소를 입력하면 됨 -->
					<hr style="color: black; width: 100%; margin-bottom: 50px;">
					<div class="board_main_content">
						<div class="board_img_content">
							<img src="<%=request.getContextPath()%>/resources/files/1.jpg" alt="">
						</div>

						<div class="board_text_content">
							<p>1. 사진 샘플</p>
						</div>
						<div class="board_img_content">
							<img src="<%=request.getContextPath()%>/resources/files/2.jpg" alt="">
						</div>

						<div class="board_text_content">2. 사진 샘플</div>
					</div>

					<div class="board_comment">
						<div class="board_comment_tit">
							<p>한줄댓글</p>
						</div>
						<div class="board_comment_write">
							<form action="">
								<input type="text" name="board_commnet"
									placeholder="한 줄 댓글을 남겨주세요."> <input type="submit"
									name="board_commnet_submit" value="댓글남기기">
							</form>
						</div>
						<div class="board_comment_show">
							<div class="board_comment_see">
								<div class="board_comment_see_img">
									<img src="<%=request.getContextPath()%>/resources/files/3.jpg" alt="">
								</div>
								<div class="board_comment_see_text">
									<div>
										<strong>닉네임</strong> <span class="board_comment_see_text_date">2021.08.12</span>
									</div>
									<div>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</div>
								</div>
							</div>
							<hr style="color: black; width: 100%; margin-bottom: 50px;">
						</div>
					</div>
				</div>


				<div class="board_right_pan">
					<div class="board_user_info">
						<img src="<%=request.getContextPath()%>/resources/files/2.jpg"
							alt="">
					</div>
					<div class="board_user_name">닉네임</div>

					<div class="board_title">즐거운 경주 여행</div>
					<div class="board_sub_info">
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined board_area_img">
									location_on </span>
								<div>추천 명소</div>
							</div>
							<div>몰라</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined"> local_dining</span>
								<div>추천 맛집</div>
							</div>
							<div>몰라</div>
						</div>
						<div class="board_sub_info2">
							<div>
								<span class="material-icons-outlined board_like_img">
									favorite </span>
								<div>스크랩</div>
							</div>
							<div>0</div>
						</div>
					</div>

					<div>
						<div class="board_scrap_btn">
							<span class="material-icons-outlined board_like_img">
								favorite </span>
							<div>스크랩</div>
						</div>
					</div>

					<div class="board_travelPlans">
						<div class="singo">
							<span class="material-icons singo_img"> lightbulb </span> <span
								class="board_singo">신고하기</span>
						</div>

						<div class="board_Plans">
							<div class="board_Plans_tit">여행경로</div>
							<div class="board_Plans_list">
								<div>여정1</div>
							</div>
							<div class="board_Plans_list">
								<div>여정2</div>
							</div>
							<div class="board_Plans_list">
								<div>여정3</div>
							</div>
							<div class="board_Plans_list">
								<div>여정4</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script src="<%=request.getContextPath()%>/resources/js/main_border.js"
		charset="UTF-8"></script>
</body>
</html>