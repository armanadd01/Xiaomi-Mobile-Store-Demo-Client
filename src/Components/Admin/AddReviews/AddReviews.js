import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    //handle Mobile from
    const onSubmit = data => {
        console.log(data)
        axios.post('https://thawing-meadow-71532.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Review Added Successfully');
                    reset();
                }

            })
    };
    return (
        <div>
            <Container className=" my-5 ">
                <Row className=" align-items-center " >
                    <Col md={12} className=" rounded shadow p-5 bg-mi">
                        <div className="form-section text-center test-light">
                            <h1 className="text-light">Add The Reviews</h1>
                            <div className="form">
                                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control m-3" placeholder="Enter Your Name" type="text"  {...register("name", { required: true, maxLength: 40 })} />
                                    <input className="form-control m-3" placeholder="Enter Your profession" type="text"  {...register("profession")} />
                                    <textarea className="form-control m-3" placeholder="Enter Plans Short Description" {...register("reviews", { required: true, maxLength: 100 })} />
                                    <input className="form-control m-3" placeholder="Enter Your Rating" type="number" {...register("rating", { min: 0, max: 5 })} min="0" max="5" />
                                    <input className="btn btn-outline-light" type="submit" />
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddReviews;