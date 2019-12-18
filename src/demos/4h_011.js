import React from 'react';

class Demo4h_011 extends React.Component{

    // test link
    // http://localhost:1404/4h_008#2
    // http://localhost:1404/4h_008#2');alert(document.domain);alert('

    componentDidMount() {
        window.addEventListener("message", this.receiveMessage, false);
        window.parent.postMessage("secret data", "http://localhost:1404/4h_010");
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.receiveMessage)
    }

    receiveMessage(event) {
        var d2 = document.getElementById("d2");
        d2.innerHTML = "受信確認： " + event.data;
    }

    render() {
        return (
            <div>
                子フレーム<br/>
                <div id="d2"></div>
            </div>
        );
    }
}
export default Demo4h_011