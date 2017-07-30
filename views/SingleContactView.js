import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

export default class SingleContactView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View>
        <TextView contactDetail={this.props.contactDetail} />
      </View>
    );
  }
}

SingleContactView.propTypes = {};

const TextView = ({ contactDetail }) => {
  const keys = Object.keys(contactDetail);

  return (
    <View>
      {keys.map(key =>
        <View key={key}>
          <Text style={styles.itemLabel}>
            {key}
          </Text>
          <Text style={styles.itemContent}>
            {contactDetail[key]}
          </Text>
        </View>,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContent: {
    fontSize: 18,
  },
});
