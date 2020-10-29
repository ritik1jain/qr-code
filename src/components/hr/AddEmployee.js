import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import QrCode from './qrcode';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {addEmployee} from '../../redux/actions/profile';

const AddEmployee = ({addEmployee}) => {

    const [formData, setFormData] = useState({
        name: '',
        emailId: '',
        executiveId: '',
        phone: '',
        designation: '',
        panNumber: '',
        projectName: '',
        address: ''
      });
    
      const { name, emailId, executiveId, phone, designation, panNumber, projectName, address } = formData;
      const toggleResult = () => {
          setFormData({...formData, result: true});

      }; 
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // toggleResult();
      }
        const onSubmit = async(e) => {
        e.preventDefault();
        toggleResult();
        addEmployee(formData);
      };
    
    return (
        <>       
        <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='head' className='text-center heading text-uppercase header'>
              Add Employee
            </h3>
          </div>
          </div>
    
        <Form onSubmit={e => onSubmit(e)}>
            <Row form>
            <Col md={6}>
                    <FormGroup>
                        <Label for="executiveId">
                            executiveId:
                        </Label>
                        <Input required type="text" name="executiveId" id="executiveId" placeholder="executiveId" value={executiveId}
            onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">
                            Name:
                        </Label>
                        <Input required type="text" name="name" id="name" placeholder="name" value={name} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="emailId">
                            emailId:
                        </Label>
                        <Input required type="emailId" name="emailId" id="emailId" placeholder="emailId" value={emailId} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                {/* <Col md={6}>
                    <FormGroup>
                        <Label for="password">
                            password:
                        </Label>
                        <Input required type="password" name="password" id="password" placeholder="password" value={password} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col> */}
                </Row>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">
                            phone:
                        </Label>
                        <Input required type="text" name="phone" id="phone" placeholder="phone" value={phone} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="designation">
                            designation:
                        </Label>
                        <Input required type="text" name="designation" id="designation" placeholder="designation" value={designation} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="panNumber">
                            Pan No.:
                        </Label>
                        <Input required type="panNumber" name="panNumber" id="panNumber" placeholder="panNumber" value={panNumber} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="projectName">
                            Project:
                        </Label>
                        <Input type="text" name="projectName" id="projectName" placeholder="projectName" value={projectName} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                        <Label for="address">
                            address:
                        </Label>
                        <Input type="address" name="address" id="address" placeholder="address" value={address} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                <Button type="submit" >Add Employee</Button>
            </Form>
            {formData.result && (<QrCode formdata={formData} />)}
            </div>
        </>
    )
}


AddEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired,
  };
  
  export default connect(null, { addEmployee })(withRouter(AddEmployee));
  