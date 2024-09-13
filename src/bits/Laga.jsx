import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import '../sass/laga.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function Laga() {
  const [laga, setLagas] = useState([]);

  useEffect(() => {
    getLagas();
  }, []);

  async function getLagas() {
    const { data } = await supabase.from("laga").select();
    setLagas(data);
  }

  return (
    <>
        <div className="laga">

        <ul className="grid grid-cols-4">

        {laga.map((laga) => (

        <li key={laga.id}>

       <div className="post">

      <h1>{ laga.title }</h1>
      <p>{ laga.desc }</p>

       </div>{/* .post */}

        </li>

        ))}
        </ul>    

      </div>
       
    </>
  );
}

export default Laga;
