/**
 * 
 */
const main_recommend = document.querySelector('.main_recommend');
const board_content = document.querySelector('.board_content');
const board_imgContent = document.querySelector('.board_imgContent');
const board_text1 = document.querySelector('.board_text1');
const board_textTit = document.querySelector('.board_textTit');
const board_area = document.querySelector('.board_area');
const like = document.querySelector('.like');
const x_box = document.querySelector('.x_box');

getNotices();

function getNotices(e){

	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) =>{
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 && readyState == 4){
			//자바스크립트에서는 아주 쉽게 JSON형식의 문자열을 Object로 변환할 수 있다
			myobj = JSON.parse(target.responseText);
			
			//시작하면서 안의 내용 초기화
			board_content.innerHTML = "";
			main_recommend.innerHTML = "";
		
			Object.keys(myobj).forEach((key) => {
				const board_content = document.createElement("div");
				board_content.setAttribute("class", "board_content");
				board_content.setAttribute("id", "board_content");

				const board_imgContent = document.createElement("div");
				board_imgContent.setAttribute("class", "imgbox");
				board_imgContent.innerHTML = "<div><img onclick='imgClick("+myobj[key].board_id+")' alt='' src='"+myobj[key].board_mainimg+"'></div> <img alt='' onclick='profileClick("+myobj[key].user_id+")' src='/travelShare"+myobj[key].user_imgurl+"'>";

				const board_textContent = document.createElement("div");
				board_textContent.setAttribute("class", "board_textContent");
				console.log("myobj[key] : "+ myobj[key]);
				board_textContent.innerHTML = "<div class='board_text1'>" + myobj[key].user_nickName + "</div> <div class='board_textTit'>" + myobj[key].board_title + "</div>";

				const board_option = document.createElement("div");
				board_option.setAttribute("class", "board_option");
				board_option.innerHTML = "<div class='board_areaPan'>" +
					"<span class='material-icons-outlined board_area_img'> location_on </span>" +
					"<div class='board_area'>" + myobj[key].sigungu + " </div> </div>" 
					if(myobj[key].like_cnt >=10){
					board_option.innerHTML += "<div id='board_likePan' class='board_likePan board_top'> <span class='material-icons-outlined board_like_img'> favorite </span> <div id="+myobj[key].board_id+" class='like'>"+myobj[key].like_cnt+"명</div> </div>";
					}else if(myobj[key].like_cnt <10 && myobj[key].like_cnt >=5){
					board_option.innerHTML += "<div id='board_likePan' class='board_likePan board_middle'> <span class='material-icons-outlined board_like_img'> favorite </span> <div id="+myobj[key].board_id+" class='like'>"+myobj[key].like_cnt+"명</div> </div>";
					} else {
					board_option.innerHTML += "<div id='board_likePan' class='board_likePan'> <span class='material-icons-outlined board_like_img'> favorite </span> <div id="+myobj[key].board_id+" class='like'>"+myobj[key].like_cnt+"명</div> </div>";
					}
				board_content.appendChild(board_imgContent);
				board_content.appendChild(board_textContent);
				board_content.appendChild(board_option);
				
				main_recommend.appendChild(board_content);
			});
		}
	});

	xhttp.open('POST', '/travelShare/rest/GetbestPlace', true);
	xhttp.send();
}






function imgClick(value) {
//	const body = document.getElementsByTagName("body");
//		Array.from(body).forEach((value2) => {
//			value2.setAttribute("class", "board_detail_open");
//		});
		
	getBoardContent(value);
	console.log(document.getElementsByTagName("body")[0].style);
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("board_clickPan").setAttribute("class", "board_show");
}


