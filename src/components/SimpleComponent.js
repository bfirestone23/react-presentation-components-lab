import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick = (e) => {
        const newState = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: newState
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <span>{this.state.mood}</span>
            </div>
        )
    }
}
