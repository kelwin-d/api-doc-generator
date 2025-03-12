import React from 'react';

function EndpointDetails({ endpoint, methods }) {
    return (
        <div className="endpoint-details">
            <h3>{endpoint}</h3>
            {methods && Object.keys(methods).map((method) => (
                <div key={method} className={`method-card method-${method.toLowerCase()}`}>
                    <strong>{method.toUpperCase()}</strong>
                    <p>{methods[method].description || "No description available."}</p>

                    {methods[method].parameters && (
                        <div className="params-section">
                            <h4>Parameters:</h4>
                            <ul>
                                {methods[method].parameters.map((param, index) => (
                                    <li key={index}>
                                        <strong>{param.name}</strong> ({param.in}) — {param.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default EndpointDetails;

