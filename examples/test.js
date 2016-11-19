var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render() {
        return (
            <div className="foo">
                {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
