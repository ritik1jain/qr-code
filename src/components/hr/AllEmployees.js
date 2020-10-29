import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { connect} from 'react-redux';
import {getProfiles} from '../../redux/actions/profile';
import { Spinner } from 'reactstrap';

const ProfileItem = ({profile, index}) => {
  return (
  
      <tr>
        <th scope="row">{index+1}</th>
        <td>{profile.name}</td>
        <td>{profile.emailId}</td>
        <td>{profile.executiveID ? profile.executiveID : profile.executiveId}</td>
      </tr>
  )
}



const AllEmployees = ({getProfiles, profile: {profilesEmployee, loading }}) => {
  useEffect(() => {
    getProfiles();
}, [getProfiles]);

    return (
      <Fragment>
          { loading ? <Spinner color="primary" /> : <Fragment>
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
                        profilesEmployee.map((profile,index) => (<ProfileItem index={index} key={profile._id} profile={profile} />
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