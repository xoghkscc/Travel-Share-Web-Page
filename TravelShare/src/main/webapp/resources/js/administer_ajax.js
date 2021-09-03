/**
 * 
 */
const admin_main = document.querySelector('.admin_main');
const admin_hiddenInnerText = document.querySelector('.admin_hiddenInnerText');
const admin_hiddenInnerText2 = document.querySelector('.admin_hiddenInnerText2');
const admin_hiddenInputText = document.querySelector('.admin_hiddenInputText');
const admin_hiddenAlarm = document.querySelector('.admin_hiddenAlarm');
const admin_hiddenAlarm2 = document.querySelector('.admin_hiddenAlarm2');
const admin_hiddenAlarm3 = document.querySelector('.admin_hiddenAlarm3');
const admin_member_count = document.querySelector('.admin_member_count');
const admin_allContainer = document.getElementsByClassName('admin_allContainer');
const tbodyclass = document.querySelector('.tbodyclass');
const tbodyclass_admin = document.querySelector('.tbodyclass_admin');
const tbodyclass_notice = document.querySelector('.tbodyclass_notice');
const tbodyclass_declare = document.querySelector('.tbodyclass_declare');
const tbodyclass_board = document.querySelector('.tbodyclass_board');
const admin_btn = document.getElementsByClassName('admin_btn');
const admin_hiddenBtn = document.querySelectorAll('.admin_hiddenBtn');
const admin_hiddenBtn2 = document.querySelectorAll('.admin_hiddenBtn2');
const admin_hiddenBtn3 = document.querySelectorAll('.admin_hiddenBtn3');

const noticeContentUpdate= document.querySelector('#noticeContentUpdate');
const noticeTitleUpdate= document.querySelector('#noticeTitleUpdate');
const notice_form= document.querySelector('#notice_form');
const notice_hiddenId= document.querySelector('#notice_hiddenId');
const updateDivForm = document.querySelector('.updateDivForm');

const admin_member_searchText = document.querySelector('.admin_member_searchText');
const admin_member_searchBtn = document.querySelector('.admin_member_searchBtn');
const admin_admin_searchText = document.querySelector('.admin_admin_searchText');
const admin_admin_searchBtn = document.querySelector('.admin_admin_searchBtn');
const admin_notice_searchText = document.querySelector('.admin_notice_searchText');
const admin_notice_searchBtn = document.querySelector('.admin_notice_searchBtn');
const admin_board_searchText = document.querySelector('.admin_board_searchText');
const admin_board_searchBtn = document.querySelector('.admin_board_searchBtn');
const admin_declare_searchText = document.querySelector('.admin_declare_searchText');
const admin_declare_searchBtn = document.querySelector('.admin_declare_searchBtn');


const admin_notice_paging = document.querySelector('.admin_notice_paging');
const admin_board_paging = document.querySelector('.admin_board_paging');

//테이블선택값

   tbodyclass.addEventListener('click', tableMemberTrClick);
   tbodyclass_admin.addEventListener('change', tableAdminTrClick);
   tbodyclass_board.addEventListener('click', tableBoardTrClick);
   tbodyclass_declare.addEventListener('click', tableDeclareTrClick);
   tbodyclass_notice.addEventListener('click', tableNoticeTrClick);

function tableMemberTrClick(e) {
	const admin_changeName = e.target.parentNode.children[0].innerText;
	const adminUserEmail = e.target.parentNode.children[4].innerText;
        if (!confirm(`${admin_changeName}님을 회원탈퇴 하시겠습니까?`)) {
        } else {
			location.href = `/travelShare/site/admin_user_delete?adminUserEmail=${adminUserEmail}`;
            alert(`${admin_changeName}님을 회원탈퇴하였습니다.`);
        }
}

