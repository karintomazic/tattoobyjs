import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function MainHeading({ children, className = '' }) {
  return (
    <h2
      className={`mt-2 mb-12 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${merriweather.className} ${className}`}
    >
      {children}
    </h2>
  );
}
