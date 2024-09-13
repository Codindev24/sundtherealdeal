import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Laga from "./bits/Laga";
import '././sass/app.scss';

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

function App() {

  return (
    <>
      <div className="app">
        
      <Laga />

      </div>
       
    </>
  );
}

export default App;
