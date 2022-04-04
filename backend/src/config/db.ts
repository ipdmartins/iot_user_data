import { createConnection } from 'typeorm';


export const connectServerDB = async () => {
    const conexao = await createConnection();
    console.log(`App connected to BD ${conexao.options.database}`);

    process.on('SIGINT', () => {
        conexao.close().then(() => console.log('Connection to DB closed'));
    });
};