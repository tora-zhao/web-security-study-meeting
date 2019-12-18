import React from 'react';

class Demo4h_010 extends React.Component{

    // test link
    // http://localhost:1404/4h_008#2
    // http://localhost:1404/4h_008#2');alert(document.domain);alert('

    constructor(props) {
        super(props)
        this.onReceiveMessage = this.onReceiveMessage.bind(this);
    }

    componentDidMount() {
        window.addEventListener("message", this.onReceiveMessage, false);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.onReceiveMessage)
    }

    onReceiveMessage(event) {
        if(event!==undefined &&event.data){
        var d1 = document.getElementById("d1");
        d1.innerHTML = "メッセージを受け取りました： " + event.data;
        event.source.postMessage("メッセージを受け取りました", "http://localhost:1404/4h_011");
        }
    }

    render() {
        return (
            <div>
                親フレーム<br/>
                <iframe src="http://localhost:1404/4h_011" width="200" height="100"></iframe><br/>
                <div id="d1"></div>
            </div>
        );
    }
}
export default Demo4h_010