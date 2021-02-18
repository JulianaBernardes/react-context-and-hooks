import React, {useState} from 'react';
import uuid from 'uuid/dist/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'cold water', id: 1},
        {title: 'despacito', id: 2},
        {title: 'numb', id: 3}
    ])
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(songs => {
                    return (<li key={songs.id}>{songs.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;