var WosName = React.createClass({
    getInitialState: function(){
        return  {
            a: 1,
            b: 2
        }
    },
    handleClick: function(event){
        console.log("event=", event);
        this.setState({
            a:100
        });
    },
    clearContent: function(){
        this.replaceState({
            a:80
        });
    },
    reloadComponent: function(){
        this.forceUpdate();
    },
    render: function(){
        console.log("reload");
        return (
            <div>
                <h1 onClick={this.handleClick}>hello world {this.state.a}</h1>
                <h1>hello world {this.state.b}</h1>
                <h1>hello,{this.props.name}</h1>
                <h1 onClick={this.clearContent}>切换内容</h1>
                <h1 onClick={this.reloadComponent}>刷新组件</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <WosName name="张三"></WosName>,
    document.getElementById("example")
);