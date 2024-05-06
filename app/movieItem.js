import React from 'react';

const MovieItem = () => {
  return (
    <>
       <div className="row grid_row">
          <div className="col-12 col-lg-4 image_box"></div>
          <div className="col-12 col-lg-4 movie_details">
            <h3 className="white">Movie Name</h3>
            <p className="white">Year • Duration<span> | Genre One</span><span> Genre Two</span><span> Genre Three</span><span>  Genre Four</span></p>
            <p className="white">Description</p>
            <p className="white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet maximus dolor, at lobortis velit. Phasellus quis augue a diam tristique iaculis at sit amet turpis. Maecenas luctus convallis tempus. Integer rutrum tincidunt rutrum. Praesent sollicitudin faucibus elit sed interdum. Suspendisse et neque vitae ipsum mollis malesuada.</p>
            <img src="voteup.png" alt="Image1" className="vote"/>
            <img src="Icons.png" alt="Image2" className="down"/>            
            <img src="delete.png" alt="Image3" className="delete"/>
            </div>
        </div>
    </>
  );
}

export default MovieItem;