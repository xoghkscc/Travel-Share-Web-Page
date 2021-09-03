package com.kgitbank.travelShare.model;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class QnaViewModel {
	@NonNull
	private Integer qna_id;
	private String title;
	private String content;	
	private String writer;	
	private Date regdate;
	private Integer viewcnt;
	private int user_id;
	private String cs_open;
	private String user_imgurl;
	private String user_nickName;
	private String user_position;
}
