import React, { useEffect, useState } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //!GET (READ)

  const getTutorials = async () => {
    const veri = await axios.get(url);
    // console.log(veri.data);
    setTutorials(veri.data);
  };

  //!then zinciriyle de yazabilirsiniz
  // useEffect(()=>{
  // axios.get(url).then((res) => setTutorials(res.data))},[])}

  useEffect(() => {
    getTutorials();
  }, []);

  //!POST (create database e veri gönderme)
  const postTutorial = async (yeniVeri) => {
    await axios.post(url, yeniVeri);

    //tekrar verilerin güncel halini çekip diziye atmış olduk ve ekran güncellendi
    getTutorials();
  };

  //!DELETE
  const deleteTutorial = async (id) => {
    await axios.delete(`${url}${id}/`);
    getTutorials();
  };

  return (
    <>
      <AddBilgi postTutorial={postTutorial} />
      <BilgiList tutorials={tutorials} deleteTutorial={deleteTutorial} />
    </>
  );
};

export default Home;