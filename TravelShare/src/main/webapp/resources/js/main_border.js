const board_paging_number = document.getElementsByClassName("board_paging_number");

Array.from(board_paging_number).forEach((value) => {
	value.addEventListener('click', (e) => {
		var sigungucode = getParameterByName('sigungucode');
		var sidocode = getParameterByName('sidocode');
		
		Array.from(board_paging_number).forEach((value2) => {
			value2.setAttribute("class", "board_paging_number");
			});
			value.setAttribute("class", "board_choose board_paging_number");
		const click_number = value.getAttribute("id");
		pagingRest(click_number, sigungucode, sidocode);
		
	});
});

function boardSort(){
	Array.from(board_paging_number).forEach((value, index) => {
		value.setAttribute("class", "board_paging_number");
		if(index == 0){
			value.setAttribute("class", "board_choose board_paging_number");
		}
		
});
	var sigungucode = getParameterByName('sigungucode');
	var sidocode = getParameterByName('sidocode');
	pagingRest(1, sigungucode, sidocode);
}

function pagingRest(click_number, sigungucode, sidocode) {
	var order = document.getElementById("board_tit_area").options[document.getElementById("board_tit_area").selectedIndex].value;
	const board_list_travel = document.querySelector(".board_list_travel");
	board_list_travel.innerHTML = "";
	const xhttp = new XMLHttpRequest();

	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;

		myobj = JSON.parse(target.responseText);

		if (status == 200 & readyState == 4) {
			Object.keys(myobj).forEach((key) => {
				var board_content = document.createElement("div");
				board_content.setAttribute("class", "board_content");
				board_content.setAttribute("id", "board_content");

				var board_imgContent = document.createElement("div");
				board_imgContent.setAttribute("class", "board_imgContent");
				board_imgContent.innerHTML = "<div><img class="+myobj[key].board_id+" onclick='imgClick("+myobj[key].board_id+")' alt='' src='"+myobj[key].board_mainimg+"'></div> <img alt='' onclick='profileClick("+myobj[key].user_id+")' src='/travelShare"+myobj[key].user_imgurl+"'>";

				var board_textContent = document.createElement("div");
				board_textContent.setAttribute("class", "board_textContent");
				board_textContent.innerHTML = "<div class='board_text1'>" + myobj[key].user_nickname + "</div> <div class='board_textTit'>" + myobj[key].board_title + "</div>";

				var board_option = document.createElement("div");
				board_option.setAttribute("class", "board_option");
				board_option.innerHTML = "<div class='board_areaPan'>" +
					"<span class='material-icons-outlined board_area_img'> location_on </span>" +
					"<div class='board_area'>" + myobj[key].sigungu + " </div> </div>" 
					if(myobj[key].like_cnt >=10){
					board_option.innerHTML += "<div id='board_likePan' class='board_likePan board_top'> <span class='material-icons-outlined board_like_img'> favorite </span> <div id="+myobj[key].board_id+" class='like'>"+myobj[key].like_cnt+"???</div> </div>";
					}else if(myobj[key].like_cnt <10 && myobj[key].like_cnt >=5){
					board_option.innerHTML += "<div id='board_likePan' class='board_likePan board_middle'> <span class='material-icons-outlined board_like_img'> favorite </span> <div id="+myobj[key].board_id+" class='like'>"+myobj[key].like_cnt+"???</div> </div>";
					} else {
					board_option.innerHTML += "<div id='board_likePan' class='board_likePan'> <span class='material-icons-outlined board_like_img'> favorite </span> <div id="+myobj[key].board_id+" class='like'>"+myobj[key].like_cnt+"???</div> </div>";
					}
				board_content.appendChild(board_imgContent);
				board_content.appendChild(board_textContent);
				board_content.appendChild(board_option);
				board_list_travel.appendChild(board_content);
			});
		}
	});
	
	var pagingData = {
		click_number : click_number,
		sigungucode : sigungucode,
		sidocode : sidocode,
		order : order
	}
	
	xhttp.open('POST', '/travelShare/boardrest/paging/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(JSON.stringify(pagingData));
}

function isObjEmpty(obj)  {
  if(Object.keys(obj).length === 0)  {
    return true;
  }
  return false;
}

//???????????? ??????????????? ????????? ??? ?????? ??????
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




