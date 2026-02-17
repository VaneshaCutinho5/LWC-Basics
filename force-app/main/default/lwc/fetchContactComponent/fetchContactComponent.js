import { LightningElement, wire} from 'lwc';
import fetchContacts from '@salesforce/apex/fetchContactController.fetchContacts';

export default class FetchContactComponent extends LightningElement {
    @wire(fetchContacts)
    conList;

    // searchValueByName;

    // @wire(fetchContacts, {searchKey : '$searchValueByName'})
    // wiredData({data, error}){
    //     if(data){
    //         this.accountData = data;
    //     }else if(error){

    //     }
    // }

    // handleSearch(event){
    //    this.searchValueByName = event.target.value;
    // }
}