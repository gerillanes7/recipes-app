import React, {useGlobal} from 'reactn';
import { Layout, Empty } from 'antd';
import Searcher from './components/Searcher/Searcher';
import Recipes from './components/Recipes/Recipes';
import './App.css';

const { Header, Content} = Layout;

function App() {

  const [recipes] = useGlobal("recipes");

  return (
    <div>
      <Layout>
        <Header style={{ color: 'white' }}>
          RECIPES APP
    </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 3 }}>
          <div style={{ margin: '16px 0', textAlign: 'center' }}>
            <Searcher />
          </div>
          <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
            {recipes.length !== 0 ? <Recipes /> : <Empty/>}
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
