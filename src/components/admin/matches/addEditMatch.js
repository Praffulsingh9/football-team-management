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
            resultLocal:{
                element:'input',
                value:'',
                config:{
                    name:'result_local_input',
                    type: 'text',
                    label:'Result Local'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:false
            },
            away:{
                element:'select',
                value:'',
                config:{
                    name:'select_away',
                    type: 'select',
                    label:'Select a away team',
                    options:[]
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:false
            },
            resultAway:{
                element:'input',
                value:'',
                config:{
                    name:'result_away_input',
                    type: 'text',
                    label:'Result Away'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:false
            },
            referee:{
                element:'input',
                value:'',
                config:{
                    name:'referee_input',
                    type: 'text',
                    label:'Referee'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            stadium:{
                element:'input',
                value:'',
                config:{
                    name:'stadium_input',
                    type: 'text',
                    label:'Stadium'
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            result:{
                element:'select',
                value:'',
                config:{
                    name:'select_result',
                    type: 'select',
                    label:'Team Result',
                    options:[
                        {key:'W',value:'W'},
                        {key:'L',value:'L'},
                        {key:'D',value:'D'},
                        {key:'N/A',value:'N/A'}
                    ]
                },
                validation:{
                    required: true,
                    
                },
                valid: false,
                validationMessage:'',
                showLabel:true
            },
            final:{
                element:'select',
                value:'',
                config:{
                    name:'select_played',
                    type: 'select',
                    label:'Game Played',
                    options:[
                        {key:'Yes',value:'Yes'},
                        {key:'No',value:'No'},
                        
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

                        <div className="select_team_layout">
                            <div className="label_inputs">
                                Local
                            </div>
                            <div className="wrapper">
                                <div className="left">
                                <FormField
                                    id={'local'}
                                    formdata={this.state.formdata.local}
                                    change={(element)=> this.updateForm(element)}
                                />
                                </div>
                                <div className="left">
                                <FormField
                                    id={'resultLocal'}
                                    formdata={this.state.formdata.resultLocal}
                                    change={(element)=> this.updateForm(element)}
                                />
                                </div>
                            </div>
                        </div>

                         <div className="select_team_layout">
                            <div className="label_inputs">
                                Away
                            </div>
                            <div className="wrapper">
                                <div className="left">
                                <FormField
                                    id={'away'}
                                    formdata={this.state.formdata.away}
                                    change={(element)=> this.updateForm(element)}
                                />
                                </div>
                                <div className="left">
                                <FormField
                                    id={'resultAway'}
                                    formdata={this.state.formdata.resultAway}
                                    change={(element)=> this.updateForm(element)}
                                />
                                </div>
                            </div>
                        </div>
                             <div className="split_fields">
                                <FormField
                                    id={'referee'}
                                    formdata={this.state.formdata.referee}
                                    change={(element)=> this.updateForm(element)}
                                />

                                <FormField
                                    id={'stadium'}
                                    formdata={this.state.formdata.stadium}
                                    change={(element)=> this.updateForm(element)}
                                />
                             </div>
                             <div className="split_fields last">
                                <FormField
                                    id={'result'}
                                    formdata={this.state.formdata.result}
                                    change={(element)=> this.updateForm(element)}
                                />
                                <FormField
                                    id={'final'}
                                    formdata={this.state.formdata.final}
                                    change={(element)=> this.updateForm(element)}
                                />
                            
                             </div>

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

export default AddEditMatch;