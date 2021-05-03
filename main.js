var studentArray=[];
function submit(){
var name1=document.getElementById("student1").value;
var name2=document.getElementById("student2").value;
var name3=document.getElementById("student3").value;
var name4=document.getElementById("student4").value;
studentArray.push(name1);
studentArray.push(name2);
studentArray.push(name3);
studentArray.push(name4);
document.getElementById("nameDiv").innerHTML=studentArray;
document.getElementById("submitButton").style.display="none";
document.getElementById("sortButton").style.display="inline-block";
}

function sort(){
 studentArray.sort();
 document.getElementById("nameDiv").innerHTML=studentArray;
}