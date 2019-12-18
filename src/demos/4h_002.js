import React from 'react';

class Demo4h_002 extends React.Component{

    // test link
    // http://localhost:1404/4h_002#%22%3E%3Cscript%3Ealert(document.domain)%3C/script%3E      // -> <sript>alert(document.domain)</script>   
    
    componentDidMount() {
        var url = decodeURIComponent(location.href);
        //document.write(url);
        //document.write('<img src="http://pic.87g.com/upload/2019/1009/20191009105154891.jpg?' + url + '">')
        // 対策版
        document.write('<img src="http://pic.87g.com/upload/2019/1009/20191009105154891.jpg?' + this.escapeHtml(url) + '">')
    }

    escapeHtml(s) {
        return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&let;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    render() {
        return (
            <div>
                アクセス解析サンプル
                <div>
                </div>
            </div>
        );
    }
}
export default Demo4h_002