const user_name = document.getElementById("user_name");
const user_phone = document.getElementById("user_phone");
const check_button = document.getElementById("check_button");
const checkNum = document.getElementById("checkNum");
const phone_warning = document.getElementById("phone_warning");
const phone_check = document.getElementById("phone_check");
const xhttp = new XMLHttpRequest();

const user_phone_val = document.getElementById("user_phone").value;

user_phone.addEventListener('keyup', (e) => {
    if((e.key >= 0 && e.key <=9) ||
        e.key == "Backspace" ||
        e.key == "ArrowLeft" ||
        e.key == "ArrowRight" ||
        e.key == "ArrowDown" ||
        e.key == "ArrowUp"   ||
        e.key == "Tab" ||
        e.key == "Enter"
    ) {
        return true;
    } else {
        alert("숫자만 입력해주세요");
        document.getElementById("user_phone").value ='';
        return false;
    }
});

check_button.addEventListener('click', () => {
	
	const user_phone_val = document.getElementById("user_phone").value;
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target
		const status = e.target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4) {
		checkNum.value = e.target.responseText;
	
		}
	});
	console.log(user_phone_val);
	xhttp.open('POST', '/travelShare/membershiprest/phoneCheck', true);
	xhttp.send(user_phone_val);
	
});

phone_check.addEventListener('blur', () => {
		
	if(checkNum.value != phone_check.value && user_phone.value != ""){
		phone_warning.innerHTML = "인증되었습니다";
	} else {
		phone_warning.innerHTML = "인증되었습니다";
	} 
});

idsearch_sub.addEventListener('click', (event) => {
	if(phone_warning.innerHTML != "인증되었습니다" || user_name.value == ""){
		event.preventDefault();
	}
	
	if(user_name.value == ""){
		alert("이름을 입력해주세요");
	} else if (phone_warning.innerHTML != "인증되었습니다") {
		alert("휴대전화 인증을 해주세요");
	}
});

