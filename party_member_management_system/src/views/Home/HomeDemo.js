import React from 'react'
import './HomeDemo.css'
import "antd/dist/antd.css"

import HeaderDemo from '../../components/Header/HeaderDemo'
import ApplyDemo from '../../components/Table/ApplyDemo'
import PositiveDemo from '../../components/Table/PositiveDemo'
import DevelopmentDemo from '../../components/Table/DevelopmentDemo'

import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import AddUser from '../../components/User/AddUser'
import QuasiDemo from '../../components/Table/QuasiDemo'
import PrepareDemo from '../../components/Table/PrepareDemo'
import QuasiformalDemo from '../../components/Table/QuasiformalDemo'
import FormalDemo from '../../components/Table/FormalDemo'
import WholeDemo from '../../components/information/WholeDemo'
import TurnDemo from '../../components/information/TurnDemo'

const { Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default class HomeDemo extends React.Component {
  state = {
    collapsed: false,
    table:<AddUser></AddUser>,
    title:"用户管理"
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <HeaderDemo></HeaderDemo>
        <Layout style={{ minHeight: '92vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="Sider">
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.administration.bind(this)}>
              <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    <span>党员发展流程管理</span>
              </span>
                }
              >
                <Menu.Item key="4" onClick={this.apply.bind(this)}>入党申请人</Menu.Item>
                <Menu.Item key="5" onClick={this.positive.bind(this)}>积极分子</Menu.Item>
                <Menu.Item key="6" onClick={this.development.bind(this)}>发展对象</Menu.Item>
                <Menu.Item key="7" onClick={this.quasi.bind(this)}>拟入党发展对象</Menu.Item>
                <Menu.Item key="8" onClick={this.prepare.bind(this)}>预备党员</Menu.Item>
                <Menu.Item key="9" onClick={this.quasiformal.bind(this)}>拟转正预备党员</Menu.Item>
                <Menu.Item key="10" onClick={this.formal.bind(this)}>正式党员</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    <span>党员信息管理</span>
              </span>
                }
              >
                <Menu.Item key="11" onClick={this.whole.bind(this)}>全部党员（预备党员+正式党员）</Menu.Item>
                <Menu.Item key="12" onClick={this.turn.bind(this)}>转入转出党员</Menu.Item>
                <Menu.Item key="13" onClick={this.difficulty.bind(this)}>困难人员</Menu.Item>
                <Menu.Item key="14" onClick={this.possess.bind(this)}>全部人员</Menu.Item>
                <Menu.Item key="15" onClick={this.party.bind(this)}>党务人员</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{this.state.title}</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', height: 550 }}>
                {this.state.table}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Lin Zhang</Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
  administration(){
    this.setState({
      table:<AddUser></AddUser>,
      title:"用户管理"
    })
  }
  apply(){
    this.setState({
      table:<ApplyDemo></ApplyDemo>,
      title:"党员发展流程管理/入党申请人"
    })
  }
  positive(){
    this.setState({
      table:<PositiveDemo></PositiveDemo>,
      title:"党员发展流程管理/积极分子"
    })
  }
  development(){
    this.setState({
      table:<DevelopmentDemo></DevelopmentDemo>,
      title:"党员发展流程管理/发展对象"
    })
  }
  quasi(){
    this.setState({
      table:<QuasiDemo></QuasiDemo>,
      title:"党员发展流程管理/拟入党发展对象"
    })
  }
  prepare(){
    this.setState({
      table:<PrepareDemo></PrepareDemo>,
      title:"党员发展流程管理/预备党员"
    })
  }
  quasiformal(){
    this.setState({
      table:<QuasiformalDemo></QuasiformalDemo>,
      title:"党员发展流程管理/拟转正预备党员"
    })
  }
  formal(){
    this.setState({
      table: <FormalDemo></FormalDemo>,
      title:"党员发展流程管理/正式党员"
    })
  }
  whole(){
    this.setState({
      table: <WholeDemo></WholeDemo>,
      title:"党员信息管理/全部党员（预备党员+正式党员）"
    })
  }
  turn(){
    this.setState({
      table: <TurnDemo></TurnDemo>,
      title:"党员信息管理/转入转出党员"
    })
  }
  difficulty(){

  }
  possess(){

  }
  party(){

  }
}

