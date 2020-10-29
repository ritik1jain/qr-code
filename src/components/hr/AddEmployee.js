import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import QrCode from './qrcode';

const AddEmployee = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        executive_id: '',
        phone: '',
        designation: '',
        pan_no: '',
        projectName: '',
        address: '',
        result:false
      });
    
      const { name, email, password, executive_id, phone, designation, pan_no, projectName, address, result } = formData;

      const toggleResult = () => {
          setFormData({...formData, result: true});

      }; 
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // toggleResult();
      }
        const onSubmit = (e) => {
        e.preventDefault();
        toggleResult();
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
                        <Label for="executive_id">
                            executive_id:
                        </Label>
                        <Input type="text" name="executive_id" id="executive_id" placeholder="executive_id" value={executive_id}
            onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">
                            Name:
                        </Label>
                        <Input type="text" name="name" id="name" placeholder="name" value={name} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">
                            Email:
                        </Label>
                        <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="password">
                            password:
                        </Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={password} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">
                            phone:
                        </Label>
                        <Input type="text" name="phone" id="phone" placeholder="phone" value={phone} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="designation">
                            designation:
                        </Label>
                        <Input type="text" name="designation" id="designation" placeholder="designation" value={designation} onChange={(e) => onChange(e)}/>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pan_no">
                            Pan No.:
                        </Label>
                        <Input type="pan_no" name="pan_no" id="pan_no" placeholder="pan_no" value={pan_no} onChange={(e) => onChange(e)}/>
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

export default AddEmployee;