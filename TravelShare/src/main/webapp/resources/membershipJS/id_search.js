const phone_text1 = document.getElementById("phone_text1");

phone_text1.addEventListener('keyup', (e) => {
    if((e.key >= 0 && e.key <=9) ||
        e.key == "Backspace" ||
        e.key == "ArrowLeft" ||
        e.key == "ArrowRight" ||
        e.key == "ArrowDown" ||
        e.key == "ArrowUp"   ||
        e.key == "Tab" ||
        e.key == "Enter"
    ) {
        return true;
    } else {
        alert("숫자만 입력해 주세요")
        document.getElementById("phone_text1").value ='';
        return false;
    }
});