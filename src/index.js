import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function IMDB() {
//   const [movieRating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <Starrating color={"red"} setmovieRating={setmovieRating} />
//       <p>you rated this movie {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
