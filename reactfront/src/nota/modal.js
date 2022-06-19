import {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Mymodal=() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-warning btn-sm' onClick={handleShow}><i className="fa-solid fa-comments"></i> Nota </button> 

      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}  >
        <ModalHeader closeButton>
          Modal heading
        </ModalHeader>
        <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Mymodal