const board_paging_number = document.getElementsByClassName("board_paging_number");

Array.from(board_paging_number).forEach((value) => {
	value.addEventListener('click', (e) => {
		Array.from(board_paging_number).forEach((value2) => {
			value2.setAttribute("class", "board_paging_number");
			});
			value.setAttribute("class", "board_choose board_paging_number");
		const click_number = value.getAttribute("id");
		pagingRest(click_number);
		
	});
});

function pagingRest(click_number) {
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
				board_imgContent.innerHTML = "<img onclick='imgClick()' alt='' src='<%=request.getContextPath()%>/resources/files/1.jpg'> <img alt='' src='<%=request.getContextPath()%>/resources/files/2.jpg'>";

				var board_textContent = document.createElement("div");
				board_textContent.setAttribute("class", "board_textContent");
				board_textContent.innerHTML = "<div class='board_text1'>" + myobj[key].user_name + "</div> <div class='board_textTit'>" + myobj[key].board_name + "</div>";

				var board_option = document.createElement("div");
				board_option.setAttribute("class", "board_option");
				board_option.innerHTML = "<div class='board_areaPan'>" +
					"<span class='material-icons-outlined board_area_img'> location_on </span>" +
					"<div class='board_area'>" + myobj[key].area + " </div> </div>" +
					"<div class='board_likePan'> <span class='material-icons-outlined board_like_img'> favorite </span> <div class='like'>0명</div> </div>";
				board_content.appendChild(board_imgContent);
				board_content.appendChild(board_textContent);
				board_content.appendChild(board_option);
				board_list_travel.appendChild(board_content);
			});
		}
	});

	xhttp.open('POST', '/travelShare/boardrest/paging/', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	xhttp.send(click_number);
}


