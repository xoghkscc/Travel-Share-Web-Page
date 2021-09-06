/**
 * 
 */

const board_commentId = document.getElementById("board_commentId");
const qna_view_qno = document.querySelector('.qna_view_qno');
const qna_user_position = document.querySelector('.qna_user_position');

window.onload = (e) => {
	var board_comment = this.board_commnet.value;
	var user_id = this.user_id.value;
	var qna_id = qna_view_qno.innerText;

	this.board_commnet.value = '';
	getQnaCommnet(qna_id);
}

board_commentId.onsubmit = (e) => {
	e.preventDefault();
	var board_comment = this.board_commnet.value;
	var user_id = this.user_id.value;
	var qna_id = qna_view_qno.innerText;
	var user_position = qna_user_position.innerText;
	if(user_id == ''){
		alert("로그인이 필요한 서비스입니다.");
		location.href = "../site/login";
	} else{
		if(user_position == "member"){
			console.log(user_position);
			alert("관리자만 댓글을 작성할 수 있습니다.");
		}else{
			insertCommnet(qna_id, user_id, board_comment);		
		}
	}
	this.board_commnet.value = '';
	
}

function insertCommnet(qna_id, user_id, board_comment){
	var xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		
		if(status == 200 & readyState == 4){
			getQnaCommnet(qna_id);
		}
	});
	
	var commnetInfo = {
		qna_id : qna_id,
		user_id : user_id,
		comment_text : board_comment
	}
	
	
	xhttp.open('POST', '/travelShare/qnaRest/qnaInsertComment/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(JSON.stringify(commnetInfo));
}

function getQnaCommnet(value) {
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;
		const status = target.status;
		const readyState = target.readyState;
		myobj = JSON.parse(target.responseText);
		console.log("여기확인2");
		var board_comment_show = document.getElementById("board_comment_show");
		board_comment_show.innerHTML = '';
		console.log(myobj);
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

	xhttp.open('POST', '/travelShare/qnaRest/qnaSelectComment/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8');
	xhttp.send(value);
}

document.getElementById("qna_button_modify").addEventListener('click', () => {
	location.href = "./qnaModify?qna_id="+qna_view_qno.innerText;
});

document.getElementById("qna_button_delete").addEventListener('click', () => {
	location.href = "./qnaDelete?qna_id="+qna_view_qno.innerText;
});

