constructor(props) {
  super(props);
  this.state = {
    play: false,
    time: 0,
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  }
}

componentDidMount() {
  setTimeout(this.measureCronoImage.bind(this));
}
