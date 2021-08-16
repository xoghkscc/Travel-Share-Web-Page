package com.kgitbank.travelShare.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.kgitbank.travelShare.model.User;


public interface UserMapper {

	@Select("SELECT * FROM user_prac")
	public List<User> getUserList();
	
	@Select("SELECT * FROM user_prac order by decode(userPosition, '★master', 1, '☆manager', 2, 'member', 3)")
	public List<User> getAdmin_positionList();
}
