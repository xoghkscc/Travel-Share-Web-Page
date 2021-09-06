package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.BoardLikeModel;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.CommentInfo;
import com.kgitbank.travelShare.model.WarningModel;

public interface BoardMapper {
	public ArrayList<BoardModel> getBoardAll();
	
	public ArrayList<BoardModel> getBoardLike(@Param("user_id") Integer user_id);
	
	public ArrayList<BoardModel> getMyLike(@Param("user_id") Integer user_id);
	
	public ArrayList<BoardModel> getBoardChoice(@Param("board_id") Integer board_id);
	
	public ArrayList<BoardModel> getBoardFilter1(@Param("sigungucode") Integer sigungucode);
	
	public ArrayList<BoardModel> getBoardFilter2(@Param("sidocode") Integer sidocode);
	
	public ArrayList<BoardModel> getBoardPaging(@Param("startnum") Integer startnum, @Param("endnum") Integer endnum, @Param("order") String order);
	
	public ArrayList<BoardModel> getBoardPaging1(@Param("sigungucode") Integer sigungucode, @Param("startnum") Integer startnum, @Param("endnum") Integer endnum, @Param("order") String order);
	
	public ArrayList<BoardModel> getBoardPaging2(@Param("sidocode") Integer sidocode, @Param("startnum") Integer startnum, @Param("endnum") Integer endnum, @Param("order") String order);
	
	public void insertBoard(BoardModel baordModel);
	
	public void lookupCntPlus(@Param("board_id") Integer board_id);
	
	public void insertComment(CommentInfo commentInfo);
	
	public ArrayList<CommentInfo> selectComment(@Param("board_id") Integer board_id);
	
	public ArrayList<BoardLikeModel> selectLike(@Param("board_id") Integer board_id, @Param("user_id") Integer user_id);
	
	public void deleteLike(@Param("board_id") Integer board_id, @Param("user_id") Integer user_id);
	
	public void insertLike(@Param("board_id") Integer board_id, @Param("user_id") Integer user_id);
	
	public Integer selectLikeCnt(@Param("board_id") Integer board_id);
	
	public void deleteBoard(@Param("board_id") Integer board_id);
	
	public BoardModel selectBoardSearch(@Param("board_id") Integer board_id);
	
	public void updateBoard1(BoardModel baordModel);
	
	public void updateBoard2(BoardModel baordModel);
	
	public ArrayList<WarningModel> selectWarning(@Param("board_id") Integer board_id, @Param("singo_id") Integer singo_id);
	
	public void insertWaring(@Param("board_id") Integer board_id, @Param("singo_id") Integer singo_id);
	
	public void userInfoWarning(@Param("user_id") Integer user_id);
	
	public ArrayList<CommentInfo> alramContent(@Param("user_id") Integer user_id);
	
	public ArrayList<CommentInfo> alramContent2(@Param("user_id") Integer user_id);
	
	public void alramLookChange(@Param("board_id") Integer board_id);
	
	public void alramLookChange2(@Param("qna_id") Integer qna_id);
	
}
