import React,{useState,useEffect} from 'react';
import Input from './Input';
import Select from './Select';
import Paragraph from './Paragraph';
import Link from './Link';

export default function Form() {

    const [fName,setFormName] = useState(undefined);
    const [fEmail,setFormEmail] = useState(undefined);
    const [fType,setFormType] = useState(undefined);
    const [fPassword,setFormPassword] = useState(undefined);

    

    useEffect(()=>{
        setSubmitBtn();
    })

    const setSubmitBtn = () => {
        if(fName && fEmail && fType && fPassword){
            document.querySelector('.submit_button').style.background='#286EFA';
            document.querySelector('.submit_button').style.color='white';
            document.querySelector('.submit_button').style.cursor='pointer';
            document.querySelector('.submit_button').type='submit';

        } else  {
            document.querySelector('.submit_button').type='';
            document.querySelector('.submit_button').style.background='rgba(150, 150, 150, 0.151)';
            document.querySelector('.submit_button').style.cursor='default';
            document.querySelector('.submit_button').style.color='#AAAAAA';
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        document.querySelector('body').innerHTML='poop';
    }

    const formValidation = () => {
        // validation of name
        if (document.querySelector('.name_button').value.length >0 ){
            document.querySelector('.name_span').classList.add('selectedSpanName');
            setFormName(prevname=>document.querySelector('.name_button').value);
        } else {
            setFormName(prevname=>undefined);
            document.querySelector('.name_span').classList.remove('selectedSpanName');
        }

        // email validation
        if (document.querySelector('.email').value.length > 0){
            document.querySelector('.email_span').classList.add('selectedSpanEmail');
            if(!document.querySelector('.email').value.includes('.') || !document.querySelector('.email').value.includes('@')){
                document.querySelector('.email_span').classList.add('selectedSpanEmailErr');
                document.querySelector('.error_para').style.display='block';
                setFormEmail(prevEmail=>undefined);

            } else{
                document.querySelector('.email_span').classList.remove('selectedSpanEmailErr');
                document.querySelector('.error_para').style.display='none';
                setFormEmail(prevEmail=>document.querySelector('.email').value);
            }
        }else{
            document.querySelector('.email_span').classList.remove('selectedSpanEmail');
            document.querySelector('.email_span').classList.remove('selectedSpanEmailErr');
            document.querySelector('.error_para').style.display='none';
        }

        // password validation
        if(document.querySelector('.password').value.length >= 8){
            setFormPassword(prevPass=>document.querySelector('.password').value);
        } else {
            setFormPassword(prevPass=>undefined);
        }

        // select option validation
        if(document.querySelector('select').value !== ''){
            setFormType(prevType=>document.querySelector('select').value);
        } else {
            setFormType(prevType=>undefined);
        }
    }

    const checkInputsValue = () => {
        formValidation();

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
            <span className='name_span'>
                <Input inputClass='name_button' inputType='text' inputPlaceholder='Your name'/>
            </span>
            <span className='email_span'>
                <Input inputClass='email' inputType='email' inputPlaceholder='Email address'/>
            </span>
            <Paragraph paraClass='error_para' paragraphText='Please enter a valid email address'/>
            <Select/>
            <span>
                <i onClick={revealPassword} className="fas fa-eye"></i>
                <Input inputClass='password' inputType='password' inputPlaceholder='Password'/>
            </span>
            <Paragraph paragraphText='Minimum 8 characters'/>
            <Input submitform={onFormSubmit} inputValue='Next' inputClass='submit_button' inputType=''/>
            <span className='terms'>
                <p>By Clicking the "Next" button, you agree to creating a free account, and to <Link linktext='Terms of Service'/> and <Link linktext='Privacy Policy.'/> </p>
            </span>
        </form>
    )
}
