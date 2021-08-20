/**
 * 
 */
const admin_main = document.querySelector('.admin_main');
const admin_hiddenAlarm = document.querySelector('.admin_hiddenAlarm');
const admin_member_count = document.querySelector('.admin_member_count');
const admin_allContainer = document.getElementsByClassName('admin_allContainer');
const tbodyclass = document.querySelector('.tbodyclass');
const tbodyclass_admin = document.querySelector('.tbodyclass_admin');
const tbodyclass_notice = document.querySelector('.tbodyclass_notice');
const tbodyclass_declare = document.querySelector('.tbodyclass_declare');
const tbodyclass_board = document.querySelector('.tbodyclass_board');
const admin_btn = document.getElementsByClassName('admin_btn');
const admin_hiddenBtn = document.querySelectorAll('.admin_hiddenBtn');

const noticeContentUpdate= document.querySelector('#noticeContentUpdate');
const noticeTitleUpdate= document.querySelector('#noticeTitleUpdate');
const notice_form= document.querySelector('#notice_form');
const notice_hiddenId= document.querySelector('#notice_hiddenId');
const updateDivForm = document.querySelector('.updateDivForm');

const admin_member_searchText = document.querySelector('.admin_member_searchText');
const admin_member_searchBtn = document.querySelector('.admin_member_searchBtn');
const admin_admin_searchText = document.querySelector('.admin_admin_searchText');
const admin_admin_searchBtn = document.querySelector('.admin_admin_searchBtn');


const admin_notice_paging = document.querySelector('.admin_notice_paging');

//테이블선택값

   tbodyclass.addEventListener('click', tableTrClick);
   tbodyclass_admin.addEventListener('click', tableTrClick);
   tbodyclass_notice.addEventListener('click', tableTrClick2);

function tableTrClick(e) {
	const admin_changeName = e.target.parentNode.children[0].innerText;
        if (!confirm(`${admin_changeName}님을 선택하셨습니다. 확인(예) 또는 취소(아니오)를 선택해주세요.`)) {
            alert("취소(아니오)를 누르셨습니다.");
        } else {
            alert("확인(예)을 누르셨습니다.");
        }
}
function tableTrClick2(e) {
	const admin_changeName = e.target.parentNode.children[1].innerText;
	noticeId = e.target.parentNode.children[0].innerText;
//	e.target.innerHTML = admin_changeName;
    admin_hiddenAlarm.style.display = "block";
}
let searchValue = "";
let searchChecking = 0;
let pagingChecking = 0;
let noticePaging = 0;
let noticeId = "";
let pagingNumBtn = 1;
let targetIndex;
admin_hiddenBtn[0].addEventListener('click', function(e){
	admin_hiddenAlarm.style.display = "none";
	alert("삭제를 누르셨습니다.");	
	location.href = `/travelShare/site/admin_delete?noticeId=${noticeId}`;	
});
admin_hiddenBtn[1].addEventListener('click', function(e){
	admin_hiddenAlarm.style.display = "none";
	alert("수정을 누르셨습니다.");	
	admin_allContainer[4].style.display = "none";
	updateDivForm.style.display = "block";	
	admin_ajax_funcUpdate();
});
admin_hiddenBtn[2].addEventListener('click', function(e){
	admin_hiddenAlarm.style.display = "none";
});


admin_btn[0].addEventListener('click', admin_ajax_func);
admin_btn[1].addEventListener('click', admin_ajax_func);
admin_btn[2].addEventListener('click', admin_ajax_func4);
admin_btn[3].addEventListener('click', admin_ajax_func);
admin_btn[4].addEventListener('click', admin_ajax_func4);


