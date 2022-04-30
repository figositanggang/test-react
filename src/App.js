import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    //
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios("https://api.randomuser.me/?nat=US&results=10").then((response) =>
    this.setState({users: response.data.results})
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => (
          <p>{user.email}</p>
        ))}
      </div>
    );
  }
}

export default App;
