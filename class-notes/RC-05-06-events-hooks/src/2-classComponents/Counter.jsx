import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { sayac: 0, basik: "merhaba" };
  }
  azalt() {
    this.setState({ sayac: this.state.sayac - 1 });
  }
  arttir = () => {
    this.setState((prevState) => ({
      sayac: prevState.sayac + 1,
    }));
  };
  render() {
    return (
      <div className="text-center">
        <h2>
          Sayac: <span> {this.state.sayac}</span>
        </h2>
        <button className="btn btn-warning" onClick={this.azalt.bind(this)}>
          azalt
        </button>
        <button className="btn btn-warning" onClick={this.arttir}>
          arttir
        </button>
      </div>
    );
  }
}
export default Counter;
