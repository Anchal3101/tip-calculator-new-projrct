const tipcal = () =>{
    let amount = document.getElementById('billamount').value;
    

    let perc = document.getElementById('tipper').value;

    let tip  = amount * ( perc/100);

    let total = tip + Number(amount);

    document.getElementById('tipamount').value = tip
    document.getElementById('total').value =total

}