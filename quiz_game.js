function back(){
    
    window.location="index.html";}

    p1_name= localStorage.getItem("player1");
    p2_name= localStorage.getItem("player2"); 
    
    p1score= 0;
    p2score= 0;
    
    document.getElementById("name1").innerHTML=p1_name + " : ";
    document.getElementById("name2").innerHTML=p2_name + " : ";
    
    document.getElementById("p1_score").innerHTML= " "+ p1score;
    document.getElementById("p2_score").innerHTML= " "+p2score;
    
    document.getElementById("player_questioner").innerHTML="Question turn: "+ p1_name;
    document.getElementById("player_answerer").innerHTML="Answer turn: "+ p2_name;

    function send(){
number1= document.getElementById("number1_input").value;
number2= document.getElementById("number2_input").value;
actual_answer= parseInt(number1) * parseInt(number2);

question_number= "<h4>" + number1 + " X " + number2 + "</h4>";
input_box= "<br>Answer: <input type='text'id='input_check_box'";
check_button= "<br><br><br><button class='btn btn-primary'onclick='check()'>CHECK</button>";
row= question_number+input_box+check_button;
document.getElementById("output").innerHTML= row;
document.getElementById("number1_input").value="";
document.getElementById("number2_input").value="";}