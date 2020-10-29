import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { connect} from 'react-redux';
import {getProfiles} from '../../redux/actions/profile';
import Spinner from "../Spinner";

const ProfileItem = ({profile}) => {
  return (
  
      <tr>
        <th scope="row">1</th>
        <td>{profile.name}</td>
        <td>{profile.email}</td>
        <td>{profile.executiveID}</td>
      </tr>
  )
}



const AllEmployees = ({getProfiles, profile: {profilesEmployee, loading }}) => {
  useEffect(() => {
    getProfiles();
}, [getProfiles]);

    return (
      <Fragment>
          { loading ? <Spinner /> : <Fragment>
            <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='head' className='text-center heading text-uppercase header'>
              All Employees
            </h3>
          </div>
          </div>
    
        <Table striped responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Emp_Id</th>
                </tr>
            </thead>
            <tbody>
            {profilesEmployee.length > 0 ? (
                        profilesEmployee.map(profile => (<ProfileItem key={profile._id} profile={profile} />
                        ))
                    ) : <h4>No profiles found...</h4>}
            </tbody>
        </Table>
        </div>
              </Fragment>}
      </Fragment>
        
    )
}

AllEmployees.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps,{getProfiles})(AllEmployees);