'use client'

import { useState } from 'react'
import Image from 'next/image'
import "@styles/home.css"

export default function Home() {

  const [input, setInput] = useState('')
  const [nama, setNama] = useState('Nurul Alfatih Khumaera Azzahra H')
  const [kosong, setKosong] = useState('true')


  const handlerGantiNama = () => {
    setNama(input);
  }

  const handlerInput = (val) => {
    setInput(val);
    setKosong(val.trim() === '');
  }

  function enterButton(e) {
    if (e.key == "Enter") handlerGantiNama();
  }

  let content;
  if (kosong) {
    content = (
      <button className="cta active">
        <p>Change Your Name</p>
      </button>
    );
  } else {
    content = (
      <button className="cta" onClick={() => {
        handlerGantiNama();
      }}>
      <p>Change Your Name</p>
    </button>
    );
  }

  return (
    <>
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="foto">
            <Image
            src="/assets/pasphoto.png"
            fill
            objectFit='contain'
            />
          </div>
          <div className="name">
            <h1>{nama}</h1>
            <div className="bio">
              <p>D121211008</p>
              <p>Teknik Informatika</p>
            </div>
          </div>
        </div>
        <div className="cta">
          <input
            placeholder='Add Your Name'
            onInput={(val) => handlerInput(val.target.value)}
            onKeyDown={(value) => {
              enterButton(value)
            }}
          ></input>
          {content}
        </div>
      </div>
    </>
  )
}