import React from 'react';
import md5 from 'js-md5';
import propTypes from 'prop-types';

export default function UserPanel(props){
    return React.createElement('div',{},null,
    React.createElement('p',{style:{color: 'black'}},'nom :'+ props.name),
    React.createElement('p',{style:{color: 'black'}},'prenom : '+ props.lastname),
    React.createElement('p',{style:{color: 'black'}},'email : '+ props.email),
    React.createElement('img',{src: 'https://www.gravatar.com/avatar/'+ md5(props.email)},null)


    
    
    );


    
}
UserPanel.defaultProps={
    name:'hanen',
    lastname:'ben mansour',
    email:'khadija.azibou@gmail.com'
}
UserPanel.propTypes={
    name: propTypes.string.isRequired,
};

