const express = require("express");
const data = express();
const mysql = require("mysql2");
const cors = require("cors");

data.use(cors());
data.use(express.json());

const Conexao = mysql.createConnection({
    host:"localhost",
    user: "root",    
    database:"bd_ijp",
    password:""
});

data.post("/Contato", (req,res) =>{
    const {Nome} = req.body;
    const {Email} = req.body;
    const {Telefone} = req.body;
    const {CPF} = req.body;
    const {Mensagem} = req.body;
    
    Conexao.query("insert into tb_contato(CId,CNome,CEmail,CTelefone,CCPF,CMensagem) values ('',?,?,?,?,?);",
    [Nome,Email,Telefone,CPF,Mensagem], (err, result)=>{
        if (err) {
            console.log(err)
            console.log("Erro")
        }else{
            console.log("Sucesso")
        }
    })
})
data.post("/SejaParceiro", (req,res) =>{
    const {Nome} = req.body;
    const {Email} = req.body;
    const {CNPJ} = req.body;
    const {RazaoSocial} = req.body;
    const {Mensagem} = req.body;
    
    const q = "insert into tb_parceiros(PId,PNome,PEmail,PCNPJ,PRazaoSocial,PMensagem) values ('',?,?,?,?,?);"
    Conexao.query( q, [Nome,Email,CNPJ,RazaoSocial,Mensagem],(err,result)=>{
        console.log(err)
    })
}) 

data.listen(3001, () =>{
    console.log("Rodando Servidor")
});

data.get("/teste", (req, res) => {    
    const q = "SELECT * FROM tb_parceiros";
    db.query(q,(err,result) =>{
        if (err) console.log(err)
        else res.send(result)
    })
});