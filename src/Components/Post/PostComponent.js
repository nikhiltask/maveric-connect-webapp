import React from "react";
import LikeService from "../../Service/LikeService";
class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    LikeService.getLike().then((response) => {
      this.setState({ user: response.data });
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center"> Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>userID</td>
              <td>firstName</td>
              <td>middleName</td>
              <td>lastName</td>
              <td>phoneNumber</td>
              <td>dateOfBirth</td>
              <td>gender</td>
              <td>address</td>
              <td>employeeNumber</td>
              <td>bloodGroup</td>
              <td>email</td>

            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td> {user.id}</td>
                <td> {user.firstName}</td>
                <td> {user.middleName}</td>
                <td> {user.lastName}</td>
                <td> {user.phoneNumber}</td>
                <td> {user.dateOfBirth}</td>
                <td> {user.gender}</td>
                <td> {user.address}</td>
                <td> {user.employeeNumber}</td>
                <td> {user.bloodGroup}</td>
                <td> {user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PostComponent;
