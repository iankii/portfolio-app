import React from 'react';

const expDetails = (props) => {
  return (
    <div className={props.className}>
      <div className={props.contentClass}>
        <h2>{props.year}</h2>
        <h3>{props.company}</h3>
        <div className="work-details">
          <em className="work-designation">{props.designation}</em>
          <p className="work-details">{props.description}</p>
        </div>
        <div className="technologies">
          <span className="technologies-details"><b>Tools/Technologies Used:</b> {props.technologies}</span>
        </div>
      </div>
    </div>
  )
}

export default expDetails;