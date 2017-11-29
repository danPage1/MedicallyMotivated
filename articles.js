var text = '{ "articles" : [' +
'{ "Name":"Modafinil" , "Description":"My experience with the brain enhancer of choice for many Students and Business Proffesionals" , "Type":"I Try" , "FilePath":"Modafinil" , "Date":"24/10/17" },' +
'{ "Name":"Quiting Caffeine" , "Description":"My quest to get rid of an all too common caffeine addiction" , "Type":"I Try" , "FilePath":"Modafinil" , "Date":"24/10/17"},' +
'{ "Name":"Top ten ways to kick an addiction" , "Description":"Top tips to get rid of that craving" , "Type":"Top Ten" , "FilePath":"Modafinil" , "Date":"24/10/17"} ]}';





var obj = JSON.parse(text);

window.onload = function() {
		populate();
	}

function populate(){
	document.getElementById('navRecent').innerHTML = "";
	for (var i = obj.articles.length - 1; i >= 0; i--) {
		document.getElementById('navRecent').innerHTML += "<a href='" + obj.articles[i].FilePath + ".html'' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'>" + obj.articles[i].Name + "</h5><small>" + obj.articles[i].Date + "</small></div><p class='mb-1'>" + obj.articles[i].Description + "</p><small>" + obj.articles[i].Type + "</small></a>"
	}
}


function populateITry() {
	document.getElementById('navRecent').innerHTML = "";
	for (var i = obj.articles.length - 1; i >= 0; i--) {
		if(obj.articles[i].Type == "I Try"){
			document.getElementById('navRecent').innerHTML += "<a href='" + obj.articles[i].FilePath + ".html'' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'>" + obj.articles[i].Name + "</h5><small>" + obj.articles[i].Date + "</small></div><p class='mb-1'>" + obj.articles[i].Description + "</p><small>" + obj.articles[i].Type + "</small></a>"
		}
	}
}

function populateTopTen() {
	document.getElementById('navRecent').innerHTML = "";
	for (var i = obj.articles.length - 1; i >= 0; i--) {
		if(obj.articles[i].Type == "Top Ten"){
			document.getElementById('navRecent').innerHTML += "<a href='" + obj.articles[i].FilePath + ".html'' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'>" + obj.articles[i].Name + "</h5><small>" + obj.articles[i].Date + "</small></div><p class='mb-1'>" + obj.articles[i].Description + "</p><small>" + obj.articles[i].Type + "</small></a>"
		}
	}
}

function parseLoad(x){
	document.getElementById('navRecent').innerHTML = "";
	for (var i = obj.articles.length - 1; i >= 0; i--) {
		
		if(obj.articles[i].Name.toLowerCase().includes(x)){
			document.getElementById('navRecent').innerHTML += "<a href='" + obj.articles[i].FilePath + ".html'' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'>" + obj.articles[i].Name + "</h5><small>" + obj.articles[i].Date + "</small></div><p class='mb-1'>" + obj.articles[i].Description + "</p><small>" + obj.articles[i].Type + "</small></a>"
		}
	}

}