//function getBoardContent(value) {
//	const xhttp = new XMLHttpRequest();
//	
//	xhttp.addEventListener('readystatechange', (e) => {
//		const target = e.target;
//
//		myobj = JSON.parse(target.responseText);
//				console.log("myobj : "+myobj);
//
//			Object.keys(myobj).forEach((key) => {
//				document.getElementById("board_googleMap").setAttribute("src", "https://www.google.com/maps?q= "+myobj[key].addr+" &output=embed");
//				document.getElementById("board_mainimg").setAttribute("src", myobj[key].board_mainimg);
//				console.log("myobj[key].user_id : "+myobj[key].user_id);
//				document.getElementById("board_mainimg").setAttribute("class", myobj[key].user_id);
//				document.getElementById("board_title").innerHTML = myobj[key].board_title;
//				document.getElementById("board_bestplace").innerHTML = myobj[key].board_bestplace;
//				document.getElementById("board_besteat").innerHTML = myobj[key].board_besteat;
//				document.getElementById("board_main_content").innerHTML = myobj[key].board_content;
//				
//				Array.from(document.querySelectorAll("#board_main_content>img")).forEach((value2) => {
//					value2.style.width = "40vw";
//					value2.style.height = "auto";
//				});
//				
//			});
//	});
//
//	xhttp.open('POST', '/travelShare/boardrest/choiceBoardInfo/', true);
//	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
//	xhttp.send(value);
//}

x_box.addEventListener('click', function(e){
	document.getElementsByTagName("body")[0].style.overflow = "scroll";
	document.getElementById("board_clickPan").setAttribute("class", "board_hide");
});



function imgClickRollback() {
	var board_scrap_btn = document.getElementById("board_scrap_btn");
	const body = document.getElementsByTagName("body");
		Array.from(body).forEach((value2) => {
			value2.setAttribute("class", "");
		});
	board_scrap_btn.onclick = null;	
	document.getElementById("board_clickPan").setAttribute("class", "board_hide");
	
}


function imgClick(board_id, user_id) {
	const body = document.getElementsByTagName("body");
		Array.from(body).forEach((value2) => {
			value2.setAttribute("class", "board_detail_open");
		});
	getLikeCnt(board_id);
	getBoardUser(board_id);
	getBoardContent(board_id);
	getBoardCommnet(board_id);
	shwoRD(user_id, board_id);
	warning(board_id, user_id);
	document.getElementById("board_clickPan").setAttribute("class", "board_show");
	
	const xhttp = new XMLHttpRequest();
	
	xhttp.open('POST', '/travelShare/boardrest/lookupCntPlus/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(board_id);
}



function warning(board_id, user_id) {
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		var singoIdCheck = JSON.parse(target.responseText);
		myobj = JSON.parse(target.responseText);
		
		if(myobj == 2){
			document.getElementById("singo").style.color = "white";
		} else if(myobj == 1){
			document.getElementById("singo").style.color = "#7f7f7f";
		}
	document.getElementById("singo").onclick = () => {
			console.log("singoIdCheck :" + singoIdCheck);
		if(singoIdCheck == 2){
			warningftn(board_id, 2, user_id);
		} else{
			warningftn(board_id, singoIdCheck, user_id);
			singoIdCheck = 2;
		}
	}
	});
	
	
	xhttp.open('POST', '/travelShare/boardrest/warningJudgment/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(board_id);
}

function warningftn(board_id, singoIdCheck, user_id){
	if(singoIdCheck == 0){
		alert("로그인이 필요한 서비스입니다.");
		location.href = "../site/login";
	} else if(singoIdCheck == 1){
		if(confirm("게시글을 신고하시겠습니까?")){
		alert("신고해 주셔서 감사합니다");
		warningRest(board_id);
		userInfoWarningRest(user_id);
		document.getElementById("singo").style.color = "white";
		} else{
		}
	} else {
		alert("이미 신고한 글입니다.");
	}
}

