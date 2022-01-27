import React from 'react';
import { Link } from 'react-router-dom';
import './_app.scss'
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_apprearance,
    characters
}) => {

    const imagepath = `/assets/${id}.jpg`

    console.log(first_apprearance, alter_ego, publisher,characters);
    return (
        // <div className="row-sass">
            <div className="example-2 card-sass">
                <div className="wrapper-sass">
                    <img src={imagepath} className="hero-card-img" alt={superhero}/>
                    <div className="data-sass">
                        <div className="content-sass">
                            <span className="publisher">{publisher}</span>
                            <h1 className="title"><a href="#">{superhero}</a></h1>
                            <p className="text">{alter_ego}</p>
                            {
                                ( alter_ego !== characters ) &&
                                <p className="text">{characters}</p>
                            }
                            <Link to={`/hero/${id}`} className="button">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};
