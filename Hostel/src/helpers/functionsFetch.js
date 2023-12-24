import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import db from '../firebaseconfig'

export const getRoom = async (id) => {
  try {
    const res = await getDoc(doc(db, `rooms/${id}`))
    return res.data()
  } catch (error) {
    console.error(error)
  }
}

export const getAllRooms = async (colName) => {
  try {
    const res = await getDocs(collection(db, colName))
    return res
  } catch (error) {
    console.error(error)
  }
}

export const createDoc = async (data) => {
  const doc = collection(db, 'rooms')
  try {
    await addDoc(doc, data)
  } catch (error) {
    console.error(error)
  }
}
