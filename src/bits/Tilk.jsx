import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import '../sass/laga.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function Tilk() {
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

         <h1 className="laga">Þarfnast Lagfæringa</h1> 

        <ul className="">

        {laga.map((laga) => (

        <li key={laga.id}>

       <div className="post">

      <h1 className="main">{ laga.title }</h1>
      <p>{ laga.desc }</p>

       </div>{/* .post */}

        </li>

        ))}
        </ul>    

      </div>
       
    </>
  );
}

export default Tilk;
