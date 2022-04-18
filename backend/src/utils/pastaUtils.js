const fs = require('fs')
const PASTA_DATABASE = 'backend/src/database';

function criarPastaSeNaoExistir(caminhoPasta) {
    if (!fs.existsSync(caminhoPasta)) {
        fs.mkdirSync(caminhoPasta)
    }
}

module.exports = { criarPastaSeNaoExistir }
