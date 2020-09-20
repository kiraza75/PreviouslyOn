import React, { useEffect } from 'react';

const Serie = ({match}) => {

    return (
        <div>
            <h2>{match.params.id}</h2>
        </div>
    );
}

export default Serie;