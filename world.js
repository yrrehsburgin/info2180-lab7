window.onload = function() {
	var request = document.getElementById("lookup");
	

	
    var result = document.getElementById("result");
    
    var search = document.getElementById("country");
    
    var HTTPRequest;
    
	request.addEventListener("click", function(e) {
	    e.preventDefault();
	    var country = search.value;
	    
		if(country != ""){
			HTTPRequest = new XMLHttpRequest();
			HTTPRequest.onreadystatechange = getInformation;
			var url = "world.php?country=" + country;
	    
	    	HTTPRequest.open("GET", url);
	    	HTTPRequest.send();
		}
		
		else{
			result.innerHTML = "<h2>Search Result</h2><p>Please enter a country<p>";
		}
	});
	
	function getInformation() {
	    if (HTTPRequest.readyState === XMLHttpRequest.DONE){
			if (HTTPRequest.status === 200) {
				result.innerHTML = "<h2>Result Received</h2>"+HTTPRequest.responseText;
			}
		}
	}
    
}; 