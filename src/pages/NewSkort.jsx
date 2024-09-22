import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteSkort from "./DeleteSkort";
import AddHomeIcon from '@mui/icons-material/AddHome';
import PlaceIcon from '@mui/icons-material/Place';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import '../sass/newskort.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function NewSkort() {
  const [nafn, setNafn] = useState('');
  const [heimili, setHeimili] = useState('');
  const [postnr, setPostnr] = useState('');
  const [stadur, setStadur] = useState('');
  const [kt, setKt] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.from('skort').insert([{ nafn, heimili, postnr, stadur, kt }]);
    setNafn('');
    setHeimili('');
    setPostnr('');
    setStadur('');
    setKt('');

  }
  

  return (
    <>
        <div className="newskort">

        <div className="newskortbar  flex">

        <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
              Heim
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
              Skólakort
            </a>
          </li>
          <li>
            <a href="/newskort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Nýtt Skólakort
            </a>
          </li>
        </ul>
        </div>

        </div>{/* .newskortbar */}

        <div className="newpost flex justify-center">

        <form onSubmit={handleSubmit}>
      <PersonAddAlt1Icon />
       <input type="text" placeholder="Nafn.." value={nafn}
        className="input input-bordered w-full max-w-xs" 
        onChange={e => setNafn(e.target.value)} />

        <input type="text" placeholder="Heimili.." value={heimili}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setHeimili(e.target.value)} />

        <input type="text" placeholder="Póstnúmer.." value={postnr}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setPostnr(e.target.value)} />
  
        <input type="text" placeholder="Staður.." value={stadur}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setStadur(e.target.value)} />

        <input type="text" placeholder="Kennitala.." value={kt}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setKt(e.target.value)} />

          <button>Vista</button>
      </form>

        
        </div>{ /*.newpost */ }


      </div>
       
    </>
  );
}

export default NewSkort;
