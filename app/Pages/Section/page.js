import React from 'react';

const Section = () => {
    return (
        <div className='my-10 flex items-center justify-center text-center'>
            <div >
            <div className='grid lg:grid-cols-4 md:grid-cols gap-5 grid-cols-2 items-center max-w-6xl mx-auto text-xl text-center justify-around'>
                <div className='flex gap-2 items-center my-4'>
                    <h3 className='text-5xl'>1</h3>
                    <h4>Years of<br></br> Experience</h4>
                </div>
                <div className='flex gap-2 items-center'>
                    <h3 className='text-5xl'>25+</h3>
                    <h4>PROJECT</h4>
                </div>
                <div className='flex gap-3 items-center'>
                    <h3 className='text-5xl'>0</h3>
                    <h4>HAPPY<br></br>CLINT</h4>
                </div>
                <div className='flex gap-3 items-center'>
                    <h3 className='text-5xl'>1</h3>
                    <h4>Years of<br></br> Experience</h4>
                </div>
               
               
            </div>
            </div>
          
        </div>
    );
};

export default Section;