package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.BoardModel;

public interface BoardMapper {
	public ArrayList<BoardModel> getBoardAll();
	
	public ArrayList<BoardModel> getBoardChoice(@Param("board_id") Integer board_id);
	
	public ArrayList<BoardModel> getBoardFilter1(@Param("sigungucode") Integer sigungucode);
	
	public ArrayList<BoardModel> getBoardFilter2(@Param("sidocode") Integer sidocode);
	
	public ArrayList<BoardModel> getBoardPaging(@Param("startnum") Integer startnum, @Param("endnum") Integer endnum);
	
	public void insertBoard(BoardModel baordModel);
}
