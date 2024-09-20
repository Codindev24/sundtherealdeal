import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import '../sass/newskort.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function Skolakort({ nafn, heimili, postnr, stadur, kt }) {
  const [skort, setSkorts] = useState([]);

  async function createPost() {
    await supabase
    .from ('posts')
    .insert([
        { nafn, heimili, postnr, stadur, kt }
    ])
    .single()
    setPost({ nafn: "", heimili: "", postnr: "", stadur: "", kt: "" })
    fetchPosts()
  }

  return (
    <>
        <div className="newskort flex justify-center">

        <div className="newpost flex-none jutify-center">

        <input type="text" placeholder="Nafn.." value={nafn}
        className="input input-bordered w-full max-w-xs" 
        onChange={e => setPost({ ...post, nafn: e.target.value })} />
        <br />
        <input type="text" placeholder="Heimili.." value={heimili}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setPost({ ...post, heimili: e.target.value })} />
        <br />
        <input type="text" placeholder="Póstnúmer.." value={postnr}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setPost({ ...post, postnr: e.target.value })} />
        <br />
        <input type="text" placeholder="Staður.." value={stadur}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setPost({ ...post, stadur: e.target.value })} />
        <br />
        <input type="text" placeholder="Kennitala.." value={kt}
        className="input input-bordered w-full max-w-xs"  
        onChange={e => setPost({ ...post, kt: e.target.value })} />

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow" placeholder="Nafn.." />
      </label>
        
        </div>{ /*.newpost */ }

      </div>
       
    </>
  );
}

export default Skolakort;
