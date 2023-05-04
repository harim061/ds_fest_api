import EventCom from '../components/Event/EventCom';
import EventForm from '../components/Event/EventForm';
import EventPoster from '../components/Event/EventPoster';
import React from 'react';
import '../css/EventPage.css';

function EventPage() {
    return (
        <div className="insertBody">
            <div className="eventtitle">낭만에 대하여</div>
            <EventPoster />
            <EventForm />
            <div className="line2"></div>
            <EventCom />
        </div>
    );
}

export default EventPage;
