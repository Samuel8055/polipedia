import React from 'react';
import '../assets/css/Main.css';
import { Row, Col } from 'react-bootstrap';
// import kar_map from '../assets/images/karnataka.jpg';
// import bidar_map from '../assets/images/bidar.jpg';

export default function Main(props) {

  let image_src = "";

  if (props.curr_url === 'http://localhost:3000/district') {
    fetch('../assets/json/Data1.json')
    .then((response) => {
      console.log(response.json());
    })
    .then((data) => {
      console.log(data);
    });

  } else {
    // image_src = kar_map;
  }

  return (
    <div>
      <Row>
        <Col md = {4}>
          <img src = {image_src} className = "map_img" alt = "map" />
        </Col>

        <Col>
          <div>
            <p>Karnataka is a state in the south western region of India. It was formed on 1 November 1956, with the passage of the States Reorganisation Act. Originally known as the State of Mysore, it was renamed Karnataka in 1973. The state corresponds to the Carnatic region. The capital and largest city is Bangalore.</p>

            <p>Karnataka is bordered by the Arabian Sea to the west, Goa to the northwest, Maharashtra to the north, Telangana to the northeast, Andhra Pradesh to the east, Tamil Nadu to the southeast, and Kerala to the south. The state covers an area of 191,976 square kilometres (74,122 sq mi), or 5.83 percent of the total geographical area of India. It is the sixth largest Indian state by area. With 61,130,704 inhabitants at the 2011 census, Karnataka is the eighth largest state by population, comprising 30 districts. Kannada, one of the classical languages of India, is the most widely spoken and official language of the state. Other languages spoken include Urdu, Konkani, Marathi, Tulu, Tamil, Telugu, Malayalam, Kodava and Beary. Karnataka also contains some of the only villages in India where Sanskrit is primarily spoken.</p>

            <p>The two main river systems of the state are the Krishna and its tributaries, the Bhima, Ghataprabha, Vedavathi, Malaprabha and Tungabhadra in North Karnataka; Sharavathi in Shimoga and the Kaveri and its tributaries, the Hemavati, Shimsha, Arkavati, Lakshmana Thirtha and Kabini, in the south. Most of these rivers flow out of Karnataka eastward, reaching the sea at the Bay of Bengal.

            Though several etymologies have been suggested for the name Karnataka, the generally accepted one is that Karnataka is derived from the Kannada words karu and nādu, meaning "elevated land". Karu Nadu may also be read as karu, meaning "black" and nadu, meaning "region", as a reference to the black cotton soil found in the Bayalu Seeme region of the state. The British used the word Carnatic, sometimes Karnatak, to describe both sides of peninsular India, south of the Krishna.</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}