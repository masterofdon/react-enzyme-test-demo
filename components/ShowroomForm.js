import React, {Component} from 'react';

export default class ShowroomForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            city : null,
            district : null
        }
        //this._onSubmit = this._onSubmit.bind(this);
        //this.onSubmit = this.props.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
    }

    onInputChange(event){
        var x = {}
        x[event.currentTarget.getProperty('id')] = event.currentTarget.value;
        this.setState(Object.assign({},this.state,x));
    }

    onSubmitClicked(event){
        console.log("Event Received");
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type={'text'} name={'city'} id={'city'} onChange={this.onInputChange}/>
                    <input type={'text'} name={'district'} id={'district'} onChange={this.onInputChange}/>
                    <input type={'submit'} onSubmit={this.onSubmitClicked} value={'Create Showroom'}/>
                </form>
            </div>
        );
    }
}