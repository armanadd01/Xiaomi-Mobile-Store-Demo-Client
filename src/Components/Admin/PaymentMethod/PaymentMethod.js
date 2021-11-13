import React from 'react';
import { Spinner } from 'react-bootstrap';

const PaymentMethod = () => {
    return (
        <div className="my-5 py-5 text-mi">
            <h1>
                Payment Method Coming Soon<Spinner animation="grow" variant="danger" size="sm" />
                <Spinner animation="grow" variant="danger" size="sm" />
                <Spinner animation="grow" variant="danger" size="sm" />
                <Spinner animation="grow" variant="danger" size="sm" />
                <Spinner animation="grow" variant="danger" size="sm" /></h1>
        </div>
    );
};

export default PaymentMethod;