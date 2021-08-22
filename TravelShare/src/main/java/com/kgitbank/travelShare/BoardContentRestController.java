package com.kgitbank.travelShare;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.model.BoardModel;
import com.kgitbank.travelShare.model.CommentInfo;
import com.kgitbank.travelShare.model.PagingModel;

@RestController
@RequestMapping("/boardrest")
public class BoardContentRestController {
	
	@Autowired
	BoardMapper boardMapper;
	
	
	@PostMapping(value = "/paging", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<BoardModel> getBoard(@RequestBody PagingModel pagingModel){
		int click_number = pagingModel.getClick_number();
		int sigungucode = pagingModel.getSigungucode();
		int sidocode = pagingModel.getSidocode();
		
		
		if(sigungucode == 0 && sidocode == 0) {
			return boardMapper.getBoardPaging((click_number-1)*12, (click_number)*12);
		} else if(sigungucode != 0) {
			return boardMapper.getBoardPaging1(sigungucode, (click_number-1)*12, (click_number)*12);
		} else {
			return boardMapper.getBoardPaging2(sidocode, (click_number-1)*12, (click_number)*12);
		}
	}
	
	@PostMapping(value = "/choiceBoardInfo", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<BoardModel> getChoiceBoard(@RequestBody Integer board_id){
		return boardMapper.getBoardChoice(board_id);
	}
	
	@PostMapping(value = "/lookupCntPlus", produces = MediaType.APPLICATION_JSON_VALUE)
	public void lookupCntPlus(@RequestBody Integer board_id){
		boardMapper.lookupCntPlus(board_id);
	}
	
	@PostMapping(value = "/insertComment", produces = MediaType.APPLICATION_JSON_VALUE)
	public void insertCommnet(@RequestBody CommentInfo commentInfo){
		System.out.println(commentInfo.getComment_text());
		boardMapper.insertComment(commentInfo);
	}
	
	
}
