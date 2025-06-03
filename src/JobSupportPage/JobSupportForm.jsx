import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import '../styles/JobSupportForm.css';
import { useNavigate } from 'react-router-dom';

import txlogo from "../assets/txlogo.png"; // replace with actual logo path

const countryCodes = [
    { code: '+1', name: 'USA (+1)' },
    { code: '+44', name: 'UK (+44)' },
    { code: '+91', name: 'India (+91)' },
    { code: '+61', name: 'Australia (+61)' },
    { code: '+49', name: 'Germany (+49)' },
    { code: '+33', name: 'France (+33)' },
    { code: '+81', name: 'Japan (+81)' },
    { code: '+86', name: 'China (+86)' },
    { code: '+971', name: 'UAE (+971)' },
    { code: '+65', name: 'Singapore (+65)' },
    { code: '+60', name: 'Malaysia (+60)' },
    { code: '+82', name: 'South Korea (+82)' },
    { code: '+7', name: 'Russia (+7)' },
    { code: '+55', name: 'Brazil (+55)' },
    { code: '+52', name: 'Mexico (+52)' },
    { code: '+34', name: 'Spain (+34)' },
    { code: '+39', name: 'Italy (+39)' },
    { code: '+31', name: 'Netherlands (+31)' },
    { code: '+41', name: 'Switzerland (+41)' },
    { code: '+46', name: 'Sweden (+46)' },
    { code: '+358', name: 'Finland (+358)' },
    { code: '+47', name: 'Norway (+47)' },
    { code: '+45', name: 'Denmark (+45)' },
    { code: '+32', name: 'Belgium (+32)' },
    { code: '+43', name: 'Austria (+43)' },
    { code: '+353', name: 'Ireland (+353)' },
    { code: '+351', name: 'Portugal (+351)' },
    { code: '+90', name: 'Turkey (+90)' },
    { code: '+20', name: 'Egypt (+20)' },
    { code: '+27', name: 'South Africa (+27)' },
    { code: '+234', name: 'Nigeria (+234)' },
    { code: '+254', name: 'Kenya (+254)' },
    { code: '+92', name: 'Pakistan (+92)' },
    { code: '+880', name: 'Bangladesh (+880)' },
    { code: '+94', name: 'Sri Lanka (+94)' },
    { code: '+977', name: 'Nepal (+977)' },
    { code: '+84', name: 'Vietnam (+84)' },
    { code: '+66', name: 'Thailand (+66)' },
    { code: '+62', name: 'Indonesia (+62)' },
    { code: '+63', name: 'Philippines (+63)' },
    { code: '+64', name: 'New Zealand (+64)' },
    { code: '+507', name: 'Panama (+507)' },
    { code: '+506', name: 'Costa Rica (+506)' },
    { code: '+57', name: 'Colombia (+57)' },
    { code: '+58', name: 'Venezuela (+58)' },
    { code: '+51', name: 'Peru (+51)' },
    { code: '+56', name: 'Chile (+56)' },
    { code: '+54', name: 'Argentina (+54)' },
];

const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    "South Korea",
    "Mexico",
    "Italy",
    "Spain",
    "Russia",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Belgium",
    "Norway",
    "Austria",
    "Denmark",
    "Finland",
    "Poland",
    "Portugal",
    "Ireland",
    "Singapore",
    "Malaysia",
    "South Africa",
    "United Arab Emirates",
    "Saudi Arabia",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Philippines",
    "New Zealand",
    "Argentina",
    "Chile",
    "Colombia",
    "Other"
];

const CandidateForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        // Personal Information
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        ethnicity: '',

        // Contact Information
        address: '',
        country: '',
        zipCode: '',
        mobileCountryCode: '+1',
        mobile: '',
        email: '',

        // Employment Information
        securityClearance: '',
        clearanceLevel: '',
        willingToRelocate: '',
        workPreference: '',
        restrictedCompanies: '',

        // Job Preferences
        jobsToApply: '',
        technologySkills: '',
        currentSalary: '',
        expectedSalary: '',
        visaStatus: '',
        otherVisaStatus: '',

        // Education
        universityName: '',
        universityAddress: '',
        courseOfStudy: '',
        startDate: '',
        endDate: '',

        schoolName: '',
        schoolAddress: '',
        completionDate: '',

        // Current Employment
        currentCompany: '',
        currentDesignation: '',
        preferredInterviewTime: '',
        earliestJoiningDate: '',
        relievingDate: '',

        // References
        referenceName: '',
        referencePhone: '',
        referenceAddress: '',
        referenceEmail: '',
        referenceRole: '',

        // Job Portal Information
        jobPortalAccountName: '',
        jobPortalCredentials: '',
        UploadResume: ''

    });
    const [dobError, setDobError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear DOB error when user modifies it
        if (name === "dob") setDobError("");
    };

    const validateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const age = validateAge(formData.dob);
        if (age < 18) {
            setDobError("User age must be more than 18 years");
            return;
        }
    };

    return (
        <div className="main contact-form">
            <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex align-items-center gap-2">
                    <img src={txlogo} alt="TechXplorers" style={{ height: "50px" }} />
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center vh-90 ">
                <div className="shadow-lg p-5 rounded bg-white contactform-box  " style={{ backgroundColor: 'transparent', padding: '10px' }}>
                    {/* <h1 className="text-center mb-4" style={{ fontFamily: "Orbitron" }}>TALK WITH TECHXPLORERS</h1> */}
                    <p className="text-center mb-4">
                        <b>Fill out your contact details below and our experts will be in touch</b>
                    </p>

                    <div className="container mt-4">
                        <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '800px' }}>
                            {/* Personal Information */}
                            <h4 className="mb-3 border-bottom pb-2">Personal Information</h4>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            className="form-control"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formMiddleName">
                                        <Form.Label>Middle Name</Form.Label>
                                        <Form.Control
                                            name="middleName"
                                            value={formData.middleName}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formDob">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            type="date"
                                            required
                                            isInvalid={!!dobError}
                                        />
                                        <Form.Control.Feedback type="invalid">{dobError}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            className="custom-select-cyan"
                                        >
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
                                        <Form.Control
                                            name="ethnicity"
                                            value={formData.ethnicity}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Contact Information */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">Contact Information</h4>
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Full Address</Form.Label>
                                <Form.Control
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    as="textarea"
                                    rows={2}
                                    required
                                />
                            </Form.Group>

                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="custom-select-cyan"
                                        >
                                            <option value="">Select country</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country}>{country}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formZipCode">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formMobile">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <InputGroup>
                                            <Form.Select
                                                name="mobileCountryCode"
                                                value={formData.mobileCountryCode}
                                                onChange={handleChange}
                                                style={{ maxWidth: '150px' }}
                                            >
                                                {countryCodes.map((country, index) => (
                                                    <option key={index} value={country.code}>{country.name}</option>
                                                ))}
                                            </Form.Select>
                                            <Form.Control
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                type="tel"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Employment Information */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">Employment Information</h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formSecurityClearance">
                                        <Form.Label>Security Clearance</Form.Label>
                                        <Form.Select
                                            name="securityClearance"
                                            value={formData.securityClearance}
                                            onChange={handleChange}
                                            className="custom-select-cyan"
                                        >
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            <option value="not-applicable">Not Applicable</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formClearanceLevel">
                                        <Form.Label>Clearance Level</Form.Label>
                                        <Form.Control
                                            name="clearanceLevel"
                                            value={formData.clearanceLevel}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formRelocation">
                                        <Form.Label>Willing to Relocate?</Form.Label>
                                        <Form.Select
                                            name="willingToRelocate"
                                            value={formData.willingToRelocate}
                                            onChange={handleChange}
                                            required
                                            className="custom-select-cyan"
                                        >
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formWorkPreference">
                                        <Form.Label>Work Preference</Form.Label>
                                        <Form.Select
                                            name="workPreference"
                                            value={formData.workPreference}
                                            onChange={handleChange}
                                            required
                                            className="custom-select-cyan"
                                        >
                                            <option value="">Select</option>
                                            <option value="remote">Remote</option>
                                            <option value="hybrid">Hybrid</option>
                                            <option value="onsite">Onsite</option>
                                            <option value="remote-hybrid">Remote + Hybrid</option>
                                            <option value="remote-hybrid-onsite">Remote + Hybrid + Onsite</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formRestrictedCompanies">
                                <Form.Label>Companies you don't want to apply to</Form.Label>
                                <Form.Control
                                    name="restrictedCompanies"
                                    value={formData.restrictedCompanies}
                                    onChange={handleChange}
                                    as="textarea"
                                    rows={2}
                                />
                            </Form.Group>

                            {/* Job Preferences */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">Job Preferences</h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formJobsToApply">
                                        <Form.Label>Jobs to apply for</Form.Label>
                                        <Form.Control
                                            name="jobsToApply"
                                            value={formData.jobsToApply}
                                            onChange={handleChange}
                                            as="textarea"
                                            rows={2}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formTechnology">
                                        <Form.Label>Technology/Skills</Form.Label>
                                        <Form.Control
                                            name="technologySkills"
                                            value={formData.technologySkills}
                                            onChange={handleChange}
                                            as="textarea"
                                            rows={2}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCurrentSalary">
                                        <Form.Label>Current Salary</Form.Label>
                                        <Form.Control
                                            name="currentSalary"
                                            value={formData.currentSalary}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formExpectedSalary">
                                        <Form.Label>Expected Salary</Form.Label>
                                        <Form.Control
                                            name="expectedSalary"
                                            value={formData.expectedSalary}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formVisaStatus">
                                <Form.Label>Visa Status</Form.Label>
                                <Form.Select
                                    name="visaStatus"
                                    value={formData.visaStatus}
                                    onChange={handleChange}
                                    required
                                    className="custom-select-cyan"
                                >
                                    <option value="">Select visa status</option>
                                    <option value="citizen">Citizen</option>
                                    <option value="green-card">Green Card</option>
                                    <option value="h1b">H1B</option>
                                    <option value="opt">OPT</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                                {formData.visaStatus === 'other' && (
                                    <Form.Control
                                        name="otherVisaStatus"
                                        type="text"
                                        value={formData.otherVisaStatus}
                                        onChange={handleChange}
                                        className="mt-2"
                                        required
                                    />
                                )}
                            </Form.Group>

                            {/* Education */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">Education</h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formUniversityName">
                                        <Form.Label>University Name</Form.Label>
                                        <Form.Control
                                            name="universityName"
                                            value={formData.universityName}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formUniversityAddress">
                                        <Form.Label>University Address</Form.Label>
                                        <Form.Control
                                            name="universityAddress"
                                            value={formData.universityAddress}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                {/* <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formUniversityPhone">
                                        <Form.Label>University Phone</Form.Label>
                                        <Form.Control
                                            name="universityPhone"
                                            value={formData.universityPhone}
                                            onChange={handleChange}
                                            type="tel"
                                        />
                                    </Form.Group>
                                </Col> */}
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formCourseOfStudy">
                                        <Form.Label>Course of Study</Form.Label>
                                        <Form.Control
                                            name="courseOfStudy"
                                            value={formData.courseOfStudy}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formGraduationStartDate">
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control
                                            name="startDate"
                                            value={formData.startDate}
                                            onChange={handleChange}
                                            type="date"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formGraduationEndDate">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control
                                            name="endDate"
                                            value={formData.endDate}
                                            onChange={handleChange}
                                            type="date"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formSchoolName">
                                        <Form.Label>School Name</Form.Label>
                                        <Form.Control
                                            name="schoolName"
                                            value={formData.schoolName}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formSchoolAddress">
                                        <Form.Label>School Address</Form.Label>
                                        <Form.Control
                                            name="schoolAddress"
                                            value={formData.schoolAddress}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                {/* <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formSchoolPhone">
                                        <Form.Label>School Phone</Form.Label>
                                        <Form.Control
                                            name="schoolPhone"
                                            value={formData.schoolPhone}
                                            onChange={handleChange}
                                            type="tel"
                                        />
                                    </Form.Group>
                                </Col> */}
                                {/* <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formCourseOfStudy">
                                        <Form.Label>Course of Study</Form.Label>
                                        <Form.Control
                                            name="courseOfStudy"
                                            value={formData.courseOfStudy}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col> */}
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formGraduationDate">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control
                                            name="completionDate"
                                            value={formData.graduationDate}
                                            onChange={handleChange}
                                            type="date"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* Current Employment */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">Current Employment</h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCurrentCompany">
                                        <Form.Label>Current Company</Form.Label>
                                        <Form.Control
                                            name="currentCompany"
                                            value={formData.currentCompany}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCurrentDesignation">
                                        <Form.Label>Current Designation</Form.Label>
                                        <Form.Control
                                            name="currentDesignation"
                                            value={formData.currentDesignation}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formInterviewTime">
                                        <Form.Label>Preferred Interview Time</Form.Label>
                                        <Form.Control
                                            name="preferredInterviewTime"
                                            value={formData.preferredInterviewTime}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formJoiningDate">
                                        <Form.Label>Earliest Joining Date</Form.Label>
                                        <Form.Control
                                            name="earliestJoiningDate"
                                            value={formData.earliestJoiningDate}
                                            onChange={handleChange}
                                            type="date"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formEmploymentStatus">
                                        <Form.Label>Employment Status</Form.Label>
                                        <Form.Select
                                            name="employmentStatus"
                                            value={formData.employmentStatus}
                                            onChange={handleChange}
                                            required
                                            className="custom-select-cyan"
                                        >
                                            <option value="">Select status</option>
                                            <option value="currently-working">Currently Working</option>
                                            <option value="resigned">Resigned</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    {formData.employmentStatus === 'resigned' && (
                                        <Form.Group className="mb-3" controlId="formRelievingDate">
                                            <Form.Label>Relieving Date from Current Company</Form.Label>
                                            <Form.Control
                                                name="relievingDate"
                                                value={formData.relievingDate}
                                                onChange={handleChange}
                                                type="date"
                                                required={formData.employmentStatus === 'resigned'}
                                            />
                                        </Form.Group>
                                    )}
                                </Col>
                            </Row>

                            {/* References */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">References</h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formReferenceName">
                                        <Form.Label>Reference Name</Form.Label>
                                        <Form.Control
                                            name="referenceName"
                                            value={formData.referenceName}
                                            onChange={handleChange}
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formReferencePhone">
                                        <Form.Label>Reference Phone</Form.Label>
                                        <Form.Control
                                            name="referencePhone"
                                            value={formData.referencePhone}
                                            onChange={handleChange}
                                            type="tel"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formReferenceAddress">
                                <Form.Label>Reference Address</Form.Label>
                                <Form.Control
                                    name="referenceAddress"
                                    value={formData.referenceAddress}
                                    onChange={handleChange}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formReferenceEmail">
                                <Form.Label>Reference Email</Form.Label>
                                <Form.Control
                                    name="referenceEmail"
                                    value={formData.referenceEmail}
                                    onChange={handleChange}
                                    type="email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formReferenceRole">
                                <Form.Label>Reference Role</Form.Label>
                                <Form.Control
                                    name="referenceRole"
                                    value={formData.referenceRole}
                                    onChange={handleChange}
                                    type="text"
                                />
                            </Form.Group>

                            {/* Job Portal Information */}
                            <h4 className="mb-3 mt-4 border-bottom pb-2">Job Portal Information</h4>
                            <Form.Group className="mb-3" controlId="formJobPortalAccount">
                                <Form.Label>Job Portal Account Name</Form.Label>
                                <Form.Control
                                    name="jobPortalAccountName"
                                    value={formData.jobPortalAccountName}
                                    onChange={handleChange}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formJobPortalCredentials">
                                <Form.Label>Login Credentials (For USA)</Form.Label>
                                <Form.Control
                                    name="jobPortalCredentials"
                                    value={formData.jobPortalCredentials}
                                    onChange={handleChange}
                                    as="textarea"
                                    rows={2}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUploadResume">
                                <Form.Label>Upload Resume</Form.Label>
                                <Form.Control
                                    name="UploadResume"
                                    onChange={handleChange}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                />
                            </Form.Group>

                            <div className="d-grid mt-4">
                                <Button
                                    onClick={() => navigate('/clientdashboard')}
                                    type="submit"
                                    size="lg"
                                    style={{ backgroundColor: '#00ffff', borderColor: '#00ffff', color: '#000' }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateForm;