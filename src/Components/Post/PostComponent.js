import React from "react";
import LikeService from "../../Service/LikeService";
class PostComponent extends React.Component {
  constructor() {
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    LikeService.getLike().then((response) => {
      this.setState({ user: response.data });
    });
  }
  render() {
    return <div>
        <h1 className="text-center">Like List</h1>
    {this.state.users.map(
       
       
    )
  }
    </div>;
  }
}
export default PostComponent;
