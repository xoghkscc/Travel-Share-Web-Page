package com.kgitbank.travelShare.model;

import java.sql.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
public class QnaVO {
	
	private Integer qno;
	private String title;
	private String content;	
	private String writer;	
	private Date regdate;
	private Integer viewcnt;
	private Integer user_id;
	private String cs_open;
	private String type;
	private String[] typeArr;
}
