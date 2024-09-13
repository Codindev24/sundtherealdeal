import '../sass/navbar.scss';

function Navbar() {

  return (

      <div className="navbar flex justify-between">

        <div className="left">
            <h1 className="logo">Sundlaug Sauðárkróks</h1>
        </div>{/* .left */}

        <div className="middle">
            Middle
        </div>{/* .middle */}

        <div className="right">
         Right
        </div>{/* .right */}


      </div>
      
  );
}

export default Navbar;
