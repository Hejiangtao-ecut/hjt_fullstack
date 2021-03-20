import { BrowserRouter, } from 'react-router-dom';
// SPA  #/(兼容性更好)    /(后端路由)
// src/目录  架构意义
// /components  /pages  /api  /store   /layout(页面框架)版式
import { Switch, Route } from 'react-router-dom';
import Frame from './layout/Frame';
import HookMovie from './pages/HookMovie';
import HookInfos from './pages/HookInfos'
function App() {
  return (
    <BrowserRouter>
      <Frame>
          <Switch>
          <Route exact path="/" component={HookMovie} />
          <Route path="/infos" component={HookInfos} />
          </Switch>
      </Frame>
    </BrowserRouter>
  );
}
export default App;
