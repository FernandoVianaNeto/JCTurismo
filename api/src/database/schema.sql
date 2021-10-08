CREATE DATABASE jctturismo;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE tours (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL UNIQUE,
  imgLink VARCHAR NOT NULL,
  status VARCHAR NOT NULL DEFAULT 'Disponível',
  categorias OBJECT NOT NULL
);

