import React from 'react';

import TutorialsTicket from './TutorialsTicket/TutorialsTicket';

import classes from './TutorialsTickets.css';

var data = [{
  title: 'This is JavaScript tutorial',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is JavaScript tutorial',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is JavaScript tutorial',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is JavaScript tutorial',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is JavaScript tutorial',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
}];

const TutorialsTickets = () => {
  var tickets = data.map((blog, i) => {
    return <TutorialsTicket key={i} title={blog.title} content={blog.content.substring(0, 100) + '...'}/>
  });
  return (<div className={classes.TutorialsTickets}>{ tickets }</div>);
}

export default TutorialsTickets;