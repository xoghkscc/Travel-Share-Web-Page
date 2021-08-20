package com.kgitbank.travelShare.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class AdminNotice {
	@NonNull
	private int notice_id;
	@NonNull
	private int user_id;
	@NonNull
	private String notice_title;
	private String notice_text;
	private int notice_lookupcnt;
	private Date notice_date;
}
