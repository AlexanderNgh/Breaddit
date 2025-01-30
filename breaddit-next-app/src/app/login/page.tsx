import { Moirai_One } from 'next/font/google';
const logo_font = Moirai_One({
  subsets:['latin'],
  weight: ['400'],
});

import { motion } from 'framer-motion';

export default function login() {
    const LOGO = 'BREADDIT'
    return (
      <div className="w-full h-screen">
        <div className="flex w-full h-full justify-center items-center">
            <div className="grid grid-cols-1 border-gray-500 border p-16 rounded-xl shadow-sm space-y-16">
                <div className={`!font-bold !text-5xl ${logo_font.className}
                                 lg:!text-8xl
                                `}>
                    {LOGO}
                </div>

                <div className='w-full flex justify-center text-4xl'>
                    enter username
                </div>

                <div className='w-full flex justify-center'>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder='Anonymous Penguin'
                        className='border border-gray-200 rounded-xl p-4'
                    />
                </div>

                <div className='w-full flex justify-center'>
                    <button className='w-fit px-4 py-2 border border-gray-500 rounded-full'>
                        submit
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  }