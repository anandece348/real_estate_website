import './GetStarted.css';
const GetStarted = ()=>{
    return(
         <section  id="get_started" className="g-wrapper">
            <div className="paddings innerWidth g-conatiner">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get started with Homyz</span>
                    <span className='secondaryText'>Subscribe and find super attractive price quotes from us.<br/>
                        Find your residence soon
                    </span>
                    <button className='button'> 
                       <a href="mailto:anandece2608@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
         </section>
    )
}

export default GetStarted;