//1,2번 ajax
function admin_ajax_func(e){

	if(searchChecking == 0){
		targetIndex = e.target.dataset.index;
		
		for(let i=0; i < admin_allContainer.length; i++){
			if(i == targetIndex){
				admin_allContainer[i].style.display = "block";
			}else{
				admin_allContainer[i].style.display = "none";
			}	
			updateDivForm.style.display = "none";
		};		
	}

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
		
			tbodyclass.innerHTML = "";
			tbodyclass_admin.innerHTML = "";
			tbodyclass_declare.innerHTML = "";
			admin_member_count.innerHTML = "";
			admin_notice_paging.innerHTML = "";
			admin_member_count.innerHTML = `총 회원수 : ${myobj.length}`;
			
			for(i=0; i < myobj.length; i++){
				let id = myobj[i].user_id;
				let name = myobj[i].user_name;
				let ninkName = myobj[i].user_nickName;
				let birth = myobj[i].user_birth;
				let gender = myobj[i].user_gender;
				let email = myobj[i].user_email;
//				let post = myobj[i].numberOfPost;
				let warning = myobj[i].user_warning;
				let position = myobj[i].user_position;
				
				const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const td4 = document.createElement("td");
                const td5 = document.createElement("td");

				tr.style.border = "solid black 1px";
				tr.style.height = "30px";
				
				const nameAppend = document.createTextNode(name);
				const ninkNameAppend = document.createTextNode(ninkName);
				const birthAppend = document.createTextNode(birth);
				const genderAppend = document.createTextNode(gender);
				const emailAppend = document.createTextNode(email);
//				const postAppend = document.createTextNode(post);
				const warningAppend = document.createTextNode(warning);
				const positionAppend = document.createTextNode(position);
				
				td1.appendChild(nameAppend);
				td2.appendChild(ninkNameAppend);
				td3.appendChild(birthAppend);
				td4.appendChild(genderAppend);
				
				if(targetIndex == 0 || searchChecking == 1){
					td5.appendChild(emailAppend);		
				}else if(targetIndex == 1 || searchChecking == 2){
					td5.appendChild(positionAppend);
				}else if(targetIndex == 3){
					td5.appendChild(warningAppend);
				}
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				
				if(searchChecking == 1){
					searchChecking = 0;
					tbodyclass.appendChild(tr);	
				}else if(searchChecking == 2){
					searchChecking = 0;
					tbodyclass_admin.appendChild(tr);	
				}else if(targetIndex == 0){
					tbodyclass.appendChild(tr);							
				}else if(targetIndex == 1){
					tbodyclass_admin.appendChild(tr);											
				}else if(targetIndex == 3){
					tbodyclass_declare.appendChild(tr);											
				}
		
			}

		}
	});
	if(searchChecking == 1){
		console.log('searching open');
		xhttp.open('GET', `/travelShare/rest/admin_searching?noticeName=${searchValue}`, true);	
	}else if(searchChecking == 2){
		console.log('searching2 open');
		console.log(searchValue);
		xhttp.open('GET', `/travelShare/rest/admin_position_searching?noticeName=${searchValue}`, true);	
	}else if(targetIndex == 0){
		console.log('1번 open');
		xhttp.open('GET', '/travelShare/rest/searching', true);		
	}else if(targetIndex == 1){
		console.log('2번 open');
		xhttp.open('GET', '/travelShare/rest/admin_position', true);	
	}else if(targetIndex == 3){
		console.log("4번 open");
		xhttp.open('GET', '/travelShare/rest/admin_warning', true);
	}else if(targetIndex == 4){
		console.log("5번 open");
		xhttp.open('GET', '/travelShare/rest/admin_notice', true);
	}
	
	xhttp.send();
}


//3번 5번 ajax(게시판 등록을 위한 ajax)
function admin_ajax_func4(e){
	
	noticePaging=0;
	let pagingNumber = 0;
	
	if(pagingChecking == 0){
		targetIndex = e.target.dataset.index;
		
		for(let i=0; i < admin_allContainer.length; i++){
			if(i == targetIndex){
				admin_allContainer[i].style.display = "block";
			}else{
				admin_allContainer[i].style.display = "none";
			}	
			updateDivForm.style.display = "none";
		};		
	}

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
		
			tbodyclass_notice.innerHTML = "";
			admin_notice_paging.innerHTML = "";
			
			
//			let admin_arrLength = myobj.length;
//			console.log(admin_arrLength);
//			for(let i=0; admin_arrLength >= 1; i++){
//				admin_arrLength /= 10;
//				noticePaging++;
//			}
//			console.log("페이징",noticePaging);
			
			for(i=0; i < myobj.length; i++){
				
				//만들어야할 페이지버튼의 갯수를 알아보기위함
				noticePaging++;
				if(noticePaging % 10 == 1){
					const span = document.createElement("span");
					pagingNumber++;
					span.innerHTML = `${pagingNumber}`;
					admin_notice_paging.appendChild(span);					
				}
				
				//누른 페이지번호에 따라서 10개씩 출력하기위함 (처음에는 앞 10개출력)
				if((pagingNumBtn*10)-10 <= i && i < pagingNumBtn*10){
					let notice_id = myobj[i].notice_id;
					let user_id = myobj[i].user_id;
					let notice_title = myobj[i].notice_title;
					let notice_text = myobj[i].notice_text;
					let notice_lookupcnt = myobj[i].notice_lookupcnt;
					let notice_date = myobj[i].notice_date;
					
					var date = new Date(notice_date);
					
					const tr = document.createElement("tr");
	                const td1 = document.createElement("td");
	                const td2 = document.createElement("td");
	                const td3 = document.createElement("td");
	                const td4 = document.createElement("td");
	                const td5 = document.createElement("td");
	
					tr.style.border = "solid black 1px";
					tr.style.height = "30px";
					
					const user_id_Append = document.createTextNode(user_id);
					const notice_title_Append = document.createTextNode(notice_title);
					const notice_date_Append = document.createTextNode(date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));
					const notice_lookupcnt_Append = document.createTextNode(notice_lookupcnt);
					const notice_id_Append = document.createTextNode(notice_id);
					
					td1.appendChild(notice_id_Append);
					td2.appendChild(user_id_Append);
					td3.appendChild(notice_title_Append);
					td4.appendChild(notice_date_Append);
					td5.appendChild(notice_lookupcnt_Append);
					
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					tr.appendChild(td5);
					
					tbodyclass_notice.appendChild(tr);	
					
					//누른 페이지번호 초기화
					if(pagingChecking != 0){
						pagingChecking = 0;
					}	
				}
				
				
				
			}

		}
	});
	
	if(targetIndex == 2){
		console.log('3번 open');
		xhttp.open('GET', '/travelShare/rest/admin_board', true);		
	}else if(targetIndex == 4){
		console.log("5번 open");
		xhttp.open('GET', '/travelShare/rest/admin_notice', true);
	}
	
	xhttp.send();
}

