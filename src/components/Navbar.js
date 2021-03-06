import React , {Component} from 'react';

import { Link} from "react-router-dom";


export default class Navbar extends Component{

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Sport Tracker</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home-List</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/create">Create Exercise </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/user">Create User </Link>
                </li>
              </ul>
            </div>
          </nav>
          
        )
    }
}