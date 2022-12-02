import { question } from "readline-sync";

type operator = '+' | '-' | '*' | '/';

function main(): void
{
    const firststr: string = question('enter first number:\n');
    const operator: string = question('enter operator:\n');
    const secondstr: string = question('enter second string\n');

    const validInput: boolean = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    
    if (validInput)
    {
        console.log('is valid.')
        const firstNum: number = parseInt(firststr);
        const secondNum: number = parseInt(secondstr);
        const result = calculate(firstNum, operator as operator, secondNum);
        console.log(result);
    }
    else
    {
        console.log('\ninvalid input\n');
        main()
    }
}

function calculate(firstNum: number, operator: operator, secondNum: number)
{
     switch(operator)
     {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;    
     }
}

function isOperator(operator: string): boolean
{  
  switch(operator)
    {
        case '+':
        case '-':
        case '/':
        case '*':
            return true; 
        default:
            return false;               
    }
}
function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}
main(); 