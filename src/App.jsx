import './App.css'
import BanImg from './assets/vector1.png';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import CustomerTickets from './Components/CustomerTickets/CustomerTickets';
import { Suspense } from 'react';

const fetchCustomerTickets = async () => {
  const res = await fetch("/customersData.json")
  return res.json();
}

const ticketsPromise = fetchCustomerTickets()


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </Suspense>
    </>
  )
}

export default App
