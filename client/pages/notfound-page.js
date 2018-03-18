import React from 'react'

import {Link} from 'react-router-dom'

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <Link to = '/'>Go to Home Page</Link>
            </div>
        )
    }
}

export default NotFoundPage