function isPalindrome(str){
    str = str.toUpperCase().replaceAll(" ", "");
    let tamanhoPalavra = str.length;
       for(let i = 0; i <= tamanhoPalavra; i++) {
        if(str[i] != str[tamanhoPalavra - 1 - i]) {
            return false;
        }  
        } return true;}


function arrayMaxMin(arr){
    /* Seu código aqui */
}
