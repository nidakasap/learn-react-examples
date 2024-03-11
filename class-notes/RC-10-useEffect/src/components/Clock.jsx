import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  const [sayac, setSayac] = useState(0);
  const [time, setTime] = useState();
  //ilk renderda calis bir daha burayi gorme

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1000);
    // useEffect'in temizleme fonksiyonu
    return () => {
      clearInterval(intervalId); // bileşen kaldırıldığında interval'ı temizle
    };
  }, []); // useEffect sadece bileşen ilk kez render edildiğinde çalışsın

  useEffect(() => {
    if (sayac > 0) {
      document.querySelector("h1").style.background = "pink";
      alert("sayac arttirildi");
      // Temizleme fonksiyonu - bileşen kaldırıldığında arkaplan rengini eski haline getir
    }
    return () => {
      document.querySelector("h1").style.background = "";
    };
  }, [sayac]);

  return (
    <div>
      <h3 className="text-danger mt-5">{time}</h3>
      <div>
        <h2>++++++++++++++++++++++++++</h2>
        <h1>COUNT: {sayac}</h1>
        <button
          onClick={() => {
            setSayac(sayac + 1);
          }}
          className="btn btn-warning"
        >
          ARTTIR
        </button>
      </div>
    </div>
  );
};

export default Clock;
// //?==================================================================
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount
//! olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her
//! değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);
