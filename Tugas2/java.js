function insert(num){
    document.form.textView.value = document.form.textView.value+num;
}
function c(){
    document.form.textView.value = "";
}
function DEL(){
    var d = document.form.textView.value;
    document.form.textView.value = d.substring(0, d.length-1);
     
}
function hasil(){
    var x = document.form.textView.value;
    if(x==""){
        alert('Inputkan Angka Terlebih Dahulu');
    }
    if(x){
    document.form.textView.value = eval(x);
    }
}
function persen(){
    var x = document.form.textView.value
    document.form.textView.value = x / 100;
}