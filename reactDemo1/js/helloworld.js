/**
 * Created by liugang on 16/11/9.
 */
var WosName = React.createClass({
    render: function () {
        return <h1>hello {this.props.name}</h1>
    }
});



ReactDOM.render(
    <WosName name="potato"/>
    ,
    document.getElementById("content")
);