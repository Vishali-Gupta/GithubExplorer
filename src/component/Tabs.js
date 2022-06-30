import React from 'react'
import './Tabs.css'

const Tabs=({user}) => (
    <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <p className='nav-link mb-0 active'>Repositories</p>

        </li>
        <li className='nav-item'>
            <a 
            target="blank"
            rel="noopener noreferrer"
            className='nav-link mb-0' href={`https://github.com/${user.login}?tab=packages`}>
                Packages</a>

        </li>
        <li className='nav-item'>
            <a
            target="blank"
            rel="noopener noreferrer"
             className='nav-link mb-0 ' href={`https://github.com/${user.login}?tab=people`}>People</a>

        </li>
        <li className='nav-item'>
            <a 
             
            target="blank"
            rel="noopener noreferrer"
            className='nav-link mb-0 ' href={`https://github.com/${user.login}?tab=projects`}>Project</a>

        </li>

    </ul>
)

export default Tabs
