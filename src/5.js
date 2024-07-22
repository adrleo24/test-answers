/** Can you explain the problem with the following code, and how to fix
it. **/
// 
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount() {
   this.setState((prevState) => ({
     count: prevState.count + 1,
   }))
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById("root"));
