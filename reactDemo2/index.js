/**
 * Created by liugang on 16/11/10.
 */




var WosName = React.createClass({

    getDefaultProps: function () {
        console.log("1:getDefaultProps");
    },

    getInitialState: function () {
        console.log("2:getInitialState");
        return {
            orClick: true,
            value:""
        };
    },

    handleClick : function () {
        console.log("handleClick");
        if(this.state.orClick){
            this.setState({orClick: false})
        }else{
            this.setState({ orClick: true})
        }
    },
    changeInner: function (event) {
        this.setState({
            value:event.target.value
        })
    },
    componentWillMount: function () {
        console.log("3:componentWillMount");
    },

    render: function () {

        console.log("4:render");
        var ss;
        if(this.state.orClick){
            ss = "true";
        }else {
            ss = "false";
        }
        var value = this.state.value;
        var val = this.state.value;

        console.log("value==", value)
        //return <h1 id="title" onClick={this.handleClick}>hello {ss}</h1>
        return (
            <div>
                <div id="title">title</div>
                <input type="text" placeholder="请输入手机号码" value={val} onChange={this.changeInner}/>
                <p>{value}</p>
            </div>
        )

    },

    componentDidMount: function () {

        console.log("5:componentDidMount");

        $("#title").unbind().bind("click", function () {
            alert(111);
        });
        $(ReactDOM.findDOMNode(this)).append('<div>哈哈哈。。。。</div>')
    },


});


ReactDOM.render(
    <div>
        <WosName/>
    </div>
    ,
    document.getElementById("content")
);