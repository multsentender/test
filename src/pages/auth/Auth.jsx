import React from 'react'
import {Route} from 'react-router-dom'
import {Login, Signup} from '../../components'

import './index.scss'

const Auth = () => {
    return (
        <div className='auth-page'>
            <Route exact path={['/', '/login']} component={Login}/>
            <Route exact path='/signup' component={Signup}/>
        </div>
    )
}

export default Auth
