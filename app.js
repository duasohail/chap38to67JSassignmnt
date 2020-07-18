function t1(){
    var val=prompt("enter base value");
    var a= parseInt(val);

    var exp=prompt("enter exponent value");
    var b=parseInt(exp);

    var power= Math.pow(a,b);
    document.write("base is: "+a+"<br>exponent is: "+b+"<br>result is: "+power);

}
function t2(){
    var a=prompt("enter any year");
     if(a=='2020'||a=='1999' || a=='1991'){
         alert("leap year");
     }else{
         alert("not a leap year");
     }
}

function t3(){
    var a=120;
    var b=120;
    var c=150;
    var s=(a+b+c)/2;
    var area=s*(s-a)*(s-b)*(s-c);
    alert("area of a triangle is: "+area);
}



    var frsSub=89;
    var secSub=69;
    var thrSub=75;
function t4(){
    document.write("average = "+ av() +"<br>percentage = "+ per());
   
}

function av(){
    var avg=(frsSub+secSub+thrSub)/3;
    return avg;
}
function per(){
    var to=300;
    var ob=frsSub+secSub+thrSub;
    var per=(ob/to)*100;
    return per;
}

function t5(){
      var a="hello! wake up Pakistan and rise up :) ";
      var b=a.split(" ");

      var c="up";
      for(var i=0; i<=b.length ; i++){
        if(b[i]==c){
         document.write(i + "<br>");
        }
      }
}

function t6(){
    var a="hey! whatsup";
    for(var i=0; i<=a.length; i++){
        if(a[i]=='a' || a[i]=='e' || a[i]=='i' ||a[i]=='o' || a[i]=='u'){
            
             a = a.replace(a[i],"");
            
            
        }
        
    }alert(a);
}


function t7() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    // Loop over every character
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      // Increase count if both characters are any of the following: aeiou
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    alert(count);
  }
  
  // Check if a character is any of the following: aeiou
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  //8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 
  function t8(){
      var dis=prompt("enter distance b/w cities in km");
      var km=parseInt(dis);
      var meter=km*1000;
      alert(" distance in km: "+dis+"\n distance in meters: "+meter+"\n distance in feet: "+ feet(km) +"\n distance in inches: "+inches(km)+"\n distance in centimeters: "+cent(km));

  }

  function feet(km){
        var f=km*3280.8399;
        return f;
  }

  function inches(km){
    var i=km*39370.0787;
    return i;
}

function cent(km){
    var i=km*100000;
    return i;
}

//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 

function t9(){
    var hours=prompt("enter number of hours");
    if(hours > 40){
        var inc= (hours-40)*12;
        alert("your overtime increament is:"+inc);

    }
    else{
        alert("no overtime increament u get");
    }

}

function t10(){
    var a=prompt("enter a amount of withdrawal");
    var amount=parseInt(a);
    var hun = amount/100;
    var fif = (amount%100)/50;
    var ten = ((amount%100)%50)/10;
    var  rs =((amount%100)%50)%10;
    
    document.write("required notes of 100 is: "+hun+"<br>required notes of fifty is: "+fif+"<br>required note of ten is: "+ten+"<br> remaining rupees: "+rs);

}

//chapter 43 48
function ch2t1(){
    alert("hello");
}

function ch2t3(){
    document.write("<table><tr><th>INDEX</th><th>NAME</th><th>CLASS</th><th></th></tr>");
    document.write("<tr id='del1'><td>0</td><td>john</td><td>8</td><td><button onclick='del1()' >delete</button></td></tr>");
    document.write("<tr id='del2'><td>1</td><td>doe</td><td>10</td><td><button onclick='del2()'>delete</button></td></tr>");
    document.write("<tr id='del3'><td>2</td><td>mark</td><td>5</td><td><button onclick='del3()'>delete</button></td></tr>");
    document.write("<tr id='del4'><td>4</td><td>john</td><td>8</td><td><button onclick='del4()'>delete</button></td></tr>");

}
function del1(){
    document.getElementById('del1').innerHTML='';
}
function del2(){
    document.getElementById('del2').innerHTML='';
}
function del3(){
    document.getElementById('del3').innerHTML='';
}
function del4(){
    document.getElementById('del4').innerHTML='';
}



function ch2t4(){

    document.write("<img id='img1' onmouseover='picChange()' onmouseout='out()' src='img/ch2t41.jpg' width='400px' height='350'>");
}

function picChange(){
    document.getElementById("img1").src='img/ch2t42.jpg';
}
function out(){
    document.getElementById("img1").src='img/ch2t41.jpg';
}


var counter=0;
function ch2t5(){
    
    document.write("<button onclick='dec()'>decrease</button>  <p id='count'>"+ counter +"</p>   <button onclick='inc()'>increase</button> ");
}
function dec(){
     counter--
     document.getElementById('count').innerHTML=counter;
}
function inc(){
    counter++
    document.getElementById('count').innerHTML=counter;
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  function record(){
      var st_id=document.getElementById("sid").value;
      var nam = document.getElementById("name").value;
      var c = document.getElementById("cl").value;

      var st_id1=document.getElementById("sid1").value;
      var nam1 = document.getElementById("name1").value;
      var c1 = document.getElementById("cl1").value;

      var st_id2=document.getElementById("sid2").value;
      var nam2 = document.getElementById("name2").value;
      var c2 = document.getElementById("cl2").value;

    document.write("<table><tr><th>INDEX</th><th>NAME</th><th>CLASS</th><th></th></tr>");
    document.write("<tr id='del1'><td>"+ st_id+"</td><td>"+nam+"</td><td>"+c+"</td><td><button onclick='del1()' >delete</button></td><td><button onclick='edit1()' >Edit</button></td></tr>");
    document.write("<tr id='del2'><td>"+st_id1+"</td><td>"+nam1+"</td><td>"+c1+"</td><td><button onclick='del2()'>delete</button></td><td><button onclick='edit2()' >Edit</button></td></tr>");
    document.write("<tr id='del4'><td>"+st_id2+"</td><td>"+nam2+"</td><td>"+c2+"</td><td><button onclick='del4()'>delete</button></td><td><button onclick='edit3()' >Edit</button></td></tr>");

}
function del1(){
    document.getElementById('del1').innerHTML='';
}
function del2(){
    document.getElementById('del2').innerHTML='';
}
function del4(){
    document.getElementById('del4').innerHTML='';
}
