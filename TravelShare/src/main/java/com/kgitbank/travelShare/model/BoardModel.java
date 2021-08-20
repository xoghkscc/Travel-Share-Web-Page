package com.kgitbank.travelShare.model;

import lombok.Data;

@Data
public class BoardModel {
	private Integer board_id;
	private Integer user_id;
	private String board_title;
	private Integer board_lookupcnt;
	private String board_bestplace;
	private String board_besteat;
	private String board_mainimg;
	private String board_content;
	private Integer sigungucode;
	private String sido;
	private String sigungu;
	private String addr;
	private Integer likecnt;
}