function userInfoWarningRest(user_id){
	const xhttp = new XMLHttpRequest();
	
	xhttp.open('POST', '/travelShare/boardrest/userInfoWarning/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(user_id);
}

function warningRest(board_id){
	const xhttp = new XMLHttpRequest();
	
	xhttp.open('POST', '/travelShare/boardrest/insertWarning/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(board_id);
}


function shwoRD(user_id, board_id) {
	var loginId = document.getElementById("user_id").value;
	if(user_id == loginId){
		document.getElementById("board_comment_tit").innerHTML = "<p>한줄댓글</p> <div class='board_ud'><button id='board_update'>수정</button> <button id='board_delete'>삭제</button> </div>";
		
		document.getElementById("board_delete").onclick = () => {
			boardDelete(board_id);
		}
		
		document.getElementById("board_update").onclick = () => {
			boardUpdate(board_id);
		}
	} else {
		document.getElementById("board_comment_tit").innerHTML = "<p>한줄댓글</p>";
	}
}

function boardDelete(board_id){
	if(confirm("이 게시글을 삭제하시겠습니까?")){
		location.href = "./deleteBoard?board_id="+board_id;
	} else{
	}
}

function boardUpdate(board_id){
	if(confirm("이 게시글을 수정하시겠습니까?")){
		document.getElementById("board_content").innerHTML = "dasdsa"
		location.href = "./updateBoard?board_id="+board_id;
	} else{
	}
}


function getBoardUser(board_id){
	const xhttp = new XMLHttpRequest();
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		myobj = JSON.parse(target.responseText);
		boardScrap(myobj, board_id)	
	});
	
	xhttp.open('POST', '/travelShare/boardrest/likeJudgment/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(board_id);
}
var clickJug = 0;

function boardScrap(myobj, board_id) {
		var loginId = document.getElementById("user_id").value;
		var board_scrap_btn = document.getElementById("board_scrap_btn");
		if(myobj == 1){
			board_scrap_btn.style.color = '#e56c23';
			board_scrap_btn.addEventListener('mouseout', () => {
				board_scrap_btn.style.color = '#e56c23';
			});
		} else {
			board_scrap_btn.style.color = '#bdbdbd';
			
			board_scrap_btn.addEventListener('mouseover', () => {
				board_scrap_btn.style.color = '#e56c23';
			});
			
			board_scrap_btn.addEventListener('mouseout', () => {
				board_scrap_btn.style.color = '#bdbdbd';
			});
		}
		
			board_scrap_btn.onclick = () => {
				clickJug = 1;
				console.log("myobj : "+ myobj + "board_id :" + board_id);
				if(loginId == ''){
					alert("로그인이 필요한 서비스입니다.");
					location.href = "../site/login";
				} else {
					if(myobj == 1){
						myobj = 0;
						board_scrap_btn.style.color = '#bdbdbd';
						
						board_scrap_btn.addEventListener('mouseover', () => {
							board_scrap_btn.style.color = '#e56c23';
						});
						
						board_scrap_btn.addEventListener('mouseout', () => {
							board_scrap_btn.style.color = '#bdbdbd';
						});
						deleteLike(board_id);
						alert("찜을 취소하였습니다.");
						
					} else {
						myobj = 1;
						board_scrap_btn.style.color = '#e56c23';
						board_scrap_btn.addEventListener('mouseout', () => {
						board_scrap_btn.style.color = '#e56c23';
						});
						insertLike(board_id)
						alert("찜을 하였습니다.");
					}
				}
				getLikeCnt(board_id);
			};
}

function getLikeCnt(board_id){
	const xhttp = new XMLHttpRequest();
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		myobj = JSON.parse(target.responseText);
		document.getElementById("board_scarp_cnt").innerHTML = myobj;
		document.getElementById(board_id).innerHTML = myobj+"명";
		
	});
	
	xhttp.open('POST', '/travelShare/boardrest/selectLikeCnt/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(board_id);
	
}

