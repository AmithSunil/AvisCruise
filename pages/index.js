import {
  Banner,
  Booking,
  Cards,
  Destinations,
  Enquiry,
  SearchSection,
} from "@/components"
import { firestore } from "@/utils/firebase"
import Swiper from "../components/RSwiper"
import { useEffect, useState } from "react"

export default function Home({ CardsData, TrendingData }) {
  const [selectedCard, setSelectedCard] = useState(null)
  const handleSubmit = card => {
    setSelectedCard(card)
  }

  //ENTA CHANGES

  const [nationality, changeLoc] = useState("")
  const [location, changeNat] = useState("")

  const [cardlist, setCardlist] = useState(CardsData)

  const sort = () => {
    const cardlist = CardsData.filter(card => {
      return card.name.toLowerCase().includes(nationality.label.toLowerCase())
    })

    console.log(cardlist)
    setCardlist(cardlist)
  }

  const searchcards = CardsData.map(cardname => {
    return cardname.name
  })

  const buttonClicked = () => {
    sort()
    console.log(nationality.label, location.label)
  }

  return (
    <>
      <Enquiry />
      <Swiper TrendingData={TrendingData} handleSubmit={handleSubmit} />
      <SearchSection
        SearchCards={searchcards}
        buttonClicked={buttonClicked}
        nationality={changeNat}
        location={changeLoc}
      />
      <Destinations
        CardsData={cardlist}
        handleSubmit={handleSubmit}
        selectedCard={selectedCard}
      />
      <Booking selectedCard={selectedCard} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const CardsSnapshot = await firestore.collection("Fix-Departure").get()
    const CardsData = CardsSnapshot.docs.map(doc => doc.data())
    const TrendingSnapshot = await firestore.collection("Trending-Now").get()
    const TrendingData = TrendingSnapshot.docs.map(doc => doc.data())
    return { props: { CardsData, TrendingData } }
  } catch (error) {
    console.error("Error in Fetching Data:", error)
    return { props: { CardsData: [], TrendingData: [] } }
  }
}
