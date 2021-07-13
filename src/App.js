import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import About from './pages/About'
import Pokemon from './pages/Pokemon';
import Pays from './pages/Pays';
import Citations from './pages/Citations';
import Todo from './pages/Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/pays" exact component={Pays} />
        <Route path="/citations" exact component={Citations} />
        <Route path="/pokemon" exact component={Pokemon} />
        <Route path="/todo" exact component={Todo} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
