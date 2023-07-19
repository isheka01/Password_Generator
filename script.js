let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower='abcdefghijklmnopqrstuvwxyz';
let num='1234567890';
let symbol = '@$?&';
let uppercase = document.getElementById("upper");
let lowercase = document.getElementById("lower");
let numbers = document.getElementById("num");
let symbols = document.getElementById("symbol");
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let inputSlider = document.getElementById("range");
function returnChar(str){
    return str.charAt(Math.floor(Math.random()*str.length));
}
function randomIndex(pass)
{
    return Math.floor(Math.random()*pass.length);
}
function generatePassword() {
    strengthreset();
    strengthgen();
    let pass=check();
    let password='';
    let len=document.getElementById('range').value;
    if(len>=4)
    for(let i=0;i<len;i++)
    {
        password+=returnChar(pass[randomIndex(pass)]);
    }
    else{
        window.alert('password must be atleast 4 characters');
    }
    document.getElementById('password').innerText=password;
}
function check(){
    let pass=[];
    let ch=document.getElementsByClassName('checkbox');
    if(ch[0].checked)
    pass.push(upper);
    if(ch[1].checked)
    pass.push(lower);
    if(ch[2].checked)
    pass.push(num);
    if(ch[3].checked)
    pass.push(symbol);
    console.log(pass);
    return pass;
}
function strengthreset() {
    box1.style.backgroundColor = "";
    box2.style.backgroundColor = "";
    box3.style.backgroundColor = "";
    box4.style.backgroundColor = "";
}
let range=document.getElementById('range');
range.addEventListener('input',()=>{
    document.getElementById('size').innerText=range.value;
})
function stg() {
    let strength=0;
    let len=document.getElementById('range').value;
    if(len==4){
         strength+=2;
    }
    else if(len>4&&len<=7){
         strength+=4;
    }
    else{
        strength+=6;
    }
    let ch=document.getElementsByClassName('checkbox');
    if(ch[0].checked)
    strength+=1;
    if(ch[1].checked)
    strength+=1;
    if(ch[2].checked)
    strength+=1;
    if(ch[3].checked)
    strength+=1;
    let bar=Math.floor(strength/2.5);
    let strengthBars= document.getElementsByClassName('strength-bar');
    for(let i=0;i<bar;i++)
    {
        strengthBars[i].style.backgroundColor='#A4FFA';
    }
    console.log(bar);
}
function strengthgen() {
    let val = 0;
    val += lowercase.checked? 1: 0;
    val += uppercase.checked? 1: 0;
    val += numbers.checked? 1: 0;
    val += symbols.checked ? 1 : 0;
    if (inputSlider.value < 4) {
    }
    else if (inputSlider.value > 3 && inputSlider.value < 7) {
        val += 1;
    }
    else if (inputSlider.value > 6 && inputSlider.value < 10) {
        val += 3;
    }
    else if (inputSlider.value == 10) {
        val += 4;
    }
    if (val < 2) {
    }
    else if (val == 2) {
        box1.style.backgroundColor = "#A4FFAF";
    }
    else if (val > 2 && val < 6) {
        box1.style.backgroundColor = "#A4FFAF";
        box2.style.backgroundColor = "#A4FFAF";
    }
    else if (val > 5 && val < 8) {
        box1.style.backgroundColor = "#A4FFAF";
        box2.style.backgroundColor = "#A4FFAF";
        box3.style.backgroundColor = "#A4FFAF";
    }
    else if (val ==8) {
        box1.style.backgroundColor = "#A4FFAF";
        box2.style.backgroundColor = "#A4FFAF";
        box3.style.backgroundColor = "#A4FFAF";
        box4.style.backgroundColor = "#A4FFAF";
    }
}