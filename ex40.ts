//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing 


function make_album(artist_name:string, album_name:string, tracks:number)
{
    let album = {
        artist_name ,
        album_name ,
        tracks
        };
    
        return album;
    
}



 let first_album= make_album('asma','abc',2);
 console.log(first_album);
 let second_album=make_album('sana','xyz',5);
 console.log(second_album);
 let third_album=make_album('zoya','qwerty',8);
 console.log(third_album);
 
 