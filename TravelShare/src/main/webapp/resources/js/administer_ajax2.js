/**
 * 
 */

const admin_member = document.getElementById('admin_member');
const admin_main = document.querySelector('.admin_main');
const admin_btn = document.getElementsByClassName('admin_btn');

admin_member.addEventListener('click', loadComments);

function loadComments(e) {
	for(let i=0; i < admin_btn.length; i++){
		if(i == 0){
			admin_btn[i].style.display = "block";
		}else{
			admin_btn[i].style.display = "none";
		}	
	}
	
//	var xhttp = new XMLHttpRequest();
//	console.log(`${getContextPath()}`);
//	xhttp.open("GET", `${getContextPath()}/site/admin_member`);
//	xhttp.onreadystatechange = function() {
//    
//		if (xhttp.readyState == 4 && xhttp.status == 200) {
//			console.log(xhttp.responseText + "<script src='<%=request.getContextPath()%>/resources/js/administer_ajax.js?ver=2.5'></script>");
//			
//	        admin_main.innerHTML = xhttp.responseText + "<script src='<%=request.getContextPath()%>/resources/js/administer_ajax.js?ver=2.5'></script>";
//	    }
//    };
//  	xhttp.send()
}


function getContextPath() {
    var hostIndex = location.href.indexOf( location.host ) + location.host.length;
    return location.href.substring( hostIndex, location.href.indexOf('/', hostIndex + 1) );
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
	console.log(admin_allContainer.length);
	admin_allContainer[4].style.display = "none";
	admin_allContainer[5].style.display = "block";
}