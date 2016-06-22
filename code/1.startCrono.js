startCrono() {
  timer.setInterval('crono', () => {
    this.setState({time: this.state.time-1});
    if(this.state.time == 0) {
      this.setState({play: false});
      Alert.alert("DING DING DING");
      setTimeout(this.stopCrono.bind(this));
    }
  }, 1000);
}

stopCrono() {
  timer.clearInterval('crono');
}
