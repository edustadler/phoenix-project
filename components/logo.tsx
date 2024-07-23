import Image from 'next/image';
import React from 'react';


const Logo = () => {
    return (
        <div className='container mx-auto py-4'>
            <Image
            src={'/images/lf_ai_logo.svg'}
            width={500}
            height={500}
            alt={'logo'}
            />
        </div>
    );
};

export default Logo;
