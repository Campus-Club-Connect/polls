// src/components/polls.js
import React from "react";
import "../styles/polls.css"; // Import the CSS file with the correct path
import "./script/clubs.js";

function Polls() {
  return (
    <div>
      <div className="navigation">
        <div className="button1 navigationButton">Button 1</div>
        <div className="button2 navigationButton">Button 2</div>
      </div>

      <div className="leaderboard">
        <div className="box1 clubName">
          <span>Club Name</span>
        </div>
        <div className="box2">
          <img src="../images/1st.png" alt="badge" className="badge" />
          <div className="club-name-container">
            <span className="club-name">Space Club</span>
          </div>
        </div>
        <div className="box3">
          <img src="../images/2nd.png" alt="badge" className="badge" />
          <div className="club-name-container">
            <span className="club-name">VR Club</span>
          </div>
        </div>

        <div className="box4">
          <img src="../images/3rd.png" alt="badge" className="badge" />
          <div className="club-name-container">
            <span className="club-name">Game Club</span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="profile-box">
          <img
            src="../images/profile.png"
            alt="Profile Image"
            className="profile-image"
          />
          <div className="profile-info">
            <div className="username">Your Username</div>
            <div className="role">President</div>
            <div className="duration">5 Hrs</div>
          </div>
        </div>

        <div className="image-box">
          <img src="../images/spaceclub.png" alt="Image" className="image" />
        </div>

        <div className="voting">
          <div className="button-container">
            <div id="likeButton" className="button like-button"></div>
            <div className="percentage-bar-container">
              <div className="like-percentage" id="likePercentage"></div>
              <div id="percentageBar" className="percentage-bar"></div>
              <div className="dislike-percentage" id="dislikePercentage"></div>
            </div>
            <div id="dislikeButton" className="button dislike-button"></div>
          </div>
          <div id="voteCount" className="vote-count">
            Votes: 0
          </div>
        </div>
      </div>

      <div className="proposal">
        <form className="proposal-form" method="POST">
          <div className="ideas" id="ideas">
            <span className="lb">Propose your Ideas!</span>
          </div>
          <div className="userData">
            <div className="input-container">
              <input type="text" id="name" required placeholder="Name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-container">
              <input type="email" id="email" required placeholder="Email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container">
              <input
                type="text"
                id="club-name"
                required
                placeholder="Club name"
              />
              <label htmlFor="club-name">Club name</label>
            </div>
          </div>

          <div className="drop-box" id="dropBox">
            <div className="textbox">
              <span>Drop a file here or click here to select files</span>
            </div>
          </div>
          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </div>
    </div>
  );
}

export default Polls;
