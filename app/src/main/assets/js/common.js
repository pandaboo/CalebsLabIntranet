    function common_movePage(url, jsonData) {

            if(jsonData != null) {
                window.android.movePage(url, JSON.stringify(jsonData));
            } else {
                window.android.movePage(url, null);
            }
    }

    function emailSend(){
        window.android.openApp();
    }

    function phoneCall(){
        window.android.openApp();
    }

     //////////////////////////////////////////////////////////////
     // 웹서버 통신 START
     ///////////////////////////////////////////////////////////////

    //전역변수 모음
    //var sndUrl = "http://calebslab1.cafe24.com/";	//서버주소값
    var sndUrl = "http://192.168.10.27:8080/";	//서버주소값

    var sessionInfo;
    var wasParams = {};  //was와 통실될 파라미터

    //공통 Util 모음

    /**
     * 서버호출 샘플
     */
    function navigate(params, target, successFnc, errorFnc) {
        $.ajax({
            url : sndUrl + target,
            type : "post",
            dataType: "json",
            data : params,
            success : successFnc,
            error : errorFnc
        });
    }

      /**
       * 서버호출 샘플2 : param 존재하지 않을경우
       */
    function navigate2(target, successFnc, errorFnc) {
        $.ajax({
            url : sndUrl + target,
            type : "post",
            dataType: "json",
            success : successFnc,
            error : errorFnc
        });
    }


    function errorFunction(result) {
        alert("errorFunction" + JSON.stringify(result));
    }

    function getSessionMap(result) {
        sessionInfo = JSON.parse(result);

        //세션 설정후 호출될 callback함수
        if (getSessionInfo() != undefined) {
            getSessionInfo();
        }
    }

    //////////////////////////////////////////////////////////////
    // 웹서버 통신 END
    ///////////////////////////////////////////////////////////////

    //sessionStorage에 jsonObject 형식의 데이터를 key/value로 저장
    function setStorageItem(param, key){

        var setItem = JSON.stringify(param);

        console.log("set_key: "+key+" setValue: "+setItem);

        sessionStorage.setItem(key,setItem);

    }

    //sessionStorage에 저장된 특정 key값의 데이터 반환
    function getStorageItem(key){

        var result = "";

        if(key != null && key != ""){
            result = sessionStorage.getItem(key);
            sessionStorage.removeItem(key);
        }

        console.log("get_key: "+key+" getValue: "+result);

        return result;
    }