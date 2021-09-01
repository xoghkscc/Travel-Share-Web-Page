<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/administer_main.css?ver=2.88">
	
	<!-- CKEDITOR -->
	<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/create_board.css">
	<link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet">
	<script
	src="<%=request.getContextPath()%>/resources/ckeditor/ckeditor.js"></script>
	
	<!-- 부트스트랩 -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
	<jsp:include page="../header/top.jsp"></jsp:include>
	<section class="admin">
		<div id="admin_title">관리자 메뉴</div>
		<div class="admin_container">
			<div class="admin_menu">
				<div class="admin_btn" id="admin_member" data-index="0">회원정보관리</div>
				<div class="admin_btn" id="admin_admin" data-index="1">관리자 관리</div>
				<div class="admin_btn" id="admin_board" data-index="2">게시글 관리</div>
				<div class="admin_btn" id="admin_declare" data-index="3">신고 관리</div>
				<div class="admin_btn" id="admin_notice" data-index="4">공지사항</div>
			</div>
			<div class="admin_main">

				<div class="admin_member_container admin_allContainer">
					<div style="width: 400px;">
						<div class="admin_member_count">총 회원 수 :</div>
						<div>
							<input type="text" class="admin_member_searchText" placeholder="이름을 검색하세요."/>
							<button class="admin_member_searchBtn" type="submit">검색</button>
						</div>
					</div>
					<table class="admin_member_table table table-bordered"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							<tr>
								<th style="background-color: #fafafa; text-align: center;">이름</th>
								<th style="background-color: #fafafa; text-align: center;">닉네임</th>
								<th style="background-color: #fafafa; text-align: center;">생년월일</th>
								<th style="background-color: #fafafa; text-align: center;">성별</th>
								<th style="background-color: #fafafa; text-align: center;">이메일</th>
							</tr>
						</thead>
						<tbody class="tbodyclass" style="border: 1px solid green;">
						</tbody>
					</table>
				</div>

				<div class="admin_admin_container admin_allContainer">

					<div class="admin_admin_count">관리자 현황</div>
					<div>
						<input type="text" class="admin_admin_searchText" placeholder="이름을 검색하세요."/>
						<button class="admin_admin_searchBtn" type="submit">검색</button>
					</div>
					<table class="admin_admin_table table table-bordered"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							</tr>
							<th style="background-color: #fafafa; text-align: center;">이름</th>
							<th style="background-color: #fafafa; text-align: center;">닉네임</th>
							<th style="background-color: #fafafa; text-align: center;">나이</th>
							<th style="background-color: #fafafa; text-align: center;">성별</th>
							<th style="background-color: #fafafa; text-align: center;">직책</th>
							<tr>
						</thead>
						<tbody class="tbodyclass_admin">
						</tbody>
					</table>
				</div>

				<div class="admin_board_container admin_allContainer">

					<div class="admin_board_count">게시판 현황</div>
					<div>
						<input type="text" class="admin_board_searchText" placeholder="제목을 검색하세요."/>
						<button class="admin_board_searchBtn" type="submit">검색</button>
					</div>
					<table class="admin_board_table table table-bordered"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							</tr>
							<th style="background-color: #fafafa; text-align: center;">글번호</th>
							<th style="background-color: #fafafa; text-align: center;">작성자</th>
							<th style="background-color: #fafafa; text-align: center;">글제목</th>
							<th style="background-color: #fafafa; text-align: center;">찜수</th>
							<th style="background-color: #fafafa; text-align: center;">조회수</th>
							<tr>
						</thead>
						<tbody class="tbodyclass_board">
						</tbody>
					</table>
					<div class="admin_board_paging"></div>	
				</div>

                <div class="admin_declare_container admin_allContainer">
          
                    <div class="admin_declare_count">
                        신고 관리
                    </div>
                    <div>
						<input type="text" class="admin_declare_searchText" placeholder="이름을 검색하세요."/>
						<button class="admin_declare_searchBtn" type="submit">검색</button>
					</div>
                    <table class="admin_declare_table table table-bordered" style="text-align: center; border: 1px solid black; width: 800px;">
                        <thead>
                           </tr>
							 <th style="background-color: #fafafa; text-align: center;">이름</th>
							 <th style="background-color: #fafafa; text-align: center;">닉네임</th>
							 <th style="background-color: #fafafa; text-align: center;">나이</th>
							 <th style="background-color: #fafafa; text-align: center;">성별</th>
							 <th style="background-color: #fafafa; text-align: center;">신고수</th>
                           <tr>
                        </thead>
                        <tbody class="tbodyclass_declare">
                        </tbody>
                    </table>
	
                </div>

                <div class="admin_notice_container admin_allContainer">
                    <div class="admin_notice_mebuBar">
                        <span class="admin_notice_count" data-index="0">
                            공지사항 게시글
                        </span>
                        <span class="admin_notice_write" data-index="1">
                            공지사항 작성
                        </span>
                    </div>
                   	<div>
						<input type="text" class="admin_notice_searchText" placeholder="제목을 검색하세요."/>
						<button class="admin_notice_searchBtn" type="submit">검색</button>
					</div>
                    <table class="admin_notice_table table table-bordered" style="text-align: center; border: 1px solid black; width: 800px;">
                        <thead>
                           </tr>
                               <th style="background-color: #fafafa; text-align: center;">글번호</th>
                               <th style="background-color: #fafafa; text-align: center;">작성자</th>
                               <th style="background-color: #fafafa; text-align: center;">공지내용</th>
                               <th style="background-color: #fafafa; text-align: center;">날짜</th>
                               <th style="background-color: #fafafa; text-align: center;">조회수</th>
                           <tr>
                        </thead>
                        <tbody class="tbodyclass_notice">
                        </tbody>
                    </table>
                    <div class="admin_notice_paging"></div>	
                </div>
                <div class="admin_notice_container admin_allContainer">
                    <div class="admin_notice_mebuBar">
                        <span class="admin_notice_count" data-index="0">
                            공지사항 게시글
                        </span>
                        <span class="admin_notice_write" data-index="1">
                            공지사항 작성
                        </span>
                    </div>
					<!-- 등록form -->
                    <form id="notice_form" action="/travelShare/site/adminNotice" method="POST" enctype="multipart/form-data">
                    	<div>
							<label>제목 입력하기</label>
							<input id="noticeTitle" type="text" name="noticeTitle" placeholder="제목을 입력해주세요">
						</div>
	                    <div class="board_travel_mainPicture board_img">
							<label>첨부할 사진</label>
							<input type="file" id="noticeImg" style="width: 200px;" />
						</div>
						<textarea rows="30" cols="30" id="noticeContent" name="notice_content">
						</textarea>
						<script>
							var ckeditor_config = {
								height: 400,
								width: 860,
								resize_enaleb : false,
								enterMode : CKEDITOR.ENTER_BR,
								shiftEnterMode : CKEDITOR.ENTER_P,
								filebrowserUploadUrl : "http://localhost:8080/travelShare/board/ckUpload"
							};
							CKEDITOR.replace("noticeContent", ckeditor_config);
		
							CKEDITOR.on('dialogDefinition', function(ev) {
								var dialogName = ev.data.name;
								var dialogDefinition = ev.data.definition;
		
								switch (dialogName) {
								case 'image': //Image Properties dialog
									dialogDefinition.removeContents('Link');
									dialogDefinition.removeContents('advanced');
									break;
								}
							});
						</script>
						<button type="submit" class="board_btn-default">등록완료</button>
                    </form>
                 </div>  
                  <!-- 수정form -->
				 <div class="updateDivForm">
                    <form id="notice_form" action="/travelShare/site/adminNoticeUpdate" method="POST">
		                <div>
							<label>제목 입력하기</label>
							<input id="noticeTitleUpdate" type="text" name="noticeTitleUpdate" placeholder="제목을 입력해주세요">
						</div>
	                    <div>
							<label>첨부할 사진</label>
							<input type="file" id="noticeImg" name="noticeImgFile" style="width: 200px;" />
						</div>
						<textarea rows="30" cols="30" id="noticeContentUpdate" name="notice_contentUpdate">
						</textarea>
						<script>
							var ckeditor_config = {
								height: 400,
								width: 860,
								resize_enaleb : false,
								enterMode : CKEDITOR.ENTER_BR,
								shiftEnterMode : CKEDITOR.ENTER_P,
								filebrowserUploadUrl : "http://localhost:8080/travelShare/board/ckUpload"
							};
							CKEDITOR.replace("notice_contentUpdate", ckeditor_config);
		
							CKEDITOR.on('dialogDefinition', function(ev) {
								var dialogName = ev.data.name;
								var dialogDefinition = ev.data.definition;
		
								switch (dialogName) {
								case 'image': //Image Properties dialog
									dialogDefinition.removeContents('Link');
									dialogDefinition.removeContents('advanced');
									break;
								}
							});
						</script>
						<input id="notice_hiddenId" type="text" name="notice_id" readonly>
						<button type="submit" class="board_btn-default">수정완료</button>
                 	</form>
                 </div>

			</div>
		</div>
		<div class="admin_hiddenAlarm">
            <div>
                <button class="admin_hiddenBtn" data-index="0">삭제</button>
                <button class="admin_hiddenBtn" data-index="1">수정</button>
                <button class="admin_hiddenBtn" data-index="2">취소</button>
            </div>
            <div class="admin_hiddenInnerText"></div>
        </div>	
        <div class="admin_hiddenAlarm2">
            <div>
                <button class="admin_hiddenBtn2" data-index="0">내용확인</button>
                <button class="admin_hiddenBtn2" data-index="1">내용삭제</button>
                <button class="admin_hiddenBtn2" data-index="2">취소</button>
            </div>
            <div class="admin_hiddenInnerText2"></div>
        </div>	
        <div class="admin_hiddenAlarm3">
        	수정할 신고 숫자를 입력하세요.
       		<input class="admin_hiddenInputText" type="text" />
       		<button class="admin_hiddenBtn3">수정</button>
       		<button class="admin_hiddenBtn3">취소</button>
        </div>
	</section>

	<script
		src="<%=request.getContextPath()%>/resources/js/administer_ajax.js?ver=2.91"></script>
<!-- 	 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script> -->

</body>
</html>