import "reflect-metadata"
import { DataSource } from "typeorm"
import { Objects } from "./entity/Object"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "iot_data_user",
    synchronize: true,
    logging: false,
    entities: [Objects],
    migrations: [],
    subscribers: [],
})
