import React, { useState } from 'react';

import { connect } from 'react-redux';
import { verify } from '../../actions/auth';
import { useParams } from 'react-router-dom';

const Activate = ({ verify }) => {
    let { uid } = useParams();
    let { token } = useParams();
    const [verified, setVerified] = useState(false);

    const verify_account = () => {

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        window.close()
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '200px' }}>

                <h1>Verify your Account:</h1>
                <button onClick={verify_account} style={{ marginTop: '50px' }} type='button' className="btn btn-dark mt-3">
                    Verify
                </button>

            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
