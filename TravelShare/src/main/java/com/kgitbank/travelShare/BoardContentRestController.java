package com.kgitbank.travelShare;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
		String order = pagingModel.getOrder();
		
		if(sigungucode == 0 && sidocode == 0) {
			return boardMapper.getBoardPaging((click_number-1)*12, (click_number)*12, order);
		} else if(sigungucode != 0) {
			return boardMapper.getBoardPaging1(sigungucode, (click_number-1)*12, (click_number)*12, order);
		} else {
			return boardMapper.getBoardPaging2(sidocode, (click_number-1)*12, (click_number)*12, order);
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
		commentInfo.setComment_lookcheck("N");
		boardMapper.insertComment(commentInfo);
	}
	
	@PostMapping(value = "/selectComment", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<CommentInfo> selectCommnet(@RequestBody Integer board_id){
		return boardMapper.selectComment(board_id);
	}
	
	@PostMapping(value = "/likeJudgment", produces = MediaType.APPLICATION_JSON_VALUE)
	public int likeJudgment(@RequestBody Integer board_id, HttpSession session){
		
		if(session.getAttribute("id") == null) {
			return 0;
		} else {
			if(boardMapper.selectLike(board_id,Integer.parseInt((String) session.getAttribute("id"))).isEmpty()) {
				return 0;
			} else {
				return 1;
			}
		}
	}
	
	@PostMapping(value = "/deleteLike", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteLike(@RequestBody Integer board_id, HttpSession session){
		int user_id =Integer.parseInt((String)session.getAttribute("id"));
		boardMapper.deleteLike(board_id, user_id);
	}
	
	@PostMapping(value = "/insertLike", produces = MediaType.APPLICATION_JSON_VALUE)
	public void insertLike(@RequestBody Integer board_id, HttpSession session){
		int user_id =Integer.parseInt((String)session.getAttribute("id"));
		boardMapper.insertLike(board_id, user_id);
	}
	
	@PostMapping(value = "/selectLikeCnt", produces = MediaType.APPLICATION_JSON_VALUE)
	public Integer selectLikeCnt(@RequestBody Integer board_id){
		return boardMapper.selectLikeCnt(board_id);
	}
	
	@PostMapping(value = "/warningJudgment", produces = MediaType.APPLICATION_JSON_VALUE)
	public Integer warningJudgment(@RequestBody Integer board_id, HttpSession session){
		
		if(session.getAttribute("id") == null) {
			return 0;
		} else {
			if(boardMapper.selectWarning(board_id,Integer.parseInt((String) session.getAttribute("id"))).isEmpty()) {
				return 1;
			} else {
				return 2;
			}
		}
	}
	
	@PostMapping(value = "/insertWarning", produces = MediaType.APPLICATION_JSON_VALUE)
	public void insertWarning(@RequestBody Integer board_id, HttpSession session){
		boardMapper.insertWaring(board_id, Integer.parseInt((String) session.getAttribute("id")));
	}
	
	@PostMapping(value = "/userInfoWarning", produces = MediaType.APPLICATION_JSON_VALUE)
	public void userInfoWarning(@RequestBody Integer user_id){
		boardMapper.userInfoWarning(user_id);
	}
	
}
