
function userFinder() 
{
    var input = document.getElementById("userInput").value;

d3.json("https://api.github.com/users/" + input + "/repos", function(data) 
{
	for(i = 0; i < data.length; i++) 
	{
		console.log(data[i].name);
		var repoName = data[i].name;
		
		d3.json("https://api.github.com/repos/" + input + "/" + repoName + "/languages", function(data)
		{
			console.log(data);
			var langArray = data
		});
	}
});
}

  	





