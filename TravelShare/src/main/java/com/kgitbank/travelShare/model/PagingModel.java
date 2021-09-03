package com.kgitbank.travelShare.model;

import lombok.Data;

@Data
public class PagingModel {
	private int click_number;
	private int sidocode=0;
	private int sigungucode=0;
	private String order;
}
