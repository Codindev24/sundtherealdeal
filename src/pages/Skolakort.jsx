import { useEffect, useState } from "react";
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

         <h1 className="laga">Skólakort</h1> 

        <ul className="">

        {skort.map((skort) => (

        <li key={laga.id}>

       <div className="post">
      
      <h1 className="main"><DangerousIcon /> { laga.title }</h1>
      <p>{ laga.desc }</p>

       </div>{/* .post */}

        </li>

        ))}
        </ul>    

      </div>
       
    </>
  );
}

export default Skolakort;
