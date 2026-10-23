'use client'

import { useEffect, useRef } from 'react'

export default function page() {
  const audioRef = useRef(null)

  useEffect(() => {
    // Toca a música quando a página carrega
    if (audioRef.current) {
      audioRef.current.volume = 0.6 // volume (0 a 1)
      audioRef.current.play().catch(() => {
        // Alguns navegadores bloqueiam autoplay
        console.log('Clique na tela para tocar a música')
      })
    }
  }, [])

  return (
    <div className='box'>
      {/* Música (fica escondida) */}
      <audio ref={audioRef} src="/musica.mp3" loop />

      <img alt='yayyy' className='gif' src='/snoopy-yay.gif' />
      {'você me fez a pessoa mais feliz agora <3, marcarei um dia legal para os dois, prometo não descepcionar'}
    </div>
  )
}
