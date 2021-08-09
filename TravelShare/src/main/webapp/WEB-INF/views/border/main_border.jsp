<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>해먹남녀</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/main_border.css">
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
</head>
<body>
	<div class="board_main">
		<div class="sel">
			<div class="sel_pan">
				<div class="region_sel">
					<select class="region_area">
						<option value="">전체</option>
						<option value="">종로구</option>
						<option value="">중구</option>
						<option value="">용산구</option>
						<option value="">성동구</option>
						<option value="">광진구</option>
						<option value="">동대문구</option>
						<option value="">중랑구</option>
						<option value="">성북구</option>
						<option value="">강북구</option>
						<option value="">도봉구</option>
						<option value="">노원구</option>
						<option value="">은평구</option>
						<option value="">서대문구</option>
						<option value="">마포구</option>
						<option value="">양천구</option>
						<option value="">강서구</option>
						<option value="">구로구</option>
						<option value="">금천구</option>
						<option value="">강서구</option>
						<option value="">영등포구</option>
						<option value="">동작구</option>
						<option value="">관악구</option>
						<option value="">서초구</option>
						<option value="">강남구</option>
						<option value="">송파구</option>
						<option value="">강동구</option>
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
						<img alt=""
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
			<c:forEach begin="1" end="${boardDB.size()/12+1>=6 ? 5 : boardDB.size()/12+1}" var="i">
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
	<script src="<%= request.getContextPath()%>/resources/js/main_border.js"></script>
</body>
</html>