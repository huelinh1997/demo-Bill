import React from "react";
import styles from "./Style";
import { withStyles } from "@material-ui/styles";
import { Row, Col } from "reactstrap";
const Bill = ({ classes }) => {
	return (
		<div className={`container`}>
			<div className={classes.bill}>
				<Row className='justify-content-between align-items-center'>
					<Col xs={4} className='text-center'>
						<p>Cong ty</p>
						<h1>NNC group</h1>
						<div>So 23 duong Nguyen Huu Tho</div>
						<div>DD: 0981238495 - 0983458985</div>
						<div>Email: abc@gmail.com</div>
						<div>Website: www.abc.com</div>
					</Col>
					<Col xs={4} className='text-center'>
						<h1>Hóa đơn bán hàng</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.{" "}
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={7}>
						<span>Họ tên khách hàng</span>
					</Col>
					<Col xs={5}>
						<span>SDT</span>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default withStyles(styles)(Bill);
