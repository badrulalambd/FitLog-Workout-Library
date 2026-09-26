import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#090A0D] px-2 py-10'>
            <div className='container mx-auto flex flex-col md:flex-row gap-2 justify-between items-center'>
                <Link href='/'>
                    <Image
                        src='/asset/Brand Logo Left.png'
                        width={72}
                        height={20}
                        alt='footer logo'
                    />
                </Link>
                <p className='text-lg text-gray-400'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;