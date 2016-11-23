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

ReactDOM.render((
    <div className="foo">
        <span>hello2</span>
        <span>
            <b>hello</b>
        </span>
    </div>
), document.getElementById('app'));
