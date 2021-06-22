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
            <div style={{ textAlign: "center", marginTop: "90px", }}>
               <button>
               <div >
                    <h1>Count: {this.state.count}</h1>
                    <button className="go" onClick={this.handleIncrease}>Increase</button>
                    <button className="stop" onClick={this.handleDecrease}>Decrease</button>
                </div>
               </button>
<hr />
            </div>
        );
    }
}

export default ClassCounter;
