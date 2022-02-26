import { Card, Button, Form, Col, Row, } from 'react-bootstrap'
import './ProfileUserPage.css'
// import axios from 'axios';
import { useEffect, useState } from 'react';

function CorrespondanceAddress() {
    const [inputData, setinputData] = useState({
        add1: "",
        add2: "",
        city: "",
        state: "",
        zip: ""

    });

    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit func correspondence address")
        // alert("hello")
        setformErrors(validate(inputData));
        setisSubmit(true);
    }
    useEffect(() => {
        
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);



    const validate = (values) => {
        const errors = {};
        const regex1 = /^[a-zA-Z]/
        if (!values.add1) {
            errors.add1 = "Address1  is Required!";
        } else if (!regex1.test(values.add1)) {
            errors.add1 = "Address1 should be Alphabet!";
        }
        else if (values.add1.length > 12) {
            errors.add1 = "Address1 should be less than 12 characters";
        }
        if (!values.add2) {
            errors.add2 = "Address2 is Required!";
        } else if (!regex1.test(values.add2)) {
            errors.add2 = "Address2 should be Alphabet!";
        } else if (values.add2.length > 6) {
            errors.add2 = "Address2 should be less than 6 characters";
        }
        if (!values.city) {
            errors.city = "City is Required!";
        } else if (!regex1.test(values.city)) {
            errors.city = "City name should be Alphabet!";
        } else if (values.city.length > 6) {
            errors.city = "City name should be less than 6 characters";
        }
        if (!values.state) {
            errors.state = "State is Required!";
        } else if (!regex1.test(values.state)) {
            errors.state = "State name should be Alphabet!";
        } else if (values.state.length > 6) {
            errors.state = "State name should be less than 6 characters";
        }
        if (!values.zip) {
            errors.zip = "Zip is Required!";
        } else if (values.zip.length > 6) {
            errors.zip = "zip cannot be less than 6 characters!";
        }


        return errors;
    }
    return (
      

            <Card className='container w-100'>
                {/* <Form className='form'> */}
                    <h3 className='container '>Correspondance Address
                    </h3>
                    <div className='d-flex justify-content-end'>
                        <Button className='btn btn-dark' onClick={handleSubmit}>Submit</Button>

                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Address 1</Form.Label>
                            <Form.Control type="text" placeholder="first address"
                                name='address'
                                value={inputData.add1}
                                onChange={(e) => {
                                    setinputData({ ...inputData, add1: e.target.value })
                                }}
                            />
                            <p className='text-danger'>{formErrors.add1}</p>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control type="text" placeholder="first address"
                                name='address'
                                value={inputData.add2}
                                onChange={(e) => {
                                    setinputData({ ...inputData, add2: e.target.value })
                                }} />
                            <p className='text-danger'>{formErrors.add2}</p>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="first address"
                                name='address'
                                value={inputData.city}
                                onChange={(e) => {
                                    setinputData({ ...inputData, city: e.target.value })
                                }} />
                            <p className='text-danger'>{formErrors.city}</p>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="first address"
                                name='address'
                                value={inputData.state}
                                onChange={(e) => {
                                    setinputData({ ...inputData, state: e.target.value })
                                }} />
                            <p className='text-danger'>{formErrors.state}</p>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="number" placeholder="first address"
                                name='address'
                                value={inputData.zip}
                                onChange={(e) => {
                                    setinputData({ ...inputData, zip: e.target.value })
                                }} />
                            <p className='text-danger'>{formErrors.zip}</p>
                        </Form.Group>
                    </Row>
                {/* </Form> */}

            </Card>
    )
}

export default CorrespondanceAddress;

