import React, { useContext } from 'react'
import { AuthContextData } from '../context/AuthContext'

function Home() {

    const {user}  = useContext(AuthContextData)

    return (
        <div>
            {user}
        </div>
    )
}

export default Home
