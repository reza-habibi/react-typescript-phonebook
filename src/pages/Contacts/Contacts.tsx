import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContactItem, SearchBar, ContactAddModal } from "../../components";
import { IContact } from "../../components/ContactAddModal/ContactAddModal";
import "./style.scss";
export const contacts = [
  {
    first_name: "Ali",
    last_name: "Komijani",
    subtitle: "My Card",
    imgSrc: "",
    mobileNum: "09111234567",
    social: ["whatsApp", "telegram"],
    favorite:true
  },
  {
    first_name: "Hassan",
    last_name: "Haddai",
    subtitle: "Father",
    imgSrc: "",
    mobileNum: "09111234567",
    social: ["whatsApp", "skype"],
    favorite:false
  },
  {
    first_name: "Seyed",
    last_name: "Ali",
    subtitle: "Friend",
    imgSrc: "",
    mobileNum: "09111234567",
    favorite:false
  },
];

function Contacts(props: any) {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  
  const [contact,setContact]=useState<IContact[]>(contacts)

  const handleClose: Function = () => setShow(false);
  const handleShow: Function = () => setShow(true);

  const showModal = () => {
    handleShow();
    console.log(contacts);
  };

  return (
    <div>
      <Container className="contact-container">
        <Row>
          <Col xs={12}>
            <h1>{"Contacts"}</h1>
          </Col>
          <Col xs={12}>
            <SearchBar filter={filter} setFilter={setFilter} />
          </Col>
        </Row>
      </Container>
      <section>
        <Container className="contacts-item-container">
          <Row>
            <Col xs={12}>
              {contacts
                .filter(
                  (item) =>
                    item.first_name
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    item.last_name.toLowerCase().includes(filter.toLowerCase())
                )
                .map((contact, index) => (
                  <div key={index}>
                    <ContactItem
                      onClick={() => {
                        props.history.push(`/contacts/${index + 1}`);
                      }}
                      title={`${contact.first_name} ${contact.last_name}`}
                      subtitle={contact.subtitle}
                      imgSrc={contact.imgSrc}
                      mobileNum={contact.mobileNum}
                      whatsApp={contact.social}
                    />
                  </div>
                ))}
            </Col>
            <button className="btn btn-primary circle" onClick={showModal}>
              +
            </button>
          </Row>
        </Container>
      </section>
      
      <ContactAddModal
        show={show}
        handleClose={handleClose}
        contact={contact}
        setContact={setContact}
      />
    </div>
  );
}

export default Contacts;
