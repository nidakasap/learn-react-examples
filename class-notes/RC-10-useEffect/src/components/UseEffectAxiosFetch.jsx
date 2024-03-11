import React, { useEffect, useState } from "react";
import axios from "axios";
const UseEffectAxiosFetch = () => {
  const [people, setPeople] = useState([]);

  //   //!1.yol fetch then yapısı (chain)
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setPeople(data));
  //   }, []);

  //   //!2.yol fetch async await

  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setPeople(data);
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   //!3.yol axios  await then
  //   const getData = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => {
  //         setPeople(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //!4.yol axios  await then
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPeople(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ name, username, id, phone }) => {
          return (
            <div key={id} className="col-12 col-sm-6 col-md-4">
              {/* https://www.dicebear.com/styles/avataaars/ */}
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                alt=""
              />
              <h5>Name: {name}</h5>
              <h6>Username: {username} </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectAxiosFetch;
