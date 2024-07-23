import React from 'react';

const imageNames = [
    'actuate.svg',
    'TE_Connectivity_logo_gray.svg',
    'Bystronic_logo_gray.svg',
    'TE_Connectivity_logo_gray.svg',
    'clickin.svg',
    'eletrolux_logo_gray.svg',
    'TE_Connectivity_logo_gray.svg',
    'clickin.svg'
];

const CustomerLogos = () => {
    return (
        <div className="bg-gray-100">
            <div className='container mx-auto'>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 md:grid-cols-8 gap-6 md:gap-20 px-8">
                        {imageNames.map((name, index) => (
                            <img
                                key={index}
                                src={`/images/${name}`}
                                alt={`Logo ${index + 1}`}
                                className="w-36 h-40"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerLogos;
