import { Container, Row, Col } from "react-bootstrap";
import "./ContactSingle.style.scss";
import { contacts } from "../Contacts/Contacts";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useLocation } from "react-router-dom";

import {
  FaPhoneAlt,
  FaArrowLeft,
  FaBorderAll,
  FaRegComment,
  FaChevronDown,
  FaStar,
  FaEdit,
  FaBars,
} from "react-icons/fa";



const ContactSingle = (props: any) => {


    const location = useLocation();
    

  const contact = contacts[parseInt(props.match.params.id) - 1];

  function handleFavorite() {
    contact.favorite ? (contact.favorite = false) : (contact.favorite = true);
    console.log(contact);
  }
  return (
    <div key={1}>
      <Container className="p-5">
        <Row className="w-100">
          <Col className="top" xs={12}>
            <div className="back-btn">
              <CustomButton
                to={`${location.pathname.substr(0, location.pathname.lastIndexOf("/"))}`}
                text={"Phone"}
                icon={<FaArrowLeft size={24} />}
              />
            </div>
            <div className="change-btn">
              <FaBorderAll />
            </div>
          </Col>
          <Col className="person-info" xs={12}>
            <div className="container perfect-center flex-column">
              <div className="avatar-container-background perfect-center">
                <div className="avatar-container perfect-center mx-auto my-auto">
                  <div className="avatar-container_image ">
                    {contact.imgSrc !== "" ? (
                      <img
                        className="contact-avatar"
                        src={contact.imgSrc}
                        alt="contact avatar"
                      />
                    ) : (
                      <div className="default-avatar">
                        {contact.first_name.slice(0, 1).toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="title-container">
                <div className="title-container__title">
                  {contact.first_name}
                </div>
                <div className="title-container__title">
                  {contact.last_name}
                </div>
              </div>
            </div>
          </Col>
          <Col className="call-info" xs={12}>
            <div className="mobile-num">
              <div className="num-section">
                <div className="call-number">{contact.mobileNum}</div>
                mobile
              </div>

              <div className="action-section">
                <div>
                  <FaPhoneAlt />
                </div>
                <div>
                  <FaRegComment />
                </div>
              </div>
            </div>

            {contact.social
              ? contact.social.map((item) => {
                  if (item !== "skype") {
                    return (
                      <div className="whatsApp">
                        <div className="whats-section">
                          <div className="whats">{item}</div>
                        </div>

                        <div className="action-section">
                          <div>
                            <FaPhoneAlt />
                          </div>
                          <div>
                            <FaRegComment />
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="skype">
                        <div className="skype-section">
                          <div className="skype">{item}</div>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
            <div className="more-section w-100">
              <span>
                More <FaChevronDown />
              </span>
            </div>
          </Col>

          <Col className="log-section">
            <h4>Call Log</h4>
            <h4 className="text-primary">Clear</h4>
          </Col>
        </Row>

        <Row className="control-buttons">
          <div onClick={handleFavorite} className="fave">
            <FaStar />
            <span>Favorite</span>
          </div>
          <div className="edit">
            <FaEdit />
            <span>Edit</span>
          </div>
          <div className="more">
            <FaBars />
            <span>More</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSingle;
