import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import '../sass/skolakort.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function Skolakort() {
  const [skort, setSkorts] = useState([]);

  useEffect(() => {
    getSkorts();
  }, []);

  async function getSkorts() {
    const { data } = await supabase.from("skort").select();
    setSkorts(data);
  }

  return (
    <>
        <div className="skolakort">

         <h1 className="skort">Skólakort</h1> 

         <div className="search flex justify-center">

         <input type="text" placeholder="Leita.." />
         
         </div>{/* .search */}

        <ul className="">

        {skort.map((skort) => (

        <li key={skort.id}>

       <div className="skort grid grid-cols-4 gap-2">
      
      <h1 className="main"> { skort.nafn }</h1>
      <p>{ skort.heimili }</p>

       </div>{/* .post */}

        </li>

        ))}
        </ul>    

      </div>
       
    </>
  );
}

export default Skolakort;
