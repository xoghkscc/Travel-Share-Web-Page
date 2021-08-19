const member_email = document.getElementById("member_email");
const email_warning = document.getElementById("email_warning");

member_email.addEventListener('blur', () => {
	const xhttp = new XMLHttpRequest();
	
	const member_email_val = member_email.value;
	
	console.log(member_email.value);
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target
		const status = e.target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4) {
		email_warning.innerHTML = e.target.responseText;
	
		}
	});

	xhttp.open('POST', '/travelShare/membershiprest/emailwarning', true);
	xhttp.send(member_email_val);
	
})