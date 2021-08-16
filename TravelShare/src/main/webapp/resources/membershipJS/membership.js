//input 값
const member_email = document.getElementById("member_email");
const member_password1 = document.getElementById("member_password1");
const member_password2 = document.getElementById("member_password2");
const member_nickname = document.getElementById("member_nickname");
const member_name = document.getElementById("member_name");
const member_phone = document.getElementById("member_phone");
const member_year = document.getElementById("member_year");
const member_month = document.getElementById("member_month");
const member_day = document.getElementById("member_day");
const member_gender = document.getElementById("member_gender");
const member_sub2 = document.getElementById("member_sub2");

const email_warning = document.getElementById("email_warning");
const password_warning = document.getElementById("password_warning");	
const password_check_warning = document.getElementById("password_check_warning");
const nickname_warning = document.getElementById("nickname_warning");
const name_warning = document.getElementById("name_warning");
const phone_warning = document.getElementById("phone_warning");
const birth_warning = document.getElementById("birth_warning");
const gender_warning = document.getElementById("gender_warning");

const chkStyle = /^[0-9]*$/;

member_email.addEventListener('blur', () => {
	const email_val = member_email.value;

	if(email_val == ""){
		email_warning.innerHTML = "필수 정보입니다"
	} else if(!email_check(email_val)){
		email_warning.innerHTML = "이메일 형식에 맞게 입력해주세요"
	}  else {
		email_warning.innerHTML = ""
	} 
	
	function email_check(email_val) {

	var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(email_val);

}
	
});

member_password1.addEventListener('blur', () => {
	
	const member_input = member_password1.value;
	var pw = member_input;
	var num = pw.search(/[0-9]/g);
 	var eng = pw.search(/[a-z]/ig);
 	var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
	
	if(member_input == "") {
	password_warning.innerHTML = "필수 정보입니다";
	} else if(pw.length < 8 || pw.length > 20){
  	password_warning.innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
 	}else if(pw.search(/\s/) != -1){
 	password_warning.innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
 	}else if(num < 0 || eng < 0 || spe < 0 ){
  	password_warning.innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
 	} else {
    password_warning.innerHTML = "적합한 비밀번호입니다";
	}
});

member_password2.addEventListener('blur', () => {
	
	const password = member_password1.value;
	const member_input = member_password2.value;
	if(member_input == "") {
	password_check_warning.innerHTML = "필수 정보입니다";
	} else if(member_input != password){
	password_check_warning.innerHTML = "비밀번호가 일치하지 않습니다";
	} else {

    password_check_warning.innerHTML = "비밀번호가 일치합니다";
	}
	
});

member_nickname.addEventListener('blur', () => {
	
	const nickname_val = member_nickname.value;

	if(nickname_val == ""){
		nickname_warning.innerHTML = "필수 정보입니다"
	}  else {
		nickname_warning.innerHTML = ""
	} 
});

member_name.addEventListener('blur', () => {
	
	const name_val = member_name.value;

	if(name_val == ""){
		name_warning.innerHTML = "필수 정보입니다"
	}  else {
		name_warning.innerHTML = ""
	} 
});

member_phone.addEventListener('blur', () => {
	
	const phone_val = member_phone.value;
	var phone = Number(phone_val);
	
	if(!chkStyle.test(phone)){
		phone_warning.innerHTML = "숫자만 입력해주세요"
	} else if (phone_val.length < 9) {
		phone_warning.innerHTML = "9자리 이상 입력해주세요"
	} else if(phone_val == ""){
		phone_warning.innerHTML = "필수 정보입니다"
	}  else {
		phone_warning.innerHTML = ""
	} 
});

member_year.addEventListener('blur', () => {
	
	const year_val = member_year.value;
	const day_val = member_day.value;
	const month_val = member_month.value;
	var year = Number(year_val);
	var month = Number(month_val);
	var day = Number(day_val);
	var today = new Date(); 
	var yearNow = today.getFullYear(); 

	if(!chkStyle.test(year)){
  		birth_warning.innerHTML = "숫자만 입력해주세요"
	} else if(year_val == "" ) {
		birth_warning.innerHTML = "필수 정보입니다"
	} else if(year_val.length < 4) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} else if (year_val.length > 4) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
    } else if ((year_val.length) == 4) { 
	 if (1900 > year || year > yearNow){ 
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} else if (!chkStyle.test(day) && day_val.length != 0){
  	  birth_warning.innerHTML = "숫자만 입력해주세요"
	} else {
 	 if ((day < 1 || day > 31) && day_val.length != 0) { 
		birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 
  	} else if ((month==4 || month==6 || month==9 || month==11) && day >=31 ) {
	 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 
 	}  else if (month == 2 && day_val != "") { 
	var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
	if (day>29 || (day==29 && !isleap)) {
		 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요"  
	} else { 
		birth_warning.innerHTML = ""
	} 
  }	else {
	birth_warning.innerHTML = ""
	}
  } 
 }
});
	
	

