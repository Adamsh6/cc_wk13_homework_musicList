import React from 'react';

const SongList = ({songs}) => {
  const jsxSongs = songs.map((song, index) => {
    return(
      <div key={index}>
      <h3 >{index + 1}. {song.title.label}</h3>
      <img src={song['im:image'][2].label} />
      <audio controls>
      <source src={song.link[1].attributes.href} type={song.link[1].attributes.type} />
      </audio>
      </div>

    )
  })
  return (
    <div>
    {jsxSongs}
    </div>
  )
}

export default SongList
