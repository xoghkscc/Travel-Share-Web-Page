/**
 * 
 */
//필요한 DOM(for paging)
const notice_tbody = document.querySelector('.notice_tbody');
const notice_paging = document.querySelector('.notice_paging');
const notice_searchText = document.querySelector('.notice_searchText');
const notice_searchBtn = document.querySelector('.notice_searchBtn');
//필요한 DOM(for popup)
const notice_Popup = document.querySelector('.notice_Popup');
const notice_cancel = document.querySelector('.notice_cancel');
const notice_PopupTitle = document.querySelector('.notice_PopupTitle');
const notice_PopupId = document.querySelector('.notice_PopupId');
const notice_PopupDate = document.querySelector('.notice_PopupDate');
const notice_PopupCnt = document.querySelector('.notice_PopupCnt');
const notice_PopupText = document.querySelector('.notice_PopupText');
const notice_PopupImg = document.querySelector('.notice_PopupImg');

//필요한 변수
let searchNoticeValue = ""; //검색칸에 무슨 내용을 적었는지 꺼내기 위한 변수
let searchChecking = 0; //검색을 하는 중인지 아닌지 체크하기 위한 변수
let noticePaging = 0; //필요한 페이지의 수를 알기위한 변수
let pagingNumBtn = 1; //내가 누르는 페이지버튼의 번호
let pageNextBtn = 0; //다음버튼이 필요한 순간을 알기위한 변수
let adminPresentPage = 1; //현재 페이지를 저장하기 위한 변수

//필요한 이벤트
notice_tbody.addEventListener('click', tableNoticeTrClick); //셀선택기능
notice_paging.addEventListener('click', notice_pagingFunc); //페이징기능
notice_searchBtn.addEventListener('click', notice_searchFunc); //검색기능

notice_cancel.addEventListener('click', notice_PopupCancelFunc); //팝업 닫기 기능

//시작하자마자 함수실행
getNotices();

//게시판 db 꺼내오기(처음실행, 검색)
function getNotices(e){

	noticePaging=0;
	let pagingNumber = 0;
	

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
		
			//시작하면서 안의 내용 초기화
			notice_tbody.innerHTML = "";
			notice_paging.innerHTML = "";
			
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
						
						//prev버튼 생성시기 결정
						if(pageNextBtn > 1 && pagingNumber % 5 == 1){
							const prevSpan = document.createElement("span");
							prevSpan.innerHTML = "←";
							notice_paging.appendChild(prevSpan);	
						}
						
						//page버튼 생성
						const span = document.createElement("span");
						span.innerHTML = `${pagingNumber + 5*(pageNextBtn-1)}`;
												
						if(`${pagingNumber + 5*(pageNextBtn-1)}` == pagingNumBtn){
							span.style.backgroundColor = "white";
							span.style.color = "orangered";
						}
						notice_paging.appendChild(span);	
						
						//next버튼 생성시기 결정
						if(pagingNumber % 5 == 0 && myobj.length > adminPresentPage*50){
							const nextSpan = document.createElement("span");
							nextSpan.innerHTML = "→";
							notice_paging.appendChild(nextSpan);	
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
						
						notice_tbody.appendChild(tr);	
						
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
	
	//버전확인 (검색기능이 켜져있는지 아니면 전체기능인지에 따라 다른 rest호출)
	if(searchChecking == 5){
		xhttp.open('GET', `/travelShare/rest/admin_notice_searching?noticeName=${searchNoticeValue}`, true);	
	}else{
		xhttp.open('GET', '/travelShare/rest/admin_notice', true);		
	}
	
	xhttp.send();
}


//클릭시 팝업 내용가져오기
function getNoticePopup(num){

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);

			//시작하면서 안의 내용 초기화
			notice_PopupTitle.innerHTML = "";
			notice_PopupId.innerHTML = "";
			notice_PopupDate.innerHTML = "";
			notice_PopupCnt.innerHTML = "";
			notice_PopupText.innerHTML = "";
			notice_PopupText.innerHTML = "";
//			notice_PopupImg.innerHTML = "";
			
			let notice_id = myobj.notice_id;
			let user_nickName = myobj.user_nickName;
			let user_imgurl = myobj.user_imgurl;
			let notice_title = myobj.notice_title;
			let notice_text = myobj.notice_text;
			let notice_lookupcnt = myobj.notice_lookupcnt;
			let notice_date = myobj.notice_date;

			var date = new Date(notice_date);

			notice_PopupTitle.innerHTML = notice_title;
			notice_PopupId.innerHTML = user_nickName;
			notice_PopupDate.innerHTML = date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
			notice_PopupCnt.innerHTML = notice_lookupcnt;
			notice_PopupText.innerHTML = notice_text;
			
//			var x = document.createElement('img');

//			notice_PopupImg.style.backgroundImage = `url(${getContextPath()}${user_imgurl}`;
//			notice_PopupImg.style.backgroundSize = "100%, 100%";

		}
	});


	xhttp.open('GET', `/travelShare/rest/admin_noticeUpdate?noticeId=${num}`, true);	

	xhttp.send();
}


function tableNoticeTrClick(e) {
	document.body.style.overflowY = "hidden";
	notice_Popup.style.display = "block";
	getNoticePopup(e.target.parentNode.children[0].innerText);
}

function notice_pagingFunc(e){
	
	pagingNumBtn = e.target.innerText;
	
	if(searchNoticeValue != ""){
		searchChecking = 5;
	}

	isNaN(pagingNumBtn)? console.log("제대로선택해") : getNotices();

	if(pagingNumBtn == "←"){
		adminPresentPage--;
		pagingNumBtn = (adminPresentPage-1)*5 + 1;
		getNotices();
	}
	
	if(pagingNumBtn == "→"){
		adminPresentPage++;
		pagingNumBtn = (adminPresentPage-1)*5 + 1;
		getNotices();
	}
}


function notice_searchFunc(e){
	searchNoticeValue = notice_searchText.value;
	
	adminPresentPage = 1;
	pagingNumBtn = 1;
	searchChecking = 5;
	getNotices();
}


//팝업취소를 위한 함수
function notice_PopupCancelFunc(e){
	document.body.style.overflowY = "scroll";
	getNotices();
	notice_Popup.style.display = "none";
}

//현재위치
function getContextPath(){
    var offset=location.href.indexOf(location.host)+location.host.length;
    var ctxPath=location.href.substring(offset,location.href.indexOf('/',offset+1));
    return ctxPath;
}