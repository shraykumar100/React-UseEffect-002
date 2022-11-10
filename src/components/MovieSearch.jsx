import React, { useState, useEffect } from "react";

const MovieSearch = () => {

    const [ movieData, setMovieData ] = useState( [] );

    const [ input, setInput ] = useState('superman');

    const [ clickHandler, setClickHandler ] = useState( false );


    useEffect( () => {

        const fetchMovies = async () => {

            const api = `https://www.omdbapi.com/?s=${ input }&apikey=dda76849`;

            const response = await fetch( api );

            const fetchedData = await response.json();

            setMovieData( fetchedData.Search );

        };

        fetchMovies();
        // eslint-disable-next-line
    }, [ clickHandler ] );

    return (
        <div>
            <div className="header">
                <h1>
                    MovieMania
                </h1>
            </div>
            <div className="input-div">
                <div>
                    <input className="input" type="text" name="search"
                        placeholder="Type something" onChange={ ( e ) => {
                            setInput( e.target.value );
                        } }
                    />
                    <button className="btn" onClick={ () => {
                        setClickHandler( !clickHandler );
                    } }>
                        🔍
                    </button>
                </div>
            </div>
            <div className="movie-div">
                {movieData.map((item,i) => {
                    return (
                        <div key={ i }>
                            <div className="img-div">
                                <img className="img" src={ item.Poster } alt="poster" />
                            </div>

                            <h4>{ item.Title }</h4>
                            <p>Year- { item.Year }</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MovieSearch;