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

       <div className="skort flex">
      
      <h1><span>Nafn:</span> <span className="info">{ skort.nafn }</span></h1>
      <h1><span>Heimili:</span> { skort.heimili }</h1>
      <h1><span>Póstnr:</span> { skort.postnr }</h1>
      <h1><span>Staður:</span> { skort.stadur }</h1>
      <h1><span>Kennitala:</span> { skort.kennitala }</h1>

       </div>{/* .post */}

        </li>

        ))}
        </ul>    

      </div>
       
    </>
  );
}

export default Skolakort;
