package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.AdminNotice;

public interface AdminNoticeMapper {
	
	//select all
	public ArrayList<AdminNotice> getNoticesAll();
	
	//select only one
	public AdminNotice getNoticeOne(@Param("num") String num);
	
	//select id
	public int getNoticeId();
	
	//insert
	public int insertAdminNotice(AdminNotice adn);
	
	//delete
	public int deleteAdminNotice(@Param("num") String num);
	
	//update
	public int updateAdminNotice(AdminNotice adn);
}
