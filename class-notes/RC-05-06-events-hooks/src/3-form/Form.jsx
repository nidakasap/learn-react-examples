import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [country, setCountry] = useState("");

  const getDatabase = (e) => {
    e.preventDefault();
    //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
    //? const res = axios.post("url", { isim, pass, country })
    alert(`Name:${name} - Psw: ${pass} - Contry:${country}`);
    setName("");
    setPass("");
    setCountry("");
  };
  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-warning">{name}</span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            onInput={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            value={pass}
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="country">
            COUNTRY: <span>{country}</span>
          </label>
          <select
            value=""
            className="form-select"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option selected>COUNTRIES</option>
            <option value="turkey">TURKEY</option>
            <option value="germany">GERMANY</option>
            <option value="usa">USA</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default Form;
