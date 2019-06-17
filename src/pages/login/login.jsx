import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import logo from "./images/logo.png";
import './login.less'



class Login extends React.Component {
    handleSubmit = (event) => {
        //阻止默认性行为
        event.preventDefault()
        /* //收集输入的数据
        const Username = this.props.form.getFieldValue('Username')
        const password = this.props.form.getFieldValue('password')
        const values = this.props.form.getFieldsValue()
        console.log(Username, password, values); */

        //统一进行所有表单项的验证
        this.props.form.validateFields((err, value) => {
            if (!err) {
                console.log('发送登录Ajax请求：', value)
            }
        })
    }
    validator = (rule, value, callback) => {
        value = value.trim()
        if (!value) {
            callback('必须输入密码!')
        } else if (value.length < 4) {
            callback('密码长度不能小于4位!')
        } else if (value.length > 12) {
            callback('密码长度不能大于12位!')
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            callback('用户名必须是英文，数字或下划线组成!')
        } else {
            callback()
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('Username', {
                                initialValue: '',
                                rules: [
                                    { required: true, whitespace: true, message: '请输入用户名!' },
                                    { min: 4, message: '用户名不能小于4位!' },
                                    { max: 12, message: '用户名不能大于12位!' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或下划线组成!' }
                                ]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                initialValue: '',
                                rules: [
                                    { validator: this.validator }
                                ]
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
const WrapperLogin = Form.create()(Login);
export default WrapperLogin