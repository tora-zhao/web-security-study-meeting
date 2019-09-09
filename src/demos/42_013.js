import React from 'react';

class Demo42_013 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addr: null,
            input: null,
            display: false
        };
    }

    checkInt(addr) {
        var regex = new RegExp('^[^\c]{1,30}$');
        return regex.test(addr);
    }

    inputText(e) {
        this.setState({ input: e.target.value });
    }

    display() {
        this.setState({ 
            display: true, 
            addr: this.state.input
        });
    }

    render() {
        const { addr, display } = this.state;
        return (
            <div>
                <div>
                    <textarea onChange={this.inputText.bind(this)}/>
                    <button onClick={this.display.bind(this)} >Check</button>
                </div>
                {
                    !display || addr == null
                        ? <span></span>  
                        : this.checkInt(addr)
                            ? <div>アドレスは{addr}</div>
                            : <div>30文字以内で住所を入力してください(必須項目)。改行やタブなどの制御文字は使用できません。</div>
                }
            </div>
        );
    }
}
export default Demo42_013