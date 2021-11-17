/* eslint-disable react/self-closing-comp */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Container, SmallGroup, Group, BigGroup, FlexDiv,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form } from '../../components/Form';
import { Select } from '../../components/Select';
import { Base } from '../../templates/Base';

const { Mercadopago } = window;

export const PaymentPage = () => {
  const [doSubmit, setDoSubmit] = useState(false);

  const { shoppingItems } = useSelector((state) => state);
  const { subtotal } = shoppingItems;

  useEffect(() => {
    window.onload = () => {
      Mercadopago.getIdentificationTypes();

      function checkFn() {
        Mercadopago.setPublishableKey(
          'APP_USR-5ac54a69-7ce0-426e-8d59-0e21ac177d51',
        );
      }

      checkFn();

      setTimeout(() => {
        if (!Mercadopago.initialized) {
          checkFn();
        }
      }, 1000);
    };
  }, []);

  function setInstallments(status, response) {
    if (status === 200) {
      document.getElementById('installments').options.length = 0;
      response[0].payer_costs.forEach((payerCost) => {
        const opt = document.createElement('option');
        opt.text = payerCost.recommended_message;
        opt.value = payerCost.installments;
        document.getElementById('installments').appendChild(opt);
      });
    } else {
      alert(`installments method info error: ${response}`);
    }
  }

  function getInstallments(paymentMethodId, transactionAmount, issuerId) {
    Mercadopago.getInstallments({
      payment_method_id: paymentMethodId,
      amount: parseFloat(transactionAmount),
      issuer_id: parseInt(issuerId, 10),
    }, setInstallments);
  }

  function setIssuers(status, response) {
    if (status === 200) {
      const issuerSelect = document.getElementById('issuer');
      response.forEach((issuer) => {
        const opt = document.createElement('option');
        opt.text = issuer.name;
        opt.value = issuer.id;
        issuerSelect.appendChild(opt);
      });

      getInstallments(
        document.getElementById('paymentMethodId').value,
        document.getElementById('transactionAmount').value,
        issuerSelect.value,
      );
    } else {
      alert(`issuers method info error: ${response}`);
    }
  }

  function getIssuers(paymentMethodId) {
    Mercadopago.getIssuers(
      paymentMethodId,
      setIssuers,
    );
  }

  function setPaymentMethod(status, response) {
    if (status === 200) {
      const paymentMethod = response[0];
      document.getElementById('paymentMethodId').value = paymentMethod.id;
      getIssuers(paymentMethod.id);
    } else {
      alert(`payment method info error: ${response}`);
    }
  }

  function guessPaymentMethod() {
    const cardnumber = document.getElementById('cardNumber').value;
    if (cardnumber.length === 6) {
      const bin = cardnumber.substring(0, 6);
      Mercadopago.getPaymentMethod({
        bin,
      }, setPaymentMethod);
    }
  }

  function setCardTokenAndPay(status, response) {
    if (status === 200 || status === 201) {
      const form = document.getElementById('paymentForm');
      const card = document.createElement('input');
      card.setAttribute('name', 'token');
      card.setAttribute('type', 'hidden');
      card.setAttribute('value', response.id);
      form.appendChild(card);
      setDoSubmit(true);
      form.submit();
    } else {
      alert(`Verify filled data!\n${JSON.stringify(response, null, 4)}`);
    }
  }

  // eslint-disable-next-line consistent-return
  function getCardToken(event) {
    event.preventDefault();
    if (!doSubmit) {
      const $form = document.getElementById('paymentForm');
      Mercadopago.createToken($form, setCardTokenAndPay);
      return false;
    }
  }

  return (
    <Container>
      <Base />
      <BigGroup>
        <Form onSubmit={getCardToken} id="paymentForm" action="http://localhost:3001/process_payment" method="POST">
          <BigGroup>
            <Group>
              <SmallGroup>
                <small>E-mail: </small>
                <Input
                  name="email"
                  type="text"
                  placeholder="Digite seu e-mail"
                />
              </SmallGroup>
              <SmallGroup>
                <small>Tipo de documento: </small>
                <Select
                  type="text"
                  name="docType"
                  data-checkout="docType"
                  id="docType"
                />
              </SmallGroup>
              <SmallGroup>
                <small>Número do documento: </small>
                <Input
                  type="text"
                  name="docNumber"
                  data-checkout="docNumber"
                  placeholder="Digite o número do documento"
                />
              </SmallGroup>
            </Group>
            <Group>
              <SmallGroup>
                <small>Titular do cartão: </small>
                <Input
                  type="text"
                  name="cardholderName"
                  data-checkout="cardholderName"
                  placeholder="Digite como está no cartão"
                />
              </SmallGroup>
              <SmallGroup>
                <small>Data de vencimento: </small>
                <FlexDiv>
                  <Input
                    type="text"
                    data-checkout="cardExpirationMonth"
                    placeholder="MM"
                  />
                  <Input
                    type="text"
                    data-checkout="cardExpirationYear"
                    placeholder="YY"
                  />
                </FlexDiv>
              </SmallGroup>
              <SmallGroup>
                <small>Número do cartão: </small>
                <Input
                  data-checkout="cardNumber"
                  id="cardNumber"
                  placeholder="Digite o número do cartão"
                  type="text"
                  onChange={guessPaymentMethod}
                />
              </SmallGroup>
              <SmallGroup>
                <small>Código de segurança: </small>
                <Input
                  placeholder="Código de segurança"
                  data-checkout="securityCode"
                  type="text"
                />
              </SmallGroup>
              <SmallGroup>
                <small>Banco emissor: </small>
                <Select
                  id="issuer"
                  name="issuer"
                  data-checkout="issuer"
                  type="text"
                >
                </Select>
              </SmallGroup>
              <SmallGroup>
                <small>Parcelas: </small>
                <Select
                  type="text"
                  name="installments"
                  id="installments"
                >
                </Select>
              </SmallGroup>
              <SmallGroup>
                <input type="hidden" name="transactionAmount" id="transactionAmount" value={subtotal} />
                <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
                <input type="hidden" name="description" id="description" />
                <br />
                <Button type="submit">Pagar</Button>
                <br />
              </SmallGroup>
            </Group>
          </BigGroup>
        </Form>
      </BigGroup>
    </Container>
  );
};

PaymentPage.propTypes = {

};
