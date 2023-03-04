//Que es solid?

import { Item } from "./OpenClosedP";

//Es un patron?
//NO

//Son principios
//Solid es una serie de principios
//que rigen lo que es la programacion
//orientada a objetos

//1-Single Responsability Principle

//Que es realmente SOLID?
//Para que hacemos SOLID?

//Son principios que ya aplicamos sin darnos cuenta..

//Bueno que es la S de Solid
//Cada cosita tenga una unica responsabilidad
//Es decir que la logica se ocupe de una sola cosa

//Por ejemplo en React creamos componentes donde
//cada uno de esos componentes se encargue de una
//cosa en especifico

//Principales ventajas del S

//Testing =>
//como las cosas son tan chiquititas y se encargan
//de una sola cosa, testearlos es mucho más facil.

//Lower coupling =>
//La dependencia entre los diferentes elementos
//es muy poco, por lo cual es facil modificarlo
//es facil meterle cositas o sacarle cositas
//En pocas palabras facil de mantener

//Organization of the code
//Como son cosas chiquititas va a aumentar la
//organizacion y como aumenta la organizacion
//van a tener cosas justamente por ejemplo clases
//objetos, cosas que son mas faciles de leer
//cosas mas faciles de trazear, encontrar
//Si tenes un error, vas directo al error

class VideoGame {
  private name: string; //name of the game
  private price: number; //precio del juego
  private releaseDate: string; //fecha de salida del juego

  constructor(name: string, price: number, releaseDate: string) {
    this.name = name;
    this.price = price;
    this.releaseDate = releaseDate;
  };

  public getName(): string {
    return this.name;
  };
  
  public getPrice(): number {
    return this.price;
  };

  public getReleaseDate(): string {
    return this.releaseDate;
  }; 
};

class videoGameStore {
  //esta es la forma en la que no estariamos aplicando el single responsability principle

  private videoGames: VideoGame[]; //videoGames es de tipo array con la estructura de VideoGame

  constructor(videoGames: VideoGame[]) {
    this.videoGames = videoGames;
  }

  getAllGamesByReleaseDate(date: string) {
    return this.videoGames.filter(game => game.getReleaseDate() === date)
  }

  getAllGamesByHigherPrice(price: number) {
    return this.videoGames.filter(game => game.getPrice() > price)  ;
  }

  getAllGamesByLowerPrice(price: number) {
    return this.videoGames.filter(game => game.getPrice() < price)  ;
  }

  //Lo que estamos haciendo aca esta malisimo porque le estamos asignando muchas
  //Responsabilidades a una sola clase;
}


export class ItemStoreGetter {
  //el array no tan solo puede ser videojuegos, puede ser cualquier cosa, verdad?
  static getAllItemsByReleaseDate(items: Item[], date: string) {
    return items.filter(game => game.getReleaseDate() === date);
  }

  static getAllItemsByHigherPrice(items: Item[],price: number) {
    return items.filter(game => game.getPrice() > price)  ;
  }

  static getAllItemsByLowerPrice(items: Item[],price: number) {
    return items.filter(game => game.getPrice() < price)  ;
  }
};
//La parte importante del S, es que podemos extenderlo, lo podemos
//aumentar, podemos incrementar todo;

//Por ejemplo si ya testee mi utilitad osea itemStoreGetter en todos los lugares
//que yo lo aplique ya esta testeado, no hay que testearlo de vuelta

//Otra cosa es que generamos menos dependencia entre nuestras logicas
//nuevamente miren que facil ahora la utilidad ItemStoreGetter la puedo
//llevar a cualquier lado

//Tambien generemos mas organizidad, hacemos que nuestra logica sea legible
//por ejemplo BetterVideoGameStore lo que realmente hace es manejar videojuegos
//ahora que esto(ItemStoreGetter) me devuelva un video juego a mi me da igual


class BetterVideoGameStore extends ItemStoreGetter {
  private videoGames: VideoGame[]; //videoGames es de tipo array con la estructura de VideoGame
  constructor(videoGames: VideoGame[]) {
    //super debe llamarse antes de acceder a "this" en el constructor de una clase derivada.
    //super debe llarmarse antes de inicializar un valor a x propiedad de nuestra clase
    //Esto lo haremos siempre y cuando nuestra clase derive(extienda) de otra 
    super()
    this.videoGames = videoGames;
  }
  getVideoGames(): VideoGame[] {
    return this.videoGames;
    
  }
  //Los constructores de clases derivadas deben contener una llamada "super"
}

// class MovieStore extends ItemStoreGetter {
//   private movies: Movie[];
//   constructor(movies: Movie[]) {
//     this.movies = movies;
//   }
// }

const AdanYEva = new VideoGame('AdanYEva', 10, '04-03-23');
const Left = new VideoGame('Left4outDeath', 30, '17-09-10');
const xd = new BetterVideoGameStore([AdanYEva, Left])


