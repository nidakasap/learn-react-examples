import React from "react";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    //! 1- componentin oluşturulmasında çağrılır
    console.log("constructor is runnig");
    super(props);
    this.state = { count: 0 };
    //!2- her oluşturmada çağırılır (bileşeni DOM a çizme)
  }

  arttir = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //! 3-) component  monte edildiğinde çağrılır
  //! (ilk renderdan hemen sonra).(database den veri çekme vs...)
  //!  lifecycle döngüsünde yalnızca bir kez çağrılır

  componentDidMount() {
    console.log("component kuruldu");
  }
  render() {
    console.log("component rendered");
    return (
      <div className="container text-center p-3">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count} </h3>
        <button className="btn btn-info" onClick={this.arttir}>
          INC
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods;

//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?
//?==================================================================

//* Lifecycle yöntemleri, DOM'daki süreleri boyunca componentler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* componentin ölümü (DOM ağacından kaldırılıyor) (componentWillUnmount)
