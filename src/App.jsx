import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PocketProvider } from './components/PocketContext';
import axios from 'axios';
import Sub_Header from './components/Sub_Header';
import Header from './components/Header';
// import Footer from './components/Footer';
import Not_Found from './components/Not_Found';
import Detail from './components/Detail';
import Pocket_List from './components/Pocket_List';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchPoke, setSearchPoke] = useState('');
  const [displayChange, setdisplayChange] = useState(false);

  const pokemonData = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
  ];

  useEffect(() => {
    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        const promises = pokemonData.map(data =>
          axios.get(data.url, { signal: abortController.signal })
        );
        const responses = await Promise.all(promises);
        setPoke(responses.map(response => response.data));
        setError("");
      } catch (error) {
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPoke();

    console.log('poke:', poke)

    return () => abortController.abort();
  }, []);

  const handleSearchChange = (event) => {
    setSearchPoke(event.target.value.toLowerCase());
  };

  const toggleSingleRow = () => {
    setdisplayChange(true);
  };

  const toggleMultipleRows = () => {
    setdisplayChange(false);
  };

  const filteredPoke = poke.filter((poke) =>
    poke.name.toLowerCase().startsWith(searchPoke)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <PocketProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Sub_Header handleSearchChange={handleSearchChange} setPoke={setPoke} searchPoke={searchPoke} setSearchPoke={setSearchPoke} />
          <Routes>
            <Route path="/" element={
              <div className="container mt-4 mb-5">
                <div className="mb-3 mt-3 d-flex align-items-center justify-content-between">

                  {searchPoke.length === 0 ? (
                    <p id="all_products" className="d-flex m-0 fw-bolder">Products ({pokemonData.length})</p>
                  ) : (
                    <p id="search_result" className="d-flex m-0 fw-bolder">Search Result ({filteredPoke.length} Product)</p>
                  )}

                  <div>

                    <button
                      className={`btn ${!displayChange}`}
                      onClick={toggleMultipleRows}
                      style={{ backgroundColor: displayChange ? 'white' : '#FFCB05', border: 'none', borderRadius: '7px 0px 0px 7px' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 5.67992V2.65325C14.6667 1.71325 14.24 1.33325 13.18 1.33325H10.4867C9.42667 1.33325 9 1.71325 9 2.65325V5.67325C9 6.61992 9.42667 6.99325 10.4867 6.99325H13.18C14.24 6.99992 14.6667 6.61992 14.6667 5.67992Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.6667 13.18V10.4867C14.6667 9.42667 14.24 9 13.18 9H10.4867C9.42667 9 9 9.42667 9 10.4867V13.18C9 14.24 9.42667 14.6667 10.4867 14.6667H13.18C14.24 14.6667 14.6667 14.24 14.6667 13.18Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.00016 5.67992V2.65325C7.00016 1.71325 6.5735 1.33325 5.5135 1.33325H2.82016C1.76016 1.33325 1.3335 1.71325 1.3335 2.65325V5.67325C1.3335 6.61992 1.76016 6.99325 2.82016 6.99325H5.5135C6.5735 6.99992 7.00016 6.61992 7.00016 5.67992Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.00016 13.18V10.4867C7.00016 9.42667 6.5735 9 5.5135 9H2.82016C1.76016 9 1.3335 9.42667 1.3335 10.4867V13.18C1.3335 14.24 1.76016 14.6667 2.82016 14.6667H5.5135C6.5735 14.6667 7.00016 14.24 7.00016 13.18Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                    <button
                      className={`btn ${displayChange}`}
                      onClick={toggleSingleRow}
                      style={{ backgroundColor: !displayChange ? 'white' : '#FFCB05', border: 'none', borderRadius: '0px 7px 7px 0px' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2668 9H2.7335C1.7335 9 1.3335 9.42667 1.3335 10.4867V13.18C1.3335 14.24 1.7335 14.6667 2.7335 14.6667H13.2668C14.2668 14.6667 14.6668 14.24 14.6668 13.18V10.4867C14.6668 9.42667 14.2668 9 13.2668 9Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.2668 1.33325H2.7335C1.7335 1.33325 1.3335 1.75992 1.3335 2.81992V5.51325C1.3335 6.57325 1.7335 6.99992 2.7335 6.99992H13.2668C14.2668 6.99992 14.6668 6.57325 14.6668 5.51325V2.81992C14.6668 1.75992 14.2668 1.33325 13.2668 1.33325Z" stroke="#373737" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>

                  </div>
                </div>
                <Not_Found filteredPoke={filteredPoke} searchPoke={searchPoke} />

                <div className="row" >

                  {filteredPoke.map((poke, idx) => (

                    <div key={idx} className={`col-md-${displayChange ? '12' : '3'} mb-4`}>

                      <div style={{ boxShadow: '0px 0px 15px 0px #0000000F' }} className={`h-100 ${displayChange ? 'd-flex' : ''}`}>

                        {displayChange ? (
                          <Link to={`/pokemon/${poke.id}`} style={{ marginRight: '30px', width: '15%' }}>
                            <img
                              src={poke?.sprites?.other?.home?.front_default}
                              className="card-img-top"
                              alt={poke?.name}
                            />
                            
                          </Link>
                        ) : (
                          <img
                            src={poke?.sprites?.other?.home?.front_default}
                            className="card-img-top"
                            alt={poke?.name}
                          />
                        )}

                        <div
                          style={{ marginTop: displayChange ? '65px' : '0px', marginLeft: displayChange ? '45px' : '0px', }}
                          className="card-body">

                          <h5 style={{ marginLeft: '36px' }} className="card-title text-capitalize d-flex justify-content-start">{poke?.name}</h5>
                          <ul style={{ marginLeft: '28px' }} className="d-flex justify-content-start list-inline mt-3">
                            {poke?.types?.map((abil, idx) => (
                              <li
                                key={idx}
                                className="fw-bold align-items-center"
                                style={{ marginRight: '1rem', color: '#FFAE33', backgroundColor: '#FFF4E3', padding: '5px 10px', borderRadius: '10px' }}>
                                {abil.type.name.charAt(0).toUpperCase() + abil.type.name.slice(1)}
                              </li>
                            ))}
                          </ul>
                          {displayChange && (
                            <p>
                              <strong style={{ margin: '0 30px' }}>Abilities:</strong>
                              {poke?.abilities?.map((ability, index) => (
                                <span key={ability.ability.name}>
                                  {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
                                  {index < poke.abilities.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </p>
                          )}

                          {displayChange ? <Link to={`/pokemon/${poke.id}`}></Link> :

                            (
                              <Link
                                to={`/pokemon/${poke.id}`}
                                style={{ border: 'none', borderRadius: '10px' }}
                                className="linkButton btn btn-dark w-100">
                                Detail
                              </Link>
                            )}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            } />
            <Route path="/pokemon/:id" element={<Detail />} />
            <Route path="/pocket" element={<Pocket_List />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </PocketProvider>
  );
}

export default App;

