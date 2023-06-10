import React, { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { AiFillYoutube } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Header() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  // useEffect로 인해 뒤로가기나
  return (
    <header className='flex p-4 text-2xl shadow'>
      <Link to='/'>
        <h1 className='flex items-center text-2xl font-bold'>
          <AiFillYoutube className='mr-2 text-brand' />
          Youtube
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className='flex justify-center w-full'
      >
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='검색어를 입력해주세요.'
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
        />
        <button className='bg-zinc-600 px-4'>
          <GoSearch />
        </button>
      </form>
    </header>
  );
}
