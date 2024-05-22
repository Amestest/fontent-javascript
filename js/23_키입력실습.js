  //키 다운 background = lightblue
        //키 다운 color = lightpint

        //키 업 background = lightpink
        //키 업 color = lightblue
        const 키들 = document.querySelectorAll(".key");
        function 키다운기능(e){
            let 숫자값저장;
            switch(e.key){
                case 'a' : 숫자값저장 = 0;
                break;
                case 's' : 숫자값저장 = 1;
                break;
                case 'd' : 숫자값저장 = 2;
                break;
                case 'f' : 숫자값저장 = 3;
                break;
                default  :
                    return;
            }
            키들[숫자값저장].style.background = "lightpink";
            키들[숫자값저장].style.color = "lightblue";
        }