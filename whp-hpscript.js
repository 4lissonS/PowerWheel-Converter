var box1 = document.getElementById('markhp')
var box2 = document.getElementById('markwhp')
var box3 = document.getElementById('tractiond')
var box4 = document.getElementById('tractiont')
var box5 = document.getElementById('tractioni');


function validate(){/*checagem e desabilitando demais checkbox*/
    if (box1.checked == 1){
        document.getElementById('markwhp').disabled = true;
        shp1.innerHTML = 'HP'
        swhp2.innerHTML = 'WHP'
    }
    else{
        document.getElementById('markwhp').disabled = false;
        shp1.innerHTML = ''
        swhp2.innerHTML = ''
    }
    if (box2.checked == 1){
        document.getElementById('markhp').disabled = true;
        shp2.innerHTML = 'HP'
        swhp1.innerHTML = 'WHP'
    }
    else{
        document.getElementById('markhp').disabled = false;
        shp2.innerHTML = ''
        swhp1.innerHTML = ''
    }
    if (box3.checked == 1){
        document.getElementById('tractiont').disabled = true;
        document.getElementById('tractioni').disabled = true;
    }
    else{
        document.getElementById('tractiont').disabled = false;
        document.getElementById('tractioni').disabled = false;
    }
    if (box4.checked == 1){
        document.getElementById('tractiond').disabled = true;
        document.getElementById('tractioni').disabled = true;
    }
    else{
        document.getElementById('tractiond').disabled = false;
    }
    if (box5.checked == 1){
        document.getElementById('tractiond').disabled = true;
        document.getElementById('tractiont').disabled = true;
    }
    else{}


}
/*calculo de perda de potencia, inserção de resultado na tela*/
function calc(){
    var result = document.getElementById('hp');
    var resn = Number(result.value);
    var calculo = 0
    if (box1.checked == 1 & box3.checked == 1){
        calculo = resn/1.1
        calculo = parseFloat(calculo.toFixed(2))
        res.innerHTML = calculo
        

    }
    else {
        res.innerHTML = 0
    }
    if (box1.checked == 1 & box4.checked == 1){
        calculo = resn/1.2
        calculo = parseFloat(calculo.toFixed(2))
        res.innerHTML = calculo
    }
    else{}
    if (box1.checked == 1 & box5.checked == 1){
        calculo = resn/1.25
        calculo = parseFloat(calculo.toFixed(2))
        res.innerHTML = calculo
    }
    else{}
    if (box2.checked == 1 & box3.checked == 1){
        calculo = resn*1.1
        calculo = parseFloat(calculo.toFixed(2))
        res.innerHTML = calculo
    }
    else{}
    if (box2.checked == 1 & box4.checked == 1){
        calculo = resn*1.2
        calculo = parseFloat(calculo.toFixed(2))
        res.innerHTML = calculo
    }
    else{}
    if (box2.checked == 1 & box5.checked == 1){
        calculo = resn*1.25
        calculo = parseFloat(calculo.toFixed(2))
        res.innerHTML = calculo
    }
    else{}
}