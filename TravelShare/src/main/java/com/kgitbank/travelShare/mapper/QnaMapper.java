package com.kgitbank.travelShare.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.kgitbank.travelShare.model.QnaVO;
import com.kgitbank.travelShare.model.User;
import com.kgitbank.travelShare.model.UserInfo;

public interface QnaMapper {
	//게시물 목록
	public List<QnaVO> qna_list() throws Exception;
	
	// 고유 번호 가져오기
	public int getQno();
	
	public User getWriter(@Param("userid") int userid);
	//게시물 작성
	public void qna_write(QnaVO vo) throws Exception;
	//게시물 조회
	public QnaVO qna_view(int qno) throws Exception;
	//게시물 수정
	public void qna_modify(QnaVO vo) throws Exception;
	//게시물 삭제
	public void qna_delete(int qno) throws Exception;
	//게시물 총 개수
	public int qna_count() throws Exception;
	//게시물 목록 + 페이징
	public List listPage(int displayPost, int postNum) throws Exception;
}