function tableAdminTrClick(e) {
	const notice_changeName = e.target.parentNode.parentNode.children[0].innerText;
	const AdminNickName = e.target.parentNode.parentNode.children[1].innerText;
//	const AdminPositionValue = document.querySelector('#admin_selector').value;
	const AdminPositionValue = e.target.value;

	if (!confirm(`${notice_changeName}님의 직책을 ${AdminPositionValue}로 변경하시겠습니까?`)) {
    } else {
        alert("변경이 완료되었습니다.");
		location.href = `/travelShare/site/admin_position_update?AdminNickName=${AdminNickName}&AdminPositionValue=${AdminPositionValue}`;	
    }
}

function tableDeclareTrClick(e) {
	const declare_changeName = e.target.parentNode.children[0].innerText;
	declareNickName = e.target.parentNode.children[1].innerText;
        if (!confirm(`${declare_changeName}님의 신고 수를 수정하시겠습니까?`)) {
        } else {
			admin_hiddenAlarm3.style.display = "block";
        }
}

function tableBoardTrClick(e) {
	boardId = e.target.parentNode.children[0].innerText;
	const boardTitle = e.target.parentNode.children[2].innerText;
	
	admin_hiddenInnerText2.innerHTML = `글번호: ${boardId}<br> 제목: ${boardTitle}<br>`;
    admin_hiddenAlarm2.style.display = "block";
//	console.log(boardId);
//	if (!confirm(`글번호: ${boardTitle}<br> 제목: ${boardTitle}<br> 내용을 확인하시겠습니까?`)) {
//  
//    } else {
//		location.href = `/travelShare/site/admin_boardOne?boardId=${boardId}`;	
//    }
}

function tableNoticeTrClick(e) {
	const notice_changeName = e.target.parentNode.children[1].innerText;
	noticeId = e.target.parentNode.children[0].innerText;
//	e.target.innerHTML = admin_changeName;
	admin_hiddenInnerText.innerHTML = `${noticeId}번 게시글 선택하셨습니다.<br> 삭제, 수정, 취소를 선택해주세요.`;
    admin_hiddenAlarm.style.display = "block";
}
let searchValue = "";
let searchNoticeValue = "";
let searchBoardValue = "";
let searchChecking = 0;
let pagingChecking = 0;
let noticePaging = 0;
let noticeId = "";
let boardId = "";
let pagingNumBtn = 1;
let pagingNumBtn2 = 1;
let targetIndex;
let pageNextBtn = 0;
let adminPresentPage = 1;
let adminPresentPage2 = 1;
let declareNickName = "";
admin_hiddenBtn[0].addEventListener('click', function(e){
	admin_hiddenAlarm.style.display = "none";
	alert("삭제 되었습니다.");	
	admin_hiddenInnerText.innerHTML = "";
	location.href = `/travelShare/site/admin_delete?noticeId=${noticeId}`;	
});
admin_hiddenBtn[1].addEventListener('click', function(e){
	admin_hiddenAlarm.style.display = "none";
	admin_hiddenInnerText.innerHTML = "";
	admin_allContainer[4].style.display = "none";
	updateDivForm.style.display = "block";	
	admin_ajax_funcUpdate();
});
admin_hiddenBtn[2].addEventListener('click', function(e){
	admin_hiddenInnerText.innerHTML = "";
	admin_hiddenAlarm.style.display = "none";
});
admin_hiddenBtn2[0].addEventListener('click', function(e){
	admin_hiddenAlarm2.style.display = "none";
	admin_hiddenInnerText2.innerHTML = "";
	//내용확인
	location.href = `/travelShare/site/admin_boardOne?boardId=${boardId}`;	
});
admin_hiddenBtn2[1].addEventListener('click', function(e){
	admin_hiddenAlarm2.style.display = "none";
	admin_hiddenInnerText2.innerHTML = "";
	//삭제
	location.href = `/travelShare/site/admin_boardOneDelte?boardId=${boardId}`;	
});
admin_hiddenBtn2[2].addEventListener('click', function(e){
	admin_hiddenAlarm2.style.display = "none";
});

