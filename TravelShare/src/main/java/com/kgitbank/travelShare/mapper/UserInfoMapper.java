package com.kgitbank.travelShare.mapper;

import java.util.List;

import com.kgitbank.travelShare.model.LoginInfo;
import com.kgitbank.travelShare.model.UserInfo;

public interface UserInfoMapper {

	public int adduserinfo(UserInfo userinfo);
	
	public Integer checkId(String user_email);
	
	public Integer checkNickname(String user_nickname);
	
	public UserInfo getUserEmail(UserInfo userinfo);
}
