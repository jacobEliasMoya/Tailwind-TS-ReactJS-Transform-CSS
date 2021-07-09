import React from 'react'
import StepIndicator from './StepIndicator';
import Header from './Header';
import Link from './Link';
import Paragraph from './Paragraph';
import Form from './Form';

export default function Formwrapper() {

    let curStep = 1;

    return (
        <section className='form_wrapper'>
            <StepIndicator currentStep={curStep}/>
            <Header headerText="Let's set up your account"/>
            <div className='sign_in'>
                <Paragraph paragraphText='Already have an account?'/>
                <Link linktext='Sign in'/>
            </div>
            <Form />


        </section>
    )

}
