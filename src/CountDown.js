import React, { Component } from 'react';
export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: true
        }
    }

    render() {
        const { count } = this.state
        if (this.state.count <= 0) {
            setTimeout(() => window.location.reload(false), 500)
        }
        return (
            <div>
                <h1 className="time">
                    Time: {count}
                </h1>
            </div>
        )
    }

    componentDidMount() {
        const { startCount } = this.props
        this.setState({ count: startCount })
        this.doIntervalChange()
    }

    doIntervalChange = () => {
        this.myInteval = setInterval(() => {
            this.setState(prevState => ({ count: prevState.count - 1 }))
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.myInteval)
    }
}
