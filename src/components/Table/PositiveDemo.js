import React from "react";
import "antd/dist/antd.css";
import { Table, Popconfirm, Input, Button, Icon, Divider, Modal } from "antd";
import Highlighter from "react-highlight-words";

export default class PositiveDemo extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID",
        dataIndex: "key",
        width: 150,
        key: "key"
      },
      {
        title: "姓名",
        dataIndex: "name",
        width: 150,
        key: "name",
        ...this.getColumnSearchProps("name")
      },
      {
        title: "年龄",
        dataIndex: "age",
        width: 150,
        key: "age",
        ...this.getColumnSearchProps("age")
      },
      {
        title: "住址",
        dataIndex: "address",
        width: 200,
        key: "address",
        ...this.getColumnSearchProps("address")
      },
      {
        title: "提交申请时间",
        dataIndex: "day",
        width: 150,
        key: "day",
        ...this.getColumnSearchProps("day")
      },
      {
        title: "成为积极分子时间",
        dataIndex: "positiveday",
        width: 150,
        key: "positiveday",
        ...this.getColumnSearchProps("positiveday")
      },
      {
        title: "操作",
        key: "action",
        fixed: 'right',
        width: 200,
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={this.handlePopup.bind(this)}>
              编辑
            </Button>
            <Modal
              title="编辑"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>姓名：<input type="text" value={this.state.name} onChange={this.addName.bind(this)} /></p>
              <p>年龄：<input type="text" value={this.state.age} onChange={this.addAge.bind(this)} /></p>
            </Modal>
            <Divider type="vertical" />
            <Popconfirm
              title="你确定删除吗?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <Button type="danger">删除</Button>
            </Popconfirm>
          </span>
        )
      }
    ];
    this.state = {
      visible: false,
      name: '',
      age: '',
      selectedRowKeys: [], // Check here to configure the default column
      dataSource: [
        {
          "key": 1,
          "name": "胡彦斌",
          "age": 32,
          "address": "西湖区湖底公园1号",
          "day": "2016-9-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-11-10',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18"
        }, {
          "key": 2,
          "name": "胡彦斌",
          "age": 32,
          "positiveday": "2017-3-2",
          "address": "西湖区湖底公园2号",
          "day": "2016-12-9",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18"
        }, {
          "key": 3,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园3号"
        }, {
          "key": 4,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园4号"
        }, {
          "key": 5,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园5号"
        }, {
          "key": 6,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园6号"
        }, {
          "key": 7,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园7号"
        }, {
          "key": 8,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园8号"
        }, {
          "key": 9,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园9号"
        }, {
          "key": 10,
          "name": "胡彦斌",
          "age": 32,
          "day": "2016-12-9",
          "positiveday": "2017-3-2",
          "developmentday": "2018-10-21",
          "quasiday": '2018-12-11',
          "prepareday": "2018-12-18",
          "quasiformalday": "2019-12-1",
          "formalday": "2019-12-18",
          "address": "西湖区湖底公园10号",
          "action": "删除"
        }
      ]
    };
    window.localStorage.setItem("dataSource", JSON.stringify(this.state.dataSource));
    this.handlePopup = this.handlePopup.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }
  //修改名字
  addName() {
    this.setState({
      name: window.event.target.value
    })
  }
  //修改年龄
  addAge() {
    this.setState({
      age: window.event.target.value
    })
  }
  //编辑
  handlePopup(e) {
    var tds = e.target.parentNode.parentNode.parentNode.children
    // tds[0].
    this.setState({
      visible: true,
      name: tds[2].innerText,
      age: tds[3].innerText
    });
    this.getAll(tds)
  }
  getAll(tds) {
    this.addAge()
    this.addName()
    tds[2].innerText = this.state.name
    tds[3].innerText = this.state.age
  }
  handleOk(e) {
    var tds = e.target.parentNode.parentNode.parentNode.children
    console.log(tds)
    // tds[2].innerText = this.state.name
    this.setState({
      visible: false
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              this.handleSearch(selectedKeys, confirm, dataIndex)
            }
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
        </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
        </Button>
        </div>
      ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };
  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const pagination = {
      defaultPageSize: 5,
      pageSizeOptions: ["1", "4", "5", "6"],
      showSizeChanger: true,
      total: 0
    };

    const { selectedRowKeys } = this.state;
    // 全选框
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "选择全部",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(this.state.dataSource.length).keys()] // 0...45
            });
          }
        },
        // odd  选择奇数
        {
          key: "odd",
          text: "选择奇数项",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        },
        // even 选择奇数
        {
          key: "even",
          text: "选择偶数项",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        }
      ]
    };
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 5 }}
        >
          添加积极分子
        </Button>
        <Table
          rowSelection={rowSelection}
          dataSource={this.state.dataSource}
          columns={this.columns}
          pagination={pagination}
          scroll={{ x: 1280, y: 500 }}
        />
      </div>
    );
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
}
