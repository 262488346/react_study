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

var styleHide = {
    "width": "50px",
    "height":"30px;",
    "background":"#f00",
    "text-align":"center",
    "line-height":"30px",
    "color":"#fff"
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
            <div>
                <div style={style}>{this.props.val}</div>
                <div style={styleHide} onClick={this.props.zoomHide}>隐藏</div>
            </div>
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
            val: e.target.value
        });
    },
    zoomHide: function(){
        this.setState({
            zoom:2
        })
    },

    render: function () {
        var zoomInner;
        if(this.state.zoom == 1){
            zoomInner = <ZoomInner val={this.state.val}  zoomHide={this.zoomHide}/>;
        }
        return (
            <div>
                <input type="text" placeholder="请输入文字" onChange={this.changeText}/>
                {zoomInner}
            </div>
        )
    }
});

ReactDOM.render(
    <ZoomInput/>,
    document.getElementById("example")
);