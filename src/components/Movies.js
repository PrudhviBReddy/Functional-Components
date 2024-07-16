import React from 'react'

function Movies(props) {
  return (
    <div>
          <section className="movie">
          <figure>
          <div>
          <img src= {props.pic}></img>
          <figcaption> {props.name} </figcaption>
          </div>
          <ul>
          <h1> {props.title}</h1>
          <li><audio src= {props.song1} controls></audio></li>
          <figcaption>{props.songname1}</figcaption>
          <li><audio src= {props.song2} controls></audio></li>
          <figcaption>{props.songname2}</figcaption>
          <li><audio src= {props.song3} controls></audio></li>
          <figcaption>{props.songname3}</figcaption>
          </ul>
          <div>
          <video className="Trailer" src= {props.trailer} controls autoPlay muted ></video>
          <figcaption> {props.trailername} </figcaption>
          </div>
          </figure>
          </section>
      </div>
  )
}

export default Movies