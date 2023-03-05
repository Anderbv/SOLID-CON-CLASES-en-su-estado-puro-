function TechaerComponent({ student }) {
  return (
    <div>
        <h1>Teacher</h1>
        <p>{student.name}</p>
        <button onClick={student.learn()}>Learn !</button>
    </div>
  )
}
export default TechaerComponent

// Estamos creando un componente que aplica
// S - mantiene la logica atada de la enseñanza
// L - el student puede ser cualquier tipo de estudiante mientras que tenga el metodo learn()
// I - Podemos hacer que el teacher pueda extender la funcionalidad que aparte de enseñar tambien es estudiante
// y pensando que el teacher tambien es un estudiante y tambien podria acceder a cositas de estudiante por ejm