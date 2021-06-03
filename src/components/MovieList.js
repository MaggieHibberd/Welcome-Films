import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => ( 
                <div className='image-contaier d-flex justify-cntent-start m-3'>
                  <img src={movie.Poster} alt='movie'></img>
               </div>
            ))}
        </>
    );
};

export default MovieList;