import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";

// 用于更新分类名称的form组件
class UpdateForm extends Component {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  };

  componentWillMount(){
    //将form交个父组件(category)保存
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator("categoryName", {
            initialvalue: this.props.categoryName,
            rules: [{ required: true, message: "分类名字必须指定" }]
          })(<Input placeholder="能输入名称？" />)}
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(UpdateForm);
