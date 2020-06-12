/**
 * Created by Luciano on 6/5/2017.
 */

function calcularIMC() {
    var A,P,R;

    A=document.getElementById("Alt").value;
    P=document.getElementById("Pes").value;

    R=P/Math.pow(A,2);

    alert(R);
}