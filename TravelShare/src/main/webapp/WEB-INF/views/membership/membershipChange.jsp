<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 정보 수정</title>
 <script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/membership/membership_main.css">
<link
	href="https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Sharp%7CMaterial+Icons+Outlined"
	rel="stylesheet">
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="loing_container" style="width: 100%; height: 150vh"></div>
	<form id="membership" action="./membershipUpdate" method="POST" autocomplete='off'></form>
	<form id="phoneCheck" action="./phoneCheck" method="POST" autocomplete='off'></form>
	<div class="membership_box">
		<div id="membership_table">
			<div id="user_membership">정보 수정</div>
			<table>
				<tr>
					<th class="member_text">닉네임</th>
				</tr>
				<tr>
					<td> <input type="text" form="membership" class="inputbox" value="${userinfo.user_nickname }" name="user_nickname" id="member_nickname"></td>
				</tr>
				<tr>
					 <td  id="nickname_warning"  class="member_text_warning"></td>
				</tr>
				<tr>
					<th class="member_text">이름</th> 	
				</tr>
				<tr>
					<td><input type="text" value="${userinfo.user_name }" form="membership" class="inputbox" name="user_name" id=member_name></td>
				</tr>
				<tr>
					 <td id="name_warning"  class="member_text_warning"></td>
				<tr>
					<th class="member_text">전화번호</th>
				</tr>
				<tr>
					<td>
					<input type="hidden" id="hiddenphone" value="${userinfo.user_phonenumber }"/>
					<input type="text" form="membership" value="${userinfo.user_phonenumber }" class="inputbox" name="user_phonenumber" id=member_phone maxlength='11' ><button id="phone_check">인증확인</button></td>
					<th><input type="hidden" id="checkNum" name="checkNum"/></th>
				</tr>
				<tr>
					<th class="member_text">인증번호</th>
				</tr>
				<tr>
					<td><input type="text" class="inputbox" id="phoneCheckInput"></td>
				</tr>
				<tr id="phone_warning"  class="member_text_warning"></tr>
				<tr>
					<th class="member_text">생년월일</th>
				</tr>
				<tr>
					<td>
						<input type="text" form="membership" value="${userinfo.user_year}" class="inputbox" name="user_year"  id=member_year>
						<input type="hidden" id="hiddenmonth" value="${userinfo.user_month }">
						<select name="user_month" class="inputbox"  id=member_month form="membership">
							<option value='' selected>-- 월 --</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
							<option value='6'>6</option>
							<option value='7'>7</option>
							<option value='8'>8</option>
							<option value='9'>9</option>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
						</select>
					
					<input type="text" form="membership" value="${userinfo.user_day }" class="inputbox" name="user_day"   id=member_day>
					</td>
				</tr>
				<tr>
					 <td id="birth_warning"  class="member_text_warning"></td>
				</tr>
				<tr>
					<th class="member_text">주소</th>
				</tr>
				<tr>
					<th ><input type="text" value="${userinfo.user_zonecode }" form="membership"name="user_zonecode"  id="user_add_code" readonly> <button id="add_code_search">우편번호</button> </th>
					<th><input form="membership" type="hidden" value="${userinfo.user_sido }"  id="sido" name="user_sido"/></th>
					<th><input form="membership" type="hidden" value="${userinfo.user_sigungu }" id="sigungu" name="user_sigungu"/></th>
					<th><input form="membership" type="hidden" value="${userinfo.user_roadname }" id="roadname" name="user_roadname"/></th>
				</tr>
				<tr>	
					<th><input type="text" value="${userinfo.user_sido }${userinfo.user_sigungu }${userinfo.user_roadname }" id="user_add_city" readonly></th>
				</tr>
				<tr>
					<th><input type="text" class="inputbox" value="${userinfo.user_address }" name="user_address" form="membership" id="user_add_detail"></th>
				</tr>	
				<tr>
					<th id="address_warning"  class="member_text_warning"></th>
				</tr>
				   <tr>
					<th class="member_text">성별</th>
				</tr>
				<tr>
					<td>
						<input type="hidden" id="hiddengender" value="${userinfo.user_gender }">
						<select form="membership" class="inputbox" name="user_gender" id="member_gender">
							<option selected>-- 성별 --</option>
							<option value='남'>남자</option>
							<option value='여'>여자</option>
							<option value='선택안함'>선택안함</option>
						</select>
					</td>
				</tr>
				<tr>
					 <td id="gender_warning"  class="member_text_warning"></td>
				</tr>
				<tr>
					<th><input type="submit" id="member_sub2"  value="수정하기" form="membership"></th>
				</tr>
				
			</table> 
		</div>
		</div>
		<jsp:include page="../footer/footer.jsp"></jsp:include>
		<script>
		  $('.membership_box').css('border','1px solid black');
		  $('.membership_box').css('width','350px');
		  $('.membership_box').css('height','auto');
		  $('.membership_box').css('margin','auto');
	  </script>
	<script src="<%=request.getContextPath() %>/resources/membershipJS/membershipChange.js" charset="UTF-8"></script>
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

</body>
</html>