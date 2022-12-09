const ol = document.querySelector("ol");
const favMovies  = [
    {
        title: "The Goonies",
        year: 1985,
        director: "Richard Donner",
        picture: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Goonies.jpg"
    },
    {
        title: "This is 40",
        year: 2012,
        director: "Judd Apatow",
        picture: "https://upload.wikimedia.org/wikipedia/en/e/eb/This_is_40.jpg"
    },
    {
        title: "Mean Girls",
        year: 2004,
        director: "Mark Waters",
        picture: "https://upload.wikimedia.org/wikipedia/en/a/ac/Mean_Girls_film_poster.png"
    }
];

const template = favMovies.map(favMovies =>`
<li>
    <p>Title: ${favMovies.title}</p>
    <p>Year: ${favMovies.year}</p>
    <p>Director: ${favMovies.director}</p>
    <img src="${favMovies.picture}">
</li>  
`);

ol.innerHTML = template.join('');