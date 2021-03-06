import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useProfiles from '../../hooks/useProfiles';

import ProfileRow from './ProfileRow';

const MakeAdmin = () => {
    const [allProfiles] = useProfiles();
    return (
        <div>
            <Container>
                <div className='mt-3'>
                    <h2 className='text-center  display-5 fw-bold text-warning ms-2'>All Profiles : {allProfiles.length}</h2>
                    <p className="text-center text-secondary fw-bold">As an Admin you have the privilege to see all the users and make an admin</p>

                    <Table responsive variant='secondary' className='text-center mt-4 rounded w-100 rounded-3'>
                        <thead>
                            <tr>

                                <th className='text-warning base-bg'>Number</th>
                                <th className='text-warning base-bg'>Email</th>
                                <th className='text-warning base-bg'>Name</th>
                                <th className='text-warning base-bg'>Make Admin</th>
                                <th className='text-warning base-bg'>Remove</th>

                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {
                                allProfiles.map((profile, index) => <ProfileRow key={profile?._id} profile={profile} index={index}></ProfileRow>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>

        </div>
    );
};

export default MakeAdmin;