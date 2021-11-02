function add() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var sum = parseFloat(n1) + parseFloat(n2);
  alert(sum);
}

function sub() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var diff = parseFloat(n1) - parseFloat(n2);
  alert(diff);
}

function mul() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var prd = parseFloat(n1) * parseFloat(n2);
  alert(prd);
}

function division() {
  var n1 = document.getElementById("n1").value; 
  var n2 = document.getElementById("n2").value;
  var qo = parseFloat(n1) / parseFloat(n2);
  alert(qo);
}