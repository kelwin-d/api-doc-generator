import React from 'react';

function EndpointList({ endpoints }) {
    return (
        <div>
            {Object.entries(endpoints).map(([path, methods]) => (
                <div key={path} className="endpoint-card">
                    <h3>{path}</h3>
                    {Object.keys(methods).map((method) => (
                        <p key={method}><strong>{method.toUpperCase()}</strong> - {methods[method].summary || 'No description available'}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default EndpointList;

