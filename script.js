function compute() 
{ 
 // this is the interest calculater function    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() +parseInt(years);
    document.getElementById("result_val").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";

}
// this is the rate updater function 
function updateRate()  
     {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    } 

// input validation 
function validation()
    { 
        var principal = document.getElementById("principal").value;
        if (principal <=0)
        alert("Enter a positive number");
        document.getElementById("principle").focus();

    }
        


