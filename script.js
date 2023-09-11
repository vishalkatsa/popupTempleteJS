//// Open or Block ////
let login = document.querySelector(".Dispaly-Block");

function loginB() {
    login.style.display = "block";
}
//// Close /////
function close1(){    
    login.style.display = "none";
}
let forms1 = document.querySelector(".forms");
let FullNameV = document.querySelector('.fullNmae');
let EmailV = document.querySelector('.emailName');
let PasswordV = document.querySelector('.Password');

let submit1V = document.querySelector('.submit1');

let SubmitData = []

function submitp(){ /// Click or Submit
   
    if(FullNameV.value === "" || EmailV.value === "" || PasswordV.value === ""){
        alert("Fill The Form");
        console.log("sjdfshdkf")
        
    }
    else{
    
    AllData();
    emrty1();
    }
}

function AllData(){
    SubmitData.push({
        Name: FullNameV.value,
        Email: EmailV.value,
        Password: PasswordV.value
    });
    SetLocal()
}

function SetLocal(){
    localStorage.setItem("user", JSON.stringify(SubmitData));
    
}
function emrty1() {
    forms1.reset(); // Reset the form to clear its fields
    // SubmitData = []; // Clear the SubmitData array
}




