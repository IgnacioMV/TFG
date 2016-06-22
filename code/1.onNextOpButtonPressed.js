onNextOpButtonPressed() {
  if(this.state.time == 0) {
    return;
  }
  var play = !this.state.play;
  this.setState({play: play});
  (play == true) ? this.startCrono() : this.stopCrono();
}
