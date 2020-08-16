import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import logoImgae from "./images/logo.png";
import "./login.css";
// 登录的路由组件
// 前台的表单设置
// 获取表单的内容
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("验证通过");
      }
    });
  };
  validatorPwd = (rule, value, callback) => {
    const reg = /^\w+$/;
    if (!value) {
      callback("请输入密码");
    } else if (value.length < 4) {
      callback("密码不能少于4位");
    } else if (value.length > 12) {
      callback("密码不能大于12位");
    } else if (reg.test(value) ===false) {
      callback("密码必须由字母、数字或下划线组成");
    }
    callback()
  };
  render() {
    const form = this.props.form;
    const { getFieldDecorator } = form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logoImgae} alt="logo" />
          <h1>React项目:后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "请输入用户名!" },
                  { min: 4, message: "用户名必须大于4位" },
                  { max: 12, message: "用户名不得超过12位" },
                  {
                    pattern: /^\w+$/,
                    message: "用户名只能由英文、数字或下划线组成",
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    validator: this.validatorPwd,
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
export default Form.create()(Login);
