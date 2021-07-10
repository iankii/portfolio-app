import React from 'react';

import TutorialsTicket from './templates/TutorialsTicket';

import classes from './index.css';

var data = [{
  title: 'Intro to HTML',
  image: '',
  goto: 'frontend/html/intro',
  content: 'Start exploring the world of Frontend with learning HTML.\n Hyper Text Markup Language. Huh, i think you already knew. So what?😏 So, lets first let\'s see some basics. Basically, it\'s used to define the strictures of the website with the help of CSS which we are going to learn after this. '
},
{
  title: 'This is Dummy Placeholder for now',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is Dummy Placeholder for now',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is Dummy Placeholder for now',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
},
{
  title: 'This is Dummy Placeholder for now',
  image: '',
  content: 'This is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorialThis is JavaScript tutorial.'
}];

const TutorialsTickets = () => {
  var tickets = data.map((blog, i) => {
    return <TutorialsTicket  {...blog} key={i} title={blog.title} content={blog.content.substring(0, 200) + '...'}/>
  });
  return (<div className={classes.TutorialsTickets}>{ tickets }</div>);
}

export default TutorialsTickets;