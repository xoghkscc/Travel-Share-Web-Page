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
			
			console.log("드러와쓰");
			//시작하면서 안의 내용 초기화
			board_content.innerHTML = "";
			main_recommend.innerHTML = "";
		
			Object.keys(myobj).forEach((key) => {
				const board_content = document.createElement("div");
				board_content.setAttribute("class", "board_content");
				board_content.setAttribute("id", "board_content");

				const board_imgContent = document.createElement("div");
				board_imgContent.setAttribute("class", "board_imgContent");
				board_imgContent.innerHTML = "<img onclick='imgClick("+myobj[key].board_id+")' alt='' src='"+myobj[key].board_mainimg+"'> <img alt='' src='/travelShare/resources/files/null.jpg'>";

				const board_textContent = document.createElement("div");
				board_textContent.setAttribute("class", "board_textContent");
				board_textContent.innerHTML = "<div class='board_text1'>" + myobj[key].user_id + "</div> <div class='board_textTit'>" + myobj[key].board_title + "</div>";

				const board_option = document.createElement("div");
				board_option.setAttribute("class", "board_option");
				board_option.innerHTML = "<div class='board_areaPan'>" +
					"<span class='material-icons-outlined board_area_img'> location_on </span>" +
					"<div class='board_area'>" + myobj[key].sigungu + " </div> </div>" +
					"<div class='board_likePan'> <span class='material-icons-outlined board_like_img'> favorite </span> <div class='like'>" +myobj[key].like_cnt+"명</div> </div>";
				
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


function getBoardContent(value) {
	const xhttp = new XMLHttpRequest();
	
	xhttp.addEventListener('readystatechange', (e) => {
		const target = e.target;

		myobj = JSON.parse(target.responseText);

			Object.keys(myobj).forEach((key) => {
				document.getElementById("board_googleMap").setAttribute("src", "https://www.google.com/maps?q= "+myobj[key].addr+" &output=embed");
//				document.getElementById("board_mainimg").setAttribute("src", myobj[key].board_mainimg);
				document.getElementById("board_title").innerHTML = myobj[key].board_title;
				document.getElementById("board_bestplace").innerHTML = myobj[key].board_bestplace;
				document.getElementById("board_besteat").innerHTML = myobj[key].board_besteat;
				document.getElementById("board_main_content").innerHTML = myobj[key].board_content;
				
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

x_box.addEventListener('click', function(e){
	document.getElementsByTagName("body")[0].style.overflow = "scroll";
	document.getElementById("board_clickPan").setAttribute("class", "board_hide");
});