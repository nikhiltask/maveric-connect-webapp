import React from "react";

const PostPage = () => {
  return (
    <div class="container">
      <br></br>
      <br></br>
      <h3 class="mt-0 mb-1"  style={{ color: 'black' }}>Post Name</h3>
      <br></br>
      <div class="row" style={{border:"2px solid blue"}}>
        <div class="col"  >
          <img
            class="mr-3"
            src="user.png"
            alt="Generic placeholder image"
            width="64"
            height="64"
          />
        </div>
        <div class="col-6">
          <div class="media-body">
            <h5 class="mt-0 mb-1">Post Author Name</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
        <div class="col">
          <img class="mr-1" ssrc="Like.png" width="64" height="64" alt="" />
          Like
          <img class="mr-1" src="comment.png" width="64" height="64" alt="" />
          Comment
        </div>
      </div>
      <br></br>
      <div class="row" style={{border:"2px solid blue"}}>
        <div class="col" >
          <img
            class="mr-3"
            src="user.png"
            alt="Generic placeholder image"
            width="64"
            height="64"
          />
        </div>
        <div class="col-6">
          <div class="media-body" >
            <h5 class="mt-0 mb-1">Post Author Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div class="col">
          <img class="mr-1" ssrc="Like.png" width="64" height="64" alt="" />
          2 Like
          <img class="mr-1" src="comment.png" width="64" height="64" alt="" />
          Comment
        </div>
      </div>
      <br></br>
      <div class="row" style={{border:"2px solid blue"}}>
        <div class="col" >
          <img
            class="mr-3"
            src="user.png"
            alt="Generic placeholder image"
            width="64"
            height="64"
          />
        </div>
        <div class="col-6">
          <div class="media-body">
            <h5 class="mt-0 mb-1">Post Author Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div class="col">
          <img class="mr-1" ssrc="Like.png" width="64" height="64" alt="" />
          Like
          <img class="mr-1" src="comment.png" width="64" height="64" alt="" />
          Comment
        </div>
        {/* <div class="row">
          <div class="col-8 col-sm-6">Comment </div>
          <div class="col-4 col-sm-6">5 Likes</div>
        </div> */}
      </div>
      <br></br>
    </div>
  );
};

export default PostPage;
