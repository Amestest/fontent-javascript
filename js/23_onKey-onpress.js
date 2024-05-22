    //toLowerCase() : 영어를 모두 소문자로 변경
        //toUpperCase() : 영어를 모두 대문자로 변경
        function 기능만들기(){
            const 기능 = document.getElementById("영문이름");
            기능.value = 기능.value.toUpperCase();
        }
        function 엔터기능(Event){
            //만약에 엔터 키를 눌렀을 때
            if(Event.key === 'Enter'){
            alert("입력한 내용이 전달되었습니다.");
          }
        }