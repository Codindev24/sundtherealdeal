import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import '../sass/navbar.scss';

function Navbar() {

  return (

      <div className="navbar flex justify-between">

        <div className="left">
            <h1 className="logo">Sundlaug Sauðárkróks</h1>
        </div>{/* .left */}

        <div className="sauda">

          <div className="matarpontun">

            <div className="pontun">

            <form className="pontun flex">

            <button className="matarpontun btn btn-outline btn-accent">Matarpöntun</button> 

            <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Staður</option>
            <option>Sauðá</option>
            <option>Hard wok</option>
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

          <button className="btn btn-success">Vista</button>

          </form>

          <div className="matarpost flex">

          <div className="dags">
           ic 26.09.24
          </div>{/* .dags */}  

          <div className="stadur">
           ic Sauðá
          </div>{/* .stadur */}
          
          <div className="verd">
           ic 2.290kr
          </div>{/* .verd */}      

          <div className="starfsmadur">
           is Óðinn
          </div>{/* .starfsmadur */}

          </div>{/* .matarpost */}

        <div className="matarpost flex">

          <div className="dags">
           ic 26.09.24
          </div>{/* .dags */}  

          <div className="stadur">
           ic Hard wok
          </div>{/* .stadur */}
          
          <div className="verd">
           
          </div>{/* .verd */}      

          <div className="starfsmadur">
           is Ólafur
          </div>{/* .starfsmadur */}

          </div>{/* .matarpost */}

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
