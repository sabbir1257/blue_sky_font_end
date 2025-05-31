import React from "react";

const EmbeddedMap = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-[400px] aspect-video relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116843.50613203371!2d90.0865884!3d23.770207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebef35f05bfd%3A0x2db6405916fbd940!2sBlue%20Sky%20City%20Limited!5e0!3m2!1sen!2sbd!4v1748670430749!5m2!1sen!2sbd"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedMap;
