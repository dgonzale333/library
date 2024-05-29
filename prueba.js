let libros = [
    {
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: 80000,
        descuento : 20,
        formato: "Tapa dura",
        isbn: "9781234567890",
        descripcion: "Una novela clásica de la literatura española.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1605-01-16",
        editorial: "Editorial 1",
        paginas: 1200,
        dimensiones: "15x5x20 cm",
        peso: "1.2 kg"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        precio: 40000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9789876543210",
        descripcion: "Una novela distópica sobre un futuro totalitario.",
        estado: "Usado",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1949-06-08",
        editorial: "Editorial 1",
        paginas: 328,
        dimensiones: "13x2x20 cm",
        peso: "0.5 kg"
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 47000,
        descuento : 20,
        formato: "Tapa dura",
        isbn: "9788497592208",
        descripcion: "Una obra maestra de la literatura latinoamericana.",
        estado: "Nuevo",
        ubicacion: "Bogotá, Colombia",
        fecha_publicacion: "1967-06-05",
        editorial: " Editorial 1",
        paginas: 417,
        dimensiones: "14x4x21 cm",
        peso: "0.8 kg"
    },
    {
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 65000,
        formato: "Tapa blanda",
        isbn: "9780061120084",
        descripcion: "Una novela sobre la injusticia racial en el sur de Estados Unidos.",
        estado: "Nuevo",
        ubicacion: "Nueva York, Estados Unidos",
        fecha_publicacion: "1960-07-11",
        editorial: "Editorial 1",
        paginas: 324,
        dimensiones: "14x2x21 cm",
        peso: "0.6 kg"
    },
    {
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 60000,
        descuento : 20,
        formato: "Tapa dura",
        isbn: "9780261102385",
        descripcion: "Una épica saga de aventuras en la Tierra Media.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1954-07-29",
        editorial: "Editorial 1",
        paginas: 1178,
        dimensiones: "16x6x24 cm",
        peso: "2.0 kg"
    },
    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: 90000,
        formato: "Tapa dura",
        isbn: "9781234567891",
        descripcion: "Una novela clásica de la literatura española.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1605-01-16",
        editorial: "Editorial 2",
        paginas: 1200,
        dimensiones: "15x5x20 cm",
        peso: "1.2 kg"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        idioma: "Inglés",
        precio: 35000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780199535569",
        descripcion: "Una novela sobre la vida y los amores de las hermanas Bennet.",
        estado: "Usado",
        ubicacion: "Bath, Reino Unido",
        fecha_publicacion: "1813-01-28",
        editorial: "Editorial 2",
        paginas: 279,
        dimensiones: "13x2x19 cm",
        peso: "0.4 kg"
    },
    {
        titulo: "Crimen y castigo",
        autor: "Fyodor Dostoyevsky",
        genero: "Ficción",
        idioma: "Ruso",
        precio: 39000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780140449136",
        descripcion: "Una novela sobre la moralidad y la justicia.",
        estado: "Nuevo",
        ubicacion: "San Petersburgo, Rusia",
        fecha_publicacion: "1866-01-01",
        editorial: "Editorial 2",
        paginas: 671,
        dimensiones: "14x3x21 cm",
        peso: "0.7 kg"
    },
    {
        titulo: "La metamorfosis",
        autor: "Franz Kafka",
        genero: "Ficción",
        idioma: "Alemán",
        precio: 47000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780805208956",
        descripcion: "Una novela corta sobre un hombre que se convierte en un insecto gigante.",
        estado: "Nuevo",
        ubicacion: "Praga, República Checa",
        fecha_publicacion: "1915-01-01",
        editorial: "Editorial 2",
        paginas: 201,
        dimensiones: "12x1x19 cm",
        peso: "0.3 kg"
    },
    {
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 47000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780743273565",
        descripcion: "Una novela sobre el sueño americano en los años 20.",
        estado: "Nuevo",
        ubicacion: "Nueva York, Estados Unidos",
        fecha_publicacion: "1925-04-10",
        editorial: "Editorial 2",
        paginas: 180,
        dimensiones: "14x1x20 cm",
        peso: "0.4 kg"
    },
    {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 20000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780141439570",
        descripcion: "Una novela sobre un hombre que no envejece.",
        estado: "Usado",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1890-06-20",
        editorial: "Editorial 3",
        paginas: 254,
        dimensiones: "14x2x21 cm",
        peso: "0.5 kg"
    },
    {
        titulo: "Ulises",
        autor: "James Joyce",
        genero: "Ficción",
        idioma: "Inglés",
        precio: 170000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780199535675",
        descripcion: "Una novela modernista sobre un día en la vida de Leopold Bloom.",
        estado: "Nuevo",
        ubicacion: "Dublín, Irlanda",
        fecha_publicacion: "1922-02-02",
        editorial: "Editorial 3",
        paginas: 732,
        dimensiones: "15x4x22 cm",
        peso: "1.1 kg"
    },
    {
        titulo: "En busca del tiempo perdido",
        autor: "Marcel Proust",
        genero: "Ficción",
        idioma: "Francés",
        precio: 60000,
        descuento : 20,
        formato: "Tapa dura",
        isbn: "9782070409376",
        descripcion: "Una novela en siete volúmenes sobre la memoria involuntaria.",
        estado: "Nuevo",
        ubicacion: "París, Francia",
        fecha_publicacion: "1913-11-14",
        editorial: "Editorial 3",
        paginas: 4215,
        dimensiones: "17x10x24 cm",
        peso: "3.0 kg"
    },
    {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Aventura",
        idioma: "Inglés",
        precio: 59000,
        descuento : 20,
        formato: "Tapa dura",
        isbn: "9781503280786",
        descripcion: "Una novela sobre la caza de una ballena blanca gigante.",
        estado: "Nuevo",
        ubicacion: "Nantucket, Estados Unidos",
        fecha_publicacion: "1851-10-18",
        editorial: "Editorial 3",
        paginas: 635,
        dimensiones: "15x4x22 cm",
        peso: "1.0 kg"
    },
    {
        titulo: "El alquimista",
        autor: "Paulo Coelho",
        genero: "Ficción",
        idioma: "Español",
        precio: 49000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780061122415",
        descripcion: "Una novela sobre seguir tus sueños y encontrar tu destino.",
        estado: "Nuevo",
        ubicacion: "Santiago, Chile",
        fecha_publicacion: "1988-01-01",
        editorial: "Editorial 3",
        paginas: 208
    },
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 160000,
        formato: "Tapa dura",
        isbn: "9780590353427",
        descripcion: "El primer libro de la famosa serie de Harry Potter.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1997-06-26",
        editorial: "Editorial 4",
        paginas: 352
    },
    {
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        genero: "Ficción",
        idioma: "Español",
        precio: 45000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780307474278",
        descripcion: "Una novela de intriga que mezcla historia y conspiración.",
        estado: "Usado",
        ubicacion: "París, Francia",
        fecha_publicacion: "2003-03-18",
        editorial: "Editorial 4",
        paginas: 624
    },
    {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Ficción",
        idioma: "Español",
        precio: 50000,
        descuento : 20,
        formato: "Tapa dura",
        isbn: "9788401337800",
        descripcion: "Una historia de misterio y amor en la Barcelona de posguerra.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2001-04-01",
        editorial: "Editorial 4",
        paginas: 512
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: 79000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9780345339683",
        descripcion: "La historia del hobbit Bilbo Bolsón y su aventura para recuperar el tesoro de Smaug.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1937-09-21",
        editorial: "Editorial 4",
        paginas: 322
    },
    {
        titulo: "Los juegos del hambre",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción",
        idioma: "Inglés",
        precio: 35000,
        descuento : 20,
        formato: "Tapa blanda",
        isbn: "9788427202122",
        descripcion: "Una saga distópica sobre una competencia mortal televisada.",
        estado: "Usado",
        ubicacion: "Atlanta, Estados Unidos",
        fecha_publicacion: "2008-09-14",
        editorial: "Editorial 4",
        paginas: 416,
    },


]


const libroNuevo = {
    titulo: "El Ciclo del Hombre lobo",
    autor: "Stephen King",
    genero: "Suspenso y Terror",
    idioma: "Español",
    precio: 39000,
    descuento : 20,
    formato: "Tapa blanda",
    isbn: "9786287513631",
    descripcion: "El primer grito fue el de un ferroviario aislado por la nieve, cuando sintió unos colmillos desgarrando su garganta.",
    estado: "Nuevo",
    ubicacion: "Londres",
    fecha_publicacion: "1983-10-19",
    editorial: "Editorial w",
    paginas: 189,
    dimensiones: "13 X 19 cm",
    peso: "50 GRS"
  };


  function showMainMenu() {
    //Mensaje Primer Menu
    let message = "Elige un Menu:\n";
    message += "1. Menu Libros\n";
    message += "2. Menu iteraciones\n";
    message += "3. Listar libros con descuento\n";
    message += "4. Salir";
  
    
    let choice = prompt(message);
  
    
    switch (choice) {
      case '1':
        
        showSubMenu();
        break;
      case '2':
    
        showSubMenu2();
        break;
      case '3':
        listarLibrosConDescuento();
        showMainMenu(); 
        break;
      case '4':
        alert("Saliendo del menú...");
        break;
      default:
        alert("Opción no válida");
        showMainMenu(); 
    }
}

