import React from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
const TextContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  padding: 18.8rem;
  max-width: 1280px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    max-width: 100vw;
    padding: 4.8rem 1.6rem;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
  }
`

const info = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>Wedding Details</h1>
        <p>
          You can find all the information below. If you still have questions,
          feel free to get in touch.
        </p>
        <CardWrapper>
          <Card
            heading="Ceremony"
            location="Gunnebo Slott"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            icon="/ring.svg"
          />
          <Card
            heading="Reception"
            location="Grand Plaza"
            address="Säve Flygplatsväg 26, 423 73 Gothenburg, Sweden"
            addressLink="https://www.google.com/maps/place/S%C3%A4ve+Flygplatsv%C3%A4g+26,+423+73+S%C3%A4ve/@57.7776243,11.8623214,17z/data=!3m1!4b1!4m5!3m4!1s0x464f8a4e1813f61d:0xc9111ac196216adb!8m2!3d57.7776243!4d11.8645101"
            icon="/glass.svg"
          />
          <Card
            heading="Date"
            location="22nd July 2023"
            line1="Details on time will be updated"
            addressLink="https://www.google.com/maps/place/S%C3%A4ve+Flygplatsv%C3%A4g+26,+423+73+S%C3%A4ve/@57.7776243,11.8623214,17z/data=!3m1!4b1!4m5!3m4!1s0x464f8a4e1813f61d:0xc9111ac196216adb!8m2!3d57.7776243!4d11.8645101"
            icon="/calendar.svg"
          />
        </CardWrapper>
        <TextWrapper>
          <h3>Important information</h3>
        </TextWrapper>
        <CardWrapper>
          <Card
            heading="Dress code"
            line1="We'd love everyone to be dressed in formal attire."
            icon="/bowtie.svg"
          />{' '}
          <Card
            heading="Gifts"
            line1="The most important thing is that you are able to celebrate our wedding day with us. However, if you wish to give a gift, we will gratefully accept a contribution towards our honeymoon."
            icon="/gift.svg"
          />{' '}
          <Card
            heading="Adults only"
            line1="To give all our guests the opportunity to celebrate without having to worry about little eyes and ears, we politely request no children."
            icon="/pram.svg"
          />{' '}
        </CardWrapper>
        <TextWrapper>
          <h3>Accomodation</h3>
          <p>
            Below are a few suggestions and ideas on places to stay. You can
            find both hotel and AirBnb options.
          </p>
        </TextWrapper>
        <CardWrapper>
          <Card
            location="Good Morning Mölndal"
            address="Idrottsvägen, 6, Molndal, Vastra Gotaland County, S-43162"
            addressLink="https://sv.hotels.com/ho178034/good-morning-molndal-molndal-sverige/?chkin=2023-07-20&chkout=2023-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1674131572570&referrerUrl=aHR0cHM6Ly9zdi5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=true&rm1=a1&regionId=181065&destination=G%C3%B6teborg%2C+V%C3%A4stra+G%C3%B6talands+l%C3%A4n%2C+Sverige&destType=MARKET&selected=9397&sort=PRICE_LOW_TO_HIGH&top_dp=4996&top_cur=SEK&mdpdtl=HTL.9397.20230202.20230203.DDT.31.CID.17839095072.AUDID.7124072697&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcGH98I1wNWTcv7AFhoK3D6d_uDDJ6NN6I5x9llse4fi3iOYv9FFb8BoCgc4QAvD_BwE&mctc=10&mdpcid=HCOM-SE.META.HPA.HOTEL-CORESEARCH-desktop-PROMOTED-025.HOTEL&userIntent=&selectedRoomType=317735020&selectedRatePlan=386754695&expediaPropertyId=483047"
            padding
            icon="/hotels.svg"
          />{' '}
          <Card
            location="Barken Viking by Dialog Hotels"
            address="Lilla Bommens Torg 10, Gullbergskajen, Gothenburg, 411 04"
            addressLink="https://sv.hotels.com/ho393639/barken-viking-by-dialog-hotels-goteborg-sverige/?chkin=2023-07-20&chkout=2023-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1674131572566&referrerUrl=aHR0cHM6Ly9zdi5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=true&rm1=a1&regionId=181065&destination=G%C3%B6teborg%2C+V%C3%A4stra+G%C3%B6talands+l%C3%A4n%2C+Sverige&destType=MARKET&neighborhoodId=6187643&selected=9397&sort=PRICE_LOW_TO_HIGH&top_dp=3104&top_cur=SEK&mdpdtl=HTL.9397.20230202.20230203.DDT.31.CID.17839095072.AUDID.7124072697&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcGH98I1wNWTcv7AFhoK3D6d_uDDJ6NN6I5x9llse4fi3iOYv9FFb8BoCgc4QAvD_BwE&mctc=10&mdpcid=HCOM-SE.META.HPA.HOTEL-CORESEARCH-desktop-PROMOTED-025.HOTEL&userIntent=&selectedRoomType=211200500&selectedRatePlan=228272915&expediaPropertyId=4673519"
            padding
            icon="/hotels.svg"
          />{' '}
          <Card
            location="Quality Hotel Winn Goteborg"
            address="Gamla Tingstadsgatan 10, Hisings Backa, 402 76"
            addressLink="https://sv.hotels.com/ho171289/quality-hotel-winn-goteborg-hisings-backa-sverige/?chkin=2023-07-20&chkout=2023-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1674131572571&referrerUrl=aHR0cHM6Ly9zdi5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=true&rm1=a1&regionId=181065&destination=G%C3%B6teborg%2C+V%C3%A4stra+G%C3%B6talands+l%C3%A4n%2C+Sverige&destType=MARKET&selected=9397&sort=PRICE_LOW_TO_HIGH&top_dp=5785&top_cur=SEK&mdpdtl=HTL.9397.20230202.20230203.DDT.31.CID.17839095072.AUDID.7124072697&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcGH98I1wNWTcv7AFhoK3D6d_uDDJ6NN6I5x9llse4fi3iOYv9FFb8BoCgc4QAvD_BwE&mctc=10&mdpcid=HCOM-SE.META.HPA.HOTEL-CORESEARCH-desktop-PROMOTED-025.HOTEL&userIntent=&selectedRoomType=200393920&selectedRatePlan=234131709&expediaPropertyId=482020"
            padding
            icon="/hotels.svg"
          />{' '}
          <Card
            location="Quality Hotel Panorama"
            address="Eklandagatan 51-53, Gothenburg, Vastra Gotaland, 412 61"
            addressLink="https://sv.hotels.com/ho222044/quality-hotel-panorama-goteborg-sverige/?chkin=2023-07-20&chkout=2023-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1674131572571&referrerUrl=aHR0cHM6Ly9zdi5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=true&rm1=a1&regionId=181065&destination=G%C3%B6teborg%2C+V%C3%A4stra+G%C3%B6talands+l%C3%A4n%2C+Sverige&destType=MARKET&neighborhoodId=553248633981744534&selected=9397&sort=PRICE_LOW_TO_HIGH&top_dp=5878&top_cur=SEK&mdpdtl=HTL.9397.20230202.20230203.DDT.31.CID.17839095072.AUDID.7124072697&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcGH98I1wNWTcv7AFhoK3D6d_uDDJ6NN6I5x9llse4fi3iOYv9FFb8BoCgc4QAvD_BwE&mctc=10&mdpcid=HCOM-SE.META.HPA.HOTEL-CORESEARCH-desktop-PROMOTED-025.HOTEL&userIntent=&selectedRoomType=201406747&selectedRatePlan=206954075&expediaPropertyId=11163"
            padding
            icon="/hotels.svg"
          />{' '}
          <Card
            location="Kviberg Park Hotel & Conference"
            address="Krutvägen 2, Gothenburg, 41528"
            addressLink="https://sv.hotels.com/ho489552/kviberg-park-hotel-conference-goteborg-sverige/?chkin=2023-07-20&chkout=2023-07-24&x_pwa=1&rfrr=HSR&pwa_ts=1674131572572&referrerUrl=aHR0cHM6Ly9zdi5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=true&rm1=a1&regionId=181065&destination=G%C3%B6teborg%2C+V%C3%A4stra+G%C3%B6talands+l%C3%A4n%2C+Sverige&destType=MARKET&neighborhoodId=553248635974587248&selected=9397&sort=PRICE_LOW_TO_HIGH&top_dp=6103&top_cur=SEK&mdpdtl=HTL.9397.20230202.20230203.DDT.31.CID.17839095072.AUDID.7124072697&gclid=CjwKCAiA-8SdBhBGEiwAWdgtcGH98I1wNWTcv7AFhoK3D6d_uDDJ6NN6I5x9llse4fi3iOYv9FFb8BoCgc4QAvD_BwE&mctc=10&mdpcid=HCOM-SE.META.HPA.HOTEL-CORESEARCH-desktop-PROMOTED-025.HOTEL&userIntent=&selectedRoomType=200882902&selectedRatePlan=274178825&expediaPropertyId=9813807"
            padding
            icon="/hotels.svg"
          />{' '}
          <Card
            location="Cozy Funkisradhus in Sävedalen"
            address="Ugglum, Västra Götalands län, Sweden"
            addressLink="https://www.airbnb.com/rooms/38097266?adults=6&location=G%C3%B6teborg%2C%20Sweden&check_in=2023-07-19&check_out=2023-07-24&federated_search_id=4504c8cf-23e6-455a-a1e0-d42c82e858a0&source_impression_id=p3_1674133078_lAOf%2FMl70ISL37By"
            padding
            icon="/airbnb.svg"
          />{' '}
          <Card
            location="Entire townhouse"
            address="Mölndal Östra, Västra Götalands län, Sweden"
            addressLink="https://www.airbnb.com/rooms/54389215?adults=5&location=G%C3%B6teborg%2C%20Sweden&check_in=2023-07-19&federated_search_id=88673b55-145d-4f18-916b-722b5139e70c&source_impression_id=p3_1674133402_HKwR7ZOkbtKiXMxE&guests=1&check_out=2023-07-24"
            padding
            icon="/airbnb.svg"
          />{' '}
          <Card
            location="Entire villa"
            address="Göteborg, Västra Götalands län, Sweden"
            addressLink="https://www.airbnb.com/rooms/37035050?adults=6&location=G%C3%B6teborg%2C%20Sweden&check_in=2023-07-19&federated_search_id=4317a8ca-3e7a-485f-ab82-deebe9cf1e18&source_impression_id=p3_1674133472_nUQJ0IkCwfZDM0IS&guests=6&check_out=2023-07-24"
            padding
            icon="/airbnb.svg"
          />{' '}
          <Card
            location="Entire guest suite"
            address="Gothenburg, Västra Götalands län, Sweden"
            addressLink="https://www.airbnb.com/rooms/11234829?adults=4&location=G%C3%B6teborg%2C%20Sweden&check_in=2023-07-19&check_out=2023-07-23&federated_search_id=5e9f15c8-c7cd-49bc-8267-e5fa3ac42bd9&source_impression_id=p3_1674133735_XdLTHig8oxCM3cG%2B"
            padding
            icon="/airbnb.svg"
          />{' '}
          <Card
            location="Entire guesthouse"
            address="Tolered, Västra Götalands län, Sweden"
            addressLink="https://www.airbnb.com/rooms/653544820702418961?adults=4&location=G%C3%B6teborg%2C%20Sweden&check_in=2023-07-19&check_out=2023-07-23&federated_search_id=034f1304-4016-44d4-9841-8ab4c1f0e43a&source_impression_id=p3_1674133758_WOksvnH64UI%2FW0rH"
            padding
            icon="/airbnb.svg"
          />{' '}
        </CardWrapper>
        <TextWrapper>
          <h3>Additional activities</h3>
          <p>
            We'd love to spend time with you both before and after the wedding.
            Of course, there's no pressure if you can't make it!
          </p>
        </TextWrapper>
        <CardWrapper>
          <Card
            heading="TBA"
            line1="Date: 20th July 2023"
            line2="More information will be posted soon"
            icon="/bbq.svg"
          />{' '}
          <Card
            heading="TBA"
            line1="Date: 23rd July 2023"
            line2="More information will be posted soon"
            icon="/water.svg"
          />{' '}
        </CardWrapper>
      </TextContainer>
    </Wrapper>
  )
}

export default info
