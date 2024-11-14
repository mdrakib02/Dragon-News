import { useEffect, useState } from "react"


export default function LeftNavBar() {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('../categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

  return (
    <div>
        <h3 className="text-base font-semibold">All Categories: {categories.length}</h3>
        <div className="flex flex-col gap-2 p-4">
            {
                categories.map(category => <button className="btn" category={category.id}>{category.name}</button>)
            }
        </div>
    </div>
  )
}
