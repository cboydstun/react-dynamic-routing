import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CoffeeInfo() {
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  let params = useParams();

  const fetchData = async () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}/${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setData(data);
        setIngredients(data.ingredients);
      });
  };

  useEffect(() => {
    fetchData();
    // console.log(params);
    // console.log(ingredients);
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <br />
      <h4>Ingredients</h4>
      {ingredients.map((ingredient) => (
        <p key={ingredient} className="coffee-ingredients">{ingredient}</p>
      ))}
    </div>
  );
}