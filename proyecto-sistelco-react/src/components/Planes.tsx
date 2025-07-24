import React from "react";
import { streamingServices } from "../data/dataSISTELCO";
import motion from "framer-motion";
import stockImage from "/images/logos/1366_2000.jpeg";

const Planes: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16">
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-red-200 to-pink-300 shadow-xl overflow-hidden transform rotate-1 hover:rotate-0 transition duration-500 ease-in-out">
                    <img
                        src={stockImage}
                        alt="Streaming Visual"
                        className="object-cover w-full h-full"
                    />

                </div>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6">
                {(streamingServices?.planes ?? []).map((service, index) => (
                <div>
                    <img
                        src={service.logo}
                        className="w-16 h-16 object-contain"
                    />
                </div>
                ))}
            </div>
        </section>
    );
};

export default Planes;