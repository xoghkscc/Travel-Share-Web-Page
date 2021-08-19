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
	
	public List<User> getAdmin_SearchingList(@Param("name") String name);
}
