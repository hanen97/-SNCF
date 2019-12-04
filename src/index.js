import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import UserPanel from './UserPanel';

export default function App(props){


    return React.createElement('p',{style:{color: 'red'}},'Paragraph de '+ props.name);
}
App.defaultProps={
    name:'hanen'
}
App.propTypes={
    name: propTypes.string.isRequired,
};



export class Appclass extends React.Component{
    constructor(props){
        super (props);
    }
    render(){
        return React.createElement('p',{style:{color: 'blue'}},'Paragraph de '+this.props.name);
}}
ReactDOM.render(React.createElement(UserPanel,{},null),document.getElementById('root'));
