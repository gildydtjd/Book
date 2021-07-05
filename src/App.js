import './App.css';
import BookList from './components/book/BookList';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Forest from './components/page/Forest';
import Tree from './components/page/Tree';
import Sky from './components/page/Sky';
import Sea from './components/page/Sea';
import Reed from './components/page/Reed';
import Moon from './components/page/Moon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Route exact path="/" component={BookList}/>
                <Switch>
                <Route path="/BookList/Moon" component={Moon}/>
                <Route path="/BookList/Forest" component={Forest}/>
                <Route path="/BookList/Reed" component={Reed}/>
                <Route path="/BookList/Sea" component={Sea}/>
                <Route path="/BookList/Sky" component={Sky}/>
                <Route path="/BookList/Tree" component={Tree}/>
                </Switch>
                </BrowserRouter>
    </div>
  );
}

export default App;
