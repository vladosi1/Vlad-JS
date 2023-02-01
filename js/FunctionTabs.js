let a = 13; let b = 17; let v, m 


	function main(){
	  function count(){
		 for(let n = 0, i = 0; n <= 23, i <= 23; n++, i++){
		 m = ((a-b)/n);
		 v = a + i * m;
	  		}
	  }
			function Function1(){
				console.log("function1");
				console.log('f(x) = 2^-x/100');
			  	for(let n = 0, i = 0; n <= 23, i <= 23; n++, i++){
				count();
				console.log("a:" + a + " "  + "b:" + b +" "  +"n:" + n + " "  + 'x:' + (Math.pow(2,-v)/100)); 
			  }

		 }
			  
			function Function2(){
				console.log("function2");
				console.log('f(x) = sin^3 * x^2');
				for(let n = 0, i =0; n <=23, i<=23; n++, i++){
				count();
				console.log("a:" + a + " "  + "b:" + b +" "  +"n:" + n + " "  + 'x:' + Math.sin(Math.pow(3,v))*Math.pow(2,v)); 
				}    
		}
			 
			  function Function3(){
				console.log("function3");
            console.log('f(x) = 1+2^x');
            for(let n = 0, i = 0; n <= 23, i <= 23; n++, i++){
				count();
				console.log("a:" + a + " "  + "b:" + b +" "  +"n:" + n + " "  + 'x:' + 1 + Math.pow(2,v));
            }
            
      }
			Function1(); Function2(); Function3();

}


	main()
