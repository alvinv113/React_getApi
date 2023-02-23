import React from "react";
import "../App.css";
import Cardfullpage from "./Cardfullpage";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  let [responseData, setResponseData] = React.useState([]);

  const { idx } = useParams();

  React.useEffect(() => {
    if (idx) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idx}`)

        .then((response) => {
          // handle success
          console.log(response.data);
          setResponseData([response.data]);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")

        .then((response) => {
          // handle success
          console.log(response.data);
          setResponseData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [idx]);

  return (
    <div className="App">
      {responseData?.map((value) => {
        const { userId, id, title } = value;
        return <Cardfullpage userId={userId} id={id} title={title} />;
      })}
    </div>
  );
}

export default Home;
