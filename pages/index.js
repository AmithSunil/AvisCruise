import { Banner, Cards, Destinations, Enquiry, } from "@/components"
import { firestore } from "@/utils/firebase"

export default function Home({ CardsData }) {
  return (
    <>
      <Banner />
      <Enquiry />
      <Destinations CardsData={CardsData} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const CardsSnapshot = await firestore.collection("Cards").get()
    const CardsData = CardsSnapshot.docs.map(doc => doc.data())
    return { props: { CardsData } }
  } catch (error) {
    console.error("Error in Fetching Data:", error)
    return { props: { CardsData: [] } }
  }
}
