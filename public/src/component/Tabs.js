import React from 'react'
import './Tabs.css'

const Tabs=() => (
    <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <a className='nav-link mb-0 ' href='#'>Repositories</a>

        </li>
        <li className='nav-item'>
            <a className='nav-link mb-0' href='#'>Packages</a>

        </li>
        <li className='nav-item'>
            <a className='nav-link mb-0 ' href='#'>People</a>

        </li>
        <li className='nav-item'>
            <a className='nav-link mb-0 ' href='#'>Project</a>

        </li>

    </ul>
)

export default Tabs
