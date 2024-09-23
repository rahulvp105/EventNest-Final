import './Stalls.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';

function Stalls() {
    return (
        <div className="container mt-4">
            <h1 style={{fontSize: "40px"}} className='text-center'>Hey! Are you looking for stall for upcoming events?</h1>
            <p style={{fontSize: "15px"}} className='text-center'>Your finding is finished! You can book the stall for upcoming events that bring so much crowd</p>
            <div className="stall-info mt-5">
            <div className="row">
                <div className="col col-md-6">
                    <img src="Images/food-stall.jpg" className='stall-1'></img>
                </div>
                <div className="col col-md-6">
                    <h1>Food Stall</h1>
                    <p>Available for booking </p>
                    <p>Rent Price: 5000 per day</p>
                    <button type="button" className="btn btn-success">Book Now</button>

                </div>
            </div>

            </div>
            <div className='stall-info mt-4'>
            <div className="row">
                <div className="col col-md-6">
                    <img src="Images/cloth-stall.jpg" className='stall-1'></img>
                </div>
                <div className="col col-md-6">
                    <h1>Cloth Stall</h1>
                    <p>Available for booking </p>
                    <p>Rent Price: 5000 per day</p>
                    <button type="button" className="btn btn-success">Book Now</button>

                </div>
            </div>
            </div>

            <div className='stall-info mt-4'>
            <div className="row">
                <div className="col col-md-6">
                    <img src="Images/coffee-stall.jpg" className='stall-1'></img>
                </div>
                <div className="col col-md-6">
                    <h1>Coffee Stall</h1>
                    <p>Available for booking </p>
                    <p>Rent Price: 5000 per day</p>
                    <button type="button" className="btn btn-success">Book Now</button>

                </div>
            </div>
            </div>

            <div className='stall-info mt-4'>
            <div className="row">
                <div className="col col-md-6">
                    <img src="Images/book-stall.jpg" className='stall-1'></img>
                </div>
                <div className="col col-md-6">
                    <h1>Book Stall</h1>
                    <p>Available for booking </p>
                    <p>Rent Price: 5000 per day</p>
                    <button type="button" className="btn btn-success">Book Now</button>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Stalls
