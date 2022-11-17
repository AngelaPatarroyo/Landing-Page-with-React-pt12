import React from "react";

const Card = () => {
  return (
    <div className="col-12 col-sm-6 col-md-3 my-auto my-md-0">
			<div className="card p-0 m-0 my-auto">
				<img
					src="https://source.unsplash.com/random/500x400"
					className="card-img-top w-1000 "
					alt="..."
				/>
				<div className="card-body-fluid">
					<h5 className="card-title text-center">
						Card Title
					</h5>
					<p className="card-text text-center">
						Hello, can you hear me? I'm in California dreaming about
						who we used to be When we were younger and free I've
						forgotten how it felt before the world fell at our feet
					</p>
				</div>
				<div className="card-footer d-flex justify-content-center mb-5">
					<a href="adas" className="btn btn-primary">
						Call to Action
					</a>
				</div>
			</div>
		</div>
  );
};

export default Card;