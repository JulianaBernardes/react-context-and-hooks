import React, {useState} from 'react';
import uuid from 'uuid/dist/v1'

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'cold water', id: 1},
        {title: 'despacito', id: 2},
        {title: 'numb', id: 3}
    ])
    const addSong = () => {
        setSongs([...songs, { title: 'new song', id: uuid() }])
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(songs => {
                    return (<li key={songs.id}>{songs.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
     );
}
 
export default SongList;