function cat1_change(key){
 var cat1_num = new Array(11,26,27,28,29,30,31,36,41,47,48,42,43,44,45,46,50);
 var cat1_name = new Array('??????','??????','??????','??????','??????','??????','??????','??????', '??????', '??????','??????','??????','??????','??????','??????','??????','??????');


 var cat2_num = new Array();
 var cat2_name = new Array();


 cat2_num[11] = new Array(11680, 11740, 11305, 11500, 11620, 11215, 11530, 11545, 11350, 11320, 11230, 11590, 11440, 11410, 11650, 11200, 11290, 11710, 11470, 11560, 11170, 11380, 11110, 11140, 11260);
 cat2_name[11] = new Array('?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','????????????','?????????','?????????','????????????','?????????','?????????','?????????','?????????','?????????','????????????','?????????','?????????','?????????','??????','?????????');


 cat2_num[26] = new Array(26440, 26410, 26290, 26170, 26260, 26230, 26320, 26530, 26380, 26140, 26500, 26470, 26220, 26110, 26350, 26710);
 cat2_name[26] = new Array('?????????','?????????','??????','??????','?????????','????????????','??????','?????????','?????????','??????','?????????','?????????','?????????','??????','????????????','?????????');


 cat2_num[27] = new Array(27220, 27290, 27140, 27230, 27170, 27260, 27110, 27710);
 cat2_name[27] = new Array('??????','?????????','??????','??????','??????','?????????','??????','?????????');


 cat2_num[28] = new Array(28245, 28170, 28220, 28220, 28237, 28260, 28185, 28110, 28710, 28720);
 cat2_name[28] = new Array('?????????','??????','?????????','??????','?????????','??????','?????????','??????','?????????','?????????');


 cat2_num[29] = new Array(29220, 29155, 29110, 29170, 29140);
 cat2_name[29] = new Array('?????????','??????','??????','??????','??????');


 cat2_num[30] = new Array(30230, 30110, 30170, 30200, 30140);
 cat2_name[30] = new Array('?????????','??????','??????','?????????','??????');


 cat2_num[31] = new Array(31140, 31170, 31200, 31110, 31710);
 cat2_name[31] = new Array('??????','??????','??????','??????','?????????');

 cat2_num[36] = new Array(36110);
 cat2_name[36] = new Array('?????????????????????');


 cat2_num[42] = new Array(42150, 42170, 42230, 42210, 42130, 42110, 42190, 48820, 42800, 42830, 42750, 42810, 42770, 42780, 42760, 42720, 42790, 42730);
 cat2_name[42] = new Array('?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[41] = new Array(41281, 41285, 41287, 41290, 41210, 41610, 41310, 41410, 41570, 41360, 41250,  41197, 41199, 41195, 41135, 41131,  41133, 41113, 41111, 41115, 41390, 41273, 41271, 41550, 41173, 41171, 41370, 41461, 41465, 41463, 41430, 41150, 41500, 41480, 41220, 41450, 41590, 40820, 41630, 41830,  41670, 41800, 41650);
 cat2_name[41] = new Array('????????? ?????????','????????? ????????????', '????????? ????????????','?????????','?????????','?????????','?????????','?????????','?????????','????????????','????????????','????????? ?????????','????????? ?????????','????????? ?????????','????????? ?????????','????????? ?????????','????????? ?????????','????????? ?????????','????????? ?????????','????????? ?????????','?????????','????????? ?????????','????????? ?????????','?????????','????????? ?????????','????????? ?????????','?????????','????????? ?????????', '????????? ?????????','????????? ?????????' ,'?????????','????????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[48] = new Array(48310, 48250, 48125, 48127, 48270, 48240, 48330, 48170, 48129, 48220, 48880,  48820, 48840, 48860, 48720, 48740, 48850, 48730, 48870, 48890);
 cat2_name[48] = new Array('?????????','?????????','????????? ???????????????', '????????? ???????????????','?????????','?????????','?????????','?????????','????????? ?????????', '?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[47] = new Array(47290, 47130, 47190, 47150, 47280, 47250, 47170, 47210,  47230, 47111, 47113, 47830, 47720, 47920, 47840, 47770, 47760, 47900, 47940, 47930, 47730, 47820, 47750, 47850);
 cat2_name[47] = new Array('?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','????????? ??????','????????? ??????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[46] = new Array(46230, 46170, 46110, 46150, 46130, 46810, 46770, 46720, 46730, 46710, 46840, 46780, 46910,  46870, 46830, 46890, 46880, 46800, 46900, 46860, 46820, 46790);
 cat2_name[46] = new Array('?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[45] = new Array(45130, 45210, 45190, 45140, 45113, 45111, 45180,  45790, 45730, 45800, 45770, 45710, 45750, 45740, 45720);
 cat2_name[45] = new Array('?????????','?????????','?????????','?????????','????????? ?????????','????????? ?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[50] = new Array(50130, 50110);
 cat2_name[50] = new Array('????????????','?????????');


 cat2_num[44] = new Array(44150,   44230, 44180, 44210, 44200, 44131, 44133, 44710, 44270, 44760, 44770, 44810, 44790, 44825, 44800);
 cat2_name[44] = new Array('?????????','?????????','?????????','?????????','?????????','????????? ?????????','????????? ?????????' ,'?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');


 cat2_num[43] = new Array(43150, 43111, 43113, 43114 ,43130, 43760, 43800, 43720, 43740,  43730, 43770, 43750);
 cat2_name[43] = new Array('?????????','????????? ?????????','????????? ?????????','????????? ?????????', '?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????');
 if(key == '') return;

 var name = cat2_name[key];

 var val = cat2_num[key];

var sel = document.getElementById("h_area2");
var sigungucode = getParameterByName("sigungucode");

 for(i=sel.length-1; i>=0; i--)

  sel.options[i] = null;

 sel.options[0] = new Option('-??????-','', '', 'true');
 sel.options[1] = new Option('??????','0');
 sel.options[0].selected = true;
	

 for(i=0; i<name.length; i++){
  sel.options[i+2] = new Option(name[i],val[i]);

	if(sigungucode ==  sel.options[i+2].getAttribute("value")){
		sel.options[i+2].selected = true;
	}
 }
}

window.onload =  () => {
	var clickBoard_id = getParameterByName("board_id");
	var clickUser_id = getParameterByName("user_id");
	if(clickBoard_id !==''){
		imgClick(clickBoard_id, clickUser_id);
	}
		
	var sel = document.getElementById("h_area2");
	var key = document.getElementById("board_sido");
	cat1_change(key.value);
	var sidogunName = getParameterByName("sidogunName");
	if(sidogunName == '??????'){
		sel.options[1].selected = true;
	}
	
};



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
	console.log(user_id);
	console.log(board_id);
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
		alert("???????????? ????????? ??????????????????.");
		location.href = "../site/login";
	} else if(singoIdCheck == 1){
		if(confirm("???????????? ?????????????????????????")){
		alert("????????? ????????? ???????????????");
		warningRest(board_id);
		userInfoWarningRest(user_id);
		document.getElementById("singo").style.color = "white";
		} else{
		}
	} else {
		alert("?????? ????????? ????????????.");
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
		document.getElementById("board_comment_tit").innerHTML = "<p>????????????</p> <div class='board_ud'><button id='board_update'>??????</button> <button id='board_delete'>??????</button> </div>";
		
		document.getElementById("board_delete").onclick = () => {
			boardDelete(board_id);
		}
		
		document.getElementById("board_update").onclick = () => {
			boardUpdate(board_id);
		}
	} else {
		document.getElementById("board_comment_tit").innerHTML = "<p>????????????</p>";
	}
}

function boardDelete(board_id){
	if(confirm("??? ???????????? ?????????????????????????")){
		location.href = "./deleteBoard?board_id="+board_id;
	} else{
	}
}

function boardUpdate(board_id){
	if(confirm("??? ???????????? ?????????????????????????")){
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
					alert("???????????? ????????? ??????????????????.");
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
						alert("?????? ?????????????????????.");
						
					} else {
						myobj = 1;
						board_scrap_btn.style.color = '#e56c23';
						board_scrap_btn.addEventListener('mouseout', () => {
						board_scrap_btn.style.color = '#e56c23';
						});
						insertLike(board_id)
						alert("?????? ???????????????.");
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
		document.getElementById(board_id).innerHTML = myobj+"???";
		
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
				board_comment_see_img.innerHTML = "<img src='/travelShare"+myobj[key].user_imgurl+"' alt=''>"
				
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
		alert("???????????? ????????? ??????????????????.");
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
		alert("???????????? ????????? ??????????????????.");
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



























