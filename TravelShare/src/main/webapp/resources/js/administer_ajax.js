/**
 * 
 */
const admin_main = document.querySelector('.admin_main');
const admin_member_count = document.querySelector('.admin_member_count');
const admin_allContainer = document.getElementsByClassName('admin_allContainer');
const tbodyclass = document.querySelector('.tbodyclass');
const tbodyclass_admin = document.querySelector('.tbodyclass_admin');
const admin_btn = document.getElementsByClassName('admin_btn');

//테이블선택값

   tbodyclass.addEventListener('click', tableTrClick);
   tbodyclass_admin.addEventListener('click', tableTrClick);

function tableTrClick(e) {
    console.log(e.target);
    console.log(e.target.parentNode.children[0].innerText);
	const admin_changeName = e.target.parentNode.children[0].innerText;
	
	
        if (!confirm(`${admin_changeName}님을 선택하셨습니다. 확인(예) 또는 취소(아니오)를 선택해주세요.`)) {
            alert("취소(아니오)를 누르셨습니다.");
        } else {
            alert("확인(예)을 누르셨습니다.");
        }
    
}
	
for(let i=0; i<admin_btn.length; i++){
	
	admin_btn[i].addEventListener('click', admin_ajax_func);
}

//admin_member.addEventListener('click', admin_ajax_func);
function admin_ajax_func(e){
	
	
	const targetIndex = e.target.dataset.index;
	
	for(let i=0; i < admin_allContainer.length; i++){
		if(i == targetIndex){
			admin_allContainer[i].style.display = "block";
		}else{
			admin_allContainer[i].style.display = "none";
		}	
	};

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
		
			console.log(myobj);
			tbodyclass.innerHTML = "";
			tbodyclass_admin.innerHTML = "";
			admin_member_count.innerHTML = "";
			admin_member_count.innerHTML = `총 회원수 : ${myobj.length}`;
			
			for(i=0; i < myobj.length; i++){
				let name = myobj[i].userName;
				let age = myobj[i].userAge;
				let gender = myobj[i].userGender;
				let email = myobj[i].userEmail;
				let post = myobj[i].numberOfPost;
				let warning = myobj[i].userWarning;
				let position = myobj[i].userPosition;
				
				const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const td4 = document.createElement("td");

				tr.style.border = "solid black 1px";
				tr.style.height = "30px";
				
				const nameAppend = document.createTextNode(name);
				const ageAppend = document.createTextNode(age);
				const genderAppend = document.createTextNode(gender);
				const emailAppend = document.createTextNode(email);
				const postAppend = document.createTextNode(post);
				const warningAppend = document.createTextNode(warning);
				const positionAppend = document.createTextNode(position);
				
				td1.appendChild(nameAppend);
				td2.appendChild(ageAppend);
				td3.appendChild(genderAppend);
				
				if(targetIndex == 0){
					console.log('1번 append');
					td4.appendChild(emailAppend);		
				}else if(targetIndex == 1){
					console.log('2번 append');
					td4.appendChild(positionAppend);
				}
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				
				if(targetIndex == 0){
					tbodyclass.appendChild(tr);							
				}else if(targetIndex == 1){
					tbodyclass_admin.appendChild(tr);											
				}
		
			}

		}
	});
	
	if(targetIndex == 0){
		console.log('1번 open');
		xhttp.open('GET', '/travelShare/rest/searching', true);		
	}else if(targetIndex == 1){
		console.log('2번 open');
		xhttp.open('GET', '/travelShare/rest/admin_position', true);	
	}
	
	xhttp.send();
}