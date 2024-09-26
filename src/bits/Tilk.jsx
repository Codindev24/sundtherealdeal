import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import InfoIcon from '@mui/icons-material/Info';
import '../sass/tilk.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function Tilk() {
  const [tilk, setTilks] = useState([]);

  useEffect(() => {
    getTilks();
  }, []);

  async function getTilks() {
    const { data } = await supabase.from("tilk")
    .select();
    setTilks(data);
  }

  return (
    <>
        <div className="tilk">

         <h1 className="tilk">Tilkynningar</h1> 

        <ul className="">

        {tilk.map((tilk) => (

        <li key={tilk.id}>

       <div className="post">

      <h1 className="main"><InfoIcon /> { tilk.title }</h1>
      <p>{ tilk.desc }</p>

       </div>{/* .post */}

        </li>

        ))}
        </ul>    

      </div>
       
    </>
  );
}

export default Tilk;
