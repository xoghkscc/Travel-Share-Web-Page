/**
 * 
 */
const qna_tbody = document.querySelector('.qna_tbody');
const qna_paging = document.querySelector('.qna_paging');
const qna_searchText = document.querySelector('.qna_searchText');
const qna_searchBtn = document.querySelector('.qna_searchBtn');
const qna_list_id = document.querySelector('.qna_list_id');
//필요한 변수
let searchQnaValue = ""; //검색칸에 무슨 내용을 적었는지 꺼내기 위한 변수
let searchChecking = 0; //검색을 하는 중인지 아닌지 체크하기 위한 변수
let qnaPaging = 0; //필요한 페이지의 수를 알기위한 변수
let pagingNumBtn = 1; //내가 누르는 페이지버튼의 번호
let pageNextBtn = 0; //다음버튼이 필요한 순간을 알기위한 변수
let adminPresentPage = 1; //현재 페이지를 저장하기 위한 변수

//필요한 이벤트
qna_paging.addEventListener('click', qna_pagingFunc); //페이징기능
qna_searchBtn.addEventListener('click', qna_searchFunc); //검색기능

//시작하자마자 함수실행
getIdPosition();

//id, position 가져오기
function getIdPosition(e){
	const xhttp = new XMLHttpRequest();
		xhttp.addEventListener('readystatechange', (e) =>{
			const target = e.target;
			const status = target.status;
			const readyState = target.readyState;
			console.log("욥스스스");
			if(status == 200 && readyState == 4){
				//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
				console.log(target.responseText);
				if(target.responseText != ""){
					myobj = JSON.parse(target.responseText);					
					const userId = myobj.user_id;
					const userPosition = myobj.user_position;
					console.log("id : ",userId," position : ",userPosition);
					getList(userId, userPosition);				
				}else{
					getList(0, "member");
				}
			
			}
		});
	xhttp.open('GET', '/travelShare/qnaRest/qna_getSession', true);	
	xhttp.send();
}


//게시판 db 꺼내오기(처음실행, 검색)
function getList(userId, userPosition){

	qnaPaging=0;
	let pagingNumber = 0;
	

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
//		let checkId = qna_list_id.innerText;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
		
			//시작하면서 안의 내용 초기화
			qna_tbody.innerHTML = "";
			qna_paging.innerHTML = "";
			
			for(i=0; i < myobj.length; i++){
		
				//만들어야할 페이지버튼의 갯수를 알아보기위함
				qnaPaging++;
				
				if(qnaPaging % 50 == 1){
					pageNextBtn++;
				}
	
				//adminPresentPage로 지금 보길원하는 페이지 번호를 바꾸게됨
				if(pageNextBtn == adminPresentPage){
					if(qnaPaging % 10 == 1){
						pagingNumber++;
						
						//prev버튼 생성시기 결정
						if(pageNextBtn > 1 && pagingNumber % 5 == 1){
							const prevSpan = document.createElement("span");
							prevSpan.innerHTML = "←";
							qna_paging.appendChild(prevSpan);	
						}
						
						//page버튼 생성
						const span = document.createElement("span");
						span.innerHTML = `${pagingNumber + 5*(pageNextBtn-1)}`;
												
						if(`${pagingNumber + 5*(pageNextBtn-1)}` == pagingNumBtn){
							span.style.backgroundColor = "white";
							span.style.color = "orangered";
						}
						qna_paging.appendChild(span);	
						
						//next버튼 생성시기 결정
						if(pagingNumber % 5 == 0 && myobj.length > adminPresentPage*50){
							const nextSpan = document.createElement("span");
							nextSpan.innerHTML = "→";
							qna_paging.appendChild(nextSpan);	
						}				
					}
						
					//누른 페이지번호에 따라서 10개씩 출력하기위함 (처음에는 앞 10개출력)
					if((pagingNumBtn*10)-10 <= i && i < pagingNumBtn*10){
						let qno = myobj[i].qno;
						let title = myobj[i].title;
						let content = myobj[i].content;
						let user_nickName = myobj[i].user_nickName;
						let regdate = myobj[i].regdate;
						let viewcnt = myobj[i].viewcnt;
						let user_id = myobj[i].user_id;
						let cs_open = myobj[i].cs_open;
						
						var date = new Date(regdate);
						
						const tr = document.createElement("tr");
		                const td1 = document.createElement("td");
		                const td2 = document.createElement("td");
		                const td3 = document.createElement("td");
		                const td4 = document.createElement("td");
		                const td5 = document.createElement("td");
		
						tr.style.border = "solid black 1px";
						tr.style.height = "30px";
						
						const qno_Append = document.createTextNode(qno);
						const title_Append = document.createTextNode(title);
						const user_nickName_Append = document.createTextNode(user_nickName);
						const regdate_Append = document.createTextNode(date.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));
						const viewcnt_Append = document.createTextNode(viewcnt);
						
							td1.appendChild(qno_Append);
						console.log(cs_open);
						if(cs_open == "N"){
							
							if(userPosition != "member" || userId == user_id){
								td2.appendChild(title_Append);	
							}else{
								td2.innerHTML = `<span class="material-icons-outlined" style="font-size: 20px;">lock</span>비밀글은 작성자와 관리자만 볼 수 있습니다.`;	
							}
						}else{
							td2.appendChild(title_Append);	
						}
						
//						if(userPosition != "member"){
//							td2.appendChild(title_Append);							
//						}else if(userId == user_id){
//							td2.appendChild(title_Append);														
//						}else if(cs_open == "Y"){
//							td2.appendChild(title_Append);			
//						}else{
//							td2.innerHTML = `<span class="material-icons-outlined" style="font-size: 20px;">lock</span>비밀글은 작성자와 관리자만 볼 수 있습니다.`;	
//						}
							td3.appendChild(user_nickName_Append);
							td4.appendChild(regdate_Append);
							td5.appendChild(viewcnt_Append);
							
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							tr.appendChild(td5);
						
							qna_tbody.appendChild(tr);	
						
						if(searchChecking == 5){
							searchChecking = 0;
						}
					}
				}	
			
			}
			pageNextBtn = 0;
			qnaPaging = 0;
//			pagingNumBtn = 1;
		}
	});
	//나갓다가 다시들어왔을때 무슨버전으로 할것인지 확인
	if(searchQnaValue != ""){
		searchChecking = 5;
	}
	
	if(searchChecking == 5){
		xhttp.open('GET', `/travelShare/qnaRest/qna_paging_searching?qnaTitle=${searchQnaValue}`, true);	
	}else{
		console.log("욥!");
		xhttp.open('GET', '/travelShare/qnaRest/qna_paging', true);		
	}
	
	xhttp.send();
}


function qna_pagingFunc(e){
	
	pagingNumBtn = e.target.innerText;
	
	if(searchQnaValue != ""){
		searchChecking = 5;
	}

	isNaN(pagingNumBtn)? console.log("제대로선택해") : getIdPosition();

	if(pagingNumBtn == "←"){
		adminPresentPage--;
		pagingNumBtn = (adminPresentPage-1)*5 + 1;
		getIdPosition();
	}
	
	if(pagingNumBtn == "→"){
		adminPresentPage++;
		pagingNumBtn = (adminPresentPage-1)*5 + 1;
		getIdPosition();
	}
}


function qna_searchFunc(e){
	searchQnaValue = qna_searchText.value;
	console.log(searchQnaValue);
	adminPresentPage = 1;
	pagingNumBtn = 1;
	searchChecking = 5;
	getIdPosition();
}