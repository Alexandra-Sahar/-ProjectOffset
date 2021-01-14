import React from 'react';
import dataAPI from './middleware/dataAPI';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import LatestPosts from './pages/LatestPosts';
import Post from './pages/Post';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import {
    Container,
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import styles from './Button.module.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
        }

        dataAPI.getAllPosts()
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
            .then(response => {
                this.setState({
                    posts: response,
                    isLoaded: true,
                })
            }) 
    }

    

    /*Маршрутизация react-router и ссылка*/
    render() {
        return (
            <Router>
                <Container>
                    <Header />
                   
                    <hr />
                    
                    <Route exact
                        path="/"
                        render={props => <Home {...props} posts={this.state.posts} />} 
                    />
                    <Link to="/about" > {About} </Link>
                    <Route path="/contacts" component={Contacts} />
                    <Route exact path="/posts" component={LatestPosts} />
                    <Route path="/posts/:postId" component={Post} />
                    <Route path="/user/:userId" component={User} />
                    <hr />

                    
  <div className={styles.text}>
    <p> Вавилина Александра 2020 год </p>
    <p> Тут вообще то должна демонстрироваться работа CSS Modules </p>
    <p> Но почему то тут беда </p>
   </div>                   
                </Container>
            </Router>

           
        ); 
       
    }
}

export default App;