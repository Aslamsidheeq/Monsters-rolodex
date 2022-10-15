// import { useEffect, useState } from "react";
// import "./styles.css";

// export default function App() {
//   // const [searchFeild, setSearchFeild] = useState("");
//   const [monsters, setMonsters] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);

//   console.log(monsters);

//   return (
//     <div className="App">
//       <input
//         className="search-box"
//         type="search"
//         placeholder="search monster..."
//         onChange={(event) => {
//           console.log(event.target.value);
//         }}
//       ></input>
//       {monsters.map((monster) => {
//         return <h1>{monster.name}</h1>;
//       })}
//     </div>
//   );
// }
