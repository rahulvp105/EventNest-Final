// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Stalls.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// // import { Link } from 'react-router-dom';

// function Stalls() {
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/events/') // Your Django API endpoint
//             .then(response => {
//                 setEvents(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError('There was an error fetching the events!');
//                 setLoading(false);
//                 console.error('Error fetching events:', error);
//             });
//     }, []);

//     if (loading) {
//         return <div className="text-center mt-4"><p>Loading...</p></div>;
//     }

//     if (error) {
//         return <div className="text-center mt-4"><p>{error}</p></div>;
//     }

//     return (
//         <div className="container mt-4">
//             {/* <Link to="/addevent" className="btn btn-primary">Add New Event</Link> */}
//             <h1 style={{ fontSize: "40px" }} className='text-center'>
//                 Hey! Are you looking for stalls for upcoming events?
//             </h1>
//             <p style={{ fontSize: "15px" }} className='text-center'>
//                 Your search is over! You can book a stall for upcoming events that attract a lot of crowds.
//             </p>
//             {events.length === 0 ? (
//                 <div className="text-center mt-4">
//                     <p>No events available at the moment.</p>
//                 </div>
//             ) : (
//                 events.map(event => (
//                     <div className="stall-info mt-4" key={event.id}>
//                         <div className="row">
//                             <div className="col col-md-6">
//                                 <img
//                                     src={`http://localhost:8000${event.image}`} // Correctly using template literals
//                                     className='stall-1'
//                                     alt={event.title}
//                                 />
//                             </div>
//                             <div className="col col-md-6">
//                                 <h1>{event.title}</h1>
//                                 <p>{event.description}</p>
//                                 <p>Date: {event.date}</p>
//                                 <p>Time: {event.time}</p>
//                                 <p>Location: {event.location}</p>
//                                 <p>Rent Price: 5000 per day</p>
//                                 <button type="button" className="btn btn-success">
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default Stalls;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Stalls.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Stalls() {
    const [stalls, setStalls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stalls/') // Django API endpoint
            .then(response => {
                console.log(response.data); // Log response for debugging
                setStalls(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('There was an error fetching the stalls!');
                setLoading(false);
                console.error('Error fetching stalls:', error);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-4"><p>Loading...</p></div>;
    }

    if (error) {
        return <div className="text-center mt-4"><p>{error}</p></div>;
    }

    return (
        <div className="container mt-4">
            <h1 style={{fontSize: "40px"}} className='text-center'>
                Available Stalls for Upcoming Events
            </h1>
            <p style={{fontSize: "15px"}} className='text-center'>
                Book your stall for upcoming events!
            </p>
            {stalls.length === 0 ? (
                <div className="text-center mt-4">
                    <p>No stalls available at the moment.</p>
                </div>
            ) : (
                stalls.map(stall => (
                    <div className="stall-info mt-4" key={stall.id}>
                        <div className="row">
                            <div className="col col-md-6">
                                <img
                                    src={`${stall.image}`} // Correctly formatted URL
                                    className='stall-1'
                                    alt={stall.name}
                                />
                            </div>
                            <div className="col col-md-6">
                                <h1>{stall.name}</h1>
                                <p>{stall.description}</p>
                                <p>Rent Price: ₹{stall.rent_price} per day</p>
                                <button type="button" className="btn btn-success">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Stalls;