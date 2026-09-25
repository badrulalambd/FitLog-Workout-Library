import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#0F1115] mt-20 py-15'>
            <div className='container mx-auto'>

                <div className="rounded-3xl bg-[#1A1D23] py-10">
                    <div className="flex flex-col md:flex-col lg:flex-row gap-5">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center py-10 md:py-20 lg:py-30 px-5 md:px-10 lg:px-15">
                            <p className="mb-4 text-lg font-semibold uppercase text-[#C4F002]">
                                Workout Library
                            </p>

                            <h1 className="leading-tight font-semibold uppercase text-gray-100 text-4xl sm:text-5xl lg:text-6xl">
                                Train with intent. Log every set.
                            </h1>

                            <p className="mt-5 max-w-xl text-[18px] lg:text-[20px] font-semibold leading-7 text-gray-300">
                                FitLog is a dark, no-nonsense gym companion: pick a lift,
                                lock it into today&apos;s plan, and watch the week&apos;s work
                                add up.
                            </p>

                            <div className="mt-8">
                                <Link href='/#library'>
                                    <button className="cursor-pointer rounded-xl bg-[#C4F002] px-6 py-3 text-lg font-bold text-[#1A1D23] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff32] hover:shadow-lg hover:shadow-[#C4F002]/20">
                                        Browse Workouts
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex items-center justify-center overflow-hidden min-h-90 md:min-h-100 w-full md:w-full lg:w-1/2">
                            <Image
                                src="/asset/banner.png"
                                alt="Workout training"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain object-center"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#1A1D23] via-[#1A1D23]/30 to-transparent md:from-[#1A1D23]/80 md:via-[#1A1D23]/20" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;