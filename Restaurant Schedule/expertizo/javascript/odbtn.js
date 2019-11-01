

function shafi(){
    var num = document.getElementById('FaN').value;

    if(num % 2 == 0){
        document.getElementById('result').innerHTML = num + ' is Even no.'
    }
    else{
        document.getElementById('result').innerHTML = num + ' is Odd no.'
    }
}