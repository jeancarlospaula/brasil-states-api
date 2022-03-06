const express = require('express')
const routes = express.Router()

const brazilStates = [
    {'id':'ac','name':'Acre'},
    {'id':'al','name':'Alagoas'},
    {'id':'ap','name':'Amapá'},
    {'id':'am','name':'Amazonas'},
    {'id':'ba','name':'Bahia'},
    {'id':'ce','name':'Ceará'},
    {'id':'df','name':'Distrito Federal'},
    {'id':'es','name':'Espírito Santo'},
    {'id':'go','name':'Goiás'},
    {'id':'ma','name':'Maranhão'},
    {'id':'mt','name':'Mato Grosso'},
    {'id':'ms','name':'Mato Grosso do Sul'},
    {'id':'mg','name':'Minas Gerais'},
    {'id':'pa','name':'Pará'},
    {'id':'pb','name':'Paraíba'},
    {'id':'pr','name':'Paraná'},
    {'id':'pe','name':'Pernambuco'},
    {'id':'pi','name':'Piauí'},
    {'id':'rj','name':'Rio de Janeiro'},
    {'id':'rn','name':'Rio Grande do Norte'},
    {'id':'rs','name':'Rio Grande do Sul'},
    {'id':'ro','name':'Rondônia'},
    {'id':'rr','name':'Roraima'},
    {'id':'sc','name':'Santa Catarina'},
    {'id':'sp','name':'São Paulo'},
    {'id':'se','name':'Sergipe'},
    {'id':'to','name':'Tocantins'},
]

routes.get('/',(req,res)=>{
    res.json({
        'Olá':'Bem-vindo(a) a API de Estados Brasileiros.',
        'Atenção':'Para acessar os dados de um estado, digite a sua sigla na URL, indicando sua rota.',
        'Exemplo': 'brazil-states.heroku.com/XX  --> sendo XX a sigla do estado a ser pesquisado'
    })
})

routes.get('/:stateID',(req,res)=>{
    const stateID = req.params.stateID.toLowerCase()
    const stateInfo = brazilStates.find(p => p.id == stateID)

    if(!stateInfo){
        res.status(400).json({
            'erro':`Nenhum estado do Brasil possui \'${req.params.stateID}\' como sua sigla`,
        })
    }else{
        res.status(200).json(stateInfo)
    }
})

module.exports = routes