import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Coffee() {
  const [data, setData] = useState([]);
  let params = useParams();

  const fetchData = async () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}`)
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
    // console.log(params);
  });

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>
          <Link to={`/coffee/${params.type}/${item.id}`}>{item.title}</Link>
        </p>
      ))}
    </div>
  );
}