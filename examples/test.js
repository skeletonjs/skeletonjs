var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render() {
        return (
            <div className="app">
                {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(<div className="wrapper"><App name="hello" /></div>, document.getElementById('app'));
