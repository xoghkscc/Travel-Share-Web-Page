package com.kgitbank.travelShare;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.travelShare.mapper.QnaMapper;
import com.kgitbank.travelShare.model.CommentInfo;
import com.kgitbank.travelShare.model.QnaViewModel;
import com.kgitbank.travelShare.model.User;

@RestController
@RequestMapping("/qnaRest")
public class QnaRestController {

	@Autowired
	QnaMapper qnaMapper;
	
	@PostMapping(value = "/qnaInsertComment", produces = MediaType.APPLICATION_JSON_VALUE)
	public void qna_insert_commnet(@RequestBody CommentInfo commentInfo){
		System.out.println("commentInfo : "+commentInfo);
		qnaMapper.qna_insertComment(commentInfo);
	}
	
	@PostMapping(value = "/qnaSelectComment", produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<CommentInfo> selectCommnet(@RequestBody Integer qna_id){
		ArrayList<CommentInfo> commentArr = qnaMapper.qna_selectComment(qna_id);
		return commentArr;
	}
	
	@RequestMapping(value="/qna_paging", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<QnaViewModel> getQna_paging(){

		//mapping안하고 바로 @셀렉트
		List<QnaViewModel> qnaViewModel = qnaMapper.getQnaPaging();
		
		return qnaViewModel;
	}
	@RequestMapping(value="/qna_paging_searching", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<QnaViewModel> getQna_paging_searching(@RequestParam("qnaTitle") String qnaTitle){
		
		//mapping안하고 바로 @셀렉트
		List<QnaViewModel> qnaViewModel = qnaMapper.getQnaSearching(qnaTitle);
		
		return qnaViewModel;
	}
	@RequestMapping(value="/qna_getSession", produces=MediaType.APPLICATION_JSON_VALUE)
	public User getQna_getSession(HttpSession session){
		
		//mapping안하고 바로 @셀렉트
		int user_id = 0;
		Object uid = session.getAttribute("id");
		if(uid != null) {
			user_id = Integer.parseInt(uid.toString());			
		}
		User user = qnaMapper.qna_getUserPosition(user_id);
		return user;
	}
}
