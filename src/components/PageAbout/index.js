import React from 'react';
import './style.css';

function PageAbout() {
  return (
    <div className="PageAbout">
      <h1 className="title">Site Information</h1>
      <div className="contents">
        <div className="contact">
          <p className="titleOne">Contact Information</p>
          <ul className="content">
            <li>Email: Swedishguy997@gmail.com</li>
          </ul>
          <p className="title">Responsible people</p>
          <ul className="content">
            <li>Oskar</li>
          </ul>
          <p className="title">General Notes</p>
          <ul className="content">
            <li className="moreThanOneItem">
              All pictures on this website are taken from "My Anime List" please refer to them for the origins of the pictures as well
              as the originals.
            </li>
            <li>
              This website is created by a nerd with too much time on his hands and here i write my opinion of anime of seasons past as well as
              confirmed uppcoming animes that i have read either the manga, lightnovel or the webnovel of and say how good i think that they are going to be.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageAbout;
