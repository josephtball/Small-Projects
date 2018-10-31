document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('display');
    var currentNum = '';
    var equation = [];

    var numberKeys = document.getElementsByClassName('number-key');
    var functionKeys = document.getElementsByClassName('function-key');

    for (var i = 0; i < numberKeys.length; i++) {
        var element = numberKeys[i];
        element.addEventListener('click', numberPush, false);
    }
    for (var i = 0; i < functionKeys.length; i++) {
        var element = functionKeys[i];
        element.addEventListener('click', functionPush, false);
    }

    function numberPush(event) {
        var input = event.target.id;

        if (input !== 'decimal') {
            currentNum = currentNum.concat(input);
        } else {
            currentNum = currentNum.concat('.');
        }

        display.innerHTML = currentNum;
    }

    function functionPush(event) {
        var input = event.target.id;
        
        equation.push(currentNum);

        switch (input) {
            case 'clear':
                currentNum = '';
                equation = [];
                display.innerHTML = '';
                break;

            case 'solve':
                console.log(equation.join(''));
                var total = eval(equation.join(''));
                display.innerHTML = total;
                break;
        
            default:
                equation.push(input);
                currentNum = '';
                display.innerHTML = '';
                break;
        }
    }

});