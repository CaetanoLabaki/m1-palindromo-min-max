function isPalindrome(str){
    str = str.toUpperCase().replaceAll(" ", "");
    let tamanhoPalavra = str.length;
       for(let i = 0; i <= tamanhoPalavra; i++) {
        if(str[i] != str[tamanhoPalavra - 1 - i]) {
            return false;
        }  
        } return true;
    }


function arrayMaxMin(arr){
    let numMaximo = arr[0];
    let numMinimo = arr[0];
    let tamanhoArray = arr.length;
    for(let i = 0; i <= tamanhoArray; i++) {
        if(arr[i] > numMaximo) {
            numMaximo = arr[i];
                    }
        if(arr[i] < numMinimo) {
            numMinimo = arr[i];
        }
    }
    return [numMinimo, numMaximo];    
}

