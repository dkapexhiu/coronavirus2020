import React, { Component } from "react";
class DataParser extends Component {
  constructor(props) {
    // Call super class
    super(props);
    this.state = {
      todos: ["a", "b"],
      currentPage: 1,
      todosPerPage: 20
    };

    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // Your parse code, but not seperated in a function
    var csvFilePath = require("./24.csv");
    var Papa = require("papaparse");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  updateData(result) {
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    console.log(JSON.stringify(data));
    this.setState({ todos: data });
    // or shorter ES syntax: this.setState({ data });
  }

  componentDidMount() {}

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos
      ? todos.slice(indexOfFirstTodo, indexOfLastTodo)
      : [];

    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <div className="card">
          <div class="clearfix">
            <div className="leftFloat width80 text-left">
              <div className="clearfix">
                <p className="leftFloat">State: {todo.State}</p><br/>
                <p className="leftFloat">Country: {todo.Country}</p><br/>
                <p className="leftFloat">Last Update: {todo.Update}</p><br/>
                <p className="leftFloat">Confirmed: {todo.Confirmed}</p><br/>
                <p className="leftFloat">Deaths: {todo.Deaths}</p><br/>
                <p className="leftFloat">Recovered: {todo.Recovered}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className="linkCLick"
        >
          {number}
        </li>
      );
    });
    // Your render function
    return (
      <div className="backwrapper">
        <div>{renderTodos}</div>
        <div id="page-numbers">
          <ul>{renderPageNumbers}</ul>
        </div>
      </div>
    );
  }
}

export default DataParser;
