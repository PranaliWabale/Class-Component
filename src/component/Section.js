import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <>   <h2>Card</h2>
                <div className="card" style={{margin:'20px 200px 50px 100px',backgroundColor:'  #f2d9e6'}}>
                    <div className="card-header">
                       Profile
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>

        );


    }
}

export default Section;