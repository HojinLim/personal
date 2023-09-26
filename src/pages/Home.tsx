import React from "react";
// import MovieLists from "../MovieLists";
import { useAppSelector } from "../store/hooks";
import { Avatar, Layout, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Body from "./Body";
//hi
const Home = () => {
  const movies = useAppSelector((state) => state.movies);
  // console.log(movies)
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={80} theme="dark">
        <div className="logo" />
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DesktopOutlined />} />
          <Menu.Item key="2" icon={<PieChartOutlined />} />
          <Menu.Item key="3" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          Header
        </Header>
        <Content style={{ margin: "16px" }}>Content</Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
