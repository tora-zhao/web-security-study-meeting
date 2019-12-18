import React from 'react';

class Demo4h_006 extends React.Component{
    
    // test link
    // http://localhost:1404/4h_006#javascript:alert(document.domain)
    // http://localhost:1404/4h_006#http://localhost:5001/login_trap

    go() {
        var url = location.hash.slice(1);
        //location.href = url;
        // 対策版
        var url = location.hash.slice(1);
        if(url.match(/^https?:\/\//)) {
            location.href = url;
        } else {
            alert('遷移先URLが不適切');
        }
    }

    render() {
        return (
            <div>
                処理を行います。
                <input type="button" value="実行" onClick={this.go} />
            </div>
        );
    }
}
export default Demo4h_006