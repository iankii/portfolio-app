import React from 'react';
import Header from './../../DashboardHeader';
import Editor from './../../CodeEditor';
import Style from './../index.css';

const Basics = () => {
  // eslint-disable-next-line no-multi-str
  const linkCode =  '<a href="https://anonymouscoder.in">This is a link</a>';
  const paraCode =  "<p>This is an paragraph example.</p>";
  const doctypeCode =  "<!DOCTYPE html>";
  const imagesCode =  `<img src="image URL/path" alt="Text to display if image not available" width="104" height="142">`;
  const headerCode =  "<h1>This is H 1</h1>\
                          <h2>This is H2</h2>";
  return (
    <>
      <Header />
      <div>
        <h2 className={Style.heading}>DOCTYPE</h2>
        <p>The &lt;!DOCTYPE&gt; declaration represents the document type, and helps browsers to understand and display web pages correctly.</p>
        <p>The  &lt;!DOCTYPE&gt; declaration for HTML5.</p>
        <code>{doctypeCode}</code>
        <h2 className={Style.heading}>HTML Headings</h2>
        <p>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags. &lt;h1&gt; defines the most important heading and &lt;h6&gt; defines the least important heading.</p>
        <code>{headerCode}</code>
        <h2 className={Style.heading}>HTML Paragraphs</h2>
        <code>{paraCode}</code>
        <h2 className={Style.heading}>HTML Links</h2>
        <code>{linkCode}</code>
        <h2 className={Style.heading}>HTML Images</h2>
        <code>{imagesCode}</code>
        <p>Note: You can try all these HTML code practice in our online HTML Editor <a href='editor'>HERE</a>.</p>
      </div>
    </>
  );
}

export default Basics;