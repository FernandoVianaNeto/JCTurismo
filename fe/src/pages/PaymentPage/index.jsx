import React, { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import * as Styled from './styles';

// import { Base } from '../../templates/Base';

export const PaymentPage = () => {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [descriptions, setDescriptions] = useState('');

  const { shoppingItems } = useSelector((state) => state);
  const { subtotal } = shoppingItems;

  let paypalRef = useRef();

  const product = {
    price: subtotal,
    description: 'litoral norte',
  };

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
                    description: product.description,
                    amount: {
                      currency_code: 'BRL',
                      value: product.price,
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

  useEffect(() => {
    shoppingItems.items.map((item) => {
      const { title } = item;
      setDescriptions({
        ...descriptions,
        title,
      });

      return shoppingItems.items;
    });
  }, [subtotal]);

  return (
    <Styled.Container>
      { paid ? (
        <div className="congratulations">
          <h1>Parabens, você concluiu o pagamento</h1>
        </div>
      ) : (
        <div className="payment-container">
          <h1>
            {product.description}
            {' '}
            por R$
            {product.price}
          </h1>
          <div ref={(v) => (paypalRef = v)} />
        </div>

      ) }
    </Styled.Container>
  );
};
