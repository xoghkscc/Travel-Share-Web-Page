package com.kgitbank.travelShare.model;

import java.util.Date;

import lombok.Data;

@Data
public class CommentInfo {
	private Integer comment_id;
	private Integer user_id;
	private Integer board_id;
	private String comment_text;
	private String comment_date;
	private Integer qna_id;
	private String user_nickname;
	private String user_imgurl;
	private String comment_lookcheck;
	private String board_mainimg;
	private String board_title;
}
