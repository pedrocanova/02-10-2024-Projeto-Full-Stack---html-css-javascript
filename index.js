const express = require('express')
const app = express()

app.use(express.json())

//get http://localhost:3000/oi
app.get('/oi', (req, res) => { res.send('oi') })

let filmes = [
    {
        titulo: "Clube da Luta",
        sinopse: "Um homem deprimido (Edward Norton) sofrendo de insônia conhece um estranho vendedor de sabão chamado Tyler Durden (Brad Pitt) e logo se vê vivendo em sua casa miserável depois que seu apartamento perfeito é destruído. Os dois homens entediados formam um clube underground com regras rígidas e lutam contra outros homens que estão fartos de suas vidas mundanas. Sua parceria perfeita se desfaz quando Marla (Helena Bonham Carter), uma colega de grupo de apoio, atrai a atenção de Tyler."
    },
    {
        titulo: "Django Livre",
        sinopse: "Django (Jamie Foxx) é um escravo liberto cujo passado brutal com seus antigos proprietários leva-o ao encontro do caçador de recompensas alemão Dr. King Schultz (Christoph Waltz). Schultz está em busca dos irmãos assassinos Brittle, e somente Django pode levá-lo a eles. O pouco ortodoxo Schultz compra Django com a promessa de libertá-lo quando tiver capturado os irmãos Brittle, vivos ou mortos."
    }
]

app.listen(3000, () => console.log("up and running"))