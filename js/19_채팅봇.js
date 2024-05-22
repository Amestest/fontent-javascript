// 자바 스크립트는 매개변수가 함수에서 설정한 매개변수와 작성해야하는
      // 개수 달라도 문제없이 심행됨
      메세지보이기(
        "안녕하세요. KH상담봇입니다. 원하는 메뉴를 입력하세요.",
        "bot"
      );
      function sendMessage() {
        const inputbox = document.getElementById("user-input");
        const message = inputbox.value.trim(); //trim 공백 제거
        //만약에 빈칸으로 보낼 경우 아무런 메세지 없이 보내기를 방지하길 원한다면 설정
        if (message == "") {
          return;
        }
        //return을 추가해서 더이상 밑으로 못가게 끝내기
        메세지보이기(message, "user");
        inputbox.value = ""; //input 값에 새로운 값으로 " "을 넣어서 메세지를 초기화

        //채팅봇 띄우기
        setTimeout(() => {
          메세지보이기("저는 채팅 봇입니다.", "bot");
        }, 1000); //1초 후에 메세지 보이기
      }

      function 메세지보이기(message, sender) {
        const chatbox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        //                      div 클래스 명
        //                          message   user | bot  -message
        messageElement.classList.add("message", sender + "-message");
        messageElement.textContent = message; //메세지 보이기
        chatbox.appendChild(messageElement); // 보낸 내용 추가하기
      }