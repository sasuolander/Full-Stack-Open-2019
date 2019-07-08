import React, { useState } from "react";
import "./App.css";

const anecdotes = [
  {
    content: "If it hurts, do it more often",
    id: "47145",
    votes: 0
  },
  {
    content: "Adding manpower to a late software project makes it later!",
    id: "21149",
    votes: 0
  },
  {
    content:
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    id: "69581",
    votes: 0
  },
  {
    content:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    id: "36975",
    votes: 0
  },
  {
    content: "Premature optimization is the root of all evil.",
    id: "25170",
    votes: 0
  },
  {
    content:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    id: "98312",
    votes: 0
  }
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [mostVoted,setMostVoted] = useState(0);
  const [votes,setVotes]=useState([0,0,0,0,0,0])

  const ramdom_number = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const anecdote_mostvoted = votes => {
    //console.log(votes)
      return votes.indexOf(Math.max(...votes))    
  };
  const anecdote_voting=(anecdotes,selected )=>{
    const voting=[...votes]
  voting[selected] += 1
  setVotes(voting)
  console.log(anecdote_mostvoted(votes))
    setMostVoted(anecdote_mostvoted(votes))

  }



  return (
    <React.Fragment>
      <h1>Anecdotes of the day</h1>
      <div>
        {anecdotes[selected].content}
        <br />
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={() => anecdote_voting(anecdotes,selected)}>vote</button>
        <button onClick={() => setSelected(ramdom_number(0, 5))}>
          next anecdote{" "}
        </button>
      </div>

      <div>
        <h1>most voted</h1>
 {anecdotes[mostVoted].content}<br></br>
 has {votes[mostVoted]} vote
      </div>
    </React.Fragment>
  );
};



export default App;
