/**
 * Created by Administrator on 2016/11/20.
 */
var style = {
    "font-size": "20px",
    "font-weight": "bolder",
    "color": "#f00",
    "outline": "none"
};

var InputForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState:function(){
        return {
            "value": ""
        }
    },
    render: function(){
        return(
            <div style={style}>
                <input className="input-style" type="text" valueLink={this.linkState('value')}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <InputForm/>,
    document.getElementById("example")
)