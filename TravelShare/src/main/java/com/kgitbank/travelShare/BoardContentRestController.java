package com.kgitbank.travelShare;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.BoardMapper;
import com.kgitbank.travelShare.model.BoardModel;

@RestController
@RequestMapping("/boardrest")
public class BoardContentRestController {
	
	@Autowired
	BoardMapper boardMapper;
	
	@PostMapping(value = "/paging", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<BoardModel> getBoard(@RequestBody Integer click_number){
		return boardMapper.getBoardPaging((click_number-1)*12, (click_number)*12);
	}
	
	@PostMapping(value = "/choiceBoardInfo", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<BoardModel> getChoiceBoard(@RequestBody Integer board_id){
		return boardMapper.getBoardChoice(board_id);
	}
}
