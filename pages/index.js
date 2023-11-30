import { Banner, Cards, Destinations, Enquiry, SearchSection, } from "@/components"
import { firestore } from "@/utils/firebase"
import { useEffect, useState } from "react"
 

export default function Home({ CardsData }) {
  
  const [nationality, changeLoc] = useState('');
  const [location, changeNat] = useState('');

 const [cardlist, setCardlist] = useState(CardsData);


 const sort = () => {
  const cardlist = CardsData.filter((card) => {
    return card.name.toLowerCase().includes(String);
  });

  console.log(cardlist);
  setCardlist(cardlist);
};


  
  const buttonClicked =()=>{
    sort();
    console.log( nationality.label, location.label);
    console.log('Button Clicked');
  }
  
  return (
    <>
      <Banner />
      <Enquiry />
      <SearchSection buttonClicked={buttonClicked} nationality={changeNat} location={changeLoc} />
      <Destinations CardsData={cardlist} />
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
