package com.kgitbank.travelShare.model;

import java.sql.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class QnaVO {
	@NonNull
	private Integer qno;
	@NonNull
	private String title;
	@NonNull
	private String content;
	@NonNull
	private String writer;
	@NonNull
	private Date regdate;
	@NonNull
	private Integer viewcnt;
}
