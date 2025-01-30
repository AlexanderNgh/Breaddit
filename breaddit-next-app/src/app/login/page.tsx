import { Moirai_One } from 'next/font/google';
const logo_font = Moirai_One({
  subsets:['latin'],
  weight: ['400'],
});

export default function login() {
    return (
      <div className="w-full h-screen">
        <div className="flex w-full h-full justify-center items-center">
            <div className="grid grid-cols-1 gap-4 border-gray-200 border p-16 rounded-xl">
                <div className={`!font-bold !text-9xl ${logo_font.className}`}>
                    BREADDIT
                </div>

                <div>
                    enter user name
                </div>

                <div>
                    submit box
                </div>
            </div>
        </div>
      </div>
    );
  }