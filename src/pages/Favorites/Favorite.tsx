import { contacts } from '../Contacts/Contacts';
import { ContactItem } from '../../components';
import { Col } from 'react-bootstrap';
function Favorite(props:any) {
    return (
        <div>
            <Col xs={12}>
              {contacts
                .filter(
                  (item) =>
                    item.favorite===true
                )
                .map((contact, index) => (
                  <div key={index}>
                    <ContactItem
                      onClick={() => {
                        props.history.push(`/favorite/${index + 1}`);
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
    )
}

export default Favorite
