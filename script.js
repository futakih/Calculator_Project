const getHistory=()=>{
    return document.querySelector('.history').innerHTML;
}
const setHistory=(num)=>{
    document.querySelector('.history').innerText=getFormatedNumber(num);
}
const getResult = ()=>{
    return document.querySelector('.result').innerText;
}
const setResult = (num)=>{
    document.querySelector('.result').innerText=getFormatedNumber(num);
}

//fungsi untuk membuat koma pada inputan number
const getFormatedNumber=(num)=>{
    return Number(num).toLocaleString("en");
}
setResult(10000);
//variabel fungsi untuk menghilangkan karakter string dalam number
const reverseNumberFormat=(num)=>{
    return Number(num.replace(/,/g,''));
}

console.log(reverseNumberFormat(getResult()))
