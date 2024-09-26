import '../sass/navbar.scss';

function Navbar() {

  return (

      <div className="navbar flex justify-between">

        <div className="left">
            <h1 className="logo">Sundlaug Sauðárkróks</h1>
        </div>{/* .left */}

        <div className="sauda">

          <div className="matarpontun">

            <div className="pontun flex">

            <p>Matarpöntun</p>  

            <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Staður</option>
            <option>Sauðá</option>
            <option>Hard WOk</option>
          </select>

          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Sauðá Verð?</option>
            <option>Réttur dagsins</option>
            <option>2.890</option>
            <option>2.290</option>
          </select>

          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Starfsmaður</option>
            <option>Steinunn</option>
            <option>Halla</option>
            <option>Ragna</option>

            <option className="strakar">Róbert</option>
            <option className="strakar">Óðinn</option>
            <option className="strakar">Ólafur</option>
          </select>

            </div>{/* .pontun */}


          </div>{/* .matarpontun */}
            
        </div>{/* .sauda */}

        <div className="right">
         Right
        </div>{/* .right */}


      </div>
      
  );
}

export default Navbar;
