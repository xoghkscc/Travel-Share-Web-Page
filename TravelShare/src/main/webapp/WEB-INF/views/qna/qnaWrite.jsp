<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>QNA 작성</title>
<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
	<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/qna_write.css">
	<script
	src="<%=request.getContextPath()%>/resources/ckeditor/ckeditor.js"></script>
</head>
<body>
	<div class="qna_write">
		<div class="qna_write_form">
			<form action="../qna/qnaWrite" method="post">
			<div class="qna_input">
				<div>
					<label>제목</label>
				</div>			
			
			<div>
				<input type="text" name="title" placeholder="제목을 입력해주세요" style="width: 300px; height: 30px;">
			</div>
			<div>
				<label>작성자</label>
			</div>
			<div>
				<input type="text" name="writer" style="width: 300px; height: 30px;">
			</div>
			
			<div class="qna_travel_mainPicture qna_img">
				<label >QNA 글 작성</label>
			</div>
			</div>
				<div class="qna_travel_file qna_img">
					<input type="file" id="qna_img" name="qna_img_file" style="width: 200px;" />
				</div>
				<textarea rows="50" cols="50" id="content" name="content">
				</textarea>
			
				<script>
					var ckeditor_config = {
						height: 500,
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
				<input type="submit" class="qna_btn-default" value="작성완료"/>
			</form>		
		</div>
	</div>
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>	
</body>
</html>