import React from "react";

const Card = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 my-auto my-md-0">
			<div className="card p-0 m-0 my-auto">
				<img
					src={props.img.src}
					className="card-img-top w-1000 "
					alt="..."
				/>
				<div className="card-body-fluid">
					<h4 className="card-title text-center mt-3">
						{props.title}
					</h4>
					<p className="card-text text-center p-2">
						{props.text}
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