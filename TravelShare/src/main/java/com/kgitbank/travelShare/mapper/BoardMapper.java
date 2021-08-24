package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.BoardLikeModel;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.CommentInfo;

public interface BoardMapper {
	public ArrayList<BoardModel> getBoardAll();
	
	public ArrayList<BoardModel> getBoardChoice(@Param("board_id") Integer board_id);
	
	public ArrayList<BoardModel> getBoardFilter1(@Param("sigungucode") Integer sigungucode);
	
	public ArrayList<BoardModel> getBoardFilter2(@Param("sidocode") Integer sidocode);
	
	public ArrayList<BoardModel> getBoardPaging(@Param("startnum") Integer startnum, @Param("endnum") Integer endnum);
	
	public ArrayList<BoardModel> getBoardPaging1(@Param("sigungucode") Integer sigungucode, @Param("startnum") Integer startnum, @Param("endnum") Integer endnum);
	
	public ArrayList<BoardModel> getBoardPaging2(@Param("sidocode") Integer sidocode, @Param("startnum") Integer startnum, @Param("endnum") Integer endnum);
	
	public void insertBoard(BoardModel baordModel);
	
	public void lookupCntPlus(@Param("board_id") Integer board_id);
	
	public void insertComment(CommentInfo commentInfo);
	
	public ArrayList<CommentInfo> selectComment(@Param("board_id") Integer board_id);
	
	public ArrayList<BoardLikeModel> selectLike(@Param("board_id") Integer board_id, @Param("user_id") Integer user_id);
	
	public void deleteLike(@Param("board_id") Integer board_id, @Param("user_id") Integer user_id);
	
	public void insertLike(@Param("board_id") Integer board_id, @Param("user_id") Integer user_id);
	
	public Integer selectLikeCnt(@Param("board_id") Integer board_id);
}
