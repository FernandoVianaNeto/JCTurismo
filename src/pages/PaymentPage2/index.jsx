import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Container, Form, Group } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';

export const PaymentPage = () => {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [description, setDescription] = useState([]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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
      const passeio = { id: item.id, title: item.title, categoria: item.categoria };
      products.push(passeio);

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

  useEffect(() => {
    if (!isEmailValid(email)) {
      setEmailError('E-mail não é válido');
    }
  }, [email, phone]);

  return (
    <Container>
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
            <h1>Escolha a sua melhor forma de pagamento</h1>
            <div ref={(v) => (paypalRef = v)} />
          </section>
          <aside>
            <h1>Preencha o formulário abaixo para dar continuidade ao pagamento</h1>
            <Form>
              <Input
                placeholder="Digite seu nome*"
                name="name"
              />

              <Group>
                <Input
                  placeholder="Qual o seu e-mail?*"
                  name="email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                {
                  emailError !== '' && (
                    <small>{emailError}</small>
                  )
                }
              </Group>

              <Input
                placeholder="Qual o seu telefone?*"
                name="phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
              />

              <Group>
                <Input
                  type="date"
                  placeholder="Selecione a data*"
                  name="date"
                />
                <small>Selecione a data que deseja realizar o passeio*</small>
              </Group>
              <Button type="submit">Enviar</Button>
            </Form>
          </aside>
        </div>
      ) }
    </Container>
  );
};
