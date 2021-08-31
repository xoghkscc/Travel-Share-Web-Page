<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Travelers 회원가입</title>
 <script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/membership/membership_main.css">
</head>
<body>
	<jsp:include page="../header/top2.jsp"></jsp:include>
	<div class="loing_container" style="width: 100%; height: 150vh"></div>
	<form id="membership" action="./membership" method="POST" autocomplete='off'></form>
	<form id="phoneCheck" action="./phoneCheck" method="POST" autocomplete='off'></form>
	<div class="membership_box">
		<div id="membership_table">
			<div id="user_membership">회원가입</div>
			<table>
				<tr>
					<th class="member_text">아이디</th>
				</tr>
				<tr>
					<td><input type="text" form="membership" name="user_email" class="inputbox" placeholder="이메일 입력" id="member_email"></td>
				</tr>			
				<tr>
					 <td id="email_warning" class="member_text_warning"></td>
				</tr>
				<tr>
					<th class="member_text">비밀번호</th>
				</tr>
				<tr>
					<td><input type="password" form="membership" name="user_password" class="inputbox" id="member_password1" class="member_password"></td>
				</tr>
				<tr>
					 <td id="password_warning" class="member_text_warning"></td>
				</tr>
				<tr>
					<th class="member_text">비밀번호 확인</th>
				</tr>
				<tr>
					<td ><input type="password" form="membership" id="member_password2" class="inputbox"></td>
				</tr>
				<tr>
					 <td id="password_check_warning" class="member_text_warning"></td>
				<tr>
					<th class="member_text">닉네임</th>
				</tr>
				<tr>
					<td> <input type="text" form="membership" class="inputbox" name="user_nickname" id="member_nickname"></td>
				</tr>
				<tr>
					 <td  id="nickname_warning"  class="member_text_warning"></td>
				</tr>
				<tr>
					<th class="member_text">이름</th> 	
				</tr>
				<tr>
					<td><input type="text" form="membership" class="inputbox" name="user_name" id=member_name></td>
				</tr>
				<tr>
					 <td id="name_warning"  class="member_text_warning"></td>
				<tr>
					<th class="member_text">전화번호</th>
				</tr>
				<tr>
					<td><input type="text" form="membership" class="inputbox" name="user_phonenumber" id=member_phone maxlength='11' ><button id="phone_check">인증확인</button></td>
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
						<input type="text" form="membership" class="inputbox" name="user_year"  id=member_year>
						
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
					
					<input type="text" form="membership" class="inputbox" name="user_day"   id=member_day>
					</td>
				</tr>
				<tr>
					 <td id="birth_warning"  class="member_text_warning"></td>
				</tr>
				<tr>
					<th class="member_text">주소</th>
				</tr>
				<tr>
					<th ><input type="text"  form="membership"name="user_zonecode"  id="user_add_code" readonly> <button id="add_code_search">우편번호</button> </th>
					<th><input form="membership" type="hidden" id="sido" name="user_sido"/></th>
					<th><input form="membership" type="hidden" id="sigungu" name="user_sigungu"/></th>
					<th><input form="membership" type="hidden" id="roadname" name="user_roadname"/></th>
				</tr>
				<tr>	
					<th><input type="text" id="user_add_city" readonly></th>
				</tr>
				<tr>
					<th><input type="text" class="inputbox" name="user_address" form="membership" id="user_add_detail"></th>
				</tr>	
				<tr>
					<th id="address_warning"  class="member_text_warning"></th>
				</tr>
				   <tr>
					<th class="member_text">성별</th>
				</tr>
				<tr>
					<td>
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
					<th><input type="submit" id="member_sub2"  value="회원가입" form="membership"></th>
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
	<script src="<%=request.getContextPath() %>/resources/membershipJS/membership.js" charset="UTF-8"></script>
	<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</body>
</html>
    			
    			
		
    	
    		
    		
    		
