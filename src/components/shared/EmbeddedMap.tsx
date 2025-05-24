import React from 'react';

const EmbeddedMap = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-[400px] aspect-video relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59812185.65284272!2d12.3067799!3d23.7956136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e900000001%3A0x85b866bce4c4a5f!2sBlue%20Sky%20CIty%20Limited!5e0!3m2!1sen!2sbd!4v1748068730911!5m2!1sen!2sbd"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default EmbeddedMap;
