var React = require('react');
var ReactDOM = require('react-dom');

var state = {
    name: 'hello'
};

var App = React.createClass({
    onClick() {
        state.name = "hello2";
        render();
    },
    render() {
        return (
            <div className="app">
                <div>
                    My name is {this.props.name}
                </div>
                <button onClick={this.onClick}>
                    change name
                </button>
                <input ref="myInput" placeholder="enter your name" />
            </div>
        );
    }
});

function render() {
    ReactDOM.render(<App name={state.name} />, document.getElementById('app'));
}

render();
