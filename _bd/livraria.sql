CREATE DATABASE livraria;
USE livraria;

CREATE TABLE clientes( id_cliente BIGINT AUTO_INCREMENT,nome VARCHAR(60), endereco VARCHAR(70), cidade VARCHAR(30), estado VARCHAR(15),cep BIGINT(11), sexo VARCHAR(10),email VARCHAR(70), senha VARCHAR(20), conf_senha VARCHAR(20), PRIMARY KEY(id_cliente)); 