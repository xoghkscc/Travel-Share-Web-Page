package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.SampleBoardModel;

public interface SampleBoardMapper {
	public ArrayList<SampleBoardModel> getBoardsampleAll();
	
	public ArrayList<SampleBoardModel> getBoardsamplePaging(@Param("startnum") Integer startnum, @Param("endnum") Integer endnum);
	
}
