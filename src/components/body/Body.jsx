import React from "react";
import "./body.css";
import {Link} from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Body = () => {
  return (
    <>
      <div className="bodyContainer">
        <div className="bodyMain">
          {/* Left */}
          <div className="leftBody">
            <div className="leftSidebar">
              <span className="home">🏠 home</span>
              <span className="list">🗳️ reading list</span>
              <span className="about">🟥 about</span>
            </div>
          </div>

          {/* Center */}
          <div className="centerBody">
            <Link to='/single'>
              <div className="body">
                <img
                    src="https://i.pinimg.com/564x/fc/e0/f6/fce0f6027d2fcbbd232fddcd71873f03.jpg"
                    alt=""
                    className="centerBodyImg"
                />
                <div className="bodyContent">
                  <div className="title">
                    <h1>
                      Show Off Your Comment Streak with Community Wellness Badges
                    </h1>
                  </div>
                  <div className="reactions">
                    <div className="reaction">
                      <i className="fa-solid fa-thumbs-up">115 reaction</i>
                      <i className="fa-solid fa-comment">41 comments</i>
                    </div>
                    <div className="readTime">
                      <p>1 min read</p>
                      <button className="reactionBtn">save</button>
                    </div>
                  </div>
                  <div className="titleDetail">
                    <p>
                      Hey DEV Community! I'm here to share an exciting announcement
                      with you 🗣️ Introducing...Community Wellness Badges! We're
                      excited to roll out a new badge for your DEV profile that we
                      grant in exchange for constructive feedback left for your
                      fellow community members in the comments of their posts. Cool!
                      How do I earn it? You can earn your first of six possible
                      Community Wellness badges by contributing two or more
                      constructive comments to posts on DEV in one week. We didn’t
                      want this to be a grind, and we deemed two constructive
                      comments per week to be a healthy number that didn’t ask too
                      much of folks in order to earn the prize.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/single'>
              <div className="body">
                <img
                    src="https://i.pinimg.com/736x/98/02/c0/9802c06bb315114f27fa8a4eb4ae1b87.jpg"
                    alt=""
                    className="centerBodyImg"
                />
                <div className="bodyContent">
                  <div className="title">
                    <h1>
                      How To Export Data To Excel From Api Using React (incl. Custom
                      Headers)
                    </h1>
                  </div>
                  <div className="reactions">
                    <div className="reaction">
                      <i className="fa-solid fa-thumbs-up">115 reaction</i>
                      <i className="fa-solid fa-comment">41 comments</i>
                    </div>
                    <div className="readTime">
                      <p>1 min read</p>
                      <button className="reactionBtn">save</button>
                    </div>
                  </div>
                  <div className="titleDetail">
                    <p>
                      In my previous post, about exporting data to Excel from api
                      using React, there were comments like how to add custom header
                      and style to the sheet!?. So considering these comments, in
                      this post I decided to show solution for first issue which is
                      adding custom headers to your Excel sheet. In this post two
                      ways of adding custom headers will be shown
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/single'>
              <div className="body">
                <img
                    src="https://i.pinimg.com/736x/f4/0d/d2/f40dd2f67cc910b6a627bb4eb85c4391.jpg"
                    alt=""
                    className="centerBodyImg"
                />
                <div className="bodyContent">
                  <div className="title">
                    <h1>
                      Does functional programming have any advantage in real
                      environments?
                    </h1>
                  </div>
                  <div className="reactions">
                    <div className="reaction">
                      <i className="fa-solid fa-thumbs-up">115 reaction</i>
                      <i className="fa-solid fa-comment">41 comments</i>
                    </div>
                    <div className="readTime">
                      <p>1 min read</p>
                      <button className="reactionBtn">save</button>
                    </div>
                  </div>
                  <div className="titleDetail">
                    <p>
                      The top paying programming language is Clojure? Followed by
                      F#, Elixir and Erlang, and a few positions below Scala and
                      LISP, I'm impressed. I don't have almost any knowledge in
                      functional programming, I've heard that has better performance
                      in certain situations (like managing big data), is more
                      predictable, and more readable, but I don't see real use cases
                      for functional programming instead of a traditional approach.
                      What are the advantages of the functional paradigm? In what
                      situations are this languages used? For someone that wants to
                      learn something new, what language do you recommend to learn
                      first? I thought about Haskell or Clojure. Thanks! 🙌
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right */}
          <div className="rightBody">
            <Link to='/single'>
              <div className="right">
                <img
                    src="https://i.pinimg.com/236x/12/7d/18/127d187b130c625e021c6364fa66e351.jpg"
                    alt=""
                    className="rightImg"
                />
                <div className="bodyContentContainer">
                  <div className="rightTitle">
                    <h1>
                      How To Export Data To Excel From Api Using React (incl. Custom
                      Headers)
                    </h1>
                  </div>
                  <div className="rightReactions">
                    <div className="reaction">
                      <i className="fa-solid fa-thumbs-up">115 reaction</i>
                      <i className="fa-solid fa-comment">41 comments</i>
                    </div>
                    <div className="readTime">
                      <p>1 min read</p>
                      <button className="reactionBtn">save</button>
                    </div>
                  </div>
                  <div className="rightTitleDetail">
                    <p>
                      In my previous post, about exporting data to Excel from api
                      using React, there were comments like how to add custom header
                      and style to the sheet!?. So considering these comments, in
                      this post I decided to show solution for first issue which is
                      adding custom headers to your Excel sheet. In this post two
                      ways of adding custom headers will be shown
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
