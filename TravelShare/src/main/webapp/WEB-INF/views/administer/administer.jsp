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
	href="<%=request.getContextPath()%>/resources/css/administer_main.css?ver=1.039">
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
						<div class="col xs-2">
							<button class="btn-btn-primary" type="button">검색</button>
						</div>
					</div>
					<table class="admin_member_table"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							<tr>
								<th style="background-color: #fafafa; text-align: center;">이름</th>
								<th style="background-color: #fafafa; text-align: center;">나이</th>
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
					<table class="admin_admin_table"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							</tr>
							<th style="background-color: #fafafa; text-align: center;">이름</th>
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

					<div class="admin_board_count">관리자 현황</div>
					<table class="admin_board_table"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							</tr>
							<th style="background-color: #fafafa; text-align: center;">게시글
								번호</th>
							<th style="background-color: #fafafa; text-align: center;">내용</th>
							<th style="background-color: #fafafa; text-align: center;">작성자</th>
							<th style="background-color: #fafafa; text-align: center;">조회수</th>
							<tr>
						</thead>
						<tbody class="tbodyclass_board">
						</tbody>
					</table>
				</div>

				<div class="admin_declare_container admin_allContainer">

					<div class="admin_declare_count">신고 관리</div>
					<table class="admin_declare_table"
						style="text-align: center; border: 1px solid black; width: 800px;">
						<thead>
							</tr>
							<th style="background-color: #fafafa; text-align: center;">게시글
								번호</th>
							<th style="background-color: #fafafa; text-align: center;">내용</th>
							<th style="background-color: #fafafa; text-align: center;">작성자</th>
							<th style="background-color: #fafafa; text-align: center;">조회수</th>
							<tr>
						</thead>
						<tbody class="tbodyclass_declare">
						</tbody>
					</table>
				</div>

				<div class="admin_notice_container admin_allContainer">

					<div class="admin_notice_count">공지사항 게시글</div>
					<table class="admin_notice_table"
						style="text-align: center; border: 1px solid black; left: 0; width: 800px;">
						<thead>
							</tr>
							<th style="background-color: #fafafa; text-align: center;">이름</th>
							<th style="background-color: #fafafa; text-align: center;">나이</th>
							<th style="background-color: #fafafa; text-align: center;">성별</th>
							<th style="background-color: #fafafa; text-align: center;">이메일</th>
							<tr>
						</thead>
						<tbody class="tbodyclass_notice">
						</tbody>
					</table>
				</div>

			</div>
		</div>
	</section>

	<script
		src="<%=request.getContextPath()%>/resources/js/administer_ajax.js?ver=1.039"></script>

</body>
</html>