function listarLibrosConDescuento() {
    const librosConDescuento = libros.map(libro => {
        const precioConDescuento = libro.precio - (libro.precio * libro.descuento / 100);
        return {
            titulo: libro.titulo,
            autor: libro.autor,
            editorial: libro.editorial,
            precio: libro.precio,
            descuento: libro.descuento,
            precioConDescuento: precioConDescuento
        };
    });

    console.table(librosConDescuento);
}

function showSubMenu() {
    let subMessage = "Elige una opción:\n";
    subMessage += "1. Mostrar Pila de libros\n";
    subMessage += "2. Añadir un libro a la pila\n";
    subMessage += "3. Quitar El último libro de la Pila\n";
    subMessage += "4. Mostrar la longitud de la pila\n";
    subMessage += "5. Regresar al menú principal";

    function mostrarLibros(libros) {
        console.table(libros);
    }

    function añadirLibro(libros, libro) {
        libros.push(libro);
        console.log(`Libro añadido: ${libro.titulo}`);
    }

    function quitarLibro(libros) {
        const libroQuitado = libros.pop();
        if (libroQuitado) {
            console.log(`Libro quitado: ${libroQuitado.titulo}`);
        } else {
            console.log("No hay libros para quitar.");
        }
    }

    function mostrarLongitud(libros) {
        console.log(`Longitud del array: ${libros.length}`);
    }

    
    let subChoice = prompt(subMessage);

    
    switch (subChoice) {
        case '1':
            mostrarLibros(libros);
            showSubMenu();
            break;
        case '2':
            añadirLibro(libros, libroNuevo);
            showSubMenu();
            break;
        case '3':
            quitarLibro(libros);
            showSubMenu();
            break;
        case '4':
            mostrarLongitud(libros);
            showSubMenu();
            break;
        case '5':
            showMainMenu(); 
            break;
        default:
            alert("Opción no válida");
            showSubMenu(); 
    }
}

function showSubMenu2() {
    
    let subMessage = "Elige una opción:\n";
    subMessage += "1. Mostrar 1 iteración\n";
    subMessage += "2. Mostrar 10 iteraciones\n";
    subMessage += "3. Regresar al menú principal";

   
    const LibroMethod = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            autor: libros.autor,
            editorial: libros.editorial,
            precio: libros.precio
        }
    });

    
    const iteraciones = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            autor: libros.autor,
            paginas: libros.paginas
        }
    });

    const iteraciones2 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            dimensiones: libros.dimensiones,
            precio: libros.precio
        }
    });

    const iteraciones3 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            idioma: libros.idioma,
            ubicacion: libros.ubicacion
        }
    });

    const iteraciones4 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            isbn: libros.isbn,
            precio: libros.precio
        }
    });

    const iteraciones5 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            autor: libros.autor,
            genero: libros.genero
        }
    });

    const iteraciones6 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            descripcion: libros.descripcion,
            genero: libros.genero
        }
    });

    const iteraciones7 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            fecha_publicacion: libros.fecha_publicacion,
            paginas: libros.paginas
        }
    });

    const iteraciones8 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            estado: libros.estado,
            ubicacion: libros.ubicacion
        }
    });

    const iteraciones9 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            genero: libros.genero,
            formato: libros.formato
        }
    });

    const iteraciones10 = libros.map((libros) => {
        return {
            titulo: libros.titulo,
            idioma: libros.idioma,
            editorial: libros.editorial
        }
    });

   
    let subChoice = prompt(subMessage);

   
    switch (subChoice) {
        case '1':
            console.table(LibroMethod);
            showSubMenu2();
            break;
        case '2':
            console.table(iteraciones);
            console.table(iteraciones2);
            console.table(iteraciones3);
            console.table(iteraciones4);
            console.table(iteraciones5);
            console.table(iteraciones6);
            console.table(iteraciones7);
            console.table(iteraciones8);
            console.table(iteraciones9);
            console.table(iteraciones10);
            showSubMenu2();
            break;
        case '3':
            showMainMenu(); 
            break;
        default:
            alert("Opción no válida");
            showSubMenu2(); 
    }
}

showMainMenu();
