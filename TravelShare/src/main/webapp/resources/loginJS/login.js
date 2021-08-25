// user_email = document.getElementById("user_email");
// user_password = document.getElementById("user_password");
const login_warning = document.getElementById("login_warning");
const login = document.getElementById("login");


login_loginbtn.onclick = (event) => {
	const xhttp = new XMLHttpRequest();
		
	var user_email = this.user_email.value;
	var user_password = this.user_password.value;
	
	event.preventDefault();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = e.target.status;
		const readyState = target.readyState;
		if(status == 200 && readyState == 4) {
			if(target.responseText == 1){
				login_warning.innerHTML = "아이디 혹은 비밀번호가 틀렸습니다.";
			} else {
				gocontroller();
				location.href = "../site/index";
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
});

	
}



