import React from 'react';

const IntroSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 lg:px-0">
   <div className="lg:flex lg:justify-between lg:items-start mt-12 space-y-6 lg:space-y-0 lg:space-x-8">
  {/* Left Section: Title and Text */}
  <div className="lg:w-1/2 space-y-4">
    <h2 className="text-4xl font-script font-black text-gray-800">Dwell into a world of sweets</h2>
    <p className="text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>

  {/* Right Section: Overlapping Images */}
  <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative">
      {/* Chocolate Cake Image */}
      <img
        src="assets/chocolate-cake.png"
        alt="Chocolate Cake"
        className="w-48 h-48 lg:w-64 lg:h-64 rounded-lg shadow-lg"
      />
      {/* Macaroons Image with Adjusted Position */}
      <img
        src="assets/macaroonss.png"
        alt="Macaroons"
        className="w-48 h-48 lg:w-64 lg:h-64 rounded-lg shadow-lg absolute top-12 left-12 lg:top-16 lg:left-16 "
      />
    </div>
  </div>
</div>


      
      <div className="lg:flex lg:justify-between lg:items-center mt-16 space-y-6 lg:space-y-0">
        
        <div className="lg:w-1/2 text-gray-700 leading-relaxed">
          <h2 className="text-4xl font-script font-black text-gray-800 mb-4">Freshly Baked Bread</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <img src="assets/macaroons.PNG" alt="Bread Basket" className="lg:w-1/2 rounded-lg" />
      </div>
    </div>
  );
};

export default IntroSection;
