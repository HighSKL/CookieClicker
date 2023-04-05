import React from 'react';
import { connect } from 'react-redux';
import withGameModalWindow from '../../../../Assets/Common/withGameModalWindow';

const Sapper = () => {
    return (
        <div>
            
        </div>
    );
};

export default connect()(withGameModalWindow(Sapper));