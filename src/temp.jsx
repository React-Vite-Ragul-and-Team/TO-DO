import React, { Component } from 'react'

export class AboutClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            work: this.props.work,
            count: 0
        }
    }

    ClickEvent(){
        this.setState({
            name: "About Class Component",
            count: this.state.count + 1
        })
        console.log('click event in class works...')
    }

    MouseOverEvent(){
        console.log('mouse over event in class works...')
    }

    render() {
        return (
            <div>AboutClass
                <br></br>
                <b>Name : {this.state.name}</b> <br></br>
                <b>Work : {this.state.work}</b> <br></br>
                <b>Count :{this.state.count}</b>
                <button onClick={()=>this.ClickEvent()} onMouseOver={()=>this.MouseOverEvent()}>Click Me</button>
            </div>
        )
    }
}

export default AboutClass