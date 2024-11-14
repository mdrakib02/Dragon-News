import { useLoaderData } from "react-router-dom";
import News from "../../../Pages/Home/News";

export default function NewsCategory() {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="text-base font-semibold">Todays Update</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-6">
        {news.map((singleNews) => (
          <News singleNews={singleNews.category_id} Newses={singleNews}></News>
        ))}
      </div>
    </div>
  );
}
