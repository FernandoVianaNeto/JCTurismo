// colocar todos os dados do site nessa parte e consumir como se fosse uma api.
export const data = {
  destinos: [
    {
      id: 1,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1628197030/ignacio-aguilar-S7KooAJPyxk-unsplash_i9kn1v.jpg',
      title: 'Litoral Norte',
      status: 'Disponível',
      categorias: {
        individual: {
          id: 1594561213,
          tipo: 'individual',
          price: 500.00,
        },
        pacote: {
          tipos: [
            {
              id: 15612312,
              tipo: 'Até de 3 pessoas',
              price: 500.00,
            },
            {
              id: 14547451,
              tipo: '4 a 6 pessoas',
              price: 800.00,
            },
          ],
          adicional: 130.00,
        },
      },
      description: 'Com saída dos hotéis de Salvador, seguiremos a Linha Verde para conhecer duas das mais belas praias do Litoral Baiano. Primeira parada na Praia do Forte - conhecida como a Polinésia Brasileira, você terá a oportunidade de conhecer o Projeto Tamar, reconhecido internacionalmente como uma das mais bem sucedidas experiências de conservação marinha. Visitará a vilinha mais charmosa  com um ambiente rústico e aconchegante. Segunda parada na Praia de Guarajuba - Uma praia com selo Bandeira Azul que reserva as melhores piscinas naturais, um balneário bem estruturado com águas tranquilas e cristalinas que compõe uma paisagem fantástica. Areia bem fofinha para caminhar pelos corais e uma imensidão de coqueiros.',
      smallDescription: 'Com saída dos hotéis de Salvador, seguiremos a Linha Verde para conhecer duas das mais belas praias do Litoral Baiano. Primeira parada na Praia do Forte - conhecida como a Polinésia Brasileira...',
      paymentDescription: 'Passeio Litoral Norte',
    },
    {
      id: 2,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200321/WhatsApp_Image_2021-08-05_at_18.51.51_ii5qlq.jpg',
      title: 'Imbassaí e Itacimirim',
      status: 'Disponível',
      categorias: {
        individual: {
          id: 123151,
          tipo: 'individual',
          price: 500.00,
        },
        pacote: {
          tipos: [
            {
              id: 121213,
              tipo: 'Até 3 pessoas',
              price: 500.00,
            },
            {
              id: 121311,
              tipo: '4 a 6 pessoas',
              price: 800.00,
            },
          ],
          adicional: 130.00,
        },
      },
      description: 'A pouco mais de 10 km da Praia do Forte, a vila de Imbassaí teve origem em uma pequena aldeia indígena que hoje se tornou um dos destinos turísticos mais gostosos da Bahia. Com ótima infraestrutura de pousadas, bares, restaurantes, lojas de artesanato, e opções para todos os gostos, a Praia de Imbassaí vem conquistando todos que passam alguns dias por lá. Principalmente por causa dos ótimos preços praticados, bem diferente da sua badalada vizinha.',
      smallDescription: 'A pouco mais de 10 km da Praia do Forte, a vila de Imbassaí teve origem em uma pequena aldeia indígena que hoje se tornou um dos destinos turísticos mais gostosos da Bahia...',
      paymentDescription: 'Imbassaí e Itacimirim',
    },
    {
      id: 3,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200266/WhatsApp_Image_2021-08-05_at_18.50.54_jf00rc.jpg',
      title: 'Passeio de Lancha',
      status: 'Disponível',
      categorias: {
        individual: {
          id: 123151,
          tipo: 'individual',
          price: 450.00,
        },
        pacote: {
          tipos: [
            {
              id: 28313,
              tipo: 'Com 9 pessoas',
              price: 600.00,
            },
            {
              id: 16132,
              tipo: 'Com até 10 pessoas',
              price: 750.00,
            },
            {
              id: 215132,
              tipo: 'Com até 11 pessoas',
              price: 900.00,
            },
          ],
          adicional: 150.00,
        },
      },
      description: 'Lorem ipsum tortor ad fames magna pellentesque curabitur leo maecenas eros ligula, venenatis consequat fusce arcu bibendum platea eu primis nisi lacinia vitae, ullamcorper proin laoreet pretium erat lectus felis eu malesuada a. vulputate odio in ultrices dolor adipiscing placerat leo ac, phasellus justo porta et est curabitur lobortis ad faucibus, sedullamcorper ultrices etiam varius lobortis praesent fames. eu dictum in nibh iaculis facilisis suscipit odio cubilia fusce netus, duis odio cras donec lectus varius aenean lobortis nullam. lectus dapibus pharetra bibendum viverra congue dolor duis, vehicula cubilia faucibus sollicitudin consequat morbi, litora potenti risus sagittis fermentum donec.',
      smallDescription: 'Lorem ipsum tortor ad fames magna pellentesque curabitur leo maecenas eros ligula, venenatis consequat fusce arcu bibendum platea eu primis nisi lacinia vitae, ullamcorper...',
      paymentDescription: 'Passeio Lancha',
    },
    {
      id: 4,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1628200208/WhatsApp_Image_2021-08-05_at_18.49.57_ehjfpe.jpg',
      title: 'Passeio Ilha dos Frades - Itaparica',
      status: 'Disponível',
      categorias: {
        individual: {
          id: 78461,
          tipo: 'individual',
          price: 80.00,
        },
        pacote: {
          tipos: [
            {
              id: 8465132,
              tipo: 'Passeio',
              price: 80.00,
            },
            {
              id: 75421,
              tipo: 'Passeio + Translado ida e volta',
              price: 140.00,
            },
            {
              id: 7413296,
              tipo: 'Passeio + Translado ida e volta + Almoço',
              price: 180.00,
            },
          ],
          // adicional: 25.00,
        },
      },
      description: 'Com saída do Terminal Marítimo (Atrás do Mercado Modelo), você irá embarcar em escuna equipada com serviços de bar e guia acompanhante. Durante o percurso, visita-se a Ilha dos Frades e Ponta de Areia (Itaparica), o passeio possibilita uma bela vista da cidade de Salvador. A partir da Baía de Todos os Santos, Forte São Marcelo, Elevador Lacerda e o Mercado Modelo.',
      smallDescription: 'Com saída do Terminal Marítimo (Atrás do Mercado Modelo), você irá embarcar em escuna equipada com serviços de bar e guia acompanhante...',
      paymentDescription: 'Passeio Ilha dos Frades Itaparica',
    },
    {
      id: 5,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1628176149/pexels-mario-pais-cie-4172523_hdxyw4.jpg',
      title: 'CityTour',
      status: 'Disponível',
      categorias: {
        individual: {
          id: 123156151,
          tipo: 'individual',
          price: 280.00,
        },
        pacote: {
          tipos: [
            {
              id: 741852965213,
              tipo: 'Até 3 pessoas',
              price: 280.00,
            },
            {
              id: 897545312,
              tipo: '4 a 6 pessoas',
              price: 450.00,
            },
          ],
          adicional: 100.00,
        },
      },
      description: 'Este passeio dura cerca de 5 horas e é um dos mais interessantes. Isso porque o guia irá te conduzir para uma viagem no tempo e te levará para conhecer cada cantinho dessa cidade fantástica. No percurso está incluso a Cidade Alta, o Largo do Pelourinho, Terreiro de Jesus, a Igreja de São Francisco (visita opcional), o Elevador Lacerda, a Igreja do Bonfim e o Mercado Modelo. Em todos os locais do roteiro haverá paradas para que você possa passear, tirar fotos e conhecer. É um passeio bem cultural e que vale a pena incluir em sua lista de o que fazer em Salvador.',
      smallDescription: 'Este passeio dura cerca de 5 horas e é um dos mais interessantes. Isso porque o guia irá te conduzir para uma viagem no tempo e te levará para conhecer cada cantinho dessa cidade fantástica...',
      paymentDescription: 'CityTour',
    },
    {
      id: 6,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1630440293/WhatsApp_Image_2021-08-31_at_17.04.42_ry7oci.jpg',
      title: 'Mangue Seco',
      status: 'Disponível',
      categorias: {
        individual: {
          id: 79513212,
          tipo: 'individual',
          price: 700.00,
        },
        pacote: {
          tipos: [
            {
              id: 4564231,
              tipo: 'Até 3 pessoas',
              price: 700.00,
            },
            {
              id: 8956531,
              tipo: '4 a 6 pessoas',
              price: 1000.00,
            },
          ],
          adicional: 150.00,
        },
      },
      description: "Com saída dos hotéis de Salvador, seguiremos pelo extremo Norte do Estado até a divisa de Bahia e Sergipe por aproximadamente 200 km até chegar ao povado de Pontal e atravessar o Rio Real em lancha para Mangue Seco. Mangue Seco é totalmente pé na areia e não existem ruas, a vila é composta por trilhas onde os 'bugueiros' conduzem os turistas para desfrutar da belíssima praia rodeada de coqueiros e dunas. Famosa por ter sido o cenário da novela Tieta, inspirada no romance de Jorge Amado, com potencial turístico enorme, pela beleza da região. Com dunas de areia fininha, praia quase deserta, um cenário especial para um delicioso passeio de quadriciclo, banho de mar e aproveitar da deliciosa culinária.",
      smallDescription: 'Com saída dos hotéis de Salvador, seguiremos pelo extremo Norte do Estado até a divisa de Bahia e Sergipe por aproximadamente 200 km até chegar ao povado de Pontal e atravessar o Rio Real em lancha para Mangue Seco...',
      paymentDescription: 'Passeio Mangue Seco',
    },
  ],
  serviços: [
    {
      id: 13,
      title: 'Transfer',
      smallDescription: 'Transporte entre o aeroporto e o seu destino de escolha, com confiabilidade e e segurança',
      iconLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1632173801/bus_120710_shasxs.svg',

    },
    {
      id: 14,
      title: 'City Tour',
      smallDescription: 'Este passeio extremamente cultural, levará você por uma viagem no tempo, conhecendo o melhor da história de Salvador',
      iconLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1632174356/city_building_construction_cities_buildings_icon_133122_ibo2wy.svg',
    },
    {
      id: 121311,
      title: 'Pacotes',
      smallDescription: 'Você poderá escolher um pacote, entre os nossos passeios, para curtir com sua família, sem gastar muito, aproveitando o melhor com o menor preço',
      iconLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1632176167/package_106363_oyaoes.svg',
    },
  ],
  chamadas: [
    {
      id: 15,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1630440293/WhatsApp_Image_2021-08-31_at_17.04.42_ry7oci.jpg',
      title: 'Conheça o melhor do litoral baiano',
      smallDescription: 'Com saída dos hotéis de Salvador, seguiremos a Linha Verde para conhecer duas das mais belas praias do Litoral Baiano. Primeira parada na Praia do Forte - conhecida como a Polinésia Brasileira, você terá a oportunidade de conhecer o Projeto Tamar, reconhecido internacionalmente como uma das mais bem sucedidas experiências de conservação marinha. Visitará a vilinha mais charmosa  com um ambiente rústico e aconchegante...',
      invert: true,
    },
    {
      id: 16,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1631383494/WhatsApp_Image_2021-09-11_at_15.04.19_fr08g1.jpg',
      title: 'Viaje e aproveite o momento com sua família',
      smallDescription: 'Uma experiência indescritível, onde você e sua família conhecerão o melhor da Bahia. Do farol da barra as praias paradisíacas do Litoral Norte, aqui temos de tudo: Relaxamento, diversão, cultura, culinária para agradar a todos os paladares. ',
      invert: false,
    },
    {
      id: 17,
      imgLink: 'https://res.cloudinary.com/dh84pxwgu/image/upload/v1628184380/cleverson-magalhaes-JfMZZqioMSU-unsplash_ej73lh.jpg',
      title: 'Conheça a cultura e a história da Bahia',
      smallDescription: 'Este passeio dura cerca de 5 horas e é um dos mais interessantes. Isso porque o guia irá te conduzir para uma viagem no tempo e te levará para conhecer cada cantinho dessa cidade fantástica. No percurso está incluso a Cidade Alta, o Largo do Pelourinho, Terreiro de Jesus, a Igreja de São Francisco (visita opcional), o Elevador Lacerda, a Igreja do Bonfim e o Mercado Modelo.',
      invert: true,
    },
  ],
};

