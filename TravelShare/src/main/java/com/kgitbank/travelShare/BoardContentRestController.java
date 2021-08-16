package com.kgitbank.travelShare;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.SampleBoardMapper;
import com.kgitbank.travelShare.model.SampleBoardModel;

@RestController
@RequestMapping("/boardrest")
public class BoardContentRestController {
	
	@Autowired
	SampleBoardMapper boardMapper;
	
	@PostMapping(value = "/paging", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<SampleBoardModel> getBoard(@RequestBody Integer click_number){
		return boardMapper.getBoardsamplePaging((click_number-1)*12, (click_number)*12);
	}
}
