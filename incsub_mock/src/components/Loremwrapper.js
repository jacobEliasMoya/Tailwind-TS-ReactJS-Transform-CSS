import React from 'react'
import Header from './Header';
import Paragraph from './Paragraph';


export default function Loremwrapper() {

    // saving text as variables to show how i can implement varaibles as props
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incdididunt ut labore et dolore magna aliqua.'
    const dummyHead = 'Dummy Heading'

    return (
        <section className='lorem_wrapper'>
            <Header headerText={dummyHead}/>
            <Paragraph paragraphText={loremText}/>
        </section>
    )
}
