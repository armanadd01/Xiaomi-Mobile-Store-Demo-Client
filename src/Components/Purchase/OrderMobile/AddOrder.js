import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AddOrder = ({ mobiles }) => {
    const { _id, Price, name, img, } = mobiles;
    const { user } = useAuth();

    //from handler
    const { register,
        handleSubmit,
        reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        data.email = user?.email;
        axios.post('https://thawing-meadow-71532.herokuapp.com/addorder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Added Successfully');
                    window.location.reload();
                    reset();
                }

            })
    };

    return (
        <>

            <Card className="bg-mi text-center">
                <Card.Header>
                    <Card.Title className="text-light ">Card Title</Card.Title>
                </Card.Header>
                <Card.Body>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-2" placeholder="Enter Id" type="hidden"  {...register("id", { required: true })} defaultValue={_id} />
                        <input className="form-control " placeholder="Enter Plans Name" type="text"  {...register("name", { required: true, maxLength: 20 })} defaultValue={name} />
                        <input className="form-control my-2" placeholder="Enter User Name" type="text"  {...register("username")} defaultValue={user?.displayName} />
                        <input className="form-control  my-2" placeholder="Enter Email" type="text"  {...register("email")} defaultValue={user?.email} />
                        <label for="label" className="form-label text-start ps-3">Enter Your Delivery Date</label>
                        <input className="form-control my-2" id="label" placeholder="Enter Date" type="date" defaultValue={new Date()}  {...register("date")} />

                        <input className="form-control my-2" placeholder="Status" type="hidden" defaultValue="Pending"  {...register("status")} />
                        <input value="Confirm" className="btn btn-outline-light" type="submit" />


                    </form>

                </Card.Body>
            </Card>
        </>
    );
};

export default AddOrder;