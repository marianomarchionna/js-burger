// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
document.getElementById('calc-price').addEventListener('click',
    function() {
        let addition = 0;
        const ingredients = document.getElementsByClassName('ingredient');
        
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].checked == true){
                addition += parseInt(ingredients[i].value);
            }
        }

        let price = 50; 
        let priceFinal = 0;
        let coupons = ['98765QWERT', '12345ASDFG', '45678CVBNM', '65432LKJHG', '01923LAKSD'];
        const discount = document.getElementById('coupon').value;

        if(discount != ''){
            if (coupons.includes(discount)) {
                priceFinal = (addition + price) * 0.5;
            } else {
                alert('Coupon inserito non valido');
                priceFinal = addition + price;
            } 
        }else{
            priceFinal = addition + price;
        }
        
        document.getElementById('tot-price').innerHTML = '$ ' + priceFinal;
    } 
)