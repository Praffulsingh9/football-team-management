import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import {validate} from '../../ui/misc';

import {firebasePlayers,firebaseDB,firebase} from '../../../firebase';


class AddEditPlayers extends Component {

    state = {
        playerId:'',
        formType:'',
        formSuccess:'',
        formError:false,
        defaultImg:'',
        formdata:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type: 'text',
                    label:'Player Name'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            lastname:{
                element:'input',
                value:'',
                config:{
                    name:'lastname_input',
                    type: 'text',
                    label:'Player Last Name'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            number:{
                element:'input',
                value:'',
                config:{
                    name:'number_input',
                    type: 'text',
                    label:'Player Number'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            position:{
                element:'select',
                value:'',
                config:{
                    name:'select_position',
                    type: 'select',
                    label:'Select Position',
                    options:[
                        {key:"Keeper",value:"Keeper"},
                        {key:"Defender",value:"Defender"},
                        {key:"MidFielder",value:"MidFielder"},
                        {key:"Striker",value:"Striker"},
                    ]
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },

        }
    }
   
    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }


    componentDidMount(){
        const playerId = this.props.match.params.id;
        if(!playerId){
            this.setState({
                formType:'Add Player'
            })
        }
    }

    submitForm(event){
        event.preventDefault();
        
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        

        if(formIsValid){
           
            
        } else {
            this.setState({
                formError: true
            })
        }
    }



    render() {
        return (
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={event=>this.submitForm(event)}>
                        <FormField
                            id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'lastname'}
                            formdata={this.state.formdata.lastname}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'number'}
                            formdata={this.state.formdata.number}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'position'}
                            formdata={this.state.formdata.position}
                            change={(element)=> this.updateForm(element)}
                        />

                         <div className="success_label">{this.state.formSuccess}</div>
                             {
                                 this.state.formError ? 
                                <div className="error_label">Something went wrong</div>:
                                ''
                            }
                            <div className="admin_submit">
                                <button onClick={event=>this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AddEditPlayers;