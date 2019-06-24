import React, { Component } from "react";
import { Card, Select, Input, Button, Icon, Table } from "antd";

const { Option } = Select;
//商品的首页路由组件
export default class ProductHome extends Component {
  render() {
    const title = (
      <span>
        <Select>
          <Option value="1">按名称搜索</Option>
          <Option value="2">按描述搜索</Option>
        </Select>
        <Input placeholder="关键字" />
        <Button type="primary">搜索</Button>
      </span>
    );
    return <Card title={title} /* extra={extra} */ />;
  }
}
