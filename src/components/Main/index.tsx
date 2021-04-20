import React, { ReactElement } from "react";
import { Tabs } from "antd";
import { Saved } from "../Saved";
import { OnOff } from "../OnOff";
import { Login } from "../Login";
import "./styles.scss";

export enum MainTabs {
  saved = "saved",
  onOff = "onOff",
  login = "login",
}

const { TabPane } = Tabs;

const Main = (): ReactElement => {
  return (
    <div className="main">
      <Tabs defaultActiveKey={MainTabs.saved}>
        <TabPane tab="Saved" key={MainTabs.saved}>
          <Saved />
        </TabPane>
        <TabPane tab="On/Off" key={MainTabs.onOff}>
          <OnOff />
        </TabPane>
        <TabPane tab="Login" key={MainTabs.login}>
          <Login />
        </TabPane>
      </Tabs>
    </div>
  );
};

export { Main };
