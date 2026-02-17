import { LightningElement, api} from 'lwc';

export default class MyChildComponent extends LightningElement {
    @api valueFromParent // (public) property for getting values from parent
    valueFromParentWithoutApi

    constructor(){
        super();
        console.log('Child Constructor');
    }

    connectedCallback(){
        console.log('Child Connected Callback');
       // console.log('Value From Parent: ' + this.valueFromParent);
    }   

    renderedCallback(){
        console.log('Child Rendered Callback');
    }   

    disconnectedCallback(){
        console.log('Child Disconnected Callback');
    } 
    
    @api handleFromParent(passValueFromParent){  // without @api for property we use @api for method
        this.valueFromParentWithoutApi = passValueFromParent;
    } 
}