//수정을 위한 ajax
function admin_ajax_funcUpdate(e){
		
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);

				let notice_id = myobj.notice_id;
				let user_id = myobj.user_id;
				let notice_title = myobj.notice_title;
				let notice_text = myobj.notice_text;
				let notice_lookupcnt = myobj.notice_lookupcnt;
				let notice_date = myobj.notice_date;

				const notice_title_Append = document.createTextNode(notice_title);
				const notice_content_Append = document.createTextNode(notice_text);

				noticeTitleUpdate.value = notice_title;
				CKEDITOR.instances.noticeContentUpdate.setData(notice_text);   

				notice_hiddenId.value = notice_id;

//				notice_form.action = `/travelShare/site/adminNotice?notice_id=${notice_id}`;

		}
	});
	

	xhttp.open('GET', `/travelShare/rest/admin_noticeUpdate?noticeId=${noticeId}`, true);		

	
	xhttp.send();
}

//검색기능
admin_member_searchBtn.addEventListener('click', admin_member_searchFunc);
admin_admin_searchBtn.addEventListener('click', admin_admin_searchFunc);


function admin_member_searchFunc(e){
	searchValue = admin_member_searchText.value;
	searchChecking = 1;
	admin_ajax_func();
//	location.href = `/travelShare/rest/searching?noticeName=${admin_member_searchText.value}`;
}
function admin_admin_searchFunc(e){
	searchValue = admin_admin_searchText.value;
//	console.log(searchValue);
	searchChecking = 2;
	admin_ajax_func();
//	location.href = `/travelShare/rest/searching?noticeName=${admin_member_searchText.value}`;
}

//페이징 클릭기능
admin_notice_paging.addEventListener('click', admin_notic_pagingFunc);

function admin_notic_pagingFunc(e){
	
	pagingNumBtn = e.target.innerText;
	pagingChecking = 1;
	isNaN(pagingNumBtn)? console.log("제대로선택해") : admin_ajax_func4();
}

const admin_notice_count = document.querySelectorAll('.admin_notice_count');
const admin_notice_write = document.querySelectorAll('.admin_notice_write');
admin_notice_count[0].addEventListener('click', admin_notice_countClick);
admin_notice_count[1].addEventListener('click', admin_notice_countClick);
admin_notice_write[0].addEventListener('click', admin_notice_writeClick);
admin_notice_write[1].addEventListener('click', admin_notice_writeClick);
function admin_notice_countClick(e){
	admin_notice_count[0].classList.add('admin_notice_menuBarAccept');
	admin_notice_count[1].classList.add('admin_notice_menuBarAccept');
	admin_notice_write[0].classList.remove('admin_notice_menuBarAccept')
	admin_notice_write[1].classList.remove('admin_notice_menuBarAccept')
	admin_allContainer[4].style.display = "block";
	admin_allContainer[5].style.display = "none";
}
function admin_notice_writeClick(e){
	admin_notice_write[0].classList.add('admin_notice_menuBarAccept')
	admin_notice_write[1].classList.add('admin_notice_menuBarAccept')
	admin_notice_count[0].classList.remove('admin_notice_menuBarAccept')
	admin_notice_count[1].classList.remove('admin_notice_menuBarAccept')
	admin_allContainer[4].style.display = "none";
	admin_allContainer[5].style.display = "block";
}