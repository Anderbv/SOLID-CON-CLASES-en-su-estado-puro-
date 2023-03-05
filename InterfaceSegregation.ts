//Many specific interfaces are better than one original purpose interface
//Basicamente este principio se trata de que es mucho más facil tener multiples interfaces
//que una sola interfaz que haga de todo

interface PcVideoGame {
    play(): void;
    save(): void;
    overWriteSave(): void;
    load(): void;
}

class HardCoreVideoGame implements PcVideoGame {

    play(): void {
        console.log('Playing')
    }

    save(): void {
        throw new Error("Can't save")
    }

    overWriteSave(): void {
        throw new Error("can't overwrite save")
    }

    load(): void {
        throw new Error('Can"t load')
    }
}

//Por ejemplo en micraft tenes un modo que es hardcore
//Ahi si vos moris, perdes todo, la partida, todo
//en este caso PcVideoGame como es una interfaz "completa" con muchas propiedades
//dentro de una sola interfaz, es solamente una interfaz que hace todo
//No lo puedo divir entonces la unica forma de yo poder cambiarlo cual va a ser?
//tirar un error

//Yo no puedo guardar, sobreescribir, cargar una partida porque un harcorevideogame
//no lo puede hacer, esa la idea

//***************************************************************** */
interface PcVideoGame2 {
    play(): void;
}

interface VideoGameSaving {
    save(): void;
    overWriteSave(): void;
    load(): void;
}

class BetterHardCoreVideoGame implements PcVideoGame2 {
    play(): void {
        console.log("")
    }
}

class NormalVideoGame implements PcVideoGame2, VideoGameSaving {
    play(): void {
        console.log('jugando')
    }

    save(): void {
        console.log('guardando partida')
    }

    overWriteSave(): void {
        console.log('sobreescribienod partida')
    }

    load(): void {
        console.log('cargandopartida')
    }
}

