function 보이기숨기기(){
    const 박스 = document.getElementById("토글박스");
    // 클래스 목록에 hidden 클래스가 포함되어 있는지 확인
    if(박스.classList.contains("추가할클래스")){
        //만약에 존재한다면 hidden을 지워줘
        박스.classList.remove("추가할클래스");
    } else {
        //hidden이 존재하지 않는다면 추가하기
        박스.classList.add("추가할클래스");
    }
 }