function deleteLike(board_id){
	const xhttp = new XMLHttpRequest();
	
	
	xhttp.open('POST', '/travelShare/boardrest/deleteLike/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(board_id);
}

function insertLike(board_id){
	const xhttp = new XMLHttpRequest();
	
	
	xhttp.open('POST', '/travelShare/boardrest/insertLike/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(board_id);
}


function getBoardContent(value) {
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;

		myobj = JSON.parse(target.responseText);

			Object.keys(myobj).forEach((key) => {
				document.getElementById("board_googleMap").setAttribute("src", "https://www.google.com/maps?q= "+myobj[key].addr+" &output=embed");
				document.getElementById("board_mainimg").setAttribute("src", "/travelShare"+myobj[key].user_imgurl);
				document.getElementById("board_mainimg").setAttribute("class", myobj[key].user_id);
				document.getElementById("board_content_id").innerHTML = myobj[key].board_id;
				document.getElementById("board_title").innerHTML = myobj[key].board_title;
				document.getElementById("board_bestplace").innerHTML = myobj[key].board_bestplace;
				document.getElementById("board_besteat").innerHTML = myobj[key].board_besteat;
				document.getElementById("board_main_content").innerHTML = myobj[key].board_content;
				document.getElementById("board_user_name").innerHTML = myobj[key].user_nickname;
				document.getElementById("board_user_info").scrollIntoView();
				Array.from(document.querySelectorAll("#board_main_content>img")).forEach((value2) => {
					value2.style.width = "40vw";
					value2.style.height = "auto";
				});
				
			});
	});

	xhttp.open('POST', '/travelShare/boardrest/choiceBoardInfo/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(value);
}

function getBoardCommnet(value) {
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		myobj = JSON.parse(target.responseText);
		
		var board_comment_show = document.getElementById("board_comment_show");
		board_comment_show.innerHTML = '';
		
		if(status == 200 & readyState == 4){
			Object.keys(myobj).forEach((key) => {
				var board_comment_see = document.createElement("div");
				board_comment_see.setAttribute("class", "board_comment_see");
				
				var board_comment_see_img = document.createElement("div");
				board_comment_see_img.setAttribute("class", "board_comment_see_img");
				board_comment_see_img.innerHTML = "<img src='/travelShare/resources/files/null.jpg' alt=''>"
				
				var board_comment_see_text = document.createElement("div");
				board_comment_see_text.setAttribute("class", "board_comment_see_text");
				board_comment_see_text.innerHTML = "<div> <strong>"+myobj[key].user_nickname+"</strong> <span class='board_comment_see_text_date'>"+myobj[key].comment_date+"</span> </div> <div>"+myobj[key].comment_text+"</div>"
				
				
				
				board_comment_see.appendChild(board_comment_see_img);
				board_comment_see.appendChild(board_comment_see_text);
				
				board_comment_show.appendChild(board_comment_see);
				board_comment_show.innerHTML += "<hr style='color: black; width: 100%; margin-bottom: 50px;'>"
			});
			
		}
	});

	xhttp.open('POST', '/travelShare/boardrest/selectComment/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(value);
}

function locationFilter (){
		var selectOptionSido = document.getElementById("board_sido").options[document.getElementById("board_sido").selectedIndex].value;
		var selectOptionSidoName = document.getElementById("board_sido").options[document.getElementById("board_sido").selectedIndex].text;
		var selectOptionSidogunName = document.getElementById("h_area2").options[document.getElementById("h_area2").selectedIndex].text;
		var sigungucode = document.getElementById("h_area2").options[document.getElementById("h_area2").selectedIndex].value;
		
	if(sigungucode == 0 && selectOptionSido != 0){
		location.href = "./mainBoardFilter2?sidocode="+selectOptionSido+"&sidoName="+selectOptionSidoName+"&sidogunName="+selectOptionSidogunName;
	} else if(selectOptionSido == 0){
		location.href = "./mainBoard"
	} else{
		location.href = "./mainBoardFilter?sigungucode="+sigungucode+"&sidoName="+selectOptionSidoName+"&sidogunName="+selectOptionSidogunName;
	}
}


const board_commentId = document.getElementById("board_commentId");
board_commentId.onsubmit = (e) => {
	e.preventDefault();
	var board_comment = this.board_commnet.value;
	var user_id = this.user_id.value;
	var board_id = document.getElementById("board_content_id").innerHTML;
	if(user_id == ''){
		alert("로그인이 필요한 서비스입니다.");
		location.href = "../site/login";
	} else{
		insertCommnet(board_id, user_id, board_comment)
	}
	this.board_commnet.value = '';
	
}

function insertCommnet(board_id, user_id, board_comment){
	var xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 & readyState == 4){
			getBoardCommnet(board_id);
		}
	});
	
	var commnetInfo = {
		board_id : board_id,
		user_id : user_id,
		comment_text : board_comment
	}
	
	
	xhttp.open('POST', '/travelShare/boardrest/insertComment/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(JSON.stringify(commnetInfo));
}

function createBoardLocation(id){
	if(id >= 1){
		location.href = "./createBoard";
	}else {
		alert("로그인이 필요한 서비스입니다.");
		location.href = "../site/login";
	}
}

document.getElementById("board_mainimg").addEventListener('click', (e) => {
	var user_id = e.target.classList.value;
	profileClick(user_id);
})

function profileClick (user_id){
	location.href = "../membership/profile?user_id="+user_id;
}

