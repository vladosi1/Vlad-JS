function calc (){
let a = parseInt(document.getElementById("num1").value);
let b = parseInt(document.getElementById("num2").value);
let op = document.getElementById("operetor").value;
let ans;


	if(op == "addition"){
		ans = a + b;

	} else if(op == "subtraction") {
		ans = a - b;
	
	} else if(op == "multiplication"){
		ans = a * b;

	} else if (op == "division"){
		ans = a / b;
	}

	document.getElementById("return").innerHTML=(ans);
}