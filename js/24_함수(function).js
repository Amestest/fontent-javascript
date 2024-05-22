function btn1(){
    const input1 = document.getElementById("input1");
    const value = input1.value;

    let result;

    if(value == 0){
        result = "0";
    } else if (value > 0){
        result = "양수";
    } else {
        result = "음수";
    }

}