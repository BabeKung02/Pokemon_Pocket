// Pocket_List.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PocketContext } from '../components/PocketContext';
import './Pocket_List.css';

const Pocket_List = () => {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { allData, setAllData, removeFromPocketHandler } = useContext(PocketContext);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchPokemonData = async () => {
      try {
        const promises = allData.map(({ id }) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`));
        const responses = await Promise.all(promises);

        if (isMounted) {
          const updatedPokeData = responses.map((response, index) => ({
            ...response.data,
            quantity: allData[index].quantity
          }));
          setPoke(updatedPokeData);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        if (isMounted) {
          setError("Error fetching data. Please try again.");
          setLoading(false);
        }
      }
    };

    fetchPokemonData();

    return () => {
      isMounted = false;
    };
  }, [allData]);

  const handleDelete = (id) => {

    setPoke(prevPoke => prevPoke.filter(pokemon => pokemon.id !== id));
    removeFromPocketHandler(id);
  };

  const handleCheckout = () => {
    setPoke([]);
    setAllData([]);
    navigate('/');
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const totalProducts = poke.length;
  const totalQuantity = poke.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-md-8">
          <h5>Pocket list ({totalProducts})</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Product name</th>
                <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {poke.map(pokemon => (
                <tr key={pokemon.id}>
                  <td className="pokemon-info">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
                    <span className="pokemon-name">{pokemon.name}</span>
                    <div style={{ position: 'relative', bottom: '10px', left: '10px' }}>
                      {pokemon.types.map((type, idx) => (
                        <span key={idx} className="pokemon-type">
                          <span style={{ textTransform: 'capitalize', color: '#FFAE33', backgroundColor: '#FFF4E3', padding: '5px 10px', borderRadius: '10px' }}>
                            {type.type.name}
                          </span>
                        </span>
                      ))}
                    </div>
                  </td>

                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{pokemon.quantity}</td>


                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <button className="btn btn-link p-0" onClick={() => handleDelete(pokemon.id)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 11.9999C6.84348 11.9999 7.01305 11.9297 7.13807 11.8047C7.2631 11.6796 7.33333 11.5101 7.33333 11.3333V7.33325C7.33333 7.15644 7.2631 6.98687 7.13807 6.86185C7.01305 6.73682 6.84348 6.66659 6.66667 6.66659C6.48986 6.66659 6.32029 6.73682 6.19526 6.86185C6.07024 6.98687 6 7.15644 6 7.33325V11.3333C6 11.5101 6.07024 11.6796 6.19526 11.8047C6.32029 11.9297 6.48986 11.9999 6.66667 11.9999ZM13.3333 3.99992H10.6667V3.33325C10.6667 2.80282 10.456 2.29411 10.0809 1.91904C9.70581 1.54397 9.1971 1.33325 8.66667 1.33325H7.33333C6.8029 1.33325 6.29419 1.54397 5.91912 1.91904C5.54405 2.29411 5.33333 2.80282 5.33333 3.33325V3.99992H2.66667C2.48986 3.99992 2.32029 4.07016 2.19526 4.19518C2.07024 4.32021 2 4.48977 2 4.66659C2 4.8434 2.07024 5.01297 2.19526 5.13799C2.32029 5.26301 2.48986 5.33325 2.66667 5.33325H3.33333V12.6666C3.33333 13.197 3.54405 13.7057 3.91912 14.0808C4.29419 14.4559 4.8029 14.6666 5.33333 14.6666H10.6667C11.1971 14.6666 11.7058 14.4559 12.0809 14.0808C12.456 13.7057 12.6667 13.197 12.6667 12.6666V5.33325H13.3333C13.5101 5.33325 13.6797 5.26301 13.8047 5.13799C13.9298 5.01297 14 4.8434 14 4.66659C14 4.48977 13.9298 4.32021 13.8047 4.19518C13.6797 4.07016 13.5101 3.99992 13.3333 3.99992ZM6.66667 3.33325C6.66667 3.15644 6.7369 2.98687 6.86193 2.86185C6.98695 2.73682 7.15652 2.66659 7.33333 2.66659H8.66667C8.84348 2.66659 9.01305 2.73682 9.13807 2.86185C9.2631 2.98687 9.33333 3.15644 9.33333 3.33325V3.99992H6.66667V3.33325ZM11.3333 12.6666C11.3333 12.8434 11.2631 13.013 11.1381 13.138C11.013 13.263 10.8435 13.3333 10.6667 13.3333H5.33333C5.15652 13.3333 4.98695 13.263 4.86193 13.138C4.7369 13.013 4.66667 12.8434 4.66667 12.6666V5.33325H11.3333V12.6666ZM9.33333 11.9999C9.51014 11.9999 9.67971 11.9297 9.80474 11.8047C9.92976 11.6796 10 11.5101 10 11.3333V7.33325C10 7.15644 9.92976 6.98687 9.80474 6.86185C9.67971 6.73682 9.51014 6.66659 9.33333 6.66659C9.15652 6.66659 8.98695 6.73682 8.86193 6.86185C8.73691 6.98687 8.66667 7.15644 8.66667 7.33325V11.3333C8.66667 11.5101 8.73691 11.6796 8.86193 11.8047C8.98695 11.9297 9.15652 11.9999 9.33333 11.9999Z" fill="#666666" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="order-summary p-3">
            <h5>Order Summary</h5>
            <p>Subtotal <span>{totalProducts} Product{totalProducts !== 1 ? 's' : ''}</span></p>
            <p>Quantity <span>{totalQuantity} Quantity</span></p>
            <button className="btn btn-danger" onClick={handleCheckout}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pocket_List;
