import { useState } from "react";
import "./sass/App.scss";
import { happy, sad, angry, worry } from "./moods";

function App() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState("Select a mood");
  const moods = [
    {
      emoji: "😊",
      mood: "Happy",
    },
    {
      emoji: "😔",
      mood: "Sad",
    },
    {
      emoji: "😠",
      mood: "Angry",
    },
    {
      emoji: "😟",
      mood: "Worried",
    },
  ];
  const [emoji, setEmoji] = useState("");
  const [result, setResult] = useState([]);

  const generateQuote = () => {
    const random = Math.floor(Math.random() * 50);

    if (selectValue == "Happy") {
      setResult(happy[random]);
    } else if (selectValue == "Sad") {
      setResult(sad[random]);
    } else if (selectValue == "Angry") {
      setResult(angry[random]);
    } else if (selectValue == "Worried") {
      setResult(worry[random]);
    }
  };

  return (
    <main onClick={() => (openDropdown ? setOpenDropdown(false) : null)}>
      <div className="content-wrapper">
        <div className={result == false ? "content centered" : "content"}>
          <section className={result == false ? "section-centered" : null}>
            <div className="title-section">
              <h1>Emotiquotes</h1>
              <p>Your daily dose of quotes based on your mood</p>
            </div>
            <div className="input-section">
              <Dropdown
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                moods={moods}
                emoji={emoji}
                setEmoji={setEmoji}
              />
              <button
                onClick={() => generateQuote()}
                className={
                  selectValue == "Select a mood" ? "hidden" : "visible"
                }
              >
                Generate
              </button>
            </div>
          </section>
          <QouteSection result={result} />
        </div>
        <footer>
          <p>Designed & Built by Sherwin Romano</p>
        </footer>
      </div>
    </main>
  );
}

const Dropdown = ({
  selectValue,
  setSelectValue,
  openDropdown,
  setOpenDropdown,
  moods,
  emoji,
  setEmoji,
}) => {
  return (
    <>
      <div className="dropdown">
        <div
          className="dropdown-header"
          onClick={() => setOpenDropdown((current) => (current ? false : true))}
        >
          <div className="select-result">
            {selectValue == "Select a mood" ? (
              <p>{selectValue}</p>
            ) : (
              <>
                <span>{emoji}</span>
                <p>{selectValue}</p>
              </>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={openDropdown ? "chevron-up" : "chevron-down"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {openDropdown ? (
          <div className="dropdown-content">
            <ul>
              {moods.map((mood) => {
                return (
                  <li
                    key={mood.mood}
                    onClick={() => (
                      setSelectValue(mood.mood),
                      setEmoji(mood.emoji),
                      setOpenDropdown(false)
                    )}
                  >
                    <span>{mood.emoji}</span>
                    <p>{mood.mood}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

const QouteSection = ({ result }) => {
  return result.quote == undefined && result.author == undefined ? null : (
    <section>
      <div className="quote-wrapper">
        <p className="quote">{result.quote}</p>
        <span>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
            </g>
          </svg>
        </span>
        <span>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
            </g>
          </svg>
        </span>
      </div>
      <p className="author">{result.author}</p>
    </section>
  );
};

export default App;
