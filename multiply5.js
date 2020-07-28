var scoreTrack = 0;
//generating random numbers
document.getElementById("q1").innerHTML = (num1 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num2 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q2").innerHTML = (num3 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num4 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q3").innerHTML = (num5 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num6 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q4").innerHTML = (num7 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num8 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q5").innerHTML = (num9 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num10 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q6").innerHTML = (num11 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num12 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q7").innerHTML = (num13 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num14 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q8").innerHTML = (num15 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num16 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q9").innerHTML = (num17 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num18 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q10").innerHTML = (num19 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num20 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q11").innerHTML = (num21 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num22 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q12").innerHTML = (num23 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num24 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q13").innerHTML = (num25 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num26 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q14").innerHTML = (num27 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num28 = Math.floor(Math.random()*(999-100+1))+100)+"=";
document.getElementById("q15").innerHTML = (num29 = Math.floor(Math.random()*(999-100+1))+100)+ "x" +(num30 = Math.floor(Math.random()*(999-100+1))+100)+"=";


//check answers
function answer1(){
	var a=document.getElementById("a1").value;
	if (a==num1*num2){
		document.getElementById("r1").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r1").innerHTML = "WRONG";
	}
	}

function answer2(){
	var b=document.getElementById("a2").value;
	if (b==num3*num4){
		document.getElementById("r2").innerHTML = "CORRECT";
		scoreTrack = scoreTrack+1;
		
	}
	else{
		document.getElementById("r2").innerHTML = "WRONG";
	}
	}
	
function answer3(){
	var a=document.getElementById("a3").value;
	if (a==num5*num6){
		document.getElementById("r3").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r3").innerHTML = "WRONG";
	}
	}
	
		
function answer4(){
	var a=document.getElementById("a4").value;
	if (a==num7*num8){
		document.getElementById("r4").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r4").innerHTML = "WRONG";
	}
	}
		
function answer5(){
	var a=document.getElementById("a5").value;
	if (a==num9*num10){
		document.getElementById("r5").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r5").innerHTML = "WRONG";
	}
	}
		
function answer6(){
	var a=document.getElementById("a6").value;
	if (a==num11*num12){
		document.getElementById("r6").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r6").innerHTML = "WRONG";
	}
	}
		
function answer7(){
	var a=document.getElementById("a7").value;
	if (a==num13*num14){
		document.getElementById("r7").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r7").innerHTML = "WRONG";
	}
	}
		
function answer8(){
	var a=document.getElementById("a8").value;
	if (a==num15*num16){
		document.getElementById("r8").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r8").innerHTML = "WRONG";
	}
	}
		
function answer9(){
	var a=document.getElementById("a9").value;
	if (a==num17*num18){
		document.getElementById("r9").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r9").innerHTML = "WRONG";
	}
	}
		
function answer10(){
	var a=document.getElementById("a10").value;
	if (a==num19*num20){
		document.getElementById("r10").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r10").innerHTML = "WRONG";
	}
	}
		
function answer11(){
	var a=document.getElementById("a11").value;
	if (a==num21*num22){
		document.getElementById("r11").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r11").innerHTML = "WRONG";
	}
	}
		
function answer12(){
	var a=document.getElementById("a12").value;
	if (a==num23*num24){
		document.getElementById("r12").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r12").innerHTML = "WRONG";
	}
	}
		
function answer13(){
	var a=document.getElementById("a13").value;
	if (a==num25*num26){
		document.getElementById("r13").innerHTML = "CORRECT";
	}
	else{
		document.getElementById("r13").innerHTML = "WRONG";
	}
	}
		
function answer14(){
	var a=document.getElementById("a14").value;
	if (a==num27*num28){
		document.getElementById("r14").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r14").innerHTML = "WRONG";
	}
	}
		
function answer15(){
	var a=document.getElementById("a15").value;
	if (a==num29*num30){
		document.getElementById("r15").innerHTML = "CORRECT";
		
	}
	else{
		document.getElementById("r15").innerHTML = "WRONG";
	}
	}

	
//generate and display score	
function genScore(){
	var scoreTrack = 0;	
	
	var a=document.getElementById("a1").value;
	if (a==num1*num2){
		scoreTrack = scoreTrack+1;
	}

	var b=document.getElementById("a2").value;
	if (b==num3*num4){
		scoreTrack = scoreTrack+1;
	}
	
	var a=document.getElementById("a3").value;
	if (a==num5*num6){
		scoreTrack = scoreTrack+1;
	}
	
	var a=document.getElementById("a4").value;
	if (a==num7*num8){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a5").value;
	if (a==num9*num10){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a6").value;
	if (a==num11*num12){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a7").value;
	if (a==num13*num14){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a8").value;
	if (a==num15*num16){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a9").value;
	if (a==num17*num18){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a10").value;
	if (a==num19*num20){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a11").value;
	if (a==num21*num22){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a12").value;
	if (a==num23*num24){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a13").value;
	if (a==num25*num26){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a14").value;
	if (a==num27*num28){
		scoreTrack = scoreTrack+1;
	}
		
	var a=document.getElementById("a15").value;
	if (a==num29*num30){
		scoreTrack = scoreTrack+1;
	}
	
	var grade = Math.floor((scoreTrack/15)*100);
	
	document.getElementById("score").innerHTML = "Score is "+grade+"%";
	if (grade>=80){
		document.getElementById("comment").innerHTML = "You pass, keep up the good work.";
	}
	else{
		document.getElementById("comment").innerHTML = "Sorry, you did not pass. You'll do better next time";
	}
	return grade;
}	
	
	
//hit mark test to check answers and display score
function answerAll(){
	
	answer1();
	answer2();
	answer3();
	answer4();
	answer5();
	answer6();
	answer7();
	answer8();
	answer9();
	answer10();
	answer11();
	answer12();
	answer13();
	answer14();
	answer15();
	
	genScore();
}


	
function nomoreLevel(){
		alert("There is no more levels after this!");
	return false;
}
	
	
	
	
	
	
	