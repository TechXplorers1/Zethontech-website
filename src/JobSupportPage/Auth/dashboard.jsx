import React from 'react';
// import Sidebar from '../components/Sidebar';
// import DashboardCard from '../components/DashboardCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import txlogo from "../../assets/txlogo.png";


const Dashboard = () => {
  return (
   <div className="bg-white">

            <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex align-items-center gap-2">
                    <img src={txlogo} alt="TechXplorers" style={{ height: "50px" }} />

                </div>
            </div>


    <div className="d-flex">
      <div className="bg-white shadow-sm p-3 d-flex flex-column align-items-center" style={{ height: '88vh', width: '250px', borderRight: '1px solid #eee' }}>
      <div className="mb-3">
        <div className="rounded-circle bg-light" style={{ width: '80px', height: '80px' }}></div>
      </div>
      <h6>Dashboard</h6>
      <div className="text-center my-3">
        <div>1 Month Plan</div>
        <div><strong>$000</strong></div>
        <div>Days Left</div>
        <div><strong>28</strong></div>
        <Button variant="success" className="mt-2 px-4">Renewal</Button>
      </div>
      <div className="mt-auto text-center">
        <div className="mb-2">Help & Support</div>
        <Button variant="info" className="w-100">Log Out</Button>
      </div>
    </div>
      <Container fluid className="p-4">
        <Row className="mb-4">
          <Col md={12}>
          <div className={`text-white p-4 rounded shadow-sm`} style={{ backgroundColor: "#3CB7B7", minHeight: '120px' }}>
      <h6 className="text-center fw-bold mb-0">TODAY TOTAL APPLICATIONS</h6>
      <div className="text-center fs-4 mt-2">16</div>
    </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
          <div className={`text-white p-4 rounded shadow-sm`} style={{ backgroundColor: "#9C4C1D", minHeight: '120px' }}>
      <h6 className="text-center fw-bold mb-0">Interviews Scheduled</h6>
      {/* {value && <div className="text-center fs-4 mt-2"></div>} */}
    </div>
          </Col>
          <Col md={6}>
          <div className={`text-white p-4 rounded shadow-sm`} style={{ backgroundColor: "#813CB6", minHeight: '120px' }}>
      <h6 className="text-center fw-bold mb-0">Updated Resume & Job Portal File</h6>
      {/* {value && <div className="text-center fs-4 mt-2"></div>} */}
    </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Dashboard;
