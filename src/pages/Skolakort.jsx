import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import '../sass/skolakort.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function Skolakort() {
  const [skort, setSkorts] = useState([]);
  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }

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

         <h1 className="skort flex justify-center">Skólakort</h1> 

         <div className="search flex justify-center">

         <input type="text" placeholder="Leita.." />

         <input type="text" value={searchItem} onChange={handleInputChange} placeholder='Type to search' />

         </div>{/* .search */}

        <div className="overflow-x-auto">
          <table className="table table-xs">

            <thead>
              <tr>
                <th>Id</th>
                <th>Nafn</th>
                <th>Heimili</th>
                <th>Póstnúmer</th>
                <th>Staður</th>
                <th>Kennitala</th>
                <th>Útgáfudagur</th>
                <th>Gildir Til</th>
              </tr>
            </thead>

            <tbody>

            {skort.map(user => <li key={skort.id}>{skort.nafn}</li>)}

              {skort.map((skort) => (

                <tr key={skort.id}>
                
                <th>{ skort.id }</th>
                <td>{ skort.nafn }</td>
                <td>{ skort.heimili }</td>
                <td>{ skort.postnr }</td>
                <td>{ skort.stadur }</td>
                <td>{ skort.kennitala }</td>
                <td>{ skort.created_at }</td>
                <td>{ skort.gildirtil }</td>

               </tr>

              ))}


            </tbody>

          </table>

          
        </div>   

      </div>
       
    </>
  );
}

export default Skolakort;
