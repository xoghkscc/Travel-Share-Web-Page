<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>해먹 남녀</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/create_board.css">
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
<script
	src="<%=request.getContextPath()%>/resources/ckeditor/ckeditor.js"></script>
</head>
<body>
	<div class="board_create">
		<div class="boardtit">여행지 등록하기</div>

		<div class="board_create_form">
			<form action="">
				<div class="board_input">
					<div>
						<label>제목 입력하기</label>
					</div>
					<div>
						<input type="text" name="boardtit" placeholder="여행의 제목을 입력해주세요">
					</div>
					<div>
						<label>우편번호 </label>
					</div>
					<div>
						<input type="text" name="zipCode" id="zipCode" style="width: 80px;" readonly />
						<button type="button" style="width: 60px; height: 32px;"
							id="address_kakao">검색</button>
					</div>
					<div>
						<label>주소</label>
					</div>
					<div>
						<input type="text" id="addr" style="width: 300px;" readonly />
					</div>
					<div>
						<label>상세</label>
					</div>
					<div>
						<input type="text" id="detailAddr" style="width: 300px;" />
					</div>
					<div>
						<input type="hidden" id="sido" style="width: 300px; height: 30px;"
							readonly /><br>
					</div>
					<div>
						<input type="hidden" id="sigungu"
							style="width: 300px; height: 30px;" readonly /><br>
					</div>
					<div>
						<input type="hidden" id="sidoCode"
							style="width: 300px; height: 30px;" readonly /><br>
					</div>
					<div>
						<input type="hidden" id="sigunguCode"
							style="width: 300px; height: 30px;" readonly /><br>
					</div>
					<div>
						<label>추천 명소</label>
					</div>
					<div>
						<input type="text" style="width: 300px;"
							placeholder="여행지 주변 추천 명소를 입력해주세요" />
					</div>
					<div>
						<label>추천 맛집</label>
					</div>
					<div>
						<input type="text" style="width: 300px;"
							placeholder="여행지 주변 추천 맛집을 입력해주세요" />
					</div>
					<div class="board_travel_route">
						<label>여행경로</label>
					</div>
					<div class="board_travel_route">
						<input type="text" style="width: 300px;" />
						<div>
							<span class="material-icons-outlined pulsBtn">
								add_circle_outline </span>
						</div>
					</div>
					<div class="board_travel_mainPicture board_img">
						<label>여행 대표 사진</label>
					</div>
					<div class="board_travel_file board_img">
						<input type="file" id="board_mainImg" style="width: 200px;" />
					</div>
				</div>
				<textarea rows="50" cols="50" id="board_content" name="board_content">
				</textarea>
				<script>
					var ckeditor_config = {
						resize_enaleb : false,
						enterMode : CKEDITOR.ENTER_BR,
						shiftEnterMode : CKEDITOR.ENTER_P,
						filebrowserUploadUrl : "http://localhost:8080/travelShare/board/ckUpload"
					};
					CKEDITOR.replace("board_content", ckeditor_config);

					CKEDITOR.on('dialogDefinition', function(ev) {
						var dialogName = ev.data.name;
						var dialogDefinition = ev.data.definition;

						switch (dialogName) {
						case 'image': //Image Properties dialog
// 							dialogDefinition.removeContents('info');
							dialogDefinition.removeContents('Link');
							dialogDefinition.removeContents('advanced');
							break;
						}
					});
				</script>
				<button type="submit" class="board_btn-default">등록완료</button>
			</form>
		</div>
	</div>

	<script
		src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

	<script
		src="<%=request.getContextPath()%>/resources/js/create_board.js"
		charset="UTF-8"></script>

</body>
</html>

