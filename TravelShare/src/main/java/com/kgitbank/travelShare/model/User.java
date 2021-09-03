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
public class User {

	@NonNull
	private int user_id;
	@NonNull
	private String user_email;
	@NonNull
	private String user_password;
	@NonNull
	private String user_name;
	@NonNull
	private String user_nickName;
	@NonNull
	private String user_phoneNumber;
	private Date user_date;
	private int user_point;
	private String user_gender;
	private String user_address;
	private String user_rank;
	private String user_position;
	private String user_imgurl;
	private int user_warning;
	private String user_birth;
	private String user_sido;
	private String user_sigungu;
	private String user_roadName;
	private int user_zoneCode;  
}
