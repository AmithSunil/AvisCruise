import { useState } from "react"
import { Banner, Booking, Cards, Destinations, Enquiry } from "@/components"
import { firestore } from "@/utils/firebase"
import Swiper from "../components/RSwiper"

export default function Home({ CardsData, TrendingData }) {
  const [selectedCard, setSelectedCard] = useState(null)
  const handleSubmit = card => {
    setSelectedCard(card)
  }
  return (
    <>
      <Banner />
      <Enquiry />
      <Swiper TrendingData={TrendingData} handleSubmit={handleSubmit} />
      <Destinations
        CardsData={CardsData}
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
