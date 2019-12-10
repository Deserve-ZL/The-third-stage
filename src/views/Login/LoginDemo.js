import React from 'react'
import "antd/dist/antd.css"
import './LoginDemo.css'
import { Modal, Button } from 'antd'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ModalText: '密码输入有误，请重新输入',
            visible: false,
            confirmLoading: false,
            username: '',
            password: ''
        }
    }
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 1000);
    };
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        console.log(ModalText)
        return (
            <div>
                <div className="logo"></div>
                <div className="loginBox">
                    <span>用户名：</span><input type='text' placeholder='请输入用户名' value={this.state.username} onChange={this.getUserName.bind(this)} /><br /><br />
                    <span>密&emsp;码：</span><input type='password' placeholder='请输入密码' value={this.state.password} onChange={this.getPassWord.bind(this)} /><br />
                    <Button type="primary" className="loginBtn" onClick={this.loginBtn.bind(this)}>登录</Button>
                    <Modal
                        title="提示框"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <p>{ModalText}</p>
                    </Modal>
                </div>
            </div>
        )
    }
    getUserName() {
        console.log(this.state.username)
        this.setState({
            username: window.event.target.value
        })
    }
    getPassWord() {
        console.log(this.state.password)
        this.setState({
            password: window.event.target.value
        })
    }
    loginBtn() {
        var username = this.state.username
        var password = this.state.password
        if (username === 'admin' && password === '123456') {
            setTimeout(() => {
            this.props.history.push('/home')
            },1000)
        }
        else if (username === 'admin' || password !== '123456') {
            this.setState({
                ModalText: '密码输入有误，请重新输入',
                visible: true,
            });
        }
        else if (username !== 'admin') {
            this.setState({
                ModalText: '用户名输入有误，请重新输入',
                visible: true,
            });
        }
    }
}
