
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";


export default function LeftNavBar() {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])

  return (
    <div>
        <h3 className="text-base font-semibold">All Categories: {categories.length}</h3>
        <div className="flex flex-col gap-2 p-4">
            {
                categories.map(category => <NavLink to={`/category/${category.category_id}`} className="btn" category={category.category_id}>{category.category_name}</NavLink >)
            } 
        </div>
    </div>
  )
}
