export default function Home() {
  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl mb-4">Home Page</h1>
      <ul>
        <li><a href="http://localhost:3000/api/lists">All Books</a></li>
        <li><a href="http://localhost:3000/list/top-3-books-to-learn-business">Top 3 Books to Learn Business</a></li>
      </ul>
    </div>
  )
}
