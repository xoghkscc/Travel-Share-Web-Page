//var userId = document.getElementsByClassName("haeder_alram")[0].getAttribute("id");
const alramCount = document.getElementById("alramCount");
const haeder_alram = document.getElementById("haeder_alram");
const body = document.getElementsByTagName("body");

function alramAjax(){
	
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		const myobj = JSON.parse(target.responseText);
		
		
		if(status == 200 & readyState == 4){
			var alramcontent = document.createElement("div");
			alramcontent.setAttribute("class", "alramcontent");
			var contentCnt = 0;
			Object.keys(myobj).forEach((key) => {
				contentCnt++;
			});
		alramcontent.innerHTML = contentCnt;
		if(contentCnt != 0){
			alramCount.appendChild(alramcontent);
		}
			
		document.body.onclick = ((e) => {
			if(e.target.id !== 'alramClick'){
				if(document.getElementById("alramContentText") !== null){
					document.getElementById("alramContentText").remove();
				}
			} else {
				if(document.getElementById("alramContentText") !== null){
					document.getElementById("alramContentText").remove();
				}
				alramContent(myobj);
			}
		});
		
		}
	});
	
	xhttp.open('GET', '/travelShare/loginrest/alramContent/', true);
	xhttp.send();
}

alramAjax();
//window.setInterval(alramAjax, 3000);



function alramContent(content){
	var haeder_alram = document.getElementById("haeder_alram");
	
	var alramContentText = document.createElement("div");
	alramContentText.setAttribute("id", "alramContentText");
	alramContentText.setAttribute("class", "alramContentText");
	
	Object.keys(content).forEach((key) => {
		var alramcontent = document.createElement("div");
		
		var alramImg = document.createElement("img");
		alramImg.setAttribute("class", "alramImg");
		alramImg.setAttribute("src", content[key].board_mainimg);
		
		var alramText = document.createElement("div");
		alramText.setAttribute("class", "alramText");
		
		var comment_date = new Date(content[key].comment_date);
		var now_date = new Date();
		var showDifference;
		
		var monthDifference = now_date.getMonth() - comment_date.getMonth();
		var dateDifference = now_date.getDate() - comment_date.getDate();
		var hoursDifference = now_date.getHours() - comment_date.getHours();
		var minutesDifference = now_date.getMinutes() - comment_date.getMinutes();
		
		if(monthDifference !== 0){
			showDifference = monthDifference+"달 전";
		} else if(dateDifference !== 0){
			showDifference = dateDifference+"일 전";
		} else if (hoursDifference !== 0){
			showDifference = hoursDifference+"시간 전";
		} else {
			showDifference = minutesDifference+"분 전";
		}
		
		if(content[key].board_id !== null ){
			alramText.innerHTML= "\'"+content[key].board_title+"\' 게시글에 댓글이 달렸습니다. <div class='alramTime'>"+showDifference+"</div>"
		}
		
		if(content[key].qna_id !== null ){
			alramText.innerHTML= "\'"+content[key].board_title+"\' QNA에 댓글이 달렸습니다. <div class='alramTime'>"+showDifference+"</div>"
		}
		
		
		alramcontent.appendChild(alramImg);
		alramcontent.appendChild(alramText);
		
		alramcontent.addEventListener('click', () => {
			if(content[key].board_id !== null ){
				alramLookChange(content[key].board_id);
				location.href = "../board/mainBoard?board_id="+content[key].board_id+"&user_id="+content[key].user_id;
			}
			
			if(content[key].qna_id !== null ){
				alramLookChange2(content[key].qna_id);
				location.href = "../qna/qnaView?qna_id="+content[key].qna_id;
			}
			
		})
		
		alramContentText.appendChild(alramcontent);
		
	});
	haeder_alram.appendChild(alramContentText);
}

function alramLookChange(board_id){
	const xhttp = new XMLHttpRequest();
	
	xhttp.open('POST', '/travelShare/loginrest/alramLookChange/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(board_id);
}

function alramLookChange2(qna_id){
	const xhttp = new XMLHttpRequest();
	
	xhttp.open('POST', '/travelShare/loginrest/alramLookChange2/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(qna_id);
}




