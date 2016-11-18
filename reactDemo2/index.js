/**
 * Created by liugang on 16/11/10.
 */


var ChrildWosName = React.createClass({
    componentWillReceiveProps:function(){
        console.log("1:componentWillReceiveProps");
    },
    shouldComponentUpdate:function(){
        console.log("2:shouldComponentUpdate");
        return true;
    },
    componentWillUpdate  :function(){
        console.log("3:componentWillUpdate");
    },
    render:function(){
        console.log("4:render");
        return (
            <div>
                <p id="p">测试玩的{this.props.value}</p>
            </div>
        )
    },
    componentDidUpdate :function(){
        console.log("5:componentDidUpdate");
    },
    componentWillUnmount: function(){
        console.log("i am died");
    }
});

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
        });
        if(event.target.value == "aaa"){
            ReactDOM.unmountComponentAtNode(document.getElementById("example"));
        }
    },
    componentWillMount: function () {
        console.log("3:componentWillMount");
    },

    render: function () {

        console.log("4:render");
        var ss= "";
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
                <ChrildWosName value={value}/>
            </div>

        )

    },

    componentDidMount: function () {

        console.log("5:componentDidMount");

        $("#title").unbind().bind("click", function () {
            alert(111);
        });
        console.log("id=",$(ReactDOM.findDOMNode(this)));
        $(ReactDOM.findDOMNode(this)).append('<div>哈哈哈。。。。</div>')
    },


});


ReactDOM.render(
    <div>
        <WosName/>
    </div>
    ,
    document.getElementById("example")
);