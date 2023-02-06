export class utilities{
    static buildCalculator(container) {
        let number0 = document.createElement('button');
        let number1 = document.createElement('button');
        let number2 = document.createElement('button');
        let number3 = document.createElement('button');
        let number4 = document.createElement('button');
        let number5 = document.createElement('button');
        let number6 = document.createElement('button');
        let number7 = document.createElement('button');
        let number8 = document.createElement('button');
        let number9 = document.createElement('button');
        let symbolPlus = document.createElement('button');
        let symbolLess = document.createElement('button');
        let symbolMultiplication = document.createElement('button');
        let symbolC = document.createElement('button');
        let symbolEqual = document.createElement('button');
        let symbolDivision = document.createElement('button');
        let input = document.createElement('input');
        
        let buttonDiv4 = document.createElement('div');

        let number0_text = document.createTextNode('0');
        number0.appendChild(number0_text);

        let symbolC_text = document.createTextNode('C');
        symbolC.appendChild(symbolC_text);
        symbolC.classList.add('operand');

        let symbolEqual_text = document.createTextNode('=');
        symbolEqual.appendChild(symbolEqual_text);
        symbolEqual.classList.add('operand');

        let symbolDivision_text = document.createTextNode('/');
        symbolDivision.appendChild(symbolDivision_text);
        symbolDivision.classList.add('operand');

        buttonDiv4.appendChild(number0);
        buttonDiv4.appendChild(symbolC);
        buttonDiv4.appendChild(symbolEqual);
        buttonDiv4.appendChild(symbolDivision);

        let buttonDiv3 = document.createElement('div');

        let number1_text = document.createTextNode('1');
        number1.appendChild(number1_text);

        let number2_text = document.createTextNode('2');
        number2.appendChild(number2_text);

        let number3_text = document.createTextNode('3');
        number3.appendChild(number3_text);

        let symbolMultiplication_text = document.createTextNode('x');
        symbolMultiplication.appendChild(symbolMultiplication_text);
        symbolMultiplication.classList.add('operand');

        buttonDiv3.appendChild(number1);
        buttonDiv3.appendChild(number2);
        buttonDiv3.appendChild(number3);
        buttonDiv3.appendChild(symbolMultiplication);

        let buttonDiv2 = document.createElement('div');

        let number4_text = document.createTextNode('4');
        number4.appendChild(number4_text);

        let number5_text = document.createTextNode('5');
        number5.appendChild(number5_text);

        let number6_text = document.createTextNode('6');
        number6.appendChild(number6_text);

        let symbolLess_text = document.createTextNode('-');
        symbolLess.appendChild(symbolLess_text);
        symbolLess.classList.add('operand');

        buttonDiv2.appendChild(number4);
        buttonDiv2.appendChild(number5);
        buttonDiv2.appendChild(number6);
        buttonDiv2.appendChild(symbolLess);

        let buttonDiv = document.createElement('div');

        let number7_text = document.createTextNode('7');
        number7.appendChild(number7_text);

        let number8_text = document.createTextNode('8');
        number8.appendChild(number8_text);

        let number9_text = document.createTextNode('9');
        number9.appendChild(number9_text);

        let symbolPlus_text = document.createTextNode('+');
        symbolPlus.appendChild(symbolPlus_text);
        symbolPlus.classList.add('operand');

        buttonDiv.appendChild(number7);
        buttonDiv.appendChild(number8);
        buttonDiv.appendChild(number9);
        buttonDiv.appendChild(symbolPlus);

        container.appendChild(input);
        container.appendChild(buttonDiv);
        container.appendChild(buttonDiv2);
        container.appendChild(buttonDiv3);
        container.appendChild(buttonDiv4);
    }
}