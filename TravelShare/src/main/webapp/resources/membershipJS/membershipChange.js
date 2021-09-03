//input 값
const member_nickname = document.getElementById("member_nickname");
const member_name = document.getElementById("member_name");
const member_phone = document.getElementById("member_phone");
const member_year = document.getElementById("member_year");
const member_month = document.getElementById("member_month");
const member_day = document.getElementById("member_day");
const member_gender = document.getElementById("member_gender");
const member_sub2 = document.getElementById("member_sub2");
const user_add_code = document.getElementById("user_add_code");
const user_add_city = document.getElementById("user_add_city");
const user_add_detail = document.getElementById("user_add_detail");
const phoneCheckInput = document.getElementById("phoneCheckInput");
const checkNum = document.getElementById("checkNum");
const hiddengender = document.getElementById("hiddengender");
const hiddenmonth = document.getElementById("hiddenmonth");
const hiddenphone = document.getElementById("hiddenphone");

const nickname_warning = document.getElementById("nickname_warning");
const name_warning = document.getElementById("name_warning");
const phone_warning = document.getElementById("phone_warning");
const birth_warning = document.getElementById("birth_warning");
const gender_warning = document.getElementById("gender_warning");
const adderss_warning = document.getElementById("address_warning");

const chkStyle = /^[0-9]*$/;
window.onload = getgender();
window.onload = getmonth();
window.onload = checkphone();

function checkphone() {

	phone_warning.innerHTML = "인증되었습니다";
	checkNum.value = "1234";
}

function getgender() {

	if(hiddengender.value == "남"){
		member_gender.children[1].selected = true;
	} else if (hiddengender.value == "여") {
		member_gender.children[2].selected = true;
	} else if (hiddengender.value == "선택안함") {
		member_gender.children[2].selected = true;
	}
	 
}

function getmonth() {

	if(hiddenmonth.value == "1"){
		member_month.children[1].selected = true;
	} else if (hiddenmonth.value == "2") {
		member_month.children[2].selected = true;
	} else if (hiddenmonth.value == "3") {
		member_month.children[3].selected = true;
	} else if (hiddenmonth.value == "4") {
		member_month.children[4].selected = true;
	} else if (hiddenmonth.value == "5") {
		member_month.children[5].selected = true;
	} else if (hiddenmonth.value == "6") {
		member_month.children[6].selected = true;
	} else if (hiddenmonth.value == "7") {
		member_month.children[7].selected = true;
	} else if (hiddenmonth.value == "8") {
		member_month.children[8].selected = true;
	} else if (hiddenmonth.value == "9") {
		member_month.children[9].selected = true;
	} else if (hiddenmonth.value == "10") {
		member_month.children[10].selected = true;
	} else if (hiddenmonth.value == "11") {
		member_month.children[11].selected = true;
	}  else if (hiddenmonth.value == "12") {
		member_month.children[12].selected = true;
	}
	 
}	
 

member_nickname.addEventListener('blur', () => {
	
	const nickname_val = member_nickname.value;
	const xhttp = new XMLHttpRequest();
	if(nickname_val == ""){
		nickname_warning.innerHTML = "필수 정보입니다";
	}  else {
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target
		const status = e.target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4) {
		nickname_warning.innerHTML = e.target.responseText;
	
		}
	});

	xhttp.open('POST', '/travelShare/membershiprest/nicknamechange', true);
	xhttp.send(nickname_val);
	} 
	 
});

member_name.addEventListener('blur', () => {
	
	const name_val = member_name.value;

	if(name_val == ""){
		name_warning.innerHTML = "필수 정보입니다";
	}  else {
		name_warning.innerHTML = "";
	} 
});

