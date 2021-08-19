package com.kgitbank.travelShare.model;

import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@ToString
public class UserInfo {
	
	private String user_email;
	private String user_password;
	private String user_name;
	private String user_nickname;
	private String user_phonenumber;
	private Date user_date;
	private int user_point;
	private String user_gender;
	private String user_address;
	private String user_rank;
	private String user_position;
	private String user_imgurl;
	private String user_sido;
	private String user_sigungu;
	private String user_roadname;
	private int user_zonecode;
	private String user_year;
	private String user_month;
	private String user_day;
	private String user_birth;
	
	
} 
