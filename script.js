//insialisasi tempat untuk menampung inputan number dan riwayat inputan
//mengambil nilai dari history
const getHistory=()=>{
    return document.querySelector('.history').innerHTML;
}
//menyimpan nilai history
const setHistory=(num)=>{
    document.querySelector('.history').innerHTML=num;
}
//mengambil nilai result(output yang ditampilkan)
const getResult = ()=>{
    return document.querySelector('.result').innerHTML;
}
//menyimpan nilai resul
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
numbers.forEach((number)=>{ //mengambil setiap elemen pada kelas number
    number.addEventListener('click',(event)=>{ //menangkap event klik pada number
        let val=number.innerHTML; //mengambil nilai pada elemen number
        let output=getResult(); //inisialisasi var output untuk menampung nilai yang akan diinputkan
        //percabangan untuk mencegah multiple koma
        if(val=='.'){ //jika nilai dari number "." maka ketika "." diklik secara terus menerus akan dihapus dan diganti dengan inputan terakihir
            if(isNaN(output[output.length-1])){
                output= output.substr(0,output.length-1);
            }
        }
        //menambahkan nilai number kedalam var output dan menyimpannya pada documen html
        if(output!=NaN){ //mencagah nilai Nan untuk diinputkan
            output=output+val;
            setResult(output);
        }  
    })
})
//event operator click
operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
        let val=operator.innerHTML;
        let op=val.replace(/x/g,"*"); //mereplace nila X menjadi * supaya operasi kalkulus berjalan
        //mereplace ÷ menjadi operasi bagi /
        if(val=="÷"){
            op=val.replace(/÷/g,"/");
        }
        // percabangan untuk operasi C(clear) menghapus semua input
        if(op=="C"){ 
            setHistory("");
            setResult("");
        }
        // percabangan untuk menghapus nilai inputan terakhir
        else if(op=="CE"){
            let output=getResult().toString();//mengcasting output menjadi nilai str
            if(output){ //jika output ada
                output=output.substr(0, output.length-1); //output dengan indeks terakhir akan dihilangkan
                setResult(output);
            }
        }
        else{
            //ketika button operasi lainnya diclik
            let output=getResult(); 
            let history=getHistory();
            //percabangan untuk mencegah operasi diinputkan berurutan
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            //jika semua normal
            if(output!="" || history!=""){
                output= output==""?output:output;
                history=history+output; //menyimpan inputan di history 
                //ketika "=" diklik maka inputan yang tersimpan di history akan dieksekusi
                if(op=="=" && history!=""){
                    //menghitung operasi menggunakan method eval dari value yang disimpan dihistori
                    let sum=eval(history);
                    setResult(sum); //menampilkan hasil operasi eval
                    setHistory(""); 
                }
                else{ //jika tombol operasi lain di klik maka screen output akan kosong
                    history=history+op; //menambahkan nilai operasi yang diklik di history
                    setHistory(history);
                    setResult("");
                }
            }
            
        }
        
    })
})
