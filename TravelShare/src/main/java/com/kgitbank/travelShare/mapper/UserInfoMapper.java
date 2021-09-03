package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;
import java.util.List;

import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.LoginInfo;
import com.kgitbank.travelShare.model.UserInfo;

public interface UserInfoMapper {
	
	public int adduserinfo(UserInfo userinfo);
	
	public Integer checkId(String user_email);
	
	public Integer checkNickname(String user_nickname);
	
	public UserInfo getUserEmail(UserInfo userinfo);
	
	public String getUserNickname(int user_id);
	
	public UserInfo checkPassword(UserInfo userinfo);
	
	public int changePassword(UserInfo userinfo);
	
	public UserInfo getUserInfo(Object object);
	
	public Integer getUserLike(int user_id);
	
	public int updateUserImgurl(UserInfo userinfo);
	
	public UserInfo getUserInfo2(int user_id); 
	
	public int updateUserinfo15(UserInfo userinfo);
}
