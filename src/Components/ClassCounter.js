import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }  
    render() {
        handleIncrease=()=>{
            this.setState(this.state.count +1)
        };
       handleDecrease=() => {
          this.setState(this.state.count - 1)};

        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Decrease</button>
                    <br />
                    <button onClick={handleIncrease}>Increase</button>
                    <button onClick={handleDecrease}>Decrease</button>

                </div>

            </div>
        );
    }
}

export default ClassCounter;
