import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Esta es mi home page
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Home
