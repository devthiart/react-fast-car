/* DER desenvolvida para o site https://dbdiagram.io/d/Fast-Car-App-DER-666f55eaa179551be603980a */

Table Cliente {
  id_cliente int [pk, increment]
  nome_completo varchar(100)
  email varchar(100) [unique]
  telefone varchar(15)
  senha varchar(50)
  foto_perfil varchar(255)
}

Table Oficina {
  id_oficina int [pk, increment]
  nome_fantasia varchar(100)
  email varchar(100) [unique]
  senha varchar(50)
  foto_oficina varchar(255)
  razao_social varchar(100)
  cnpj varchar(20) [unique]
  inscricao_estadual varchar(20)
  localizacao varchar(255)
  dias_atendimento varchar(50)
  horario_atendimento varchar(50)
  telefone varchar(15)
  whatsapp varchar(15)
  pontuacao decimal(5, 2)
}

Table Promocao {
  id_promocao int [pk, increment]
  descricao varchar(100)
  preco decimal(10,2)
  id_oficina int
  id_categoria int
}

Table Avaliacao {
  id_avaliacao int [pk, increment]
  pontuacao int
  comentario varchar(255)
  data date
  id_cliente int
  id_oficina int
}

Table Favorito {
  id_cliente int
  id_oficina int
}

Table Categoria {
  id_categoria int [pk, increment]
  descricao varchar(100)
}

Table OficinaCategoria {
  id_oficina int
  id_categoria int
}

Ref: Promocao.id_oficina > Oficina.id_oficina
Ref: Promocao.id_categoria > Categoria.id_categoria
Ref: Avaliacao.id_cliente > Cliente.id_cliente
Ref: Avaliacao.id_oficina > Oficina.id_oficina
Ref: Favorito.id_cliente > Cliente.id_cliente
Ref: Favorito.id_oficina > Oficina.id_oficina
Ref: OficinaCategoria.id_oficina > Oficina.id_oficina
Ref: OficinaCategoria.id_categoria > Categoria.id_categoria
