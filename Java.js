/**
 * Created by Luciano on 16/06/2020.
 */
/**
 * Calculador de Indice de Masa Corporal
 * @method calcularIMC
 * @param {number} valor - El valor de la altura
 * @param {number} valor - El valor del peso
 * @return
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
/**
 * Calculador de Horas Transcurridas
 * @method tiempo
 * @param {number} Inicio y Fin de las Horas
 * @param {number} Inicio y Fin de los Minutos
 * @return {number} Minutos Totales
 */
function tiempo() {
    inicio = document.getElementById("f1").value;
    fin = document.getElementById("f2").value;

    inicioMinutos = parseInt(inicio.substr(3,2));
    inicioHoras = parseInt(inicio.substr(0,2));
    BeginMinutos = inicioHoras*60+inicioMinutos;

    finMinutos = parseInt(fin.substr(3,2));
    finHoras = parseInt(fin.substr(0,2));
    EndMinutos= finHoras*60+finMinutos;

    if((inicioMinutos>=0)&&(inicioMinutos<60)&&(inicioHoras<24)&&(inicioHoras>=0)){
        if((finMinutos>=0)&&(finMinutos<60)&&(finHoras<24)&&(finHoras>=0)) {
            if (EndMinutos > BeginMinutos) Total = EndMinutos - BeginMinutos;
            if (EndMinutos < BeginMinutos) Total = (1440 - BeginMinutos) + EndMinutos;
            if (EndMinutos == BeginMinutos) Total = 0;
            if (Total != 0) {
                TotalH = Math.trunc(Total / 60);
                TotalM = Math.round((Total / 60 - TotalH) * 60);
                if (TotalH == 0) alert("Ha dormido " + TotalM + " Minutos");
                if (TotalH != 0) alert("Ha dormido " + TotalH + " Horas y " + TotalM + " Minutos");
            } else alert("No ha dormido ni 1 minuto");
        }else{
            var msj="Ha ingresado un valor erróneo en el campo HORA DE DESPERTAR. Asegurese de estar usando el horario en un formato de 24hs. Ejemplo: 22:15 (Diez y Cuarto)";
            alert(msj);
            document.getElementById("f2").value="";
        }
    }else{
        if((finMinutos>=0)&&(finMinutos<60)&&(finHoras<24)&&(finHoras>=0)){
            var msj="Ha ingresado un valor erróneo en el campo HORA DE DORMIR. Asegurese de estar usando el horario en un formato de 24hs. Ejemplo: 22:15 (Diez y Cuarto)";
            alert(msj);
            document.getElementById("f1").value="";
        }else{
            var msj="Ha ingresado un valor erróneo en Ambos campos. Asegurese de estar usando el horario en un formato de 24hs. Ejemplo: 22:15 (Diez y Cuarto)";
            alert(msj);
            document.getElementById("f2").value="";
            document.getElementById("f1").value="";
        }
    }
    return Total;
}
/*function Horas() {
    inicio = document.getElementById("f1").value;
    fin = document.getElementById("f2").value;

    inicioMinutos = parseInt(inicio.substr(3,2));
    inicioHoras = parseInt(inicio.substr(0,2));

    finMinutos = parseInt(fin.substr(3,2));
    finHoras = parseInt(fin.substr(0,2));

    if((inicioMinutos>=0)&&(inicioMinutos<60)&&(inicioHoras<24)&&(inicioHoras>=0)){
        if((finMinutos>=0)&&(finMinutos<60)&&(finHoras<24)&&(finHoras>=0)){
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
                dibujarCuadriculado(horas,minutos);
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
                    dibujarCuadriculado(horas,minutos);
                    horas = horas.toString();
                    minutos = minutos.toString();
                    alert("Has dormido " + horas + " Horas y " + minutos + " Minutos");
                }
                if (inicioMinutos < finMinutos) {
                    minutos = finMinutos - inicioMinutos;
                    dibujarCuadriculado(0,minutos);
                    alert("Has dormido "+ minutos + " Minutos");
                }
                if (inicioMinutos == finMinutos) {
                    dibujarCuadriculado(0,0);
                    alert("No has llegado a dormir 1 Minuto");
                }
            }
            if (inicioHoras < finHoras) {
                horas = finHoras - inicioHoras;
                minutos = finMinutos - inicioMinutos;
                if (minutos < 0) {
                    minutos = minutos + 60;
                    horas--;
                }
                dibujarCuadriculado(horas,minutos);
                horas = horas.toString();
                minutos = minutos.toString();
                alert("Has dormido " + horas + " Horas y " + minutos + " Minutos");

            }
        }else{
            var msj="Ha ingresado un valor erróneo en el campo HORA DE DESPERTAR. Asegurese de estar usando el horario en un formato de 24hs. Ejemplo: 22:15 (Diez y Cuarto)";
            alert(msj);
            document.getElementById("f2").value="";
        }
    }else{
        var msj="Ha ingresado un valor erróneo en el campo HORA DE DORMIR. Asegurese de estar usando el horario en un formato de 24hs. Ejemplo: 22:15 (Diez y Cuarto)";
        alert(msj);
        document.getElementById("f1").value="";
    }
}*/
/**
 * Grafico
 * @method dibujarCuadriculado
     * @param {number} MinutosT - Minutos Totales
 * @return
 */
function dibujarCuadriculado(MinutosT) {
    limpiarCanvas();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var porciento=minutosT*100/480;

    var conteo=suma+0;
    var suma=conteo+1;

    ctx.beginPath();
    ctx.arc(150, 75, 70, 0, 2 * Math.PI);
    ctx.strokeStyle = "#66d7d1";
    ctx.stroke();
    ctx.closePath()

    var relleno=porciento*2/100;

   /* ctx.beginPath();
    ctx.arc(150, 75, 70, 0, relleno*Math.PI);
    ctx.strokeStyle = "#ff4161";
    ctx.stroke();
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(Math.round(porciento*100)/100+"%",120,79);
    ctx.closePath();*/

        ctx.beginPath();
        ctx.arc(150, 75, 70, 0, conteo*Math.PI);
        ctx.strokeStyle = "#ff4161";
        ctx.stroke();
        ctx.font = "bold 22px sans-serif";
        ctx.fillText(Math.round(porciento*100)/100+"%",120,79);
        ctx.closePath();
    setInterval(dibujarCuadriculado,15);
}

////// No es relevante - Bajo criterio propio
function informativo() {
    alert("Este es un indicador que nos dice en porcentaje cuanto hemos dormido con respecto a las horas necesarias. Por ejemplo: Hemos dormido el 80% de las horas necesarias");
}
//////

/**
 * Limpidor de Grafico
 * @method limpiarCanvas
 * @return
 */
function limpiarCanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}