import pool from '../database/db.js';

export async function listarContatos(){
    try{
        const TodosContatos = await pool.query('SELECT * FROM contatos;');
        return TodosContatos.rows;
    }catch(erro){
        console.log('DEU ERRO: ',erro);
    }
}

export async function buscarContatoID(id){
    const ContatoID = await pool.query(`SELECT * FROM contatos WHERE id=${id};`);
    return ContatoID.rows;
}

export function cadastrarContato(nome, telefone, email){
    
}