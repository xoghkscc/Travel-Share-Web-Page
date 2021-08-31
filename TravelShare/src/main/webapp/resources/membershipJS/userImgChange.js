const user_img = document.getElementById("user_img");
const file_input = document.getElementById("file_input");
function fileCheck(obj, event) {
    pathpoint = obj.value.lastIndexOf('.');
    filepoint = obj.value.substring(pathpoint+1,user_img.length);
    filetype=filepoint.toLowerCase();
    if(filetype=='jpg' || filetype=='gif' || filetype=='png' || filetype=='jpeg' || filetype=='bmp'){
        loadFile(event);
    } else {
        alert('이미지 파일만 선택할 수 있습니다');
    file_input.innerHTML = "<label for=\"user_img\"> 파일 찾기</label> <input type=\"file\" id=\"user_img\" form=\"profile_change\" onchange=\"fileCheck(this, event)\" accept=\"image/*\" name=\"user_imgurl\" required/>";      
    }
};

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
