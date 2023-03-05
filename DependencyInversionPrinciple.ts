// High level modules should not depend on low level mudules, both should

// Si teneos modulos de alto nivel, esto no deberia depender de modulos de bajo nivel
// Ambos deberian ser abstracciones

// Los mudulos los podemos identificar segun el core de lo que hagan
// Justamente hay modulos que son core, que son cosas principales para la logica de negocios
// Y despues tenemos otro tipo de cores que dan soporte a esa logica de negocios

//Ahi lo podemos identicar como de alto nivel y de bajo nivel.

// Ejm - Algo de la vida real seria dar una clase
// Digamos que estamos dando clases particulares y tenemos lo que seria:

class JavascriptStudent {
    learnJavascript() {
        console.log('Learning Js')
    }
}

class ReactStudent {
    learningReact() {
        console.log('Learning React')
    }
}

class Teacher {
    private student: JavascriptStudent;

    constructor() {
        this.student = new JavascriptStudent()
    }

    teachJavascript() {
        this.student.learnJavascript();
    }
}

//Teacher esta acoplado a que solamente pueda enseñar javascript

// Y esto es un problemon

// Justamente nuesta logica de negocios que es Enseñar
// esta dependiendo de un concepto de bajo nivel que seria
// el del que tipo de estudiante estamos hablando

// Muy mal, muy mal

/**************************************************************************** */

//Ahora utilizaremos el principio

class Student {
    learn() {
        console.log('Learning')
    }
}

class BetterJavascriptStudent extends Student {
    learn() {
        console.log('Learning Js')
    }
}

class BetterReactStudent extends Student {
    learn() {
        console.log('Learning React')
    }
}



// Un estudiante aprende, no importa que es lo que aprende por que?
// porque despues yo voy a poder decir que el JavascriptStudent extiende
// de student y ahora learn en ves de decir javascriptlearnign() apriende
// su propia cosa en este caso javascript, hace un overwriting al metodo
// original y ahora dice: ahora estoy aprendinedo javascript papurri

class BetterTeacher {
    private student: Student;

    constructor(student: Student) { //inyeccion de dependencias
        this.student = student;
    }

    teach() {
        //Ahora nuestra logica de negocios que es enseñar 
        //que hace?
        //hace que el alumno aprenda
        this.student.learn()
    }
}

const javascriptStudent = new BetterJavascriptStudent();
const reactStudent = new BetterReactStudent();
const student = new Student();

const teacher = new BetterTeacher(student);