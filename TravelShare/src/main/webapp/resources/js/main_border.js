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
				board_imgContent.innerHTML = "<img alt='' src='<%=request.getContextPath()%>/resources/files/1.jpg'> <img alt='' src='<%=request.getContextPath()%>/resources/files/2.jpg'>";

				var board_textContent = document.createElement("div");
				board_textContent.setAttribute("class", "board_textContent");
				board_textContent.innerHTML = "<div class='board_text1'>" + myobj[key].user_name + "</div> <div class='board_textTit'>" + myobj[key].board_name + "</div>";

				var board_option = document.createElement("div");
				board_option.setAttribute("class", "board_option");
				board_option.innerHTML = "<div class='board_areaPan'>" +
					"<span class='material-icons-outlined board_area_img'> location_on </span>" +
					"<div class='board_area'>" + myobj[key].area + " </div> </div>" +
					"<div class='board_likePan'> <span class='material-icons-outlined board_like_img'> favorite </span> <div class='like'>0��</div> </div>";
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
 var cat1_num = new Array(11,   26 ,  27,  28,    29,  30,  31,    36,   42,    41,  48,   47,   46,   45,   50,  44,   43);
 var cat1_name = new Array('����','�λ�','�뱸','��õ','����','����','���','����', '����','���','�泲','���','����','����','����','�泲','���');
 var cat2_num = new Array();
 var cat2_name = new Array();
 cat2_num[0] = new Array(0);
 cat2_name[0] = new Array('');
 cat2_num[11] = new Array(17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41);
 cat2_name[11] = new Array('������','������','���ϱ�','������','���Ǳ�','������','���α�','��õ��','�����','������','���빮��','���۱�','������','���빮��','���ʱ�','������','���ϱ�','���ı�','��õ��','��������','��걸','����','���α�','�߱�','�߶���');
 cat2_num[26] = new Array(42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57);
 cat2_name[26] = new Array('������','������','����','����','������','�λ�����','�ϱ�','���','���ϱ�','����','������','������','������','�߱�','�ؿ�뱸','���屺');
 cat2_num[27] = new Array(58,59,60,61,62,63,64,65);
 cat2_name[27] = new Array('����','�޼���','����','�ϱ�','����','������','�߱�','�޼���');
 cat2_num[28] = new Array(66,67,68,69,70,71,72,73,74,75);
 cat2_name[28] = new Array('��籸','����','������','����','����','����','������','�߱�','��ȭ��','������');
 cat2_num[29] = new Array(76,77,78,79,80);
 cat2_name[29] = new Array('���걸','����','����','�ϱ�','����');
 cat2_num[30] = new Array(81,82,83,84,85);
 cat2_name[30] = new Array('�����','����','����','������','�߱�');
 cat2_num[31] = new Array(86,87,88,89,90);
 cat2_name[31] = new Array('����','����','�ϱ�','�߱�','���ֱ�');
 cat2_num[36] = new Array(1186);
 cat2_name[36] = new Array('����Ư����ġ��');
 cat2_num[42] = new Array(91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108);
 cat2_name[42] = new Array('������','���ؽ�','��ô��','���ʽ�','���ֽ�','��õ��','�¹��','����','�籸��','��籺','������','������','������','ö����','��â��','ȫõ��','ȭõ��','Ⱦ����');
 cat2_num[41] = new Array(109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148);
 cat2_name[41] = new Array('���� ���籸','���� �ϻ걸','��õ��','�����','���ֽ�','������','������','������','�����ֽ�','����õ��','��õ�� �һ籸','��õ�� ������','��õ�� ���̱�','������ �д籸','������ ������','������ �߿���','������ �Ǽ���','������ ��ȱ�','������ �ȴޱ�','�����','�Ȼ�� �ܿ���','�Ȼ�� ��ϱ�','�ȼ���','�Ⱦ�� ���ȱ�','�Ⱦ�� ���ȱ�','�����','���ν�','�ǿս�','�����ν�','��õ��','���ֽ�','���ý�','�ϳ���','ȭ����','����','���ֱ�','����','���ֱ�','��õ��','��õ��');
 cat2_num[48] = new Array(149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168);
 cat2_name[48] = new Array('������','���ؽ�','�����','�о��','��õ��','����','���ֽ�','���ؽ�','â����','�뿵��','��â��','����','���ر�','��û��','�Ƿɱ�','â�籺','�ϵ���','�Ծȱ�','�Ծ籺','��õ��');
 cat2_num[47] = new Array(169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192);
 cat2_name[47] = new Array('����','���ֽ�','���̽�','��õ��','�����','���ֽ�','�ȵ���','���ֽ�','��õ��','���׽� ����','���׽� �ϱ�','��ɱ�','������','��ȭ��','���ֱ�','������','���籺','��õ��','�︪��','������','�Ǽ���','û����','û�۱�','ĥ�');
 cat2_num[46] = new Array(193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214);
 cat2_name[46] = new Array('�����','���ֽ�','������','��õ��','������','������','���ﱺ','���','���ʱ�','��籺','���ȱ�','������','�žȱ�','������','���ϱ�','�ϵ���','�强��','���ﱺ','������','����','�س���','ȭ����');
 cat2_num[45] = new Array(215,216,217,218,219,220,221,222,223,224,225,226,227,228,229);
 cat2_name[45] = new Array('�����','������','������','�ͻ��','���ֽ� ������','���ֽ� �ϻ걸','������','��â��','���ֱ�','�ξȱ�','��â��','���ֱ�','�ӽǱ�','�����','���ȱ�');
 cat2_num[50] = new Array(230,231,232,233);
 cat2_name[50] = new Array('��������','���ֽ�','�����ֱ�','�����ֱ�');
 cat2_num[44] = new Array(234,235,236,237,238,239,240,241,242,243,244,245,246,247,248);
 cat2_name[44] = new Array('���ֽ�','����','���ɽ�','�����','�ƻ��','õ�Ƚ�','�ݻ걺','������','�ο���','��õ��','���ⱺ','���걺','û�籺','�¾ȱ�','ȫ����');
 cat2_num[43] = new Array(249,250,251,252,253,254,255,256,257,258,259,260);
 cat2_name[43] = new Array('��õ��','û�ֽ� ��籸','û�ֽ� �����','���ֽ�','���걺','�ܾ籺','������','������','��õ��','������','��õ��','û����');

 if(key == '') return;

 var name = cat2_name[key];

 var val = cat2_num[key];

var sel = document.getElementById("h_area2");

 for(i=sel.length-1; i>=0; i--)

  sel.options[i] = null;

 sel.options[0] = new Option('-����-','', '', 'true');
 sel.options[1] = new Option('��ü','0');

 for(i=0; i<name.length; i++){

  sel.options[i+2] = new Option(name[i],val[i]);
 }
}

