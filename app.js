const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(result => {
                console.log("================".green);
                console.log(`Tabla de ${argv.base}`.green);
                console.log("================".green);
                console.log(result)
            })
            .catch(e => console.log(e))
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then((result) => console.log(`Archivo creado: ${ colors.green(result)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


// console.log(multiplicar);

// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv.base);





// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);