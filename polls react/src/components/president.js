import React from "react";
import "../styles/president.css"; // Import the president.css file with the correct path
import "./script/script.js";

function President() {
  const goToClubsPage = () => {
    // JavaScript function
    // Perform the desired action
    console.log("Navigating to clubs page...");
  };

  const Vote = (candidate) => {
    // JavaScript function
    // Perform the desired action
    console.log(`Voting for ${candidate}...`);
  };

  return (
    <div>
      <div className="navigation">
        <div className="button1" id="polls-clubs" onClick={goToClubsPage}>
          Polls (Clubs)
        </div>
        <div className="button2" id="polls-president">
          Polls (President)
        </div>
      </div>

      <div className="leaderboard">
        <div className="box1" id="leader-boards">
          <span className="lb">Leader Boards</span>
        </div>
        <div className="box2">
          <img src="1st.png" alt="badge" className="badge" />
          <div className="club-name-container">
            <span className="club-name">Bill Dorji</span>
          </div>
        </div>
        <div className="box3">
          <img src="2nd.png" alt="badge" className="badge" />
          <div className="club-name-container">
            <span className="club-name">Kinchap Raiden</span>
          </div>
        </div>
        <div className="box4">
          <img src="3rd.png" alt="badge" className="badge" />
          <div className="club-name-container">
            <span className="club-name">Kali Wangdi</span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="title-box">
          <div className="President-Candidacy">President Candidacy</div>
          <div className="duration">5 Hrs</div>
        </div>

        <div className="candidates">
          <div className="card">
            <img src="billDorji.png" alt="Image 1" className="card-image" />
            <p className="card-text">bill Dorji</p>
            <div
              className="vote"
              onClick={() => Vote("candidate1")}
              id="candidate1"
            >
              <img src="vote.png" alt="Vote 1" className="vote-image" />
            </div>
          </div>
          <div className="card">
            <img src="chimiDorji.png" alt="Image 2" className="card-image" />
            <p className="card-text">chimi Dorji</p>
            <div
              className="vote"
              onClick={() => Vote("candidate2")}
              id="candidate2"
            >
              <img src="vote.png" alt="Vote 2" className="vote-image" />
            </div>
          </div>
          <div className="card">
            <img src="kaliDorji.png" alt="Image 3" className="card-image" />
            <p className="card-text">kali Dorji</p>
            <div
              className="vote"
              onClick={() => Vote("candidate3")}
              id="candidate3"
            >
              <img src="vote.png" alt="Vote 3" className="vote-image" />
            </div>
          </div>
          <div className="card">
            <img src="kinchapDorji.png" alt="Image 4" className="card-image" />
            <p className="card-text">kinchap Dorji</p>
            <div
              className="vote"
              onClick={() => Vote("candidate4")}
              id="candidate4"
            >
              <img src="vote.png" alt="Vote 4" className="vote-image" />
            </div>
          </div>
        </div>

        <div className="voting">
          <div className="percentage-bar-container">
            <div className="percentage-bar"></div>
            <div className="percentage-label">Not Voted</div>
          </div>
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
        <div className="presidency" id="presidency">
          <span className="presidency-text">Try out for Presidency?</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            id="input-text"
            required
            placeholder="First Name"
          />
          <label htmlFor="input-text"></label>
        </div>
        <div className="input-container">
          <input type="text" id="input-text" required placeholder="Last Name" />
          <label htmlFor="input-text"></label>
        </div>
        <div className="drop-box" id="dropBox">
          <div className="textbox">
            <span>Drop your image or click here to select files</span>
          </div>
        </div>
        {/* <div className="post" style="top: 871px;"></div> */}
        <input type="submit" value="Submit" className="submit-button" />
      </div>
    </div>
  );
}

export default President;
