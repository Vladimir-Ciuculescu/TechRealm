import React from 'react';
import './Rating.css';

const Rating = ({value,text}) => {

    return (
        <div>
            <span>
                <i className={ value >= 1 ? 'fas fa-star p-1': value >=0.5 ? "fas fa-star-half-alt p-1" : "far fa-star p-1"}></i>
            </span>
            <span>
                <i className={ value >= 2 ? 'fas fa-star p-1': value >=1.5 ? "fas fa-star-half-alt p-1" : "far fa-star p-1"}></i>
            </span>
            <span>
                <i className={ value >= 3 ? 'fas fa-star p-1': value >=2.5 ? "fas fa-star-half-alt p-1" : "far fa-star p-1"}></i>
            </span>
            <span>
                <i className={ value >= 4 ? 'fas fa-star p-1': value >=3.5 ? "fas fa-star-half-alt p-1" : "far fa-star p-1"}></i>
            </span>
            <span>
                <i className={ value >= 5 ? 'fas fa-star p-1': value >=4.5 ? "fas fa-star-half-alt p-1" : "far fa-star p-1"}></i>
            </span>

            <text className = "total-rating">{text}</text>
        </div>
    )
}

export default Rating;