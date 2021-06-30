import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
interface IModal {
  ContactAddModal?: () => void;
  show: Boolean;
  handleClose?: any;
  contact?: any;
  setContact?: any;
  newContact?: any;
  setNewContact?: any;
}

export type IContact = {
  first_name: string;
  last_name: string;
  subtitle: string;
  imgSrc: string;
  mobileNum: string;
  social?: string[];
  favorite:Boolean;
  get?: () => Object;
};

const ContactAddModal: React.FC<IModal> = ({
  show,
  handleClose,
  contact,
  setContact,
}) => {
  const [newContact, setNewContact] = useState<IContact | any>({
    first_name: "",
    last_name: "",
    subtitle: "",
    imgSrc: "",
    mobileNum: "",
    social: ["whatsApp" , "Telegram" , "skype"],
    favorite:false
  });

  function get(e: React.ChangeEvent<HTMLInputElement>) {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  }

  function handleForm(e: React.MouseEvent) {
    e.preventDefault();
    contact.push(newContact);
    setContact(contact);
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={get}
                name="first_name"
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={get}
                name="last_name"
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                onChange={get}
                name="subtitle"
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={get}
                name="mobileNum"
                type="text"
                placeholder="Phone Number"
              />
            </Form.Group>

            <Button onClick={handleForm} variant="primary" type="submit">
              Add Contact
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactAddModal;
