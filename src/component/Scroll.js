import React from "react";

class Scroll extends React.Component {
    render() {

        return (

            <>
            <h2 style={{marginLeft:'40px'}}>Hobbies</h2>
                <ul class="list-group" style={{margin:'10px 100px 10px 100px'}}>
                    <li class="list-group-item" style={{backgroundColor:'#e6f2ff'}}>
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                       Reading Books
                    </li>
                    <li class="list-group-item" style={{backgroundColor:'#d9e6f2'}}>
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                       Watching TV
                    </li>
                    <li class="list-group-item" style={{backgroundColor:'#adc2eb'}}>
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                       Music
                    </li>
                    <li class="list-group-item" style={{backgroundColor:' #70dbdb'}}>
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Dancing
                    </li>
                   
                </ul>
            </>
        );

    }



}
export default Scroll;