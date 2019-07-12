import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Footer from "./components/common/footer";
import NotFound from './components/notFound';
import Home from './components/home';
import Admin from './components/admin';
import ReadBible from './components/readBible';
import ReadChapter from './components/readChapter'
import ReadChapterText from './components/getChapterText';
import PastVerses from './components/pastVerses';
import RenderPastVerse from "./components/renderPastVerses";
import Test from "./components/test";
import './App.css';



class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
      <div className="App">
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/past-verses" component={PastVerses}/>     
          <Route path="/home" component={Home}/>
          <Route path="/read-bible" exact component={ReadBible}/>
          <Route path="/read-bible/text/:id" exact to component={ReadChapterText}/>
          <Route path="/read-bible/:id" component={ReadChapter}/>
          <Route path="/daily-devotion" exact to component={RenderPastVerse}/>
          <Route path="/daily-devotion/:id" component={RenderPastVerse}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/test" component={Test} />
          <Redirect from='/' exact to='home' />
          <Redirect to='/not-found' />
        </Switch>
      </div>
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
