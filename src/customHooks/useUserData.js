import { useState, useEffect } from "react";
import fetchData from "../util/fetchData";

const useUserData = (path) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchData(path)
      .then((data) => setUserData(data))
      .catch((res) => console.error(res.status));
  }, [path]);
  return [userData];
};

export default useUserData;
