import livros from "../models/Livro.js";

class livroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do livro não foi localizado.` })
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar o livro.` })
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro atualizado com sucesso!' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro removido com sucesso!' })
            } else {
                res.status(500).send(err.message)
            }
        })
    }
}

export default livroController