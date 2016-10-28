import React from "react";
import ReactDOM from "react-dom";

var app = document.querySelector("#app");

var Counter = React.createClass({
    render: function () {
        return ( < div > {
            this.props.display
        } < /div>);
    }
});

var CounterParent = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    increase: function (e) {
        var currentCount = this.state.count;
        this.setState({
            count: this.state.count + 1
        });
    },
    render: function () {
        return ( 
            <div>
                <Counter display={this.state.count}/>
                <PlusButton onClick={this.increase}/>
            </div>
        );
    }
});
ReactDOM.render(<CounterParent/>, app);