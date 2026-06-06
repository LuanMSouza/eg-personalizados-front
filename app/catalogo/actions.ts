'use server'

import { pool } from '@/lib/db';

export async function getProdutos() {
    const produtos = await pool.query('SELECT id, nome FROM produtos');
    return produtos.rows;
}

export async function getImagens() {
    const imagens = await pool.query(`
        SELECT i.id,
        p.nome AS produto,
        p.preco_venda AS preco,
        p.obs AS obs,
        i.img_url AS img
        FROM imagens i
        JOIN produtos p ON i.produto_id = p.id
    `);
    return imagens.rows;
}

