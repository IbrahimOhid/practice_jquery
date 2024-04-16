function Calculation(num){
    const ResultValue = $('#Result').val();
    $('#Result').val(ResultValue + num)
}

function RemoveCalculation(){
    $('#Result').val('');
}

function Equation(){
    const FinalEquation = eval($('#Result').val());
    $('#Result').val(FinalEquation);
}