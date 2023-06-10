import React, { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useNavigate, useParams } from 'react-router';

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <GoSearch />
        </button>
      </form>
    </header>
  );
}
