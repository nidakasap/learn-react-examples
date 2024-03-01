import React, { useState } from "react";
import Events from "../1-events-hookIntro/Events";
const Hooks = () => {
  //!usestate hooku en ust yazilmali
  const [sayac, setSayac] = useState(0); //initial deger
  const arttir = () => {
    setSayac(sayac + 1);
  };

  const [kisi, setKisi] = useState({
    isim: "saban",
    meslek: "developer",
    yas: 50,
    renk: "pink",
  });

  //object 1.yol   const handleSwap = () => {
  //     if (kisi.isim === "saban") {
  //       setKisi({
  //         isim: "emre",
  //         meslek: "full stack developer",
  //         yas: 33,
  //         renk: "orange",
  //       });
  //     } else {
  //       setKisi({
  //         isim: "saban",
  //         meslek: "developer",
  //         yas: 50,
  //         renk: "pink",
  //       });
  //     }
  //   };
  //object 2.yol
  const [toogle, setToogle] = useState(true);
  const handleSwap = () => {
    setToogle(!toogle);

    if (toogle) {
      setKisi({
        isim: "emre",
        meslek: "devops",
        yas: 33,
        renk: "yellow",
      });
    } else {
      setKisi({
        isim: "saban",
        meslek: "developer",
        yas: 50,
        renk: "pink",
      });
    }
  };

  const nameChange = () => {
    setKisi({
      ...kisi,
      isim: "nida",
    });
  };
  const ageChange = () => {
    setKisi({
      ...kisi,
      isim: "nida",
    });
  };

  return (
    <div className="container text-center">
      <h2>============</h2>
      <h1>USESTATE</h1>
      <h2>Count: {sayac}</h2>
      <button onClick={arttir} className="btn btn-primary">
        arttir
      </button>
      <button
        onClick={() => sayac > 0 && setSayac(sayac - 1)}
        className="btn btn-primary"
      >
        azalt
      </button>
      {/* ....................................................................... */}
      <h2>============</h2>
      <h1>Object ile usestate kullanimi</h1>
      <h2 className="text-danger">{kisi.isim}</h2>
      <h3 className="text-info">{kisi.meslek}</h3>
      <h3 className="text-info">{kisi.yas}</h3>
      <button
        onClick={handleSwap}
        style={{ backgroundColor: kisi.renk }}
        className="btn"
      >
        Toogle Degistir
      </button>
      <button
        onClick={nameChange}
        style={{ backgroundColor: kisi.renk }}
        className="btn"
      >
        Isim Degistir
      </button>
      <button
        onClick={() =>
          setKisi({
            ...kisi,
            yas: 33,
          })
        }
        style={{ backgroundColor: "green" }}
        className="btn"
      >
        Yas Degistir
      </button>
      {/* {toogle && <Events />} */}
    </div>
  );
};

export default Hooks;
