/**
 * Created by Luciano on 6/5/2017.
 */

function calcularIMC() {
    var A,P,R;

    A=document.getElementById("Alt").value;
    P=document.getElementById("Pes").value;

    if(A.includes(",")){
        A=A.replace(",",".");
    }
    if(P.includes(",")){
        P=P.replace(",",".");
    }

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

function Horas() {
    inicio = document.getElementById("f1").value;
    fin = document.getElementById("f2").value;

    inicioMinutos = parseInt(inicio.substr(3,2));
    inicioHoras = parseInt(inicio.substr(0,2));

    finMinutos = parseInt(fin.substr(3,2));
    finHoras = parseInt(fin.substr(0,2));

    if((inicioMinutos>=0)&&(inicioMinutos<60)&&(inicioHoras<24)&&(inicioHoras>=0)&&(finMinutos>=0)&&(finMinutos<60)&&(finHoras<24)&&(finHoras>=0)){
        if (inicioHoras > finHoras) {
            var tempH = 24 - inicioHoras;
            horas = finHoras + tempH;
            var tempM = 60 - inicioMinutos;
            minutos = finMinutos + tempM;
            if (minutos > 59) {
                minutos = minutos - 60;
                horas++;
            }
            horas = horas - 1;
            horas = horas.toString();
            minutos = minutos.toString();
            alert("Has dormido " + horas + " Horas y " + minutos + " Minutos");
        }
        if (inicioHoras == finHoras) {
            if (inicioMinutos > finMinutos) {
                var tempH = 24 - inicioHoras;
                horas = finHoras + tempH;
                var tempM = 60 - inicioMinutos;
                minutos = finMinutos + tempM;
                if (minutos > 59) {
                    minutos = minutos - 60;
                    horas++;
                }
                horas = horas - 1;
                horas = horas.toString();
                minutos = minutos.toString();
                alert("Has dormido " + horas + " Horas y " + minutos + " Minutos");
            }
            if (inicioMinutos < finMinutos) {
                minutos = finMinutos - inicioMinutos;
                alert("Has dormido" + minutos + " Minutos");
            }
            if (inicioMinutos == finMinutos) {
                alert("No ha llegado a dormir 1 Minuto");
            }
        }
        if (inicioHoras < finHoras) {
            horas = finHoras - inicioHoras;
            minutos = finMinutos - inicioMinutos;
            if (minutos < 0) {
                minutos = minutos + 60;
                horas--;
            }
            horas = horas.toString();
            minutos = minutos.toString();
            alert("Has dormido " + horas + " Horas y " + minutos + " Minutos");
        }
    }else{
        var msj="Ha ingresado el valor erroneamente. Asegurese de estar usando el horario en un formato de 24hs. Ejemplo: 22:15 (Diez y Cuarto)";
        alert(msj);
    }
}

