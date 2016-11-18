/*
class Count extends React.Component{

    constructor(){
        this.state = { count: 1};

    }

    update(){
        this.setState({
            count: ++ this.state.count
        });
    };

    render(){
        return (
            <div>
                <h1> Hello World! </h1>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

count = React.render(
    <Count/>,
    document.getElementById("content")
);
*/


class Comment extends React.Component{
    render(){
        return(
            <div>
                <div className="comment-body">
                    {this.props.children}
                </div>
                <div className="commnet-author">
                    ---{this.props.author}
                </div>
                <br/>
            </div>
        )
    }
};

class CommentForm extends React.Component{
    render(){
        return(
            <div className="comment-form">
                Comment-Form
            </div>
        )
    };
};



class CommentList extends React.Component{
    render(){
        console.log(this.props.comments);
        var commentsNode = this.props.comments.map(function (comment, index) {
            console.log("63===========", comment);
            return <Comment key={'comment - ' + index} author={comment.author}>{comment.body}</Comment>
        });
        return(
            <div className="comment-list">
                {commentsNode}
            </div>
        );
    };
};

class Student extends React.Component{
    render(){
        return(
            <div>
                <div className="student-name">
                    {this.props.name}
                </div>
                <div className="student-number">
                    {this.props.number}
                </div>
            </div>
        );
    }
};

var comments = [
    {author: "Leon Li", body:"this is my comment111"},
    {author: "Leon Li2", body:"this is my comment222"}
];

class CommentBox extends React.Component{
    constructor(){
        this.state = {
            comments:comments,
            names:[{
                author:"haha",
                body:"hahbody"
            }]
        }
    };
    loadDateFromServer(){
        $.ajax({
            url: this.props.url,
            dataType: "json",
            success: function (comments) {
                console.log(comments);
                this.state.comments = comments;
                this.setState({comments: comments});
            }.bind(this),

        });
    };

    componentDidMount(){
        this.loadDateFromServer();
    };

    render(){
        return(
            <div className="comment-box">
                <h1>Comment Box!</h1>
                <CommentList comments={this.state.comments}/>
                <br/>
                <CommentForm/>
                <br/>
                <Comment author="test comment author">test Commet</Comment>
                <br/>
                <Student name="zhangsan" number="110"/>
            </div>
        )
    };
}

count = React.render(
    <CommentBox url="comments.json"/>,
    document.getElementById("content")
);111

