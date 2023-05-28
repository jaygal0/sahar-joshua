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
const ModalHeading = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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
const Heading = styled.p`
  font-size: ${({ theme }) => theme.type.size.b};
  width: 100%;
  text-align: center;
`
const Text = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  width: 50%;
  text-align: center;

  & span {
    font-size: ${({ theme }) => theme.type.size.a};
    display: block;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
  }
`
const Or = styled.p`
  font-size: ${({ theme }) => theme.type.size.b};
  background: white;
  padding: 0.8rem;
`
export const Payment = () => {
  const [isSwish, setIsSwish] = useState<Boolean>(true)
  const [isPaypal, setIsPaypal] = useState<Boolean>(false)
  const [isMonzo, setIsMonzo] = useState<Boolean>(false)

  return (
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
          />
        </Btn>
      </Wrapper>
      {isSwish && (
        <Modal>
          <FlexWrapper>
            <Image src="/swish.png" alt="" width={300} height={300} />
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
            <Image src="/monzoqr.jpeg" alt="" width={300} height={300} />
            <Divider>
              <Or>or</Or>
            </Divider>
            <Text>
              Sort code: <span>04-00-04</span>
              Account No.: <span>43860381</span>
            </Text>
          </FlexWrapper>
        </Modal>
      )}
      {isPaypal && (
        <Modal>
          <FlexWrapper>
            <Image src="/swish.png" alt="" width={300} height={300} />
            <Divider>
              <Or>or</Or>
            </Divider>
            <Text>
              Enter <span>0733565578</span> as the recipient.
            </Text>
          </FlexWrapper>
        </Modal>
      )}
    </Container>
  )
}
