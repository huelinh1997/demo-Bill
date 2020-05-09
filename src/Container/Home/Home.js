import React from "react";
import { Row, Col } from "reactstrap";
import Bill1 from "../../Img/bill1.png";
import Bill2 from "../../Img/bill2.png"
const Home = () => {
	return (
        <div className='container-fluid my-4'>
            <h1>Lorem Ipsum is simply dummy text of</h1>
			<Row>
				<Col className='md-5 d-flex justify-content-center'>
					<img src={Bill1} alt='bill'></img>
				</Col>
				<Col className='md-7 d-flex flex-column align-self-center'>
					<h3>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.{" "}
					</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</Col>
            </Row>
            <Row>
				<Col className='md-7 d-flex flex-column align-self-center'>
					<h3>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.{" "}
					</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
                </Col>
                <Col className='md-5 d-flex justify-content-center'>
					<img src={Bill2} alt='bill'></img>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
