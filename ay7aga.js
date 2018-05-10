var submit = document.getElementById("submit");
var img = document.getElementsByTagName("img");
var stuName = document.getElementById("stuName");
var stuAge = document.getElementById("stuAge");
var stuTrack = document.getElementById("stuTrack");
var allStudentsResults= document.getElementById("allStudentsResults");
//img[0].style.display="none";

//task--1
submit.addEventListener("click",function(e){	
	e.preventDefault();
    var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			alert(this.responseText);
			if(this.responseText=="true"){
				alert("data is successful");
			}else{
				alert("failed to save");
            }
		}
    }
    // var url=
    // xhttp.open("GET","http://172.16.8.32:2121/Student/Add?",true);
    // xhttp.send("name="+stuName.value+"&age="+stuAge.value+"&track="+stuTrack.value);

    var url = "http://172.16.8.32:2121/Student/Add?name="+stuName.value+"&age="+stuAge.value+"&track="+stuTrack.value;
    xhttp.open("GET",url,true);
	xhttp.send();
});

//task---2
img[0].style.display="none";
var getAllStudents = document.getElementById("getAllStudents");
getAllStudents.addEventListener("click",function(){
	allStudentsResults.innerHTML="";
    var xhttp=new XMLHttpRequest();
    img[0].style.display="inline";
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			//console.log(xhttp.responseText);
			img[0].style.display="none";
			var response =xhttp.responseText;
			var arrObj= JSON.parse(response);
			for (var i = 0; i < arrObj.length; i++) {
				allStudentsResults.innerHTML+="name:"+arrObj[i].name+" age"+arrObj[i].age+" track"+arrObj[i].track+"<br>";
			}
		}
	}
	xhttp.open("GET","http://172.16.8.32:2121/Student/GetAll",true);
	xhttp.send();

});


//task-3
var searchName=document.getElementById("searchName");
searchName.addEventListener("keyup",function(){
	var searchVal=searchName.value;
	console.log(searchVal);
    var xhttp=new XMLHttpRequest();
    //img[0].style.display="inline";
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			//console.log(xhttp.responseText);
			img[0].style.display="none";
			var response =xhttp.responseText;
			var arrObj= JSON.parse(response);
			var ul = document.getElementById("searchResult");
			ul.innerHTML="";
			console.log(arrObj.length);
			for (var i = 0; i < arrObj.length; i++) {
				var li =document.createElement("li");
				li.innerHTML="name:"+arrObj[i].name+" age"+arrObj[i].age+" track"+arrObj[i].track+"<br>";
				ul.appendChild(li);
			}
		}
	}
	var url =" http:/172.16.8.32:2121/Student/Search?name="+searchVal;
	xhttp.open("GET",url,true);
	xhttp.send();
})




