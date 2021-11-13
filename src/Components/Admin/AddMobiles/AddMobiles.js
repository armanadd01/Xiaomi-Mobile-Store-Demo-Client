import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddMobiles = () => {
    const { register, handleSubmit, reset } = useForm();
    //handle plans from
    const onSubmit = data => {
        console.log(data)
        axios.post('https://thawing-meadow-71532.herokuapp.com/mobiles', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Mobile Added Successfully');
                    reset();
                }

            })
    };
    return (
        <>
            <Container className=" my-5 ">
                <Row className=" align-items-center " >
                    <Col md={12} className=" rounded shadow p-5 bg-mi">
                        <div className="form-section text-center test-light">
                            <h1 className="text-light">Add The Mobile</h1>
                            <div className="form">
                                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control m-3" placeholder="Enter Mobile Name" type="text"  {...register("name", { required: true, maxLength: 40 })} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Colors" type="text"  {...register("colors")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Size" type="text"  {...register("size")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Display Resolution" type="text"  {...register("resolution")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile RAM" type="text"  {...register("ram")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Storage" type="text"  {...register("rom")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Rear Camera" type="text"  {...register("rearcamera")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Front Camera" type="text"  {...register("frontcamera")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Operating System" type="text"  {...register("os")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Processor(SoC)" type="text"  {...register("soc")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Graphics Processing Unit(GPU)" type="text"  {...register("gpu")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Price" type="number" {...register("Price")} />
                                    <input className="form-control m-3" placeholder="Enter Mobile Image Url" type="text"  {...register("img")} />
                                    <input className="btn btn-outline-light" type="submit" />
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddMobiles;