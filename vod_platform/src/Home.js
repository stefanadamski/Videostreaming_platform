import React from 'react'
import { Navigation } from './components/Main/navigation'
import { Header } from './components/Main/header'
import { FirstRow } from './components/Main/firstRow'
import { SecondRow } from './components/Main/secondRow'
import { Contact } from './components/Main/contact'

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header/>
            <FirstRow/>
            <SecondRow/>
            <Contact/>
        </div>
    )
}

export default Home;

