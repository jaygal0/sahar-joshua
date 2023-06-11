import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 9.6rem 0;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2.4rem 0 4.8rem 0;
  gap: 9.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`
const Btn = styled.div`
  background: transparent;
  transition: all ease-in-out 0.1s;
  border-bottom: ${({ theme }) => theme.color.white} solid 6px;
  position: relative;
  width: 17%;
  padding-bottom: 7%;

  &.active {
    border-bottom: ${({ theme }) => theme.color.black} solid 6px;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      border-bottom: ${({ theme }) => theme.color.black} solid 4px;
    }
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    border-bottom: ${({ theme }) => theme.color.black} solid 6px;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      border-bottom: ${({ theme }) => theme.color.black} solid 4px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 20%;
    padding-bottom: 12%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    width: 40%;
    padding-bottom: 18%;
  }
`
const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  width: min-content;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
  }
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.type.size.c};
  border: 4px solid ${({ theme }) => theme.color.black};
  border-radius: 1.6rem;
  background: white;
  height: 400px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: ${({ theme }) => theme.spacing.md};
    height: min-content;
  }
`
const Divider = styled.div`
  height: 200px;
  width: 1px;
  background: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    height: 1px;
    width: 200px;
  }
`
const Heading = styled.h2`
  text-align: center;
  font-size: 5.6rem;
  margin-bottom: 2.4rem;
  font-style: italic;
  font-weight: 200;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 2.4rem;
  }
`
const Text = styled.div`
  width: 50%;
  text-align: center;
  font-size: 5.6rem;
  font-weight: 200;
  line-height: 1.4;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 2.4rem;
  }

  & span {
    font-size: 5.6rem;
    display: block;
    font-weight: 400;
    line-height: 1.4;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
      font-size: 3.2rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
      font-size: 2.4rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
  }
`

const MonzoLink = styled.p`
  font-size: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 2.4rem;
  }
`
const Or = styled.p`
  font-size: ${({ theme }) => theme.type.size.b};
  background: white;
  padding: 0.8rem;
`

