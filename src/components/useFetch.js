import { useEffect, useState } from "react";

const useFetch = (url) => {
  // state variables to hold fetched data, indicate loading status, and hold errors during fetch request
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPending(true);
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        else {
          throw Error(`could not fetch the data from the resource provided`);
        }
      })
      .then((data) => {
        setPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  }, [url]);
  //  url is added as dependency so that useEffect does not execute upon each re render
  return { data, isPending, error };
};

export default useFetch;
