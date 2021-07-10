import React from 'react';
import Header from './../../DashboardHeader';
import Editor from './../../CodeEditor';
import Style from './../index.css';

const intro = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className={Style.heading}>What is HTML?</h2>
        <span><b>Hyper Text Markup Language</b>. Huh, i think you already knew. So what?😏 So, first lets' see some basics.</span>
        <span>Basically, it's used to define the structures of the website with the help of CSS which we are going to learn later. HTML was created by <b>Tim Berners-Lee</b> and <b>Robert Cailliau</b> with their friends in 1989.</span>
        <span>Latest versionis is <b>HTML5</b>. </span>
        <h2 className={Style.heading}>Some Basic keywords to know😉 => </h2>
        <span><b>Tags</b> are like building blocks for HTML. Eg. div, span, input. If you open any website/page in dev mode, you'll see lots of these tags in 'Elements" tab/</span>
        <span><b>Attributes</b> are like some additional data passed to any tag which can be retrievedand used to perform some functionality</span>
        <h2 className={Style.heading}>Prerequisites😯</h2>
        <span>Dont worry, you just install any <b>BROWSER</b> and an editor and stay with us. I personally use <b>VS Code</b> as editor but hey, If you dont have any editor then you can use Notepad as well for HTML.</span>
        <span>Dont have that also😑, we got your back, you can use following editor to play with HTML for sometime...😀</span>
        <Editor />
      </div>
    </>
  );
}

export default intro;