export const Payment = ({ sv }: { sv?: Boolean }) => {
  const [isSwish, setIsSwish] = useState<Boolean>(true)
  const [isPaypal, setIsPaypal] = useState<Boolean>(false)
  const [isMonzo, setIsMonzo] = useState<Boolean>(false)

  return (
    <>
      {sv ? (
        <Container>
          <Heading>Välj ett alternativ för att bidra</Heading>
          <Wrapper>
            <Btn
              onClick={() => {
                setIsSwish(true)
                setIsPaypal(false)
                setIsMonzo(false)
              }}
              className={isSwish ? 'active' : ''}
            >
              <Image
                src="/swish.svg"
                layout="fill"
                objectFit="contain"
                alt="swish option"
                placeholder="blur"
              />
            </Btn>
            <Btn
              onClick={() => {
                setIsSwish(false)
                setIsPaypal(false)
                setIsMonzo(true)
              }}
              className={isMonzo ? 'active' : ''}
            >
              <Image
                src="/monzo2.png"
                layout="fill"
                objectFit="contain"
                alt="monzo option"
                placeholder="blur"
              />
            </Btn>
            <Btn
              onClick={() => {
                setIsSwish(false)
                setIsPaypal(true)
                setIsMonzo(false)
              }}
              className={isPaypal ? 'active' : ''}
            >
              <Image
                src="/paypal.png"
                layout="fill"
                objectFit="contain"
                alt="paypal option"
                placeholder="blur"
              />
            </Btn>
          </Wrapper>
          {isSwish && (
            <Modal>
              <FlexWrapper>
                <Image
                  src="/swish-qr.svg"
                  alt=""
                  width={300}
                  height={300}
                  placeholder="blur"
                />
                <Divider>
                  <Or>or</Or>
                </Divider>
                <Text>
                  Skriv <span>0733565578</span> som mottagare.
                </Text>
              </FlexWrapper>
            </Modal>
          )}
          {isMonzo && (
            <Modal>
              <FlexWrapper>
                <Image
                  src="/monzo-qr.svg"
                  alt=""
                  width={300}
                  height={300}
                  placeholder="blur"
                />
                <Divider>
                  <Or>or</Or>
                </Divider>
                <Text>
                  Klicka på{' '}
                  <a
                    href="https://monzo.me/joshuagalinato"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MonzoLink>monzo.me/joshuagalinato</MonzoLink>
                  </a>
                </Text>
              </FlexWrapper>
            </Modal>
          )}
          {isPaypal && (
            <Modal>
              <FlexWrapper>
                <Image
                  src="/paypal-qr.svg"
                  alt=""
                  width={300}
                  height={300}
                  placeholder="blur"
                />
                <Divider>
                  <Or>or</Or>
                </Divider>
                <Text>
                  Klicka på{' '}
                  <a
                    href="https://paypal.me/joshuagalinato1?country.x=SE&locale.x=en_US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MonzoLink>paypal.me/joshuagalinato1</MonzoLink>
                  </a>
                </Text>
              </FlexWrapper>
            </Modal>
          )}
        </Container>
      ) : (
        <Container>
          <Heading>Select an option to contribute</Heading>
          <Wrapper>
            <Btn
              onClick={() => {
                setIsSwish(true)
                setIsPaypal(false)
                setIsMonzo(false)
              }}
              className={isSwish ? 'active' : ''}
            >
              <Image
                src="/swish.svg"
                layout="fill"
                objectFit="contain"
                alt="swish option"
                placeholder="blur"
              />
            </Btn>
            <Btn
              onClick={() => {
                setIsSwish(false)
                setIsPaypal(false)
                setIsMonzo(true)
              }}
              className={isMonzo ? 'active' : ''}
            >
              <Image
                src="/monzo2.png"
                layout="fill"
                objectFit="contain"
                alt="monzo option"
                placeholder="blur"
              />
            </Btn>
            <Btn
              onClick={() => {
                setIsSwish(false)
                setIsPaypal(true)
                setIsMonzo(false)
              }}
              className={isPaypal ? 'active' : ''}
            >
              <Image
                src="/paypal.png"
                layout="fill"
                objectFit="contain"
                alt="paypal option"
                placeholder="blur"
              />
            </Btn>
          </Wrapper>
          {isSwish && (
            <Modal>
              <FlexWrapper>
                <Image
                  src="/swish-qr.svg"
                  alt=""
                  width={300}
                  height={300}
                  placeholder="blur"
                />
                <Divider>
                  <Or>or</Or>
                </Divider>
                <Text>
                  Enter <span>0733565578</span> as the recipient.
                </Text>
              </FlexWrapper>
            </Modal>
          )}
          {isMonzo && (
            <Modal>
              <FlexWrapper>
                <Image
                  src="/monzo-qr.svg"
                  alt=""
                  width={300}
                  height={300}
                  placeholder="blur"
                />
                <Divider>
                  <Or>or</Or>
                </Divider>
                <Text>
                  Click on{' '}
                  <a
                    href="https://monzo.me/joshuagalinato"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MonzoLink>monzo.me/joshuagalinato</MonzoLink>
                  </a>
                </Text>
              </FlexWrapper>
            </Modal>
          )}
          {isPaypal && (
            <Modal>
              <FlexWrapper>
                <Image
                  src="/paypal-qr.svg"
                  alt=""
                  width={300}
                  height={300}
                  placeholder="blur"
                />
                <Divider>
                  <Or>or</Or>
                </Divider>
                <Text>
                  Click on{' '}
                  <a
                    href="https://paypal.me/joshuagalinato1?country.x=SE&locale.x=en_US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MonzoLink>paypal.me/joshuagalinato1</MonzoLink>
                  </a>
                </Text>
              </FlexWrapper>
            </Modal>
          )}
        </Container>
      )}
    </>
  )
}
