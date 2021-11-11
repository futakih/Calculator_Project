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
    if(num=="."){
		document.querySelector(".result").innerHTML='';
	} else {
        document.querySelector('.result').innerHTML=num;
    }
    
}

//seleksi elemen number dan operator
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

//event number click
numbers.forEach((number)=>{
    number.addEventListener('click',(event)=>{
        let val=number.innerHTML;
        let output=getResult();
        if(val=='.'){
            if(isNaN(output[output.length-1])){
                output= output.substr(0,output.length-1);
            }

        }
        if(output!=NaN){
            output=output+val;
            setResult(output);
        }  
    })
})
//event operator click
operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
        let val=operator.innerHTML;
        let op=val.replace(/x/g,"*");
        if(val=="÷"){
            op=val.replace(/÷/g,"/");
        }
        if(op=="C"){
            setHistory("");
            setResult("");
        }
        else if(op=="CE"){
            let output=getResult().toString();
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
                output= output==""?output:output;
                history=history+output;
                if(op=="=" && history!=""){
                    //menghitung operasi menggunakan method eval dari value yang disimpan dihistori
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