admin_hiddenBtn3[0].addEventListener('click', function(e){
	admin_hiddenAlarm3.style.display = "none";
	location.href = `/travelShare/site/admin_declare_update?AdminNickName=${declareNickName}&declareCnt=${admin_hiddenInputText.value}`
	admin_hiddenInputText.value = "";
});
admin_hiddenBtn3[1].addEventListener('click', function(e){
	admin_hiddenInputText.value = "";
	admin_hiddenAlarm3.style.display = "none";
});

admin_btn[0].addEventListener('click', admin_ajax_func);
admin_btn[1].addEventListener('click', admin_ajax_func);
admin_btn[2].addEventListener('click', admin_ajax_func5);
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
					td5.innerHTML = `<select id="admin_selector">
					                <option value="nothing">현재: ${position}</option>
					                <option value="★master">★master</option>
					                <option value="☆manager">☆manager</option>
					                <option value="member">member</option>
					                </select>`;
				}else if(targetIndex == 3 || searchChecking == 3){
					td5.appendChild(warningAppend);
				}
				
//				  <select id="select1">
//                <option value="$">--Please Select--</option>
//                <option value="val1">value 1</option>
//                <option value="val2">value 2</option>
//                <option value="val3">value 3</option>
//                </select>
				
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
				}else if(searchChecking == 3){
					searchChecking = 0;
					tbodyclass_declare.appendChild(tr);		
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
		xhttp.open('GET', `/travelShare/rest/admin_searching?noticeName=${searchValue}`, true);	
	}else if(searchChecking == 2 || searchChecking == 3){
		xhttp.open('GET', `/travelShare/rest/admin_position_searching?noticeName=${searchValue}`, true);	
	}else if(targetIndex == 0){
		xhttp.open('GET', '/travelShare/rest/searching', true);		
	}else if(targetIndex == 1){
		xhttp.open('GET', '/travelShare/rest/admin_position', true);	
	}else if(targetIndex == 3){
		xhttp.open('GET', '/travelShare/rest/admin_warning', true);
	}else if(targetIndex == 4){
		xhttp.open('GET', '/travelShare/rest/admin_notice', true);
	}
	
	xhttp.send();
}


//3번 5번 ajax(게시판 등록을 위한 ajax)
function admin_ajax_func4(e){

	noticePaging=0;
	let pagingNumber = 0;
	
	if(searchChecking == 0){
		
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
			
			for(i=0; i < myobj.length; i++){
				
				//만들어야할 페이지버튼의 갯수를 알아보기위함
				noticePaging++;
				
				if(noticePaging % 50 == 1){
					pageNextBtn++;
				}

				//adminPresentPage로 지금 보길원하는 페이지 번호를 바꾸게됨
				if(pageNextBtn == adminPresentPage){
					if(noticePaging % 10 == 1){
						pagingNumber++;
						
						if(pageNextBtn > 1 && pagingNumber % 5 == 1){
							const prevSpan = document.createElement("span");
							prevSpan.innerHTML = "←";
							admin_notice_paging.appendChild(prevSpan);	
						}
						
						const span = document.createElement("span");
						span.innerHTML = `${pagingNumber + 5*(pageNextBtn-1)}`;
												
						if(`${pagingNumber + 5*(pageNextBtn-1)}` == pagingNumBtn){
							span.style.backgroundColor = "black";
							span.style.color = "orangered";
						}
						admin_notice_paging.appendChild(span);	
						
						if(pagingNumber % 5 == 0 && myobj.length > adminPresentPage*50){
							const nextSpan = document.createElement("span");
							nextSpan.innerHTML = "→";
							admin_notice_paging.appendChild(nextSpan);	
						}				
					}
						
					//누른 페이지번호에 따라서 10개씩 출력하기위함 (처음에는 앞 10개출력)
					if((pagingNumBtn*10)-10 <= i && i < pagingNumBtn*10){
						let notice_id = myobj[i].notice_id;
						let user_nickName = myobj[i].user_nickName;
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
						
						const user_nickName_Append = document.createTextNode(user_nickName);
						const notice_title_Append = document.createTextNode(notice_title);
						const notice_date_Append = document.createTextNode(date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));
						const notice_lookupcnt_Append = document.createTextNode(notice_lookupcnt);
						const notice_id_Append = document.createTextNode(notice_id);
						
						td1.appendChild(notice_id_Append);
						td2.appendChild(user_nickName_Append);
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
						if(searchChecking == 5){
							searchChecking = 0;
						}
					}
				}	
			
			}
			pageNextBtn = 0;
			noticePaging = 0;
//			pagingNumBtn = 1;
		}
	});
	//나갓다가 다시들어왔을때 무슨버전으로 할것인지 확인
	if(searchNoticeValue != ""){
		searchChecking = 5;
	}
	
	if(searchChecking == 5){
		xhttp.open('GET', `/travelShare/rest/admin_notice_searching?noticeName=${searchNoticeValue}`, true);	
	}else if(targetIndex == 2){
		xhttp.open('GET', '/travelShare/rest/admin_board', true);		
	}else if(targetIndex == 4){
		xhttp.open('GET', '/travelShare/rest/admin_notice', true);
	}
	
	xhttp.send();
}

