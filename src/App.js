import React, { useState } from "react";
import "./styles.css";

const AnimeData = {
  Starters: [
    {
      name: "Cowboy Bebop"
    },
    {
      name: "Fullmetal Alchemist: Brotherhood"
    },
    {
      name: "Death Note"
    },
    {
      name: " Tengen Toppa Gurren Lagann"
    },
    {
      name: "Psycho-Pass"
    },
    {
      name: "Attack on Titan"
    },
    {
      name: "Darker than Black"
    },
    {
      name: "Angel Beats!"
    }
  ],

  Action: [
    {
      name: "Kill la Kill"
    },
    {
      name: "Sword Art Online"
    },
    {
      name: "Log Horizon"
    },
    {
      name: "Akame ga Kill"
    },
    {
      name: "One Piece"
    },
    {
      name: "Naruto"
    },
    {
      name: "Hunter x Hunter"
    },
    {
      name: "Fairy Tail"
    }
  ],
  Thriller: [
    {
      name: "Parasyte"
    },
    {
      name: "Monster"
    },
    {
      name: "Fate/Zero"
    },
    {
      name: "Berserk"
    },
    {
      name: "Elfen Lied"
    },
    {
      name: "Hellsing Ultimate"
    },
    {
      name: "Tokyo Ghoul"
    },
    {
      name: "Mirai Nikki"
    }
  ],
  Comedy: [
    {
      name: "Gintama"
    },
    {
      name: "Nichijou"
    },
    {
      name: "Shirobako"
    },
    {
      name: "The Devil is a Part-Timer"
    },
    {
      name: "Monthly Girls Nozaki Kun"
    },
    {
      name: "The Melancholy of Haruhi Suzumiya"
    },
    {
      name: "No Game No Life"
    }
  ]
};

export default function App() {
  const [selectedAnime, setAnime] = useState("Starters");
  function ClickHandler(anime) {
    setAnime(anime);
  }
  return (
    <div className="App">
      <span id="heading"> Anime Recommendations </span>
      <p style={{ fontSize: "1rem" }}>
        {" "}
        Here's a list of my favorite anime. Select a particular genre to get
        started{" "}
      </p>

      <div>
        {Object.keys(AnimeData).map((anime) => (
          <button
            onClick={() => ClickHandler(anime)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {anime}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {AnimeData[selectedAnime].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "1.2rem" }}> {anime.name} </div>
              <div style={{ fontSize: "0.8rem" }}> {anime.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          fontSize: "0.8rem",
          padding: "1rem"
        }}
      ></div>
    </div>
  );
}
