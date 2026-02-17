import { LightningElement } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    totalSum = 0;
    firstNumber = 0;
    secondNumber = 0;

    totalOutput = {
        'totalSum' : 0,
        'totalSub' : 0
    }
    handleFirstNumber(event){
       // console.log(event.target.value); 
        this.firstNumber = parseInt(event.target.value); // considers as string so we need to typecast it
    }

    handleSecondNumber(event){
      //  console.log(event.target.value);
        this.secondNumber = parseInt(event.target.value);
    }   
    

    /*handleClick(event){
       // console.log(JSON.stringify(event));
       // console.log('Button Clicked');
       this.totalSum = this.firstNumber + this.secondNumber;
    }
       */

    handleClick(event){
        this.totalSum = this.firstNumber + this.secondNumber;
        this.totalOutput.totalSum = this.firstNumber + this.secondNumber;
    }
}