function cat1_change(key){
 var cat1_num = new Array(11,26,27,28,29,30,31,36,41,47,48,42,43,44,45,46,50);
 var cat1_name = new Array('서울','부산','대구','인천','광주','대전','울산','세종', '경기', '경북','경남','강원','충북','충남','전북','전남','제주');


 var cat2_num = new Array();
 var cat2_name = new Array();


 cat2_num[11] = new Array(11680, 11740, 11305, 11500, 11620, 11215, 11530, 11545, 11350, 11320, 11230, 11590, 11440, 11410, 11650, 11200, 11290, 11710, 11470, 11560, 11170, 11380, 11110, 11140, 11260);
 cat2_name[11] = new Array('강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구');


 cat2_num[26] = new Array(26440, 26410, 26290, 26170, 26260, 26230, 26320, 26530, 26380, 26140, 26500, 26470, 26220, 26110, 26350, 26710);
 cat2_name[26] = new Array('강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군');


 cat2_num[27] = new Array(27220, 27290, 27140, 27230, 27170, 27260, 27110, 27710);
 cat2_name[27] = new Array('남구','달서구','동구','북구','서구','수성구','중구','달성군');


 cat2_num[28] = new Array(28245, 28170, 28220, 28220, 28237, 28260, 28185, 28110, 28710, 28720);
 cat2_name[28] = new Array('계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군');


 cat2_num[29] = new Array(29220, 29155, 29110, 29170, 29140);
 cat2_name[29] = new Array('광산구','남구','동구','북구','서구');


 cat2_num[30] = new Array(30230, 30110, 30170, 30200, 30140);
 cat2_name[30] = new Array('대덕구','동구','서구','유성구','중구');


 cat2_num[31] = new Array(31140, 31170, 31200, 31110, 31710);
 cat2_name[31] = new Array('남구','동구','북구','중구','울주군');

 cat2_num[36] = new Array(36110);
 cat2_name[36] = new Array('세종특별자치시');


 cat2_num[42] = new Array(42150, 42170, 42230, 42210, 42130, 42110, 42190, 48820, 42800, 42830, 42750, 42810, 42770, 42780, 42760, 42720, 42790, 42730);
 cat2_name[42] = new Array('강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군');


 cat2_num[41] = new Array(41281, 41285, 41287, 41290, 41210, 41610, 41310, 41410, 41570, 41360, 41250,  41197, 41199, 41195, 41135, 41131,  41133, 41113, 41111, 41115, 41390, 41273, 41271, 41550, 41173, 41171, 41370, 41461, 41465, 41463, 41430, 41150, 41500, 41480, 41220, 41450, 41590, 40820, 41630, 41830,  41670, 41800, 41650);
 cat2_name[41] = new Array('고양시 덕양구','고양시 일산동구', '고양시 일산서구','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시 소사구','부천시 오정구','부천시 원미구','성남시 분당구','성남시 수정구','성남시 중원구','수원시 권선구','수원시 장안구','수원시 팔달구','시흥시','안산시 단원구','안산시 상록구','안성시','안양시 동안구','안양시 만안구','오산시','용인시 처인구', '용인시 수지구','용인시 기흥구' ,'의왕시','의정부시','이천시','파주시','평택시','하남시','화성시','가평군','양주시','양평군','여주시','연천군','포천군');


 cat2_num[48] = new Array(48310, 48250, 48125, 48127, 48270, 48240, 48330, 48170, 48129, 48220, 48880,  48820, 48840, 48860, 48720, 48740, 48850, 48730, 48870, 48890);
 cat2_name[48] = new Array('거제시','김해시','창원시 마산합포구', '창원시 마산회원구','밀양시','사천시','양산시','진주시','창원시 진해구', '통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군');


 cat2_num[47] = new Array(47290, 47130, 47190, 47150, 47280, 47250, 47170, 47210,  47230, 47111, 47113, 47830, 47720, 47920, 47840, 47770, 47760, 47900, 47940, 47930, 47730, 47820, 47750, 47850);
 cat2_name[47] = new Array('경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시 남구','포항시 북구','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');


 cat2_num[46] = new Array(46230, 46170, 46110, 46150, 46130, 46810, 46770, 46720, 46730, 46710, 46840, 46780, 46910,  46870, 46830, 46890, 46880, 46800, 46900, 46860, 46820, 46790);
 cat2_name[46] = new Array('광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');


 cat2_num[45] = new Array(45130, 45210, 45190, 45140, 45113, 45111, 45180,  45790, 45730, 45800, 45770, 45710, 45750, 45740, 45720);
 cat2_name[45] = new Array('군산시','김제시','남원시','익산시','전주시 덕진구','전주시 완산구','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');


 cat2_num[50] = new Array(50130, 50110);
 cat2_name[50] = new Array('서귀포시','제주시');


 cat2_num[44] = new Array(44150,   44230, 44180, 44210, 44200, 44131, 44133, 44710, 44270, 44760, 44770, 44810, 44790, 44825, 44800);
 cat2_name[44] = new Array('공주시','논산시','보령시','서산시','아산시','천안시 동남구','천안시 서북구' ,'금산군','당진군','부여군','서천군','예산군','청양군','태안군','홍성군');


 cat2_num[43] = new Array(43150, 43111, 43113, 43114 ,43130, 43760, 43800, 43720, 43740,  43730, 43770, 43750);
 cat2_name[43] = new Array('제천시','청주시 상당구','청주시 흥덕구','청주지 청원구', '충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군');
 if(key == '') return;

 var name = cat2_name[key];

 var val = cat2_num[key];

var sel = document.getElementById("h_area2");

 for(i=sel.length-1; i>=0; i--)

  sel.options[i] = null;

 sel.options[0] = new Option('-선택-','', '', 'true');
 sel.options[1] = new Option('전체','0');

 for(i=0; i<name.length; i++){

  sel.options[i+2] = new Option(name[i],val[i]);
 }
}

function imgClick() {
	const body = document.getElementsByTagName("body");
		Array.from(body).forEach((value2) => {
			value2.setAttribute("class", "board_detail_open");
		});
	document.getElementById("board_clickPan").setAttribute("class", "board_show");
}

function imgClickRollback() {
	const body = document.getElementsByTagName("body");
		Array.from(body).forEach((value2) => {
			value2.setAttribute("class", "");
		});
	document.getElementById("board_clickPan").setAttribute("class", "board_hide");
}
















