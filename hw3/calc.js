/*
 * Implement all your JavaScript in this file!
 */
"use strict";
var $display = $("#display");
var operand1;
var operand2;
var res;
var operation;
var operationFlag = false;
var equalFlag = false;


var clear = () => {
    operand1 = "";
    operand2 = "";
    operation = "";
 
}
var clearAll = () => {
  
    operand1 = "";
    operand2 = "";
    res = "";
    operation = "";
    $display.val("");
    operationFlag = false;
    equalFlag = false;  

 
}
var calc = function(op1, op2) {

    if (operation == "+") {
        return Number(op1) + Number(op2);
    } else
    if (operation == "-") {
        return Number(op1) - Number(op2);
    } else
    if (operation == "/") {

        if (op2 == 0)
            return "infinity";


        else
            return Number(op1) / Number(op2);
    } else
    if (operation == "*") {
        return Number(op1) * Number(op2);
    }


}

var clickHandler = (e) => {
  
    var $target = $(e.target);
    if($target.html() == "=" && !operand1){
        return}
    if(operationFlag && !isNaN($target.html())){
        $display.val("");
        operationFlag = false;
    }
    if( equalFlag && !isNaN($target.html()) ){
        $display.val("");
        equalFlag = false;
    }  
    
    if( !isNaN($target.html())){
   $display.val($display.val()+$target.html());
    }

    else  if($target.attr("value") == "C"){
    clearAll();
    }

    else if($target.html() == "=" && operand1){
        operand2 = $display.val();
        res = calc(operand1,operand2);
        clear();
        $display.val(res);
        equalFlag = true;
    }
    else{
        if(!operand1){
            operand1=$display.val();
            
            operation = $target.attr("value");
            operationFlag = true;
        }
        else if(operand1 && isNaN($target.html()) && operationFlag ){
            operation = $target.attr("value"); 
        }
        else if(!operand2){
            operand2=$display.val();
            res = calc(operand1,operand2)
            clear();
            $display.val(res);
            operand1=res;
            operation = $target.attr("value");
            operationFlag = true;
            
        }
     
    }



    }

    



$(document).ready(function() {
    $("#button1").click(clickHandler);
    $("#button2").click(clickHandler);
    $("#button3").click(clickHandler);
    $("#button4").click(clickHandler);
    $("#button5").click(clickHandler);
    $("#button6").click(clickHandler);
    $("#button7").click(clickHandler);
    $("#button8").click(clickHandler);
    $("#button9").click(clickHandler);
    $("#button0").click(clickHandler);
    $("#addButton").click(clickHandler);
    $("#subtractButton").click(clickHandler);
    $("#multiplyButton").click(clickHandler);
    $("#clearButton").click(clickHandler);
    $("#equalsButton").click(clickHandler);
    $("#divideButton").click(clickHandler);

});