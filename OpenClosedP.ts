//Este principio hace referencia
//esa cosita tiene que ser abierta
//a la extension pero cerrada a la modificacion

import { ItemStoreGetter } from "./SingleResponsabilityP";

//Normalmente cuando nosotros estamos codificando hay un
//problemon como un casa

export class Item {
    private name: string;
    private price: number;
    private releaseDate: string;

    constructor(name: string, price: number, releaseDate: string) {
        this.name = name;
        this.price = price;
        this.releaseDate = releaseDate;
    }

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }

    getReleaseDate(): string {
        return this.releaseDate;
    }

}

class VideoGame2 extends Item {
    private genre: string; //genero
    constructor(name: string, price: number, releaseDate: string, genre: string) {
        super(name, price, releaseDate);
        this.genre = genre;
    }

    public getGenre(): string {
        return this.genre;
    }
};

class Movie extends Item {
    private director: string; //genero
    constructor(name: string, price: number, releaseDate: string, director: string) {
        super(name, price, releaseDate);
        this.director = director;
    }
    public getDirector(): string {
        return this.director;
    }
}

class VideoGameStore {
    private videoGames: VideoGame2[];
    private movies: Movie[];

    constructor(videoGames: VideoGame2[], movies: Movie[]) {
        this.videoGames = videoGames;
        this.movies = movies;
    }

}

//VideoGameStore esta feo porque estamos modificando su funcion
//es muy mala practica hacer esto

//ahora mostraremos una mejor manera de hacerlo

class MovieStore {
    private movies: Movie[];
    constructor( movies: Movie[] ) {
        this.movies = movies;
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getAllMoviesByDirector(director: string) {
        return this.movies.filter(movie => movie.getReleaseDate() === director);
    }
}

//Ahora si vos querias modificar el videoGameStore para vender peliculas No pasa nada, miralo che

class VideoGameStoreWithMovies extends MovieStore {
    private videoGames: VideoGame2[];
    constructor( videoGames: VideoGame2[], movies: Movie[] ) {
        super(movies);
        this.videoGames = videoGames;
    }

    getVideoGames(): VideoGame2[] {
        return this.videoGames;
    }

    getAllMoviesByGenre(genre: string) {
        return this.videoGames.filter(game => game.getGenre() === genre)
    }

};

// const videoGameStore = new VideoGameStoreWithMovies([], []);
// videoGameStore.getAllMoviesByDirector
// videoGameStore.getAllMoviesByGenre


const AdanYEva = new VideoGame2('AdanYEva', 10, '04-03-23', 'sexual');
const Left = new VideoGame2('Left4outDeath', 30, '17-09-10', 'horror');

const InterStelar = new Movie('Interstellar', 15, '15-07-15', 'stallone');
const Chucky = new Movie('Chucky One', 35, '12-01-90', 'Harry');

const VideoGameStoreWithMoviesxd = new VideoGameStoreWithMovies([AdanYEva, Left], [InterStelar, Chucky]);

ItemStoreGetter.getAllItemsByLowerPrice(VideoGameStoreWithMoviesxd.getMovies(), 30)

//PARA QUE SIRVE VIDEOGAMESTOREWITHMOVIES?
//No hemos tocado el codigo viejo si no que lo que hemos hecho
//es extender la funcionalidad mediante delegando la responsabilidad
//en otro lugar, entonces lo unico que hace en VIDEOGAMESTOREWITHMOVIES
//es extenderlo
//y esto es el principio de openClosed, es abierto al exterior
//pero es cerrado a modificaciones