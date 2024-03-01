import React from "react";

//! Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
//! 1- Herhangi bir state degisirse
//! 2- Props degisirse
//! 3- Refresh force edilirse (tercih edilen bir durum olmaz)

const Events = () => {
  let title = "Hello";
  let count = 0;
  const arttir = () => {
    count++;
    document.querySelector("span").textContent = count; //! farkli yollar
  };
  const changeTitle = (a) => {
    title = a;
    document.querySelector("h1").textContent = title;
  };
  return (
    <div className="container text-center ">
      <h1 className="text-warning">Info: {title}</h1>
      <h2>
        Count: <span className="text-danger">{count}</span>
      </h2>
      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>
      <button onClick={() => changeTitle("Merhaba")} className="btn btn-danger">
        BASLIK DEGISTIR
      </button>
      <button className="btn btn-info">TIKLANDI</button>
    </div>
  );
};

export default Events;

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------
