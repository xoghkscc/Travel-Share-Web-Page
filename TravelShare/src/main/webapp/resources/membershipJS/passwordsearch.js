const user_email = document.getElementById("user_email");
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
		
	if(checkNum.value != phone_check.value && user_phone.value != "" || checkNum.value == ""){
		phone_warning.innerHTML = "휴대전화 인증을 해주세요";
	} else {
		phone_warning.innerHTML = "인증되었습니다";
	} 
});

password_sub.addEventListener('click', (event) => {
	
	event.preventDefault();
	
	if(phone_warning.innerHTML != "인증되었습니다" || user_email.value == ""){
		event.preventDefault();
	}
	
	if(user_email.value == ""){
		alert("이름을 입력해주세요");
	} else if (phone_warning.innerHTML != "인증되었습니다") {
		alert("휴대전화 인증을 해주세요");
	} else {
		
	var user_email_val = user_email.value;
	var user_phonenumber_val = user_phone.value;
	
	console.log(user_email_val);
	console.log(user_phonenumber_val);
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target
		const status = e.target.status;
		const readyState = target.readyState;
		console.log("xhttp");
		if(status == 200 && readyState == 4) {
			console.log(e.target.responseText);
		if(e.target.responseText == "틀렸습니다"){
			console.log(e.target.responseText);
			alert("아이디 혹은 전화번호가 틀렸거나 없는 아이디입니다.");
		} else {
			location.href = "../membership/passwordchange";
		}
	  }
	});
	 
	var passworddata = {
			user_email : user_email_val,
			user_phonenumber : user_phonenumber_val
		}

	xhttp.open('POST', '/travelShare/membershiprest/passwordWarning', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(JSON.stringify(passworddata));
	}	
});


