import React from 'react';
// import archives from './Api.json';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { faHeart} from "@fortawesome/fontawesome-free-regular";
//import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      informations: []
    }
  }

  componentDidMount() {
    let dates = fetch('https://viaguate-10-backend-cliente.mybluemix.net/api/accommodation/ViewVacationrentals');
    dates.then(response => response.json()).then(data =>{
    this.setState({
      informations: data
    })
   })
  }

  render() {
    return (
      this.state.informations.map((informations) => {
        return (
          <>
            <Col className="col" xs={12} md={6} lg={4} xl={3}>
              <Card>
                <Card.Img className="card-img" variant="top" src={informations.mainPicture.urlPhoto} />
                <FontAwesomeIcon className="card-icon-Ilike" icon={faHeart} />
                <div className="card-offer">Offer</div>
                <div className="card-price"><span>$ {informations.basePrice} </span>/night</div>
                <Card.Body className="card-body">
                  <Card.Title>{informations.title}</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} />
                    {informations.address.realAddress}
                  </Card.Text>
                  <div className="separator"></div>
                  <div className="d-flex justify-content-around">
                    <div>
                      <div className="card-date-icon d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon className=" mr-1" icon={faUserFriends} />
                        {informations.capacityOfPeople}
                      </div>
                      <p className="card-desc-icon">Capacity</p>
                    </div>
                    <div>
                      <div className="card-date-icon d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon className=" mr-1" icon={faBed} />
                        {informations.noBedroom}
                      </div>
                      <p className="card-desc-icon">Bedrooms</p>
                    </div>
                    <div>
                      <div className="card-date-icon d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon className=" mr-1" icon={faShower} />
                        {informations.noBathroom}
                      </div>
                      <p className="card-desc-icon">Bathrooms</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        )
      })

    )
  }
}

export default Cards;