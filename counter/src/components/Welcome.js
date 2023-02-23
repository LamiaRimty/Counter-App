import React, { Component } from 'react';
class Welcome extends Component {

    state = {  } 
    render() { 
        return (
            <div>
            <h1>Welcome Visitor</h1>
            <button type="button" className="btn btn-info">Subscribe</button>
            </div>

        );
    }
}
 
export default Welcome;