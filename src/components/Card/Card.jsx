import React from "react";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="m-4 card" style={{ width: "18rem"}} >
            <img
              src={props.myCardData[0].image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.myCardData[0].title}</h5>
              <h6 className="card-title">{props.myCardData[0].subtitle}</h6>
              <p className="card-text">{props.myCardData[0].description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="m-4 card" style={{ width: "18rem" }} >
            <img
              src={props.myCardData[1].image}
              className="card-img-top"
              alt="..."
              style={{height:"286px",width:"286px"}}
            />
            <div className="card-body">
              <h5 className="card-title">{props.myCardData[1].title}</h5>
              <h6 className="card-title">{props.myCardData[1].subtitle}</h6>
              <p className="card-text">{props.myCardData[1].description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="m-4 card" style={{ width: "18rem"}} >
            <img
              src={props.myCardData[2].image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.myCardData[2].title}</h5>
              <h6 className="card-title">{props.myCardData[2].subtitle}</h6>
              <p className="card-text">{props.myCardData[2].description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <div className="m-4 card" style={{ width: "18rem"}} >
            <img
              src={props.myCardData[3].image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.myCardData[3].title}</h5>
              <h6 className="card-title">{props.myCardData[3].subtitle}</h6>
              <p className="card-text">{props.myCardData[3].description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="m-4 card" style={{ width: "18rem"}} >
            <img
              src={props.myCardData[4].image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" >
              <h5 className="card-title">{props.myCardData[4].title}</h5>
              <h6 className="card-title">{props.myCardData[4].subtitle}</h6>
              <p className="card-text">{props.myCardData[4].description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Card;
