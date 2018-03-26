import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementActions } from "../../redux/module/increment";

const mapStateToProps = state => ({
  increment: state.increment
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setIncrement: incrementActions.increment,
      setIsPressed: incrementActions.isPressed
    },
    dispatch
  );

class incrementView extends Component {
  doIncrement = value => {
    const { setIncrement, setIsPressed } = this.props;
    const nextValue = value + 1;
    setIncrement(nextValue);
    setIsPressed(true);
  };

  render() {
    const { increment: { increment, isPressed }} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{increment}</Text>
        <Button
          title={isPressed ? "I've been pressed" : "Press me"}
          onPress={() => this.doIncrement(increment)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginBottom: 50,
    fontSize: 50
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(incrementView);
