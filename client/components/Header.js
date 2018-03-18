import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div id='Header'>
                <h1 className="header-title">Plans Tonight?</h1>
                <div>
                    <i className="fas fa-map-marker-alt icon"></i>
                    <i className="fas fa-car icon"></i>
                    <i className="fas fa-glass-martini icon"></i>
                </div>
                <p>See which bars are hoppin' tonight and RSVP ahead of time!</p>
            </div>
        )
    }
}

export default Header