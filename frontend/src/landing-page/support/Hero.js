import React from 'react';
function Hero() {
    return ( <div className="container"  >
        <div className="row" >
            <div className="col-6 mt-4 ">
                <h1 className='text-muted'>Support Portal</h1>

            </div>
            <div className="col-6 mt-4 ">
                <button className="btn btn-primary float-end">My tickets</button>
                
           
        </div>
        <input  id="search" type="text" className="form-control mt-4"  placeholder= "Eg: How do i open my account, how do i activate F&O..." />
    </div>
 </div> );
}

export default Hero;