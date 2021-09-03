package com.kgitbank.travelShare;

import java.util.HashMap;

import org.json.simple.JSONObject;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

public interface certificationService {
	
	public static void certifiedPhoneNumber(String phoneNumber, String cerNum) {

        String api_key = "NCS73CRLJUWQZV20";
        String api_secret = "XFN54KRZLZAUENMMERWF0VN0HONRQMPJ";
        Message coolsms = new Message(api_key, api_secret);

        // 4 params(to, from, type, text) are mandatory. must be filled
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("to", phoneNumber);    // 수신전화번호
        params.put("from", "01099105759");    // 발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
        params.put("type", "SMS");
        params.put("text", "TravelShare 휴대폰인증 메시지 : 인증번호는" + "["+cerNum+"]" + "입니다.");
        params.put("app_version", "test app 2.2"); // application name and version

        try {
            JSONObject obj = (JSONObject) coolsms.send(params);
            System.out.println(obj.toString());
//            d
        } catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }

    }
	
}
