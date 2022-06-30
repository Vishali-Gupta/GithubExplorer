import React from 'react'
import "./Repositories.css"
import Repository from './repository'
import "./repository.css"

const Repositories=({user ,repos})=>(
    <section  className='repositories'>
        {
            repos.map((repo)=>(
                <Repository  key={repo.id}  repo={repo} user={user}/>

            )

            )
        }
     </section>
    
    
)

export default Repositories