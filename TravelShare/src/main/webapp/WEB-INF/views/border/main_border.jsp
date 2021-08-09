<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>�ظԳ���</title>
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
						<option value="">��ü</option>
						<option value="">���α�</option>
						<option value="">�߱�</option>
						<option value="">��걸</option>
						<option value="">������</option>
						<option value="">������</option>
						<option value="">���빮��</option>
						<option value="">�߶���</option>
						<option value="">���ϱ�</option>
						<option value="">���ϱ�</option>
						<option value="">������</option>
						<option value="">�����</option>
						<option value="">����</option>
						<option value="">���빮��</option>
						<option value="">������</option>
						<option value="">��õ��</option>
						<option value="">������</option>
						<option value="">���α�</option>
						<option value="">��õ��</option>
						<option value="">������</option>
						<option value="">��������</option>
						<option value="">���۱�</option>
						<option value="">���Ǳ�</option>
						<option value="">���ʱ�</option>
						<option value="">������</option>
						<option value="">���ı�</option>
						<option value="">������</option>
					</select>
				</div>
			</div>

			<div class="board_board_tit">
				<div>
					<h2>
						���ǿ� �´� �������� <strong>${boardDB.size() }</strong>�� �ֽ��ϴ�.
					</h2>
				</div>
				<div>
					<select class="board_tit_area">
						<option value="">�ֽż� ����</option>
						<option value="">��ȸ�� ����</option>
						<option value="">��� ����</option>
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
							<div class="like">0��</div>
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
						���� <span class="material-icons-round next_btn">
							arrow_forward_ios </span>
					</div>
				</c:when>
			</c:choose>
		</div>
	</div>
	<script src="<%= request.getContextPath()%>/resources/js/main_border.js"></script>
</body>
</html>