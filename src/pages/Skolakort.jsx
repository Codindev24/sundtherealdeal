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

          <div className="newskortbar">

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
              <a href="">
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

         {/* <h1 className="skort flex justify-center">Skólakort</h1>  */}

         <div className="search flex justify-center">

         <input type="text" value={searchItem} onChange={handleInputChange} placeholder='Leita að korti..' />

         </div>{/* .search */}

        <div className="overflow-x-auto">
          <table className="table table-xs">

            <thead>
              <tr>
                <th>Id</th>
                <th className="nafn">Nafn</th>
                <th>Heimili</th>
                <th>Póstnúmer</th>
                <th>Staður</th>
                <th className="kt">Kennitala</th>
                <th>Útgáfudagur</th>
                <th>Gildir Til</th>
              </tr>
            </thead>

            <tbody>

              {skort.map((skort) => (

                <tr key={skort.id}>
                
                <th>{ skort.id }</th>
                <td className="nafn">{ skort.nafn }</td>
                <td>{ skort.heimili }</td>
                <td>{ skort.postnr }</td>
                <td>{ skort.stadur }</td>
                <td className="kt">{ skort.kennitala }</td>
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
