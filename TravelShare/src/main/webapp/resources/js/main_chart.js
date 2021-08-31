/*
 *  - Highmaps
 * 	Example : http://www.highcharts.com/maps/demo/map-drilldown
 *  Document : http://api.highcharts.com/highmaps
 * */
let drawMap = 1;
let mapWidth = 1000;
let mapHeight = 900;
let mapFontSize = 10;

function highMaps() {
    
	var me = this;

	me.chart = null;
	me.selected = '0';
	me.event = {
		select : function(){
			
		},
		unselect : function(){
			
		},
		drillup : function(){
			
		}
	};
	
	me.init();
};
highMaps.prototype.init = function(){
	
	if(drawMap == 1){
        mapWidth = 1000;
        mapHeight = 900;
        mapFontSize = 10;
    }else if(drawMap == 2){
    
        mapWidth = 590;
        mapHeight = 650;
        mapFontSize = 7.5;
    }else if(drawMap == 3){
 
        mapWidth = 450;
        mapHeight = 550;
        mapFontSize = 6;
    }
	
	var me = this;
	// 전국단위 지도 로드
	$.ajaxSetup({
    scriptCharset: "utf-8",
    contentType: "application/json; charset=utf-8"
});

	$.getJSON(`${getContextPath()}/resources/json/0.json?ver=1.2`, function (geojson) {
        var data = Highcharts.geojson(geojson, 'map');
        $.each(data, function () {
        	this.drilldown = this.properties['code'];
        });
        $('#main_map').highcharts('Map', {
        	credits: { enabled: false },
            chart : {
                //배경색 설정
                backgroundColor: 'none',
                width: mapWidth,
                height: mapHeight,
                events: {
                	// drilldown : 클릭시 하위레벨로 진입
                    drilldown: function (e) {
                        if (!e.seriesOptions) {
                        	// 상위레벨에서 선택한 부분의 코드값에 따라 하위레벨이 결정
                            var chart = this, mapKey = e.point.drilldown;
                            $.getJSON(`${getContextPath()}/resources/json/` + mapKey + '.json?ver=1.2', function (geojson2) {
                                data = Highcharts.geojson(geojson2, 'map');
                                chart.addSeriesAsDrilldown(e.point, {
                                    name: e.point.name,
                                    data: data,
                                    showInLegend: false,
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                        enabled: true,
                                        allowOverlap: false,
                                        format: '{point.name}',
                                        // 하위 지도 레이블 스타일 설정
                                        /* defaults : {
                                         * 		"color": "contrast", 
                                         * 		"fontSize": "11px", 
                                         * 		"fontWeight": "bold"; 
                                         * 		"textShadow": "0 0 6px contrast, 0 0 3px contrast" 
                                         * 	}
                                         *  디폴트 상태입니다. ex)textShadow: '0 0 0px #000000'를 설정하지 않는다면 textShadow 효과가 지속됩니다.
                                         *                                      * 
                                         * */
                                        //시도 안으로 들어갔을때 스타일
                                        style : {
                                        	color : 'black',
                                            textShadow: '0 0 0px #000000',
                                            fontWeight: "none",
                                            backgroundColor : 'black',
                                            textDecoration: 'none'
                                        }
                                    },
                                    states: {
                                    	// 하위 지도 hover 스타일 설정
                                        hover: {
                                            color: 'orangered'
                                        },
                                        // 하위 지도 select 스타일 설정
                                        select: {
                                            color: '#998A00'
                                        }
                                    },
                                    tooltip: {
                                    	headerFormat: '',
                                        pointFormat: '{point.name}'
                                    }
                                });
                            });
                        }
                    },
                    drillup: function (e) {
                    	me.selected = '0';
                    	me.event.drillup();
                    }
                }
            },
            series : [{
                data : data,
                showInLegend: false,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    shadow: false,
                    format: '{point.properties.name}'
                },
                states: {
                	// 상위 지도 hover 스타일 설정
                    hover: {
                        color: 'orangered',
                        borderColor: 'black'
                    }
                },
                tooltip: {
                	headerFormat: '',
                    pointFormat: '{point.properties.name}'
                }
            }],
            // 제목 제거
            title: null,
            // 부제목 제거
            subtitle: null,
            // 줌 설정
            mapNavigation: {
                enableMouseWheelZoom: false,
                enableTouchZoom : false
            },
            // 지역 선택시 하위 지도 띄우는 기능 설정
            drilldown: {
            	// 처음 시도 스타일적용
                activeDataLabelStyle: {
                	color : '#000',
                	shadow: false,
                    textShadow: '0 0 0px #000000',
                    fontWeight: "none",
                    textDecoration: 'none',
   					fontSize: `${mapFontSize}px`
                },
                // 상위 지도 버튼 스타일 설정
                drillUpButton: {
                    relativeTo: 'spacingBox'
                }
            },
            plotOptions: {
                series: {
                    point : {
                    	events: {
                            select: function () {
                            	// this.properties에 지정한 코드나 이름 값이 저장
                            	me.selected = this.properties.code;
                               if(this.properties.code.length < 4){
                                    sido = this.properties.name;
                                }

                                if(this.properties.code.length >= 4){
//                                    console.log(this.properties.code);
//                                    console.log(this.properties.name);
                                    if (!confirm(`${this.properties.name}를 선택하셨습니다. 확인(예) 또는 취소(아니오)를 선택해주세요.`)) {
                                    } else {
                                        me.selected = '0';
                                        me.event.drillup();
                                        location.href = `/travelShare/board/mainBoardFilter?sigungucode=${this.properties.code}&sidoName=${sido}&sidogunName=${this.properties.name}`;
                                    }
                                }

                            	try {
                            		me.event.select();
                            	} catch(err){} 
                            },
                            unselect: function () {
                            	// 기본적으로는 select 이벤트 발생 후 unselect가 발생
                            	// 아래의 코드를 사용하면 unselect 적용 후 select 이벤트가 발생
                            	var p = this.series.chart.getSelectedPoints();
                                if(p.length > 0 && p[0].x == this.x) {
                                	try {
                                		me.event.unselect();
                                	} catch(err){} 
                                }
                                me.selected = this.properties.code.substring(0,2);
                            }
                        }
                    }
                }
            }
        });
        me.chart = $("#main_map").highcharts();
    });
};
highMaps.prototype.drillUp = function(){
	var me = this;
	if( me.chart.drilldownLevels != undefined && me.chart.drilldownLevels.length > 0){
		me.chart.drillUp();
	}
};
highMaps.prototype.drillDown = function(code){
	var me = this;
	if(me.selected.substring(0,2) != code.substring(0,2)){
		// drilldown 상태라면 drillup 후에 drilldown 발생
		if( me.chart.drilldownLevels != undefined && me.chart.drilldownLevels.length > 0){
			me.chart.drillUp();
		}
		// data 중에 파라미터로 넘어온 code 값과 동일한 것이 있다면 그 data를 drilldown
		$.each(me.chart.series[0].data, function(idx, obj){
			if(obj.properties.code == code){
				obj.firePointEvent('click');
			}
		});
	}
};
highMaps.prototype.select = function(code){
	var me = this;
	me.unselect();
	$.each(me.chart.series[0].data, function(idx, obj){
		if(obj.properties.code == code){
			obj.select(true);
		}
	});
};
highMaps.prototype.unselect = function(code){
	var me = this;
	$.each(me.chart.series[0].data, function(idx, obj){
		obj.select(false);
	});
};


function getContextPath() {
    var hostIndex = location.href.indexOf( location.host ) + location.host.length;
    return location.href.substring( hostIndex, location.href.indexOf('/', hostIndex + 1) );
}
