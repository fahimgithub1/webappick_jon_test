    
    var name="Fahim patpwary";
   
    document.write("This is 1st javscript code.<br>");
    console.log("Show in consol");
    document.write(name);
    document.write("<br>Number : 01828093765<br>");
    var name=" Fahim";
    document.write(name);
 
 
    console.log(typeof(name));
 
    var num = 123.341;
    console.log(typeof(num)); 
    console.log(num);
 
    num = toString(num);
    console.log(typeof(num));
 
    num = 23.15643562;
    console.log(typeof(num));
    console.log(num);
 
    console.log(num.toFixed(2));
    console.log(num.toPrecision(3))
 
    num = "23.87";
    num = parseInt(num); 
    //num = parseFloat(num); 
    console.log(typeof(num));  
    console.log(num);
 
    console.log(typeof(Number("  24.5    ")));
    console.log(Number("263.54"));
 
    console.log(Number(false));
    console.log(Number(true));
 
    document.write("<br>"  + "This is my full Neme :" + name + " Patowary");
 
     //var text = prompt("Enter Your Name");
     var text = "Bangladesh",text1;
     var text2 = "is my country.";
     document.write("<br><br><br>Nmber of character " + text.length)
     document.write("<br>" + text.charAt(3));
     texr = text.toUpperCase();
     document.write("<br>" + text);
     document.write("<br>" + text.concat(text2));
 
     text1 = text.slice(2,5);
     document.write("<br>" + text1);
 
     var a = 10;
     document.write("<br>" + "assignment operator " + --a);
 
     var b = prompt("Enter 1st number : ");
     var c = prompt("Enter 2nd Number : ");
     var s = 0 ;
     praseInt(b,10);
     praseInt(c,10);
     b = b + c;
     document.write("<br> sumetion is = " + b )