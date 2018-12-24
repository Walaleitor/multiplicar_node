//requireds
const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('el valor de la base introducido no es un numero')
        }
        if (!Number(limite)) {
            reject('el valor del limite introducido no es un numero')
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `base ${base} * ${i} = ${base * i} \n`;
        }

        resolve(data)

    })
}

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('el valor introducido no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('el valor del limite introducido no es un numero')
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `base ${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-base${base}-limite-${limite}`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-base${base}-limite-${limite}.txt`);
            }

        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}