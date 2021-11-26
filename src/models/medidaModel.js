var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                    from medida
                    where fkSensor = ${idSensor}
                    order by idMedida desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from medida where fkSensor = ${idSensor} 
                    order by idMedida desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}