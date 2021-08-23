// user_email = document.getElementById("user_email");
// user_password = document.getElementById("user_password");
const login_warning = document.getElementById("login_warning");
const login = document.getElementById("login");
const xhttp = new XMLHttpRequest();


login_loginbtn.onclick = (event) => {
		
	var user_email = this.user_email.value;
	var user_password = this.user_password.value;
	
	event.preventDefault();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target
		const status = e.target.status;
		const readyState = target.readyState;

		if(status == 200 && readyState == 4) {
		if(e.target.responseText == "아이디 혹은 비빌번호가 틀렸습니다"){
			login_warning.innerHTML = e.target.responseText;
			console.log("반복확인");
		} else {
			console.log("dd");
			gocontroller();
			console.log(e.target.responseText);
		} 
	} 
});
	
	var logindata = {
			user_email : user_email,
			user_password : user_password
		}

	xhttp.open('POST', '/travelShare/loginrest/loginWarning', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(JSON.stringify(logindata));
	
};

function gocontroller() {
	
//	var logindata = {
//			user_email : user_email,
//			user_password : user_password
//		}

	var user_email = this.user_email.value;
	var user_password = this.user_password.value;

	var logindata = "user_email="+user_email+'&user_password='+user_password;
	$.ajax({
    url: '../login',
    type: 'POST',
    data: logindata,
    success: function (data) {
            alert("데이터 전송이 성공적으로 끝났을 때 실행");
    }
});

	
}



