import React from "react";

const EmbeddedMap = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-[400px] aspect-video relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.645959668134!2d90.3510799760799!3d23.795618487037405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e900000001%3A0x85b866bce4c4a5f!2sBlue%20Sky%20CIty%20Limited!5e0!3m2!1sen!2sbd!4v1748231471304!5m2!1sen!2sbd"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedMap;
