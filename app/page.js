'use client'

import Link from 'next/link';
import {useState} from 'react';

export default function page() {

  const [img, $img] = useState('puppy-eyes');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);

  const updteImg = (im) => {
    $img(im);
  }

  const nah = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({x: `${x}%`, y: `${y}%`});
    updteImg('unamused');
  };

  const dontdoit = () => {
    nah();
    updteImg('shock');
    $how(true)
  }

  return (
    <div className='box'>
      <img alt='gumball' className='gif' src={`/${img}.gif`} />
      {how ? 'ahhh, infelizmente não há escolha' : 'Oi! Espero que esteja tudo bem por aí. estava pensando que seria legal a gente conversar um dia desses, a sós, pra nos conhecermos melhor se você topar e não tiver problema, claro! Podia ser na lanchonete ou na biblioteca do IFCE em uma quinta-feira. aceitaria?'}
      <div className='btns'>
        <Link className='sim' href='/yay'>
          <button onMouseOver={() => updteImg('sparkle-eyes')} onMouseOut={() => updteImg('puppy-eyes')}>
            sim
          </button>
        </Link>
        <button className='não' 
          style={p ? {position: 'absolute', top: p.x, right: p.y} : null} 
          onClick={dontdoit} onMouseOver={nah}>
            não
        </button> 
      </div>
    </div>
  )
  
}
