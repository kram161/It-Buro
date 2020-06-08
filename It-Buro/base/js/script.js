
window.onload = function() {
    function pow(x,n){
        let z = x;

        for (let i=1;i<n;i++){
            z = z * x;
        }
        return z;
    }

    let x = prompt("Введите число которое хотите возвести в степень:");
    let n = prompt("Введите значание степени:");
    if(x <= 1){
        alert("Вы ввели неправильное значанеи")
    }
    else {
        console.log(pow(x,n));
    }
}



