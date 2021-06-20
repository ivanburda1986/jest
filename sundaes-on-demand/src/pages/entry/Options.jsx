import axios from "axios";
import { useEffect, useState } from "react";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [optionType]);

  return <div>Options</div>;
}
