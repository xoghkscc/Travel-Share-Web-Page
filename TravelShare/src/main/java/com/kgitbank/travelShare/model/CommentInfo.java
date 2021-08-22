package com.kgitbank.travelShare.model;

import java.util.Date;

import lombok.Data;

@Data
public class CommentInfo {
	private Integer commnet_id;
	private Integer user_id;
	private Integer board_id;
	private String comment_text;
	private Date comment_date;
	private Integer qna_id;
}
