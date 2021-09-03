package com.kgitbank.travelShare.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.kgitbank.travelShare.model.User;


public interface UserMapper {

	@Select("SELECT * FROM user_info")
	public List<User> getUserList();
	
	@Select("SELECT * FROM user_info order by decode(user_Position, '★master', 1, '☆manager', 2, 'member', 3)")
	public List<User> getAdmin_positionList();
	
	@Select("SELECT * FROM user_info order by user_warning desc")
	public List<User> getAdmin_warningList();
	
	//get User only one
	public User getAdmin_User(@Param("noticeNickName") String noticeNickName);
	
	public List<User> getAdmin_SearchingList(@Param("name") String name);
	
	//getId
	public int getAdminUsersId();
	
	//update
	public int getAdmin_position_update(@Param("AdminNickName") String AdminNickName, @Param("AdminPositionValue") String AdminPositionValue);
	public int getAdmin_declare_update(@Param("AdminNickName") String AdminNickName, @Param("declareCnt") String declareCnt);

	//delete
	public int deleteAdminUser(@Param("adminUserEmail") String adminUserEmail);
}
