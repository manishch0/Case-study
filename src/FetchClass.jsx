import React, { Component } from "react";
import Accordion from "./Components/Accordion";
import { fetchUsers } from "../src/redux/action/user";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map((user) => {
          console.log(user);
          return (
            <div key={user.id}>
              <Accordion user={user} />
            </div>
          );
        })}{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.user.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
