import { Layout, Menu } from 'antd';
import React from 'react'
import './HeaderDemo.css'
import "antd/dist/antd.css";


const { Header } = Layout;

export default class HeaderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                    </Menu>
                    <span>党员管理系统</span>
                </Header>
            </Layout>
        );
    }
}