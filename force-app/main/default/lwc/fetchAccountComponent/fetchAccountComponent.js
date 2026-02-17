import { LightningElement , wire} from 'lwc';
import fetchAccounts from '@salesforce/apex/fetchAccountController.fetchAccounts';
import deleteAccount from '@salesforce/apex/fetchAccountController.deleteAccount';

export default class FetchAccountComponent extends LightningElement {
    // @wire(fetchAccounts)
    // accountList;               // return data

    accountData = [];

    searchValueByName;

    @wire(fetchAccounts, {searchKey : '$searchValueByName'})
    wiredData({data, error}){
        if(data){
            this.accountData = data;
        }else if(error){
        }
    }

    handleSearch(event){
       this.searchValueByName = event.target.value;
    }

    handleClick(event){
        // console.log('Deleted Account Id' + event.target.value);
        let accountId = event.target.value;
        deleteAccount({accountToBeDeleted : accountId})
       .then(result => {
            if(result == 'Success'){
                const evt = new ShowToastEvent({
                title: 'Record Delete',
                message: 'Record Deleted Succesfully!',
                variant: 'success',
                });
                this.dispatchEvent(evt);
            }
            else{
                const evt = new ShowToastEvent({
                title: 'Record Delete',
                message: result,
                variant: 'error',
                });
                this.dispatchEvent(evt);
            }
       })
       .catch(error => {
        console.error(error);
       })
    }



}