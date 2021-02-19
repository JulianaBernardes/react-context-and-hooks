import React, {useState, useEffect} from 'react';
import uuid from 'uuid/dist/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'cold water', id: 1},
        {title: 'despacito', id: 2},
        {title: 'numb', id: 3}
    ])
    const [age, setAge] = useState(20)
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs])
    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(songs => {
                    return (<li key={songs.id}>{songs.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;