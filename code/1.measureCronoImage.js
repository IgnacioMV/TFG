measureCronoImage() {
  this.refs.cronoImage.measureInWindow((a, b, width, height) => {
    this.setState({
      x: a,
      y: b,
      w: width,
      h: height
  })});
}
