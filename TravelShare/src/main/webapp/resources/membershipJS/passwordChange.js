const password_change = document.getElementById("password_change_input");
const password_check = document.getElementById("password_check_input");
const passwordchange_sub = document.getElementById("passwordchange_sub");

const password_warning = document.getElementById("password_warning");
const password_check_warning = document.getElementById("password_check_warning");
password_change.addEventListener('blur', () => {
	
	const member_input = password_change.value;
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

password_check.addEventListener('blur', () => {
	
	const password = password_change.value;
	const member_input = password_check.value;
	if(member_input == "") {
	password_check_warning.innerHTML = "필수 정보입니다";
	} else if(member_input != password){
	password_check_warning.innerHTML = "비밀번호가 일치하지 않습니다";
	} else {

    password_check_warning.innerHTML = "비밀번호가 일치합니다";
	}
	
});

passwordchange_sub.addEventListener('click', (event) => {
	
	const password1_val = password_change.value;
	const password2_val = password_check.value;
	
	if(password_warning.innerHTML != "적합한 비밀번호입니다" ||
	 	password_check_warning.innerHTML != "비밀번호가 일치합니다"
	){	
		console.log("무언가 조건에걸림");
		event.preventDefault();
	} else {
		alert("비밀번호가 변경되었습니다");
	}
	
	if (password1_val == "") {
		password_warning.innerHTML = "필수입력 정보입니다";
	}else if(password_warning.innerHTML == "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.") {
		password_warning.innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
	} else {
		password_warning.innerHTML = "적합한 비밀번호입니다";
	} 
	
	if (password2_val == "") {
		password_check_warning.innerHTML = "필수입력 정보입니다";
	} else if(password_check_warning.innerHTML == "비밀번호가 일치하지 않습니다") {
		password_check_warning.innerHTML = "비밀번호가 일치하지 않습니다";
	} else {
		password_check_warning.innerHTML = "비밀번호가 일치합니다";
	}
});