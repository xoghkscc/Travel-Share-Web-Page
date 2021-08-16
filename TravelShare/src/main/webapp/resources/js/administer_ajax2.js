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
	
	var xhttp = new XMLHttpRequest();
	console.log(`${getContextPath()}`);
	xhttp.open("GET", `${getContextPath()}/site/admin_member`);
	xhttp.onreadystatechange = function() {
    
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			console.log(xhttp.responseText + "<script src='<%=request.getContextPath()%>/resources/js/administer_ajax.js?ver=2.5'></script>");
			
	        admin_main.innerHTML = xhttp.responseText + "<script src='<%=request.getContextPath()%>/resources/js/administer_ajax.js?ver=2.5'></script>";
	    }
    };
  	xhttp.send()
}


function getContextPath() {
    var hostIndex = location.href.indexOf( location.host ) + location.host.length;
    return location.href.substring( hostIndex, location.href.indexOf('/', hostIndex + 1) );
}
