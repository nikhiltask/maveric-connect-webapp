
import React from "react";

const PostDetails = () => {
  return (
    <div class="container" >
    <br></br>
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
        
      </div>
    </div>
    <br></br>
    <div class="row"style={{border:"2px solid blue"}}>
      <div class="col" style={{border:"1px solid secondary"}}>
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
          <h5 class="mt-0 mb-1">Comment Name</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
      <div class="col">
        <div class="col-8 col-sm-6"> 4 Like </div>
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
          <h5 class="mt-0 mb-1">Comment Name</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
      <div class="col">
        
          <div class="col-4 col-sm-6">5 Likes</div>
      </div>
      <div class="row">
      
      </div>
    </div>
    <br></br>
    <button type="button" class="btn btn-primary btn-lg btn-block">View More Comments</button>
    <br></br>
  </div>

  )
};

export default PostDetails;