// modelo de data:
// {
//   "id": "67c12281-e208-41ad-8f78-d88e3c70aa7f",
//   "title": "Mangue Seco",
//   "imglink": "https://res.cloudinary.com/dh84pxwgu/image/upload/v1630440293/WhatsApp_Image_2021-08-31_at_17.04.42_ry7oci.jpg",
//   "status": true,
//   "description": "Com saída dos hotéis de Salvador, seguiremos pelo extremo Norte do Estado até a divisa de Bahia e Sergipe por aproximadamente 200 km até chegar ao povado de Pontal e atravessar o Rio Real em lancha para Mangue Seco. Mangue Seco é totalmente pé na areia e não existem ruas, a vila é composta por trilhas onde os 'bugueiros' conduzem os turistas para desfrutar da belíssima praia rodeada de coqueiros e dunas. Famosa por ter sido o cenário da novela Tieta, inspirada no romance de Jorge Amado, com potencial turístico enorme, pela beleza da região. Com dunas de areia fininha, praia quase deserta, um cenário especial para um delicioso passeio de quadriciclo, banho de mar e aproveitar da deliciosa culinária.",
//   "smalldescription": "Com saída dos hotéis de Salvador, seguiremos pelo extremo Norte do Estado até a divisa de Bahia e Sergipe por aproximadamente 200 km até chegar ao povado de Pontal e atravessar o Rio Real em lancha para Mangue Seco...",
//   "paymentdescription": "Passeio Mangue Seco",
//   "categories": {
//     "individual": {
//       "id": 79513212,
//       "type": "individual",
//       "price": 700
//     },
//     "pacote": {
//       "types": [
//         {
//           "id": 4564231,
//           "type": "Até 3 pessoas",
//           "price": 700
//         },
//         {
//           "id": 8956531,
//           "type": "4 a 6 pessoas",
//           "price": 1000
//         }
//       ],
//       "adicional": 150
//     }
//   },
//   "avaliations": null
// }
