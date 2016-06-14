var ExampleComponent = React.createClass({
  //Set initial state
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  //Updates elapsed time
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  //Once after intitial render; only client-side
  componentDidMount: function() {  
    this.interval = setInterval(this.tick, 1000);
  },
  //Before component is unmounted from the DOM
  componentWillUnmount: function() {  
    clearInterval(this.interval);
  },
  render: function() {  //Renders the component
    return (
      <div>
        //Renders the name stored in props
    	  <div>Hola {this.props.name}</div>  
        //Renders elapsed time, stored in state
      	<div>Tiempo transcurrido: {this.state.secondsElapsed}</div>  
      </div>
    );
  }
});

ReactDOM.render(<ExampleComponent name="Juan"/>, mountNode);