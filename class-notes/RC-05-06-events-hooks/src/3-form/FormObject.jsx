import { useState } from "react";

const FormObject = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    pass: "",
    email: "",
  });
  const { userName, pass, email } = formValues;

  const handlePerson = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const getDatabase = (e) => {
    e.preventDefault();
    alert(`Name: ${userName} - Psw: ${pass} - Contry: ${email}`);
    setFormValues({
      userName: "",
      pass: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="container text-center mt-4">
      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            NAME: <span className="text-danger">{userName} </span>
          </label>
          <input
            className="form-control"
            id="userName"
            name="userName"
            type="text"
            onChange={handlePerson}
            value={userName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={handlePerson}
            value={pass}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            id="email"
            name="email"
            onChange={handlePerson}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default FormObject;

// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.
