import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }  

    handleIncrease=(e) =>{
       e.preventDefault();
      this.setState({count: this.state.count + 1})
   };
   handleDecrease= (e) => {
       e.preventDefault();
       this.setState({count: this.state.count - 1})
   }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={this.handleIncrease}>Increase</button>
                    <button onClick={this.handleDecrease}>Decrease</button>

                </div>

            </div>
        );
    }
}

export default ClassCounter;
