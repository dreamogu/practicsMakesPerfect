import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function DarkMode() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800'>
      <h1 className='m-6 font-bold text-4xl dark:text-white'>
        다크모드 테스트하기
      </h1>
      <div>
        <button
          onClick={toggleTheme}
          className='rounded-full bg-cyan-700 p-2 text-white font-bold dark:bg-cyan-300 dark:text-black'
        >
          스크린모드 변경하기
        </button>
      </div>
    </div>
  );
}
