const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        if (req.query.max == 2) {
            res.json([
                {
                    name: "TÊNIS MIZUNO OPTIMUS - FEMININO - CINZA/ROSA",
                    size: 36,
                    price: 169.99,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/bca7367cdb11113.jpg",
                    id: 1,
                },
                {
                    name: "TÊNIS MIZUNO WAY - MASCULINO - CHUMBO/PRETO",
                    size: 43,
                    price: 239.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/b359f9edbfef114.jpg",
                    id: 2,
                },
            ]);
        } else if (req.query.max == 4) {
            res.json([
                {
                    name: "TÊNIS NIKE DOWNSHIFTER 11 - MASCULINO - PRETO/VERDE",
                    size: 43,
                    price: 239.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/baf1d894251001.jpg",
                    id: 3,
                },
                {
                    name: "TÊNIS MIZUNO HAWK 3 - MASCULINO - GRAFITE",
                    size: 41,
                    price: 229.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/b52bff64d9f03posicao-um-do-preto.jpg",
                    id: 4,
                },
                {
                    name: "TÊNIS OLYMPIKUS CYBER 2 - MASCULINO - PRETO/VERMELHO",
                    size: 40,
                    price: 179.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/bb7995007ec055.jpg",
                    id: 5,
                },
                {
                    name: "TÊNIS MIZUNO JET 4 - MASCULINO - GRAFITE/VERMELHO",
                    size: 42,
                    price: 189.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/b43403571f5762.jpg",
                    id: 6,
                },
            ]);
        } else {
            res.json([
                {
                    name: "TÊNIS MIZUNO OPTIMUS - FEMININO - CINZA/ROSA",
                    size: 36,
                    price: 169.99,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/bca7367cdb11113.jpg",
                    id: 1,
                },
                {
                    name: "TÊNIS MIZUNO WAY - MASCULINO - CHUMBO/PRETO",
                    size: 43,
                    price: 239.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/b359f9edbfef114.jpg",
                    id: 2,
                },
                {
                    name: "TÊNIS NIKE DOWNSHIFTER 11 - MASCULINO - PRETO/VERDE",
                    size: 43,
                    price: 239.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/baf1d894251001.jpg",
                    id: 3,
                },
                {
                    name: "TÊNIS MIZUNO HAWK 3 - MASCULINO - GRAFITE",
                    size: 41,
                    price: 229.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/b52bff64d9f03posicao-um-do-preto.jpg",
                    id: 4,
                },
                {
                    name: "TÊNIS OLYMPIKUS CYBER 2 - MASCULINO - PRETO/VERMELHO",
                    size: 40,
                    price: 179.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/bb7995007ec055.jpg",
                    id: 5,
                },
                {
                    name: "TÊNIS MIZUNO JET 4 - MASCULINO - GRAFITE/VERMELHO",
                    size: 42,
                    price: 189.9,
                    img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/b43403571f5762.jpg",
                    id: 6,
                },
            ]);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;
