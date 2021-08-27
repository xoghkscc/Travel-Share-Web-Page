<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Travelers</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/create_board.css">
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
<script
	src="<%=request.getContextPath()%>/resources/ckeditor/ckeditor.js"></script>
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="board_create">
		<div class="boardtit">여행지 수정하기</div>

		<div class="board_create_form">
			<form action="./updateBoard" method="post"
				enctype="multipart/form-data">
				<div class="board_input">
					<div>
						<label>제목 입력하기</label>
					</div>
					<input type="hidden" name="board_id"
						value="${updateBoardInfo.board_id }">
					<div>
						<input type="text" name="board_title"
							value="${updateBoardInfo.board_title }" required>
					</div>
					<div>
						<label>우편번호 </label>
					</div>
					<div>
						<input type="text" name="zipcode" id="zipCode"
							value="${updateBoardInfo.zipcode }" style="width: 80px;" readonly
							required />
						<button type="button" style="width: 60px; height: 32px;"
							id="address_kakao">검색</button>
					</div>
					<div>
						<label>주소</label>
					</div>
					<div>
						<input type="text" id="addr" name="addr" style="width: 300px;"
							value="${updateBoardInfo.addr }" readonly required />
					</div>
					<div>
						<label>상세</label>
					</div>
					<div>
						<input type="text" name="detailaddr" id="detailAddr"
							value="${updateBoardInfo.detailaddr }" style="width: 300px;" />
					</div>
					<div>
						<input type="hidden" id="sido" name="sido"
							value="${updateBoardInfo.sido }"
							style="width: 300px; height: 30px;" readonly /><br>
					</div>
					<div>
						<input type="hidden" id="sigungu" name="sigungu"
							value="${updateBoardInfo.sigungu }"
							style="width: 300px; height: 30px;" readonly required /><br>
					</div>
					<div>
						<input type="hidden" id="sigunguCode" name="sigungucode"
							value="${updateBoardInfo.sigungucode }"
							style="width: 300px; height: 30px;" readonly /><br>
					</div>
					<div>
						<input type="hidden" id="sidoCode" name="sidoCode"
							style="width: 300px; height: 30px;" readonly required /><br>
					</div>
					<div>
						<label>추천 명소</label>
					</div>
					<div>
						<input type="text" name="board_bestplace" style="width: 300px;"
							value="${updateBoardInfo.board_bestplace }"
							placeholder="여행지 주변 추천 명소를 입력해주세요" />
					</div>
					<div>
						<label>추천 맛집</label>
					</div>
					<div>
						<input type="text" name="board_besteat" style="width: 300px;"
							value="${updateBoardInfo.board_besteat }"
							placeholder="여행지 주변 추천 맛집을 입력해주세요" />
					</div>
					<!-- 					<div class="board_travel_route"> -->
					<!-- 						<label>여행경로</label> -->
					<!-- 					</div> -->
					<!-- 					<div class="board_travel_route"> -->
					<!-- 						<input type="text" style="width: 300px;" /> -->
					<!-- 						<div> -->
					<!-- 							<span class="material-icons-outlined pulsBtn"> -->
					<!-- 								add_circle_outline </span> -->
					<!-- 						</div> -->
					<!-- 					</div> -->
					<div class="board_travel_mainPicture board_img">
						<label>여행 대표 사진</label>
					</div>
					<div class="board_travel_file board_img">
						<input type="file" id="board_mainimg" name="board_mainimgReal"
							style="width: 200px;" />
					</div>
				</div>
				<textarea rows="50" cols="50" id="board_content"
					name="board_content">
				${updateBoardInfo.board_content }
				</textarea>
				<input type="hidden" id="user_id" name="user_id" value="${id }"
					required />
				<script>
					var ckeditor_config = {
						height : 500,
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
				<input type="submit" class="board_btn-default" value="수정완료" />
			</form>
		</div>
	</div>
	<jsp:include page="../footer/footer.jsp"></jsp:include>
	<script
		src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

	<script
		src="<%=request.getContextPath()%>/resources/js/create_board.js"
		charset="UTF-8"></script>

</body>
</html>

