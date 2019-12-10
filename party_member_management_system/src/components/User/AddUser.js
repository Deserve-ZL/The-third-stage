import React from 'react'
import 'antd/dist/antd.css';
import { Modal, Table, Button } from 'antd'

export default class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    key: '1',
                    id: 1,
                    username: 'admin',
                    password: '123456',
                }
            ],
            visible: false,
            username: '',
            password: '',
            id: 10,
            count: 2,
            selectedRowKeys:[]
        }
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
            }
        ];
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
              {
                key: 'all-data',
                text: '选择全部',
                onSelect: () => {
                  this.setState({
                    selectedRowKeys: [...Array(this.state.dataSource.length).keys()], // 0...45
                  });
                },
              },
              // odd  选择奇数
              {
                key: 'odd',
                text: '选择奇数项',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                      return false;
                    }
                    return true;
                  });
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
              },
              // even 选择奇数
              {
                key: 'even',
                text: '选择偶数项',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                    if (index % 2 !== 0) {
                      return true;
                    }
                    return false;
                  });
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
              },
            ],
          };
        return (
            <div className='AddUser'>
                <Button className="addBtn" type="primary" onClick={this.adduser.bind(this)}>添加用户</Button>
                <Modal
                    title="添加用户信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    用户名：<input type="text" value={this.state.username} onChange={this.addUserName.bind(this)} />
                    密&emsp;码：<input type="text" value={this.state.password} onChange={this.addPassWord.bind(this)} />
                </Modal>
                <Table rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} />
            </div>
        )
    }
    adduser() {
        this.setState({
            visible: true,
        });
    }
    addUserName() {
        this.setState({
            username: window.event.target.value
        })
    }
    addPassWord() {
        this.setState({
            password: window.event.target.value
        })
    }
    handleOk = e => {
        console.log(e);
        let dataSource = this.state.dataSource
        dataSource.push({
            key: this.state.username,
            username: this.state.username,
            password: this.state.password,
            id: this.state.count
        })
        let count = this.state.count
        count++
        this.setState({
            visible: false,
            dataSource: dataSource,
            count:count
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
}