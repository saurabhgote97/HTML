alert("VAli nfun")
function validate() {
	alert("Function called...")
                   var name = document.getElementById("Name").value
	var pass = document.getElementById("Pass").value
		if(name.length==0 && pass.length==0 )
		{
			//alert("Plz enter your name");
			return false;
		}else{
			alert("Success");
			return true;
		}
	}