import { LightningElement , track} from 'lwc';

export default class TableComponent extends LightningElement {
    @track studentNames = [];

    nameValue = ' ';
    ageValue = ' ';
    courseValue = ' ';

    connectedCallback(){
        this.studentNames.push({name:'Student 1', age : 20, course : 'M.E'});
        this.studentNames.push({name:'Student 2', age : 22, course : 'E.C'});
        this.studentNames.push({name:'Student 3', age : 21, course : 'C.S'});
        this.studentNames.push({name:'Student 4', age : 22, course : 'I.T'});
        this.studentNames.push({name:'Student 5', age : 23, course : 'E.E'});
    }

    /*
    connectedCallback(){
        this.studentNames.push({
            name: 'Ajith',
            age: 34,
            course: 'MBA'
            
        });
        this.studentNames.push({
            name: 'Himani',
            age: 21,
            course: 'IS'
        });
        this.studentNames.push({
            name: 'Deeksha',
            age: 20,
            course: 'EC'
        });
        this.studentNames.push({
            name: 'Gautam',
            age: 24,
            course: 'ME'
        });
        this.studentNames.push({
            name: 'Vanesha',
            age: 23,
            course: 'CS'
        });
    }
        */
        /* 
        handleClickUpdate(event){
            console.log('Calling from Student List');
            let clickedRow = event.target.dataset.index; // returns a string
            this.studentNames[clickedRow].name = 'Vanesha';
            console.log(JSON.stringify(this.studentNames));
        }*/

        handleClickUpdate(event){
            let clickedRow = parseInt(event.target.dataset.index);
            if(clickedRow == 0){
                this.studentNames[clickedRow].name = 'Ajith';
            }
            if(clickedRow == 1){
                this.studentNames[clickedRow].name = 'Vanesha';
            }
             if(clickedRow == 2){
                this.studentNames[clickedRow].name = 'Deeksha';
            }
             if(clickedRow == 3){
                this.studentNames[clickedRow].name = 'Gautam';
            }
             if(clickedRow == 4){
                this.studentNames[clickedRow].name = 'Himani';
            }
        }

        handleClickDelete(event){
            let clickedRowToBeDeleted = parseInt(event.target.dataset.index);
            this.studentNames.splice(clickedRowToBeDeleted, 1); // index, count of Rows
        }
        /* HardCoded data for insertion
        handleClickAdd(event){
            const newStudent = {
                name : 'New Student',
                age : 21,
                course : 'BCA'
            };

            this.studentNames = [...this.studentNames, newStudent];
        }
            */

        // Dynamic data for insertion
        handleChange(event){
            const field = event.target.name;

            if(field === 'name'){
                this.nameValue = event.target.value;
            }
            if(field === 'age'){
                this.ageValue = event.target.value;
                        }
                    if(field ==='course'){
                        this.courseValue = event.target.value;
                    }
            }

            // Add Student
        handleClickAdd(event){
            const newStudent = {
                name : this.nameValue,
                age : this.ageValue,
                course : this.courseValue
            };

            this.studentNames = [...this.studentNames, newStudent];
        }


}