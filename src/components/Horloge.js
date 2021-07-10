import React, { Component } from 'react';

class Horloge extends Component {
    state = {
        date: new Date(),
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.setState({date: new Date}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return <h2>Heure: {this.state.date.toLocaleTimeString()} </h2>
    }
}

export default Horloge;