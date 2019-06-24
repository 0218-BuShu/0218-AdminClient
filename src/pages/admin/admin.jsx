import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import AdminHeader from "../../components/header";
import LeftNav from "../../components/left-nav";
import memoryUtils from "../../utils/memoryUtils";


import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
// import { white } from "ansi-colors";

const { Footer, Sider, Content } = Layout;

export default class Admin extends React.Component {
  render() {
    //如果当前没有登录(内存的user中没有_id)
    const user = memoryUtils.user;
    if (!user._id) {
      //this.props.history.replace('/login')
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <AdminHeader />
          <Content style={{ backgroundColor: "white", margin: "30px" }}>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/category' component={Category} />
              <Route path='/product' component={Product} />
              <Route path='/role' component={Role} />
              <Route path='/user' component={User} />
              <Route path='/charts/bar' component={Bar} />
              <Route path='/charts/line' component={Line} />
              <Route path='/charts/pie' component={Pie} />
              <Redirect to='/home' />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#ccc" }}>
            推荐使用谷歌浏览器，可以获得更加页面操作经验！
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
