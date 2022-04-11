import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Send Us Feedback</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Send Us Feedback</ModalHeader>
          <ModalBody>
          <object data="https://docs.google.com/forms/d/e/1FAIpQLSdokjHqlIeZAuIcQR1IXbHBVsJmgRuJFyKCRBsV35VhhYux_w/viewform?embedded=true" width="100%" height="947" frameborder="0" marginheight="0" marginwidth="0">Memuat…</object>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Feedback;