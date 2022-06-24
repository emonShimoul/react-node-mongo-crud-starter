import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is Update User</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;