import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { db } from '../firebaseconfig'

const Home = () => {
  const [rooms, setRooms] = useState([])

  const getRooms = () => {
    const clt = collection(db, 'rooms')
    try {
      onSnapshot(clt, (data) => {
        const { docs } = data
        setRooms(
          docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
        )
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getRooms()
  }, [])

  return (
    <section className="grid place-items-center gap-8 py-5">
      <Table rooms={rooms} />
    </section>
  )
}

export default Home
