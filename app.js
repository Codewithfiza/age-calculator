// first i need to get day, month and year 
let day, month, year;

 

let currDay = new Date().getDate();
let currMonth = new Date().getMonth() + 1;
let currYear = new Date().getFullYear();


function invalidInput(){
    if(day== "" || month == "" || year == ""){
        let error = document.getElementById("error-msg");
        error.style.display = "block";
        return true;
    }else if(day > 31 || day <1 || month>12 || month <1 || year > currYear  || year <0){
         let error = document.getElementById("error-msg");
        error.style.display = "block";
        return true;
    }
    return false;
}



function calculateAge(){
   
    if(invalidInput()) return;
    let ageYear = currYear - year;  
    let ageMonth = currMonth - month;
    if(ageMonth <0){
        ageYear--;
        currMonth +=12;
        ageMonth = currMonth -month;
    }
    let ageDay = currDay - day;
    if(ageDay <0){
        ageMonth--;
        currDay +=30;
        ageDay = currDay - day;
    }
    return { year: ageYear, month: ageMonth, day: ageDay };
}


//calculate age button
let calBtn = document.getElementById("calc-btn");
calBtn.addEventListener("click", ()=>{
day = parseInt(document.getElementById("inp-day").value);
month = parseInt(document.getElementById("inp-month").value);
 year = parseInt(document.getElementById("inp-year").value);
 
    let age = calculateAge();
    console.log(age);
    let OutputYear = document.getElementById("res-years");
    let OutputMonth = document.getElementById("res-months");
    let OutputDay = document.getElementById("res-days");

    OutputYear.innerText = age.year;
    OutputMonth.innerText = age.month;
    OutputDay.innerText = age.day;

    let resultArea = document.getElementById("result-area");
    resultArea.classList.add("show");

})