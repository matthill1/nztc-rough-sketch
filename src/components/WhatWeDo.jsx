import './WhatWeDo.css'

function StatsSection() {
    return (
        
        <div id="what-we-do"> 
            <h2>What We Do</h2>
            <p>We work with our partners on reducing carbon emissions to net zero, 
                seizing the opportunity to inspire creativity, drive innovation, 
                and secure support needed to deliver sustainable energy long term. </p>
            
            <div className='links'>
                <a>Technology <span className='right-arrow'>&#10132;</span></a>
                <a>Parnterships <span className='right-arrow'>&#10132;</span></a>
                <a>Thought leadership <span className='right-arrow'>&#10132;</span></a>
                <a>Programmers <span className='right-arrow'>&#10132;</span></a>
                <a>Research & Academia <span className='right-arrow'>&#10132;</span></a>
                <a>Networking <span className='right-arrow'>&#10132;</span></a>
                <a>Reports & Publications <span className='right-arrow'>&#10132;</span></a>
                <a>Events <span className='right-arrow'>&#10132;</span></a>
                <a>Projects <span className='right-arrow'>&#10132;</span></a>
            </div>
        </div>
        
        
    )
}

export default StatsSection
