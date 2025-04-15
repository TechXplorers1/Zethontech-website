import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../../styles/JobSupportForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   const finalVisaStatus = visaStatus === 'other' ? otherVisaStatus : visaStatus;
  };


  const [visaStatus, setVisaStatus] = useState('');
  const [otherVisaStatus, setOtherVisaStatus] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleVisaStatusChange = (e) => {
    setVisaStatus(e.target.value);
    if (e.target.value !== 'other') setOtherVisaStatus('');
  };

  return (
  <div style={{ backgroundColor: 'transparent',padding:'10px' }}>
    <Container className="my-1 contact-form">
      <h1 className="text-center mb-4" style={{fontFamily:"Orbitron" }}>TALK WITH TECHXPLORERS</h1>
      <p className="text-center mb-4">
       <b>Fill out your contact details below and our experts will be in touch</b> 
      </p>

      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '800px' }}>
        {/* Personal Information Section */}
        <h4 className="mb-3 border-bottom pb-2">Personal Information</h4>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control className="field" type="text" placeholder="Enter first name" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" placeholder="Enter middle name" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formEthnicity">
              <Form.Label>Ethnicity</Form.Label>
              <Form.Control type="text" placeholder="Enter ethnicity" />
            </Form.Group>
          </Col>
        </Row>

        {/* Contact Information Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">Contact Information</h4>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Full Address</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="Enter full address" required />
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Enter zip code" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter mobile number" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
          </Col>
        </Row>

        {/* Employment Information Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">Employment Information</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formSecurityClearance">
              <Form.Label>Security Clearance</Form.Label>
              <Form.Select>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="no">Not Applicable</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formClearanceLevel">
              <Form.Label>Clearance Level</Form.Label>
              <Form.Control type="text" placeholder="Enter clearance level" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formRelocation">
              <Form.Label>Willing to Relocate?</Form.Label>
              <Form.Select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formWorkPreference">
              <Form.Label>Work Preference</Form.Label>
              <Form.Select required>
                <option value="">Select</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="hybrid">Hybrid</option>
                <option value="hybrid">Remote + Hybrid</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formRestrictedCompanies">
          <Form.Label>Companies you don't want to apply to</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="List companies (separate with commas)" />
        </Form.Group>

        {/* Job Preferences Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">Job Preferences</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formJobsToApply">
              <Form.Label>Jobs to apply for</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="List job titles" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formTechnology">
              <Form.Label>Technology/Skills</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="List technologies/skills" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCurrentSalary">
              <Form.Label>Current Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter current salary" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formExpectedSalary">
              <Form.Label>Expected Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter expected salary" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formVisaStatus">
          <Form.Label>Visa Status</Form.Label>
          <Form.Select value={visaStatus}
        onChange={handleVisaStatusChange}
        required>
            <option value="">Select visa status</option>
            <option value="citizen">Citizen</option>
            <option value="green-card">Green Card</option>
            <option value="h1b">H1B</option>
            <option value="opt">OPT</option>
            <option value="other">Other</option>
          </Form.Select>
          {visaStatus === 'other' && (
        <Form.Control
          type="text"
          placeholder="Please specify your visa status"
          value={otherVisaStatus}
          onChange={(e) => setOtherVisaStatus(e.target.value)}
          className="mt-2"
          required
        />
      )}
        </Form.Group>

        {/* Education Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">Education</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formSchoolName">
              <Form.Label>School Name</Form.Label>
              <Form.Control type="text" placeholder="Enter school name" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formSchoolAddress">
              <Form.Label>School Address</Form.Label>
              <Form.Control type="text" placeholder="Enter school address" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formSchoolPhone">
              <Form.Label>School Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter school phone" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formCourseOfStudy">
              <Form.Label>Course of Study</Form.Label>
              <Form.Control type="text" placeholder="Enter course of study" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formGraduationDate">
              <Form.Label>Graduation Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
          </Col>
        </Row>

        {/* Current Employment Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">Current Employment</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCurrentCompany">
              <Form.Label>Current Company</Form.Label>
              <Form.Control type="text" placeholder="Enter current company" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCurrentDesignation">
              <Form.Label>Current Designation</Form.Label>
              <Form.Control type="text" placeholder="Enter current designation" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formInterviewTime">
              <Form.Label>Preferred Interview Time</Form.Label>
              <Form.Control type="text" placeholder="E.g., Weekdays after 5pm" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formJoiningDate">
              <Form.Label>Earliest Joining Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formRelievingDate">
          <Form.Label>Relieving Date from Current Company</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        {/* References Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">References</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formReferenceName">
              <Form.Label>Reference Name</Form.Label>
              <Form.Control type="text" placeholder="Enter reference name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formReferencePhone">
              <Form.Label>Reference Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter reference phone" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formReferenceAddress">
          <Form.Label>Reference Address</Form.Label>
          <Form.Control type="text" placeholder="Enter reference address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReferenceEmail">
          <Form.Label>Reference Email</Form.Label>
          <Form.Control type="email" placeholder="Enter reference email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReferenceRole">
          <Form.Label>Reference Role</Form.Label>
          <Form.Control type="text" placeholder="Enter reference role" />
        </Form.Group>

        {/* Job Portal Information Section */}
        <h4 className="mb-3 mt-4 border-bottom pb-2">Job Portal Information</h4>
        <Form.Group className="mb-3" controlId="formJobPortalAccount">
          <Form.Label>Job Portal Account Name</Form.Label>
          <Form.Control type="text" placeholder="Enter account name (Eg: LinkedIn)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJobPortalCredentials">
          <Form.Label>Login Credentials (For USA)</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="Enter email and password" />
        </Form.Group>

        <div className="d-grid mt-4">
  <Button 
    type="submit" 
    size="lg"
    style={{ backgroundColor: '#00ffff', borderColor: '#00ffff', color: '#000' }}
  >
    Submit
  </Button>
</div>
      </Form>
    </Container>
    </div>
  );
};

export default ContactForm;