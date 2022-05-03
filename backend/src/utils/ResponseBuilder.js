class Response {
    constructor(content, erros) {
        this.content = content
        this.erros = erros
    }
}

function createResponseContent(content) {
    return new Response(content, null)
}

function createResponseErrors(errors) {
    return new Response(null, errors)
}

module.exports = { createResponseContent, createResponseErrors }