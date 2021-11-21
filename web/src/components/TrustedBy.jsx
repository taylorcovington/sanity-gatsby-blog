import React from "react";
import fidelityLogo from "../assets/fidelity-logo.png";
import symplyLogo from "../assets/logo.png";
import linkHcmLogo from "../assets/linkhcm-logo.png";

const TrustedBy = () => {
  return (
    <>
      <div className="bg-indigo-200 bg-opacity-25">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* grid-cols-3 */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">
              I've had the opportunity to work with these great companies
            </h2>
            {/* col-span-2 */}
            <div className="flow-root self-center mt-8 lg:mt-0 ">
              <div className="lg:-mt-4 -ml-8 flex flex-wrap center lg:-ml-4 ">
                <div className="mt-4 ml-8 mr-3 my-4 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src={fidelityLogo}
                    alt="Fidelity logo"
                  />
                </div>
                <div className="mt-4 ml-8 mr-3 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img className="h-12" src={symplyLogo} alt="Symply logo" />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img className="h-12" src={linkHcmLogo} alt="Level" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
