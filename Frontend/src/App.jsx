import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Hello from VIkas kashyap</h1>
      <h2>Data: {data.length}</h2>
      {data.map((alldata, i) => (
        <div key={i}>
          <h3>name : {alldata.name}</h3>
          <h3>language : {alldata.language}</h3>
        </div>
      )
      )
      }
    </>
  );
}

export default App;
