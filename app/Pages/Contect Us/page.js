import React from 'react';

const ContectUs = () => {
    return (
        <div className='grid md:grid-cols-2 '>
           <div></div>
           <div>
           <form className=''>
                <div className=''>
                    <div className="w-full">
                        <label className='block'>
                            <span>Name</span>
                        </label>
                        <input type="text" className="md:w-96 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Name' required />
                    </div>
                    <div className="w-full">
                        <label className='block'>
                            <span>Email</span>
                        </label>
                        <input type="email"  className="md:w-96 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                    </div>

                    <div className="w-full">
                        <label className='block'>
                            <span>Massege</span>
                        </label>
                        <textarea type="massege" className="md:w-96 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Massege' required />
                    </div>
                </div>
                <button className="py-3 bg-primary-500 hover:bg-primary-600 text-white px-5 rounded my-2 ">SignUp</button>
            </form>
           </div>
        </div>
    );
};

export default ContectUs;