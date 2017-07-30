import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-native";

import ModalComponents from "./ModalComponents.js";

export default class AddContactModal extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "" };
  }

  setEmail = value => {
    this.setState({ email: value });
  };

  render() {
    const { isModalVisible, closeModal } = this.props;
    const { email } = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <ModalComponents
          email={email}
          setEmail={this.setEmail}
          {...this.props}
        />
      </Modal>
    );
  }
}

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
