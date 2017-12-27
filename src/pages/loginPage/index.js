import React from 'react';
import { observer, inject } from 'mobx-react'

import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

import './index.less'

const FormItem = Form.Item;

@inject((stores) => ({
  authStore: stores.authStore
}))
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.password && values.userName) {
          this.props.authStore.login()
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="login-form-remember">Remember me</Checkbox>
            )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const loginPage = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
      <Col span={18} style={{ 'textAlign': 'center', margin: '0 auto' }}>
        <WrappedNormalLoginForm />
      </Col>
    </Row>
  )
}



export default loginPage


// export default WrappedNormalLoginForm