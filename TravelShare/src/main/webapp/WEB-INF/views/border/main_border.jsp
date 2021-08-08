<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>해먹남녀</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/main_border.css">
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

			<div class="tit">
				<div>
					<h2>
						조건에 맞는 여행지가 <strong>0</strong>개 있습니다.
					</h2>
				</div>
				<div>
					<select class="tit_area">
						<option value="">최신순 정렬</option>
						<option value="">조회순 정렬</option>
						<option value="">찜순 정렬</option>
					</select>
				</div>
			</div>
		</div>
		<div class="travle_board">
			<div class="list_travel">
				<div class="content">
					<img alt="" src="<%=request.getContextPath()%>/resources/files/1.jpg">
				</div>

			</div>
		</div>
	</div>
</body>
</html>