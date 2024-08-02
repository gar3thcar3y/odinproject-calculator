const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var opcode = ""
var prev = ""

$("#div").onclick = () => {opcode = "div"; prev = oprand; oprand = "";}
$("#mul").onclick = () => {opcode = "mul"; prev = oprand; oprand = "";}
$("#sub").onclick = () => {opcode = "sub"; prev = oprand; oprand = "";}
$("#add").onclick = () => {opcode = "add"; prev = oprand; oprand = "";}

var oprand = "";

display = (oprand) => {
    $(".screen").innerHTML = oprand;
}

$("#zero").onclick = () => {oprand = oprand + "0"; display(oprand)}
$("#one").onclick = () => {oprand = oprand + "1"; display(oprand)}
$("#two").onclick = () => {oprand = oprand + "2"; display(oprand)}
$("#three").onclick = () => {oprand = oprand + "3"; display(oprand)}
$("#four").onclick = () => {oprand = oprand + "4"; display(oprand)}
$("#five").onclick = () => {oprand = oprand + "5"; display(oprand)}
$("#six").onclick = () => {oprand = oprand + "6"; display(oprand)}
$("#seven").onclick = () => {oprand = oprand + "7"; display(oprand)}
$("#eight").onclick = () => {oprand = oprand + "8"; display(oprand)}
$("#nine").onclick = () => {oprand = oprand + "9"; display(oprand)}
$("#dot").onclick = () => {oprand = oprand + "."; display(oprand)}

$("#back").onclick = () => {
    oprand = "";
    display(oprand)
}


$("#eql").onclick = () => {
    var floatoprand = +(oprand.replace(/,/,'.'));
    var floatprev = +(prev.replace(/,/,'.'));
    if(opcode == "div"){
        $(".screen").innerHTML = floatprev / floatoprand
    }
    if(opcode == "mul"){
        $(".screen").innerHTML = floatprev * floatoprand
    }
    if(opcode == "sub"){
        $(".screen").innerHTML = floatprev - floatoprand
    }
    if(opcode == "add"){
        $(".screen").innerHTML = floatprev + floatoprand
    }
}