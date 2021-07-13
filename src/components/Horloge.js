import React, { Component } from 'react';

class Horloge extends Component {
    state = {
        date: new Date(),
        compteur: 1
    }

    tick = () => {
        this.setState((oldState, props) => {
            return {
                date:new Date(),
                compteur: this.state.compteur + 1
            }
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <>
            <h2>Heure: {this.state.date.toLocaleTimeString()} </h2>
            <div>Compteur : {this.state.compteur} </div>
            </>
        )
    }
}

export default Horloge;