import addData from "@/firebase/firestore/addData";
import Table from "./Table";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import getDoument from "@/firebase/firestore/getData";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const { user } = useAuthContext()
  const router = useRouter()

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
    <div className="mt-2">
      <div className="max-w-md mx-auto  flex flex-row gap-3">
        <div className="text-2xl font-semibold mb-4">Welcome {user?.email}</div>
        <button
          type="button"
          className="p-2 mb-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => { router.push('/') }}
        >
          Log out
        </button>
      </div>
      <Form handleForm={handleForm} />
      <Table data={data} />
    </div>
  )
}
