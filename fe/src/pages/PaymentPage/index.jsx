import React, { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import Input from '../../components/Input';
import * as Styled from './styles';

export const PaymentPage = () => {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [description, setDescription] = useState([]);

  const { shoppingItems } = useSelector((state) => state);
  const { subtotal, items } = shoppingItems;

  let paypalRef = useRef();

  const products = [];
  const productDescription = {
    price: subtotal,
    description,
  };

  useEffect(() => {
    items.map((item) => {
      products.push([{
        product: item.title,
        categoria: item.categoria,
      }]);

      return items;
    });
    setDescription(products);
  }, [items]);

  useEffect(() => {
    const script = document.createElement('script');
    const id = 'ARC45kPyK8GIgYvbyC7d8rEDRD5aBe0ItvSXLzlsIo-xTWHg8Fl-5hhxs73OgDFHkVKv6ho_LbOcwvU1';
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

    script.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(script);

    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (data, actions) => actions.order.create({
                purchase_units: [
                  {
                    description: JSON.stringify(productDescription.description.map((product) => product)),
                    amount: {
                      currency_code: 'BRL',
                      value: productDescription.price,
                    },
                  },
                ],
              }),
              onApprove: async () => {
                setPaid(true);
              },
            })
            .render(paypalRef);
        });
      }
      loadButtonsAndLogicAboutPayment();
    }
  });

  return (
    <Styled.Container>
      { paid ? (
        <div className="congratulations">
          <a href=" " name="chamada"> </a>
          <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1626980792/WhatsApp_Image_2021-07-22_at_15.41.41-removebg-preview_hydex1.png" alt="logo" />
          <strong>Nós somos a JCT Turismo</strong>
          <p>
            Empresa com gostinho baiano que vai proporcionar para você  os melhores passeios  que irá  encontrar na cidade.
            <br />
            Focada em excelência e satisfação, procuramos sempre mostrar como um cliente deve ser tratado.

          </p>
          <strong>Entre em contato conosco e marque a melhor viagem da sua vida</strong>
        </div>
      ) : (
        <div className="payment-container">
          <section>
            <h1>Escolha a melhor forma de pagamento</h1>
            <div ref={(v) => (paypalRef = v)} />
          </section>
          <aside>
            <h1>
              Você está comprando:
            </h1>
            {productDescription.description.map((prod) => (
              <p key={prod.id}>{prod}</p>
            ))}
            {' '}
            por R$
            {productDescription.price}

            <form action="">
              <Input placeholder="Digite seu nome" />
            </form>
          </aside>
        </div>
      ) }
    </Styled.Container>
  );
};