//게시글 관리를 위한 함수
function admin_ajax_func5(e){


	noticePaging=0;
	let pagingNumber = 0;
	
	if(searchChecking == 0){
		
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
	}
	

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
		
			tbodyclass_board.innerHTML = "";
			admin_board_paging.innerHTML = "";
			
			
			for(i=0; i < myobj.length; i++){
				
				//만들어야할 페이지버튼의 갯수를 알아보기위함
				noticePaging++;
				if(noticePaging % 50 == 1){
					pageNextBtn++;
				}
				//adminPresentPage로 지금 보길원하는 페이지 번호를 바꾸게됨
				if(pageNextBtn == adminPresentPage2){
							
					if(noticePaging % 10 == 1){
						pagingNumber++;
						if(pageNextBtn > 1 && pagingNumber % 5 == 1){
							const prevSpan = document.createElement("span");
							prevSpan.innerHTML = "←";
							admin_board_paging.appendChild(prevSpan);	
						}
						
						const span = document.createElement("span");
						if(`${pagingNumber + 5*(pageNextBtn-1)}` == pagingNumBtn2){
							span.style.backgroundColor = "black";
							span.style.color = "orangered";
						}
						span.innerHTML = `${pagingNumber + 5*(pageNextBtn-1)}`;
						admin_board_paging.appendChild(span);	
						
						if(pagingNumber % 5 == 0 && myobj.length > adminPresentPage2*50){
							const nextSpan = document.createElement("span");
							nextSpan.innerHTML = "→";
							admin_board_paging.appendChild(nextSpan);	
						}				
					}
						
					//누른 페이지번호에 따라서 10개씩 출력하기위함 (처음에는 앞 10개출력)
					if((pagingNumBtn2*10)-10 <= i && i < pagingNumBtn2*10){
						let board_id = myobj[i].board_id;
						let user_id = myobj[i].user_id;
						let board_title = myobj[i].board_title;
						let board_lookupcnt = myobj[i].board_lookupcnt;
						let board_likecnt = myobj[i].like_cnt;
						

						const tr = document.createElement("tr");
		                const td1 = document.createElement("td");
		                const td2 = document.createElement("td");
		                const td3 = document.createElement("td");
		                const td4 = document.createElement("td");
		                const td5 = document.createElement("td");
		
						tr.style.border = "solid black 1px";
						tr.style.height = "30px";
						
						const board_id_Append = document.createTextNode(board_id);
						const user_id_Append = document.createTextNode(user_id);
						const board_title_Append = document.createTextNode(board_title);
						const board_likecnt_Append = document.createTextNode(board_likecnt);
						const board_lookupcnt_Append = document.createTextNode(board_lookupcnt);
						
						td1.appendChild(board_id_Append);
						td2.appendChild(user_id_Append);
						td3.appendChild(board_title_Append);
						td4.appendChild(board_likecnt_Append);
						td5.appendChild(board_lookupcnt_Append);
						
						tr.appendChild(td1);
						tr.appendChild(td2);
						tr.appendChild(td3);
						tr.appendChild(td4);
						tr.appendChild(td5);
						
						tbodyclass_board.appendChild(tr);	
						
						//누른 페이지번호 초기화
						if(pagingChecking != 0){
							pagingChecking = 0;
						}	
						if(searchChecking == 6){
							searchChecking = 0;
						}
					}
				}	
			
			}
			pageNextBtn = 0;
			noticePaging = 0;
//			pagingNumBtn2 = 1;
		}
	});
	//나갓다가 다시들어왔을때 무슨버전으로 할것인지 확인
	if(searchBoardValue != ""){
		searchChecking = 6;
	}
	
	if(searchChecking == 6){
		xhttp.open('GET', `/travelShare/rest/admin_board_searching?boardName=${searchBoardValue}`, true);	
	}else{
		xhttp.open('GET', '/travelShare/rest/admin_board', true);		
	}
	
	xhttp.send();
}

