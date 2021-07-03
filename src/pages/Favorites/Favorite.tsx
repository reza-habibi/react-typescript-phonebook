import { contacts } from "../Contacts/Contacts";
import { ContactItem, CustomButton } from "../../components";
import { Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Favorite(props: any) {
  const location = useLocation();

  return (
    <div>
      <Col className="top" xs={12}>
        <div className="back-btn">
          <CustomButton
            to={`${location.pathname.substr(
              0,
              location.pathname.lastIndexOf("/")
            )}`}
            text={"Phone"}
            icon={<FaArrowLeft size={24} />}
          />
        </div>
      </Col>
      <Col xs={12}>
        {contacts
          .filter((item) => item.favorite === true)
          .map((contact, index) => (
            <div key={index}>
              <ContactItem
                onClick={() => {
                  props.history.push(`/favorites/${index + 1}`);
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
    </div>
  );
}

export default Favorite;
