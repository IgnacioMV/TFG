onSubtractPressed() {
  var time = this.state.time;
  (time > 0) ? this.setState({time: time-1}) : null;
}

onAddPressed() {
  this.setState({time: this.state.time+1});
}
