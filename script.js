//inisialisasi tempat untuk menampung inputan number dan riwayat inputan

const getHistory=()=>{
    return document.querySelector('.history').innerHTML;
}
const setHistory=(num)=>{
    document.querySelector('.history').innerHTML=num;
}
const getResult = ()=>{
    return document.querySelector('.result').innerHTML;
}
const setResult = (num)=>{
    if(num==""){
		document.querySelector(".result").innerHTML=num;
	} else {
        document.querySelector('.result').innerHTML=getFormatedNumber(num);
    }
    
}


//fungsi untuk membuat koma pada inputan number
const getFormatedNumber=(num)=>{
    if(num=="-"){
        return "";
    }
    var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

//variabel fungsi untuk menghilangkan karakter string dalam number
const normalNumberFormat=(num)=>{
    return Number(num.replace(/,/g,''));
}

//seleksi elemen number dan operator
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

//event operator click
operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        let val=operator.innerHTML;
        let op=val.replace(/x/g,"*");
        if(op=="C"){
            setHistory("");
            setResult("");
        }
        else if(op=="CE"){
            let output=normalNumberFormat(getResult()).toString();
            if(output){
                output=output.substr(0, output.length-1);
                setResult(output);
            }
        }
        else{
            let output=getResult();
            let history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?output:normalNumberFormat(output);
                history=history+output;
                if(op=="="){
                    let sum=eval(history);
                    setResult(sum);
                    setHistory("");
                }
                else{
                    history=history+op;
                    setHistory(history);
                    setResult("");
                }
            }
            
        }
        
    })
})
//event number click
numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        let val=number.innerHTML;
        let output=normalNumberFormat(getResult());
        if(output!=NaN){
            output=output+val;
            setResult(output);
        }
       
    })
})