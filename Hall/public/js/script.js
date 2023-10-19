const vid = document.getElementById('vid');
// el array de los videos
let vids = [
    "public/videos/1.mp4",
    "public/videos/1.mp4"
];
// la longitud del array de los videos
let leng = vids.length;
// un numero utilizado para saber que video se está reproduciendo
let n = 0;
// utilizo el evento "ended" para saber si el video se ha acabado
vid.addEventListener("ended",()=>{
// si el video se ha acabado cambia el atributo src
vid.setAttribute("src", vids[n%leng]);

n++;
}
)