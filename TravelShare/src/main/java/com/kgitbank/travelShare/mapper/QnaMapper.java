package com.kgitbank.travelShare.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.CommentInfo;
import com.kgitbank.travelShare.model.NoticeModel;
import com.kgitbank.travelShare.model.QnaVO;

import com.kgitbank.travelShare.model.QnaViewModel;
import com.kgitbank.travelShare.model.User;


public interface QnaMapper {
	//게시물 목록
	public List<QnaVO> qna_list() throws Exception;
	
	// 고유 번호 가져오기
	public int getQno();
	
	public User getWriter(@Param("userid") int userid);
	//게시물 작성
	public void qna_write(QnaVO vo) throws Exception;
	//게시물 조회
	public QnaViewModel qna_view(int qna_id) throws Exception;
	//게시물 수정
	public void qna_modify(QnaVO vo) throws Exception;
	//게시물 삭제
	public void qna_delete(int qna_id) throws Exception;
	//게시물 총 개수
	public int qna_count() throws Exception;

	//조회수
	public int qna_viewcntup(QnaViewModel qnaViewModel);

	public int qna_insertComment(CommentInfo commentInfo);
	public ArrayList<CommentInfo> qna_selectComment(@Param("qna_id") Integer qna_id);
	public User qna_getUserPosition(@Param("user_id") Integer user_id);
	
	//페이징
	public ArrayList<QnaViewModel> getQnaPaging();

	//검색
	public ArrayList<QnaViewModel> getQnaSearching(@Param("qnaTitle") String qnaTitle);
}
