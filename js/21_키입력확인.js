   //화면에 존재하는 키 모두 가져오기
            //          클래스로 적힌 모든 애용을 가져오겠다..key==class="key"
            const 키들 = document.querySelectorAll(".key");
            // keydown 키보드에서 키가 눌러지는 것을 말함
            //문서(화면 전체) 감지했음 키가 눌러지는 것을
            document.addEventListener("keydown", function(e){
                // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
                //e.key: 입력된 키를 확인

                let 숫자값저장; //인덱스 값을 저장할 변수

                switch(e.key){
                    case 'q' : 숫자값저장 = 0;
                    break;
                    case 'w' : 숫자값저장 = 1;
                    break;
                    case 'e' : 숫자값저장 = 2;
                    break;
                    case 'r' : 숫자값저장 = 3;
                    break;
                    default :
                    return; //함수종료
                }

                //숫자번호와 일치하는 key 배열의 태그색을 변경
                키들[숫자값저장].style.background = "blue";
                키들[숫자값저장].style.background = "red";
                
            });

            document.addEventListener("keyup", function(e){
               
                let 숫자값저장; 

                switch(e.key){
                    case 'q' : 숫자값저장 = 0;
                    break;
                    case 'w' : 숫자값저장 = 1;
                    break;
                    case 'e' : 숫자값저장 = 2;
                    break;
                    case 'r' : 숫자값저장 = 3;
                    break;
                    default :
                    return; //함수종료
                }

                
                키들[숫자값저장].style.background = "pink";
                키들[숫자값저장].style.color = "black";
            });