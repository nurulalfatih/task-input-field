'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import "@styles/diary.css"



export default function Diary() {
    const [judul, setJudul] = useState([]);
    const [isi, setIsi] = useState([]);

    const endpointAPI = 'https://6555c59884b36e3a431e4dd4.mockapi.io/diary';

    async function getDiary() {
        try{
            const res = await axios.get(endpointAPI);
            const data = res.data;

            const judul = data.map((item) => item.judul);
            setJudul(judul);

            const isi = data.map((item) => item.isi);
            setIsiDiary(isi);
        }
        catch(error){
            console.log("error data: ${error}")
        }   
    }

    useEffect(() => {
        getDiary();
      }, []);

    return (
        <>
            <div>
                {judul.length > 0 ? (
                    <ul>
                        {judul.map((item, idx) => (
                            <li>
                                <div className='diary-container'>
                                    <h1>{judul[idx]}</h1>
                                    <p className='p-diary'>{isi[idx]}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    "API not loading"
                )}
            </div>
        </>
    )
}

