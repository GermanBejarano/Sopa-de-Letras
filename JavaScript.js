 //Funcion que obtiene la palabra ingresada por el usuario la ingresa a un arreglo y 
 //crea un aviso que le confirma que la palabra ha sido añadida
 var palabra = [];

    function Palabra() { // Obtengo la palabra del input
        palabra.push( document.getElementById("palabra").value);
        alert("Palabra "+ document.getElementById("palabra").value+" agregada");
     }
    
//Funcion que crea el juego, junto con las librerias de javaScript wordfind.js y wordfindgames.js
 var gamePuzzle;
    function Crear() {
            
         $('#Juegos').show();
                
                gamePuzzle = wordfindgame.create(palabra, '#juego', '#Palabras');
                var puzzle = wordfind.newPuzzle(palabra, {height: 18, width: 18, fillBlanks: false });
                wordfind.print(puzzle);   
    }

    //Funcion que permite resolver el juego con un boton
    $('#resolver').click( function() {wordfindgame.solve(gamePuzzle, palabra);});
      
    // Funcion que limpia el campo de texto
    $(document).ready(function() {
        $('#limpiar').click(function() {
            $('.Texto').val('');
            $("#palabra").focus();
        });
    });

    