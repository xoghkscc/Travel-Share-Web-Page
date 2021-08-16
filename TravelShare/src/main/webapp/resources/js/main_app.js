const main_start = document.querySelector('.main_start');
const main_login_Btn = document.getElementById('main_login_Btn');
const main_bottomMenu = document.getElementsByClassName('main_bottomMenu');
const main_map_app = document.querySelector('.main_map_app');
const main_cellphone_list = document.getElementsByClassName('main_cellphone_list');
const main_sticky_text = document.getElementsByClassName('main_sticky_text');
const main_sticky_container2 = document.querySelector('.main_sticky_container2');

main_start.addEventListener('click', main_start_click);
main_login_Btn.addEventListener('click', main_login_Btn_click);


for(let i=0; i < main_bottomMenu.length; i++){
    main_bottomMenu[i].addEventListener('mouseover', main_bottomMenu_mouseover);
    main_bottomMenu[i].addEventListener('mouseout', main_bottomMenu_mouseout);
}

function main_start_click(e){
    console.log("나옴");
    console.log(main_map.style.display);
    
    window.scrollTo(0, 800);
}

//스크롤에 따른 이미지 바꾸기
window.addEventListener('scroll', main_map_scroll);
function main_map_scroll(e) {
    let main_scrollY = document.documentElement.scrollTop;
    
    main_sticky_container2.children[0].style.transform = `translateX(${main_scrollY-3000}px) rotateZ(${main_scrollY-3000}deg)`;

    // console.log(document.documentElement.scrollTop);

    if(main_scrollY > 4800){
        main_cellphone_list[1].children[0].style.opacity = '0';
        main_cellphone_list[2].children[0].style.opacity = '1';
        main_sticky_text[1].style.top = '-500px';
        main_sticky_text[1].style.opacity = '0';
        main_sticky_text[2].style.opacity = '1';
        main_sticky_text[2].style.left = '0px';
        main_sticky_text[2].style.top = '30px';
    }else if(main_scrollY > 3800){
        main_cellphone_list[0].children[0].style.opacity = '0';
        main_cellphone_list[1].children[0].style.opacity = '1';
        main_cellphone_list[2].children[0].style.opacity = '0';
        main_sticky_text[0].style.top = '-500px';
        main_sticky_text[0].style.opacity = '0';
        main_sticky_text[1].style.opacity = '1';
        main_sticky_text[1].style.left = '0px';
        main_sticky_text[1].style.top = '30px';
        main_sticky_text[2].style.left = '-1200px';
    }else if(main_scrollY > 2000){
        main_cellphone_list[0].children[0].style.opacity = '1';
        main_cellphone_list[1].children[0].style.opacity = '0';
        main_sticky_text[0].style.opacity = '1';
        main_sticky_text[0].style.left = '0px';
        main_sticky_text[0].style.top = '30px';
        main_sticky_text[1].style.left = '-1200px';
    }
}

function main_bottomMenu_mouseover(e) {
    e.target.style.color = 'orangered';
}

function main_bottomMenu_mouseout(e) {
    e.target.style.color = 'blanchedalmond';
}

function main_login_Btn_click(e) {
    location.href = `${getContextPath()}/site/login`;
}

window.addEventListener('resize', resize);
// let stageWidth = 900;
// let stageHeight = 700;

function resize(){

    if(document.body.clientWidth < 947 && drawMap == 1){
        drawMap = 2;
        var highMap2 = new highMaps();
        highMap2.init();
    }else if(document.body.clientWidth < 500 && drawMap == 2){
        drawMap = 3;
        var highMap3 = new highMaps();
        highMap3.init();
    }

    if(document.body.clientWidth >= 500 && drawMap == 3){
        drawMap = 2;
        var highMap3 = new highMaps();
        highMap3.init();
    }else if(document.body.clientWidth >= 947 && drawMap == 2){
        drawMap = 1;
        var highMap3 = new highMaps();
        highMap3.init();
    }
}