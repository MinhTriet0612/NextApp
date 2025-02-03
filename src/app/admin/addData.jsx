import addData from "@/firebase/firestore/addData";
import Table from "./Table";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import getDoument from "@/firebase/firestore/getData";

export default function DashBoard() {
  const { user } = useAuthContext()

  const [data, setData] = useState([])

  useEffect(() => {
    if (!user) {
      return
    }

    getDoument('users', user.uid).then((res) => {
      if (res.result.exists()) {
        setData(res.result.data().data)
      }
    })

  }, [user])

  const handleForm = async (name, house) => {
    if (!name || !house) {
      return alert('Please fill the form')
    }

    const existingData = data.find((item) => item.name === name && item.house === house)

    if (existingData) {
      return alert('Data already exists')
    }

    const newData = [...data, { name, house }]

    await addData('users', user.uid, { data: newData }).then((res) => {
      setData(newData)
    })
      .catch((e) => {
        alert('Error adding document')
      })
  }

  return (
    <div>
      <Form handleForm={handleForm} />
      <Table data={data} />
    </div>
  )
}
