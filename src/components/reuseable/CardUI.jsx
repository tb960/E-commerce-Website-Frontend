import React from 'react';
import img1 from '../../assets/cenotaph.jpg';

const Card=props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    Card Title
                </h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maiores cumque. Rerum animi ea facere laboriosam illo neque, omnis nesciunt ut veritatis nihil. Aperiam earum doloremque ipsam quis illum dolorem.
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );
}

export default Card;