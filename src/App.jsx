import './App.css'
import BanImg from './assets/vector1.png';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import CustomerTickets from './Components/CustomerTickets/CustomerTickets';
import InProgressCard from './Components/InProgressCard/InProgressCard';
import { Suspense, useState } from 'react';
import Footer from './Components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTicketAlt, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faTicketAlt, faCheck, faUser);

const fetchCustomerTickets = async () => {
  const res = await fetch("/customersData.json")
  return res.json();
}

const ticketsPromise = fetchCustomerTickets()

  
function App() {
  const [inProgress, setInProgress] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
const removedInProgress=(t)=>{
  console.log(t);
  const filteredTicket=selectedTicket.filter(prog=>prog.customer!==t.customer)
  console.log(filteredTicket);
  setSelectedTicket(filteredTicket);
}
  return (
    <>
      <Navbar></Navbar>
      <Banner resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} inProgress={inProgress} setInProgress={setInProgress}></Banner>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <CustomerTickets removedInProgress={removedInProgress} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} inProgress={inProgress} setInProgress={setInProgress} ticketsPromise={ticketsPromise}></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