member_phone.addEventListener('blur', () => {
	
	const phone_val = member_phone.value;
	var phone = Number(phone_val);
	
	if(!chkStyle.test(phone)){
		phone_warning.innerHTML = "숫자만 입력해주세요";
	} else if (phone_val.length < 9) {
		phone_warning.innerHTML = "9자리 이상 입력해주세요";
	} else if(phone_val == ""){
		phone_warning.innerHTML = "필수 정보입니다";
	} else if(phone_val == hiddenphone.value){
		phone_warning.innerHTML = "인증되었습니다";
		checkNum.value = "1234";
	} else if(phone_val != hiddenphone.value){
		checkNum.value = "";
		phone_warning.innerHTML = "";
	} else {
		phone_warning.innerHTML = "";
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
  		birth_warning.innerHTML = "숫자만 입력해주세요";
	} else if(year_val == "" ) {
		birth_warning.innerHTML = "필수 정보입니다";
	} else if(year_val.length < 4) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
	} else if (year_val.length > 4) {
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
    } else if ((year_val.length) == 4) { 
	 if (1900 > year || year > yearNow){ 
		birth_warning.innerHTML = "태어난 년도 4자리를 정확하게 입력하세요."
	} else if (!chkStyle.test(day) && day_val.length != 0){
  	  birth_warning.innerHTML = "숫자만 입력해주세요";
	} else {
 	 if ((day < 1 || day > 31) && day_val.length != 0) { 
		birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 
  	} else if ((month==4 || month==6 || month==9 || month==11) && day >=31 ) {
	 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요" 
 	}  else if (month == 2 && day_val != "") { 
	var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
	if (day>29 || (day==29 && !isleap)) {
		 birth_warning.innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요";
	} else { 
		birth_warning.innerHTML = "";
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

user_add_detail.addEventListener('blur', () => {

	 user_add_detail_val = user_add_detail.value;
	 user_add_code_val = user_add_code.value;
	 user_add_city_val = user_add_city.value;
	if(user_add_detail_val == "" || user_add_code_val == "" || user_add_city_val == "") {
		adderss_warning.innerHTML = "필수정보입니다";
	} else {
		address_warning.innerHTML = "";
	}	

});


member_gender.addEventListener('blur', () => {
	
	const gender_val = member_gender.value;
	
	if(gender_val == ""){
		gender_warning.innerHTML = "필수 정보입니다";
	} else {
		gender_warning.innerHTML = "";
	} 
});


phone_check.addEventListener('click', () => {
	const xhttp = new XMLHttpRequest();
	const member_phone_val = member_phone.value;
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target
		const status = e.target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4) {
		checkNum.value = e.target.responseText;
		}
	});
	xhttp.open('POST', '/travelShare/membershiprest/phoneCheck', true);
	xhttp.send(member_phone_val);
	
});

phoneCheckInput.addEventListener('blur', () => {
		
	const member_phone_val = member_phone.value;
	if(phone_val == hiddenphone.value) {
		phone_warning.innerHTML = "인증되었습니다";
	} else if(phone_val != hiddenphone.value){
		checkNum.value = "";
		phone_warning.innerHTML = "휴대폰인증 하셔야합니다";	
	} else if((checkNum.value != phoneCheckInput.value && member_phone_val.value != "") || member_phone_val != hiddenphone.value){
		phone_warning.innerHTML = "휴대폰인증 하셔야합니다";	
	} else {
		phone_warning.innerHTML = "인증되었습니다";
	} 
});

member_sub2.addEventListener('click', (event) => {
	
	const nickname_val = member_nickname.value;
	const name_val = member_name.value;
	const phone_val = member_phone.value;
	const year_val = member_year.value;
	const month_val = member_month.value;
	const day_val = member_day.value;
	const gender_val = member_gender.value;
	const user_add_code_val = user_add_code.value;
	const user_add_detail_val = user_add_detail.value;
	
	
	if(nickname_warning.innerHTML != "" || name_warning.innerHTML != "" || phone_warning.innerHTML != "인증되었습니다" || checkNum.value == "" ||
	   birth_warning.innerHTML != "" || adderss_warning.innerHTML != "" || gender_val == "-- 성별 --" || nickname_val == "" ||
	   name_val == ""	|| phone_val == "" || year_val == "" || month_val == "-- 월 --" || day_val == "" || 
	   user_add_code_val == "" || user_add_detail_val == ""
	){	
		event.preventDefault();
	} else {
		alert("정보수정이 완료되었습니다");
	}
	
	
	if (nickname_val == "") {
		nickname_warning.innerHTML = "필수입력 정보입니다";
	} else if(nickname_warning.innerHTML == "이미 존재하는 닉네임입니다") {
		nickname_warning.innerHTML = "이미 존재하는 닉네임입니다";	
	} else {
		nickname_warning.innerHTML = "";
	} 
	
	if (name_val == "") {
		name_warning.innerHTML = "필수입력 정보입니다";
	} else {
		name_warning.innerHTML = "";
	} 
	
	if (phone_val == "") {
		phone_warning.innerHTML = "필수입력 정보입니다";
	} else if(phone_val == hiddenphone.value) {
		phone_warning.innerHTML = "인증되었습니다";
	} else if(phone_warning.innerHTML == "올바른 전화번호 양식를 입력해주세요" || phone_warning.innerHTML == "9자리 이상 입력해주세요" || phone_warning.innerHTML == "숫자만 입력해주세요") {
		phone_warning.innerHTML = "올바른 전화번호 양식를 입력해주세요";	
	} else if(phone_warning.innerHTML == "인증번호가 틀립니다" || checkNum.value =="" || phone_warning.innerHTML == "휴대폰 인증하셔야 합니다") {
		phone_warning.innerHTML = "휴대폰인증 하셔야합니다";
	}  else {
		phone_warning.innerHTML = "인증되었습니다";
	} 
	
	if (year_val == "" && month_val == "" && day_val == "") {
		birth_warning.innerHTML = "생년월일을 똑바로 입력해주세요";
	} else if (year_val == "" || month_val == "" || day_val == "") {
		birth_warning.innerHTML = "생년월일을 똑바로 입력해주세요";
	}  else if(birth_warning.innerHTML != "") {
		birth_warning.innerHTML = "생년월일을 똑바로 입력해주세요";	
	} else {
		birth_warning.innerHTML = "";

	} 
	
	if (gender_val == "-- 성별 --" ) {
		gender_warning.innerHTML = "필수입력 정보입니다";
	} else {
		gender_warning.innerHTML = "";
	} 
	
	if (user_add_code_val == "" || user_add_detail_val == ""){
		address_warning.innerHTML = "필수입력 정보입니다";
	} else {
		address_warning.innerHTML = "";
	} 
	
});


window.onload = function(){
document.getElementById("add_code_search").addEventListener('click', (e) => {
        
	  	new daum.Postcode({
                    oncomplete: function (data) {
                        document.getElementById('user_add_code').value = data.zonecode; //5자리 새우편번호 사용
                        document.getElementById('user_add_city').value = data.jibunAddress; //전체 주소
                        document.getElementById('user_add_detail').value = data.buildingName; //상세 주소
                        document.getElementById('user_add_detail').focus();
						document.getElementById('sido').value = data.sido; //시도
                        document.getElementById('sigungu').value = data.sigungu; //시/군/구
                        document.getElementById('roadname').value = data.roadname;
                    }
                }).open();
            });
	}
	
function email_check(email_val) {

	var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return reg.test(email_val);

}	
