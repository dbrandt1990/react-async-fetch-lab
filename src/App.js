// create your App component here
import React from 'react';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            res: ""
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json)
            .then(json => this.setState({ res: json }))
    }

    render() {
        <div>
            {this.state}
        </div>
    }
}

export default App