import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from "./components/header";
import AppBanner from "./components/banner";
import AppAbout from "./components/about";
import AppSponsors from "./components/sponsors";
import AppSpeakers from "./components/speakers";
import AppWorks from "./components/works";
import AppPricing from "./components/pricing";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";

import { Layout } from 'antd';
import {Content, Footer, Header} from "antd/es/layout/layout";

function App() {
  return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppBanner/>
          <AppSponsors/>
          <AppSpeakers/>
          <AppAbout/>
          <AppWorks/>
          <AppPricing/>
          <AppContact/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>
  );
}

export default App;