//게시글 수정을 위한 ajax
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
admin_notice_searchBtn.addEventListener('click', admin_notice_searchFunc);
admin_declare_searchBtn.addEventListener('click', admin_declare_searchFunc);
admin_board_searchBtn.addEventListener('click', admin_board_searchFunc);

function admin_member_searchFunc(e){
	searchValue = admin_member_searchText.value;
	searchChecking = 1;
	admin_ajax_func();
//	location.href = `/travelShare/rest/searching?noticeName=${admin_member_searchText.value}`;
}
function admin_admin_searchFunc(e){
	searchValue = admin_admin_searchText.value;
	searchChecking = 2;
	admin_ajax_func();
//	location.href = `/travelShare/rest/searching?noticeName=${admin_member_searchText.value}`;
}
function admin_notice_searchFunc(e){
	searchNoticeValue = admin_notice_searchText.value;
	
	adminPresentPage = 1;
	pagingNumBtn = 1;
	searchChecking = 5;
	admin_ajax_func4();
}
function admin_board_searchFunc(e){
	searchBoardValue = admin_board_searchText.value;
	
	adminPresentPage2 = 1;
	pagingNumBtn2 = 1;
	searchChecking = 5;
	admin_ajax_func5();
}
function admin_declare_searchFunc(e){
	searchValue = admin_declare_searchText.value;
	searchChecking = 3;
	admin_ajax_func();
}
//페이징 클릭기능
admin_notice_paging.addEventListener('click', admin_notic_pagingFunc);
admin_board_paging.addEventListener('click', admin_notic_pagingFunc2);

function admin_notic_pagingFunc(e){
	
	pagingNumBtn = e.target.innerText;
	

	pagingChecking = 1;
	
	if(searchNoticeValue != ""){
		searchChecking = 5;
	}

	isNaN(pagingNumBtn)? console.log("제대로선택해") : admin_ajax_func4();

	if(pagingNumBtn == "←"){
		adminPresentPage--;
		pagingNumBtn = (adminPresentPage-1)*5 + 1;
		admin_ajax_func4();
	}
	
	if(pagingNumBtn == "→"){
		adminPresentPage++;
		pagingNumBtn = (adminPresentPage-1)*5 + 1;
		admin_ajax_func4();
	}
}
function admin_notic_pagingFunc2(e){
	
	pagingNumBtn2 = e.target.innerText;
	

	pagingChecking = 1;
	
	if(searchBoardValue != ""){
		searchChecking = 6;
	}

	isNaN(pagingNumBtn2)? console.log("제대로선택해") : admin_ajax_func5();

	if(pagingNumBtn2 == "←"){
		adminPresentPage2--;
		pagingNumBtn2 = (adminPresentPage2-1)*5 + 1;
		admin_ajax_func5();
	}
	
	if(pagingNumBtn2 == "→"){
		adminPresentPage2++;
		pagingNumBtn2 = (adminPresentPage2-1)*5 + 1;
		admin_ajax_func5();
	}
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