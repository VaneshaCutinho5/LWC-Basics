import { LightningElement } from 'lwc';

export default class MyParentComponent extends LightningElement {

    nameValue;

    constructor(){
        super();
        console.log('Parent Constructor');
    }
    connectedCallback(){
        console.log('Parent Connected Callback');
    }   
    renderedCallback(){
        console.log('Parent Rendered Callback');
    }           
    disconnectedCallback(){
        console.log('Parent Disconnected Callback');
    }   
    /*errorCallback(error, stack){
        console.log('Error Callback');
    }   */

    handleChange(event){
        this.nameValue = event.target.value;
        // while using @api for method
        this.template.querySelector('c-my-child-component').handleFromParent(this.nameValue); // getting child ref.
    }
}