<<<<<<< HEAD
function calcularCalorias() {
    // Obtener los valores de los campos del formulario
    const sexo = document.getElementById("sexo").value;
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);
    const edad = parseInt(document.getElementById("edad").value);
    const nivelActividad = document.getElementById("nivel-actividad").value;


    // Verificar si todos los campos han sido completados
    if (sexo && peso && altura && edad && nivelActividad) {
        // Calcular las calorías diarias según el género y la fórmula correspondiente
        let calorias;
        if (sexo === "hombre") {
            calorias = 10 * peso + 6.25 * altura - 5 * edad + 5;
        } else {
            calorias = 10 * peso + 6.25 * altura - 5 * edad - 161;
        }

        // Ajustar el cálculo según el nivel de actividad física
        if (nivelActividad === "sedentario") {
            calorias *= 1.2;
        } else if (nivelActividad === "ligera") {
            calorias *= 1.375;
        } else if (nivelActividad === "moderada") {
            calorias *= 1.55;
        } else if (nivelActividad === "intensa") {
            calorias *= 1.725;
        }

        // Mostrar el resultado en la página
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ` <span style="color: green">Si tu objetivo es MANTENER tu peso, necesitas consumir ${calorias.toFixed(0)} calorías diarias.</span><br><br>
                                <span style="color: red">Si tu objetivo es BAJAR de peso, necesitas consumir ${(calorias - 300).toFixed(0)} calorías diarias.</span><br><br>
                                <span style="color: #df99c3">Si tu objetivo es AUMENTAR de peso, necesitas consumir ${(calorias + 300).toFixed(0)} calorías diarias.</span>`;
    } else {
        // Pedir que completen los campos
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ` <span style="color: red"><b>PARA SABER EL RESULTADO COMPLETE TODOS LOS CAMPOS DEL FORMULARIO</b></span>`;
    }
=======
function calcularCalorias() {
    // Obtener los valores de los campos del formulario
    const sexo = document.getElementById("sexo").value;
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);
    const edad = parseInt(document.getElementById("edad").value);
    const nivelActividad = document.getElementById("nivel-actividad").value;

    // Calcular las calorías diarias según el género y la fórmula correspondiente
    let calorias;
    if (sexo === "hombre") {
        calorias = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        calorias = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    // Ajustar el cálculo según el nivel de actividad física
    if (nivelActividad === "sedentario") {
        calorias *= 1.2;
    } else if (nivelActividad === "ligera") {
        calorias *= 1.375;
    } else if (nivelActividad === "moderada") {
        calorias *= 1.55;
    } else if (nivelActividad === "intensa") {
        calorias *= 1.725;
    }

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ` <span style="color: green">Si tu objetivo es MANTENER tu peso, necesitas consumir ${calorias.toFixed(0)} calorías diarias.</span><br><br>
                            <span style="color: red">Si tu objetivo es BAJAR de peso, necesitas consumir ${(calorias - 300).toFixed(0)} calorías diarias.</span><br><br>
                            <span style="color: blue">Si tu objetivo es AUMENTAR de peso, necesitas consumir ${(calorias + 300).toFixed(0)} calorías diarias.</span>`;
>>>>>>> e7a0e271ffc39187ababb6310f9b38b63fc9c43f
}