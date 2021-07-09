import React from 'react';
import Input from './Input';
import Select from './Select';
import Paragraph from './Paragraph';

export default function Form() {

    const checkInputsValue = () => {
        let checks = 0;
        document.querySelectorAll('input').forEach(inp=>{
            if(inp.value.length > 0 && document.querySelector('select').value.length > 0 && document.querySelector('.password').value.length > 0){
                checks=1;
            }
        })
        switch(checks){
            case 1:
                document.querySelector('.submit_button').style.background='#286EFA';
                document.querySelector('.submit_button').style.color='white';
            break;
            default:
                document.querySelector('.submit_button').style.background='rgba(150, 150, 150, 0.151)';
                document.querySelector('.submit_button').style.color='#AAAAAA';
            break;
        }
    }

    const revealPassword = () => {
        let x = document.querySelector('.password');
        switch(x.type){
            case 'password':
                x.type='text'
            break;
            default:
                x.type='password';
            break
        }
    }

    return (
        <form onChange={checkInputsValue}>
            <Input inputType='text' inputPlaceholder='Your name'/>
            <Input inputType='email' inputPlaceholder='Email address'/>
            <Select/>
            <span>
                <i onClick={revealPassword} className="fas fa-eye"></i>
                <Input inputClass='password' inputType='password' inputPlaceholder='Password'/>
            </span>
            <Paragraph paragraphText='Minimum 8 characters'/>
            <Input inputValue='Next' inputClass='submit_button' inputType='submit'/>
        </form>
    )
}
