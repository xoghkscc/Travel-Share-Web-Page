package com.kgitbank.travelShare.model;

import lombok.Data;

@Data
public class BoardLikeModel {
	private Integer like_id;
	private Integer user_id;
	private Integer board_id;
}
