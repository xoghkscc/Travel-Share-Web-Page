package com.kgitbank.travelShare.mapper;

import java.util.List;

import com.kgitbank.travelShare.model.LoginInfo;
import com.kgitbank.travelShare.model.UserInfo;

public interface LoginMapper {
	
	public LoginInfo loginCheck(LoginInfo logininfo);

	public List<LoginInfo> CheckloginId(LoginInfo logininfo);
	

}
