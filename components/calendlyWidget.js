import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const isCalendlyScheduledEvent = (e) => {
  return e.data.event &&
         e.data.event.indexOf('calendly') === 0 &&
         e.data.event === 'calendly.event_scheduled'
}

const CalendlyWidget = () => {
  const router = useRouter();
  useEffect(() => {
    window.addEventListener(
      'message',
      (e) => {
        if (isCalendlyScheduledEvent(e)) {
          console.log("Event Scheduled!");
          router.push('/a217b9fg');
        }
      }
    )
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/arnav-jha-tennora/demo-call"
      style={{ minWidth: '320px', height: '630px' }}
    ></div>
  );
};

export default CalendlyWidget;
