import { Banner, Cards, Destinations, Enquiry, SearchSection, } from "@/components"
import { firestore } from "@/utils/firebase"
import { useEffect, useState } from "react"
 

export default function Home({ CardsData }) {
  
  const [nationality, changeLoc] = useState('');
  const [location, changeNat] = useState('');
  let ar=[];



  const sort = () => {
    const cardlist= CardsData.filter((card) =>
      card.name.toLowerCase().includes(location.toLowerCase())
    );
    ar.clear();
    ar.append(cardlist);
  };

  
  const buttonClicked =()=>{
    sort();
    changeLoc(location)
    changeNat(nationality)
    console.log( nationality, location);
    console.log('Button Clicked');
  }
  
  return (
    <>
      <Banner />
      <Enquiry />
      <SearchSection buttonClicked={buttonClicked} nationality={changeNat} location={changeLoc} />
      <Destinations CardsData={ar} />
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
