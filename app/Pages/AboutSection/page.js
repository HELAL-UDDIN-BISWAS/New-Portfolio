import Image from 'next/image';
import './About.css'
import image from "../../../public/Animation - 1713187187859.gif"
const AboutMe = () => {
    return (
        <div className="aboutStyle my-9 max-w-7xl mx-auto ">
            <h3></h3>
            <div className='grid md:grid-cols-2 max-w-6xl mx-auto'>
                <div className='items-center justify-center text-center flex'>
                    <Image
                    src={image}
                    height={250}
                    width={250}
                    ></Image>
                </div>
                <div className='w-4/5 py-8 px-6'>
                    <p>Hello, I'm Helal, a passionate front-end web developer with a keen eye for design and a love
                        for creating seamless user experiences. My expertise lies in crafting responsive and visually
                        appealing websites using cutting-edge technologies such as HTML, CSS, and JavaScript.,react,
                        MongoDB, Express.js, Node.js and TAilwind Css. Login using Firebase.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;