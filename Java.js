/**
 * Created by Luciano on 6/5/2017.
 */

function calcularIMC() {
    var A,P,R;

    A=document.getElementById("Alt").value;
    P=document.getElementById("Pes").value;

    R=P/Math.pow(A,2);

    if(R<18){
        alert("Su IMC es -> "+Math.round(R*100)/100+" Diagnóstico: Peso bajo. Necesario valorar signos de desnutricion");
    }
    if((R>18.5)&&(R<25)){
        alert("Su IMC es -> "+Math.round(R*100)/100+" Diagnóstico: Peso Normal");
    }
    if((R>24.9)&&(R<26.9)){
        alert("Su IMC es -> "+Math.round(R*100)/100+" Diagnóstico: Sobrepeso");
    }
    if(R>26.8){
        alert("Su IMC es -> "+Math.round(R*100)/100+" Diagnóstico: Obesidad, es necesario ver un especialista");
    }

}