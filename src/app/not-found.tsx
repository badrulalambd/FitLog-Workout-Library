import Link from "next/link";

const NotFound = () => {
    return (
        <div className='bg-[#0F1115]'>
            <div className='container mx-auto py-20 mt-20 text-center'>
                <h2 className='text-center text-2xl md:text-3xl lg:text-3xl uppercase text-gray-200'>404 — Missed that lift</h2>
                <p className="text-[18px] lg:text-[20px] font-semibold text-gray-400 mt-3 text-center">The page you wanted is not in the library. Head back to the floor and pick a workout that exists.</p>

                <Link href='/'>
                    <button className="mt-5 md:mt-8 cursor-pointer rounded-xl bg-[#C4F002] px-6 py-3 text-lg font-bold text-[#1A1D23] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff32] hover:shadow-lg hover:shadow-[#C4F002]/20">
                        Go to workouts
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;