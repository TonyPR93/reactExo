import React from "react";


class UserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      expandedUser: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, isLoading: false });
      });
  }

  handleClick(user){
    this.setState({ expandedUser: user });
  }

  handleRefresh() {
    this.setState({ isLoading: true, users: [] });
    setTimeout(() => {
      fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ users: data, isLoading: false });
        });
    }, 1000);
  }
  

  handleClose(){
    this.setState({ expandedUser: null });
  }

  render() {
    const { users, isLoading, expandedUser } = this.state;
    console.log(users);
    return (
      <div className="pres">
        <h1>Random Users</h1>
        {isLoading && <p>Loading...</p>}
        <button onClick={() => this.handleRefresh()}>Refresh</button>
        <div className="card-container">
          {users.map((user) => (
            <div key={user.id} className={`card ${expandedUser && expandedUser.id === user.id ? 'expanded' : ''}`}>
              <div className="card-front">
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>
                <button onClick={() => this.handleClick(user)}>More info</button>
              </div>
              {expandedUser && expandedUser.id === user.id && (
                <div className="card-back">
                  <p>Address: {user.address.street_address}, {user.address.city}, {user.address.state_abbr} {user.address.zip_code}</p>
                  <p>Date of Birth: {user.date_of_birth}</p>
                  <p>Phone Number: {user.phone_number}</p>
                  <button onClick={this.handleClose}>Close</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserCards;
