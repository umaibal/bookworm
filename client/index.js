import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/App';

// https://reactjs.org/docs/state-and-lifecycle.html
// ^^ react documentation used as resource
// which renders the CurrentTime component

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Current time is: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// ReactDOM.render(<CurrentTime />);

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));
