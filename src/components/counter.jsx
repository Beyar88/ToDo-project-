import React, {Component} from 'react';
const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '50px 0',
    border: '1px solid white',
    borderRadius: '9px',
    alignItems: 'center',
    backgroundColor: 'white'
};




const buttonDiv = {
    borderLeft: '2px solid',
    padding: '20px 10px 20px 20px',
    backGroundColor: '#FFFFFF',
    width: '200px',
    display: 'flex',
    justifyContent: 'center'
}

const h4Style = {
    marginLeft: '10px',

}



class ToDOItem extends Component {
    
    buttonColors() {if (this.props.complete==='false'){ return ({
        padding: '8px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#5BE1C4'})}else {return ({
            padding: '8px 20px',
            borderRadius: '8px',
            color: 'white',
            backgroundColor: '#ff3333',
            fontWeight: 'bold',
            border: 'none',
            boxShadow: '1px 3px 5px red'
        })}}
    buttons(){
        if (this.props.complete === 'true'){
            return 'Undo'
        }else {
            return 'Mark as done'
        }
    }

    
    
    render() {
        return (
            <div style={divStyle} className='item-div'>
                <h4 style={h4Style}>{this.props.descreption}</h4>
                <div style={buttonDiv}>
                    <button onClick={() => this.props.buttonHandle(this.props.descreption)} style={this.buttonColors()}>{this.buttons()}</button>
                </div>
            </div>
        )
    }
}


export default ToDOItem;