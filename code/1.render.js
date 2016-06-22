render() {
  //Preparation and container
  var time = (this.state.time < 10) ? "0"+this.state.time+"s" : this.state.time+"s";
  return (

    <View style={styles.container}>

{/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Temporizador</Text>
      </View>

{/* Add and subtract buttons and seconds remaining */}
      <View style={styles.bar}>
        <TouchableOpacity style={styles.barButton}
          onPress={this.onSubtractPressed.bind(this)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.time}> {time} </Text>
        <TouchableOpacity style={styles.barButton}
          onPress={this.onAddPressed.bind(this)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

{/* Clock sphere */}
      <View style={styles.cronoContainer}>
        <Image
          ref="cronoImage"
          style={styles.cronoImage}
          source={require('./img/crono.png')}/>
      </View>

{/* Clochand container */}
      <View style={{
        top: this.state.y+this.state.h/5,
        left: this.state.x+this.state.w/2-10,
        position: 'absolute',
        transform: [
           {rotate: (this.state.time*6)+'deg'}
        ]
      }}>

{/* Clockhand */}
        <View style={{
          width: 20,
          height: this.state.h*3/5,
          borderWidth: 1,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderColor: '#111111',
       }}
       />
       <View style={{
          width: 6,
          height: 20,
          top: 0,
          left: 7,
          backgroundColor: 'red',
          position: 'absolute'
       }}
       />
      </View>

{/* Start/stop button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.nextOpButton}
          onPress={this.onNextOpButtonPressed.bind(this)}>
          <Image source={(this.state.play) ? require('./img/pause.png') : require('./img/play.png')}
            style={styles.nextOpButtonImage}
          />
        </TouchableOpacity>
      </View>

{/* End container */}
    </View>
  );
}
