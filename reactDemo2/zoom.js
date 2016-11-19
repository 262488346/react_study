/**
 * Created by Administrator on 2016/11/18.
 */

var style1 = {
    "color":"#f00",
    "font-size":"40px",
    "font-weight":"bolder",
    "padding-top":"20px",
    "margin":"10px"
};
var style2 = {
    "color":"#ccc",
    "font-size":"40px",
    "font-weight":"bolder",
    "padding-top":"20px",
    "margin":"10px"
};
var ZoomInner = React.createClass({
    getInitialState: function(){
        return {
            value:this.props.val
        }
    },
    render: function(){
        var value = this.props.val;
        console.log("valule=", value);
        var style;
        if(value.length > 5){
            style = style1
        }else{
            style = style2
        }
        return (
            <div style={style}>{this.props.val}</div>
        )
    }
});
var ZoomInput = React.createClass({
    getInitialState: function () {
        return {
            val: "放大镜",
            zoom: 1
        }
    },
    changeText: function(e){
        this.setState({
            zoom:e.target.value,
            val: e.target.value
        });
    },
    render: function () {
        var zoomInner;

        return (
            <div>
                <input type="text" placeholder="请输入文字" onChange={this.changeText}/>
                 <ZoomInner val={this.state.val}/>
            </div>
        )
    }
});

ReactDOM.render(
    <ZoomInput/>,
    document.getElementById("example")
);