package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.AdminNotice;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.LikeViewModel;
import com.kgitbank.travelShare.model.NoticeModel;

public interface AdminNoticeMapper {
	
	//select all
	public ArrayList<NoticeModel> getNoticesAll();
	public ArrayList<BoardModel> getBoardsAll();
	public ArrayList<LikeViewModel> getMainBestPlace();
	
	//select only one
	public NoticeModel getNoticeOne(@Param("num") String num);
	public BoardModel getBoardOne(@Param("num") String num);
	
	//select id
	public int getNoticeId();
	
	//select (searching)
	public ArrayList<NoticeModel> getNoticesAllSearching(@Param("name") String name);
	
	public ArrayList<BoardModel> getBoardsAllSearching(@Param("boardName") String boardName);
	
	//insert
	public int insertAdminNotice(AdminNotice adn);
	
	//delete
	public int deleteAdminNotice(@Param("num") String num);
	public int deleteBoardNotice(@Param("num") String num);
	
	//update
	public int updateAdminNotice(AdminNotice adn);
	public int updateNoticeLookup(NoticeModel adn);
	
	//find(메인지도에서 시,도 비교)
	public ArrayList<BoardModel> findSido(@Param("Searching_content") String Searching_content);
	public ArrayList<BoardModel> findGungu(@Param("Searching_content") String Searching_content);
}
