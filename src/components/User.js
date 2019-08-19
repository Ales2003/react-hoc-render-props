import React, { Component} from 'react'

class User extends Component {

    render() {
        return (
            <div>
                {/* get variable/function */}
                {/* {this.props.name} */}

                {/* get function and call */}
                {/* pass params */}
                {this.props.name(true)}
            </div> 
        )
    }
}

export default User