member_month.addEventListener('blur', () => {
	const year_val = member_year.value;
	const day_val = member_day.value;
	const month_val = member_month.value;
	var year = Number(year_val);
	var month = Number(month_val);
	var day = Number(day_val);
	var today = new Date(); 
	var yearNow = today.getFullYear(); 
	
	if(!chkStyle.test(year)){
  		birth_warning.innerHTML = "숫자만 입력해주세요요"
	} else if(year_val.length < 4 && year_val.length != 0) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} else if (year_val.length > 4 && year_val.length != 0) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
    } else if (!chkStyle.test(day) && day_val.length != 0){
  	  birth_warning.innerHTML = "숫자만 입력해주세요"
	} else {
	if(month_val == ""){
		birth_warning.innerHTML = "필수 정보입니다"
	} else if (month < 1 || month > 12) { 
		birth_warning.innerHTML = "태어난 월을 선택하세요"
	} else if ((day < 1 || day > 31) && day_val.length != 0) {
		birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 
	} else if ((month==4 || month==6 || month==9 || month==11) && day >=31 && day_val.length != 0) {
	 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 
		console.log("2");
	} else if (month == 2 && year_val.length != 0 && day_val.length != 0) { 
	var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
	if (day>29 || (day==29 && !isleap)) {
		 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요"  
		console.log("3");
	} else { 
		birth_warning.innerHTML = ""
	} 
  }	else {
	birth_warning.innerHTML = ""
 	}
  }
	
	if ((year_val.length) == 4 && year_val.length != 0 && (1900 > year || year > yearNow)) { 
	  birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} 
	
});

member_day.addEventListener('blur', () => {
	
	const year_val = member_year.value;
	const day_val = member_day.value;
	const month_val = member_month.value;
	var year = Number(year_val);
	var month = Number(month_val);
	var day = Number(day_val);
	var today = new Date(); 
	var yearNow = today.getFullYear(); 
	
	if(!chkStyle.test(year)){
  		birth_warning.innerHTML = "숫자만 입력해주세요"
	} else if(year_val.length < 4 && year_val.length != 0) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} else if (year_val.length > 4 && year_val.length != 0) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
    } else {
	if(day_val == ""){
		birth_warning.innerHTML = "필수 정보입니다"
	 } else if (!chkStyle.test(day)) {
  		birth_warning.innerHTML = "숫자만 입력해주세요"
	 }  else if (day < 1 || day > 31) { 
		birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 

	} else if ((month==4 || month==6 || month==9 || month==11) && day>=31) {
	 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 

	} else if (month == 2) { 
	var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
	if (day>29 || (day==29 && !isleap)) {
		 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요"  
	} else { 
		birth_warning.innerHTML = ""
	} 
  }	else {
	birth_warning.innerHTML = ""
	}
  }

	if ((year_val.length) == 4 && year_val.length != 0 && (1900 > year || year > yearNow)) { 
	  birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} 

});


member_gender.addEventListener('blur', () => {
	
	const gender_val = member_gender.value;

	if(gender_val == ""){
		gender_warning.innerHTML = "필수 정보입니다"
	} else {
		gender_warning.innerHTML = ""
	} 
});



member_sub2.addEventListener('click', () => {
	
	const email_val = member_email.value;
	const password1_val = member_password1.value;
	const password2_val = member_password2.value;
	const nickname_val = member_nickname.value;
	const name_val = member_name.value;
	const phone_val = member_phone.value;
	const year_val = member_year.value;
	const month_val = member_month.value;
	const day_val = member_day.value;
	const gender_val = member_gender.value;

	if(email_val == ""){
		email_warning.innerHTML = "필수입력 정보입니다"
	} else {
		email_warning.innerHTML = ""
	} 
	
	if (password1_val == "") {
		password_warning.innerHTML = "필수입력 정보입니다"
	} else {
		password_warning.innerHTML = ""
	} 
	
	if (password2_val == "") {
		password_check_warning.innerHTML = "필수입력 정보입니다"
	} else {
		password_check_warning.innerHTML = ""
	} 
	
	if (nickname_val == "") {
		nickname_warning.innerHTML = "필수입력 정보입니다"
	} else {
		nickname_warning.innerHTML = ""
	} 
	
	if (name_val == "") {
		name_warning.innerHTML = "필수입력 정보입니다"
	} else {
		name_warning.innerHTML = ""
	} 
	
	if (phone_val == "") {
		phone_warning.innerHTML = "필수입력 정보입니다"
	} else {
		phone_warning.innerHTML = ""
	} 
	
	if (year_val == "" && month_val == "" && day_val == "") {
	
	} else if (year_val == "" || month_val == "" || day_val == "") {
		birth_warning.innerHTML = "생년월일을 똑바로 입력해주세요"
	} else {
		birth_warning.innerHTML = ""

	} 
	
	if (gender_val == "") {
		gender_warning.innerHTML = "필수입력 정보입니다"
	} else {
		gender_warning.innerHTML = ""
	} 
});

