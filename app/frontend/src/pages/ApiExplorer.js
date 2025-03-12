import React, { useEffect, useState } from 'react';
import EndpointList from '../components/EndpointList';

function ApiExplorer() {
    const [endpoints, setEndpoints] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/openapi.json')
            .then(response => response.json())
            .then(data => setEndpoints(data.paths))
            .catch(err => console.error('Error fetching endpoints:', err));
    }, []);

    return (
        <div className="container">
            <h2>API Explorer</h2>
            <EndpointList endpoints={endpoints} />
        </div>
    );
}

export default ApiExplorer;

