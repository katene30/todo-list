import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { showForm} from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            TODO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/completed">
                  Completed
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.props.uniqueCategories.map(category => {
                    return (
                      <Link
                        className="dropdown-item"
                        to={`/category/${category}`}
                      >
                        {category}
                      </Link>
                    );
                  })}
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <br />
        <div className="row justify-content-center">
          <button
            onClick={() => this.props.dispatch(showForm(!this.props.showTodo))}
            className="btn btn-primary"
          >
            {this.props.showTodo ? "Nevermind" : "+ Add a todo"}
          </button>
        </div>
        <br />
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state.todos,
    showTodo: state.showTodo,
    uniqueCategories: state.categories
  };
}

export default connect(mapStateToProps)(Header);
