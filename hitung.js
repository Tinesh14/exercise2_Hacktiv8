function insert(num){
  document.getElementById("nilai").value += num;
}

function equal(){
  var exp = document.getElementById("nilai").value;
  if(exp){
    document.getElementById("nilai").value = eval(exp);
  }
}
function c(){
  document.getElementById("nilai").value = "";
}
