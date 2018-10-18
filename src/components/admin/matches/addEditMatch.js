import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/formFields';
import {validate} from '../../ui/misc';

class AddEditMatch extends Component {

    state = {
        match_id:'',
        formType:'',
        formSuccess:'',
        formError:false,
        teams:[],
        formdata:{
            date:{
                element:'input',
                value:'',
                config:{
                    name:'date_input',
                    type: 'date',
                    label:'Event Date'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            local:{
                element:'select',
                value:'',
                config:{
                    name:'select_local',
                    type: 'select',
                    label:'Select a local team',
                    options:[]
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:false
            },
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>    
                    <div>
                        <form onSubmit={event=>this.submitForm(event)}>
                        <FormField
                            id={'date'}
                            formdata={this.state.formdata.date}
                            change={(element)=> this.updateForm(element)}
                        />
                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AddEditMatch;