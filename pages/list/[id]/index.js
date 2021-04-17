import Link from 'next/Link'
import { getLists } from '../../api/lists/[id]'
import Image from 'next/image'

const book = ({ books, title }) => {
  return (<>
    <header className="pt-6 xl:pb-10">
      <dd className="text-base leading-6 font-medium text-gray-500"><time dateTime="2021-02-16T16:05:00.000Z">Tuesday, Febuary 16, 2021</time></dd>
      <h1 className="mt-2 text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {title}
      </h1>
    </header>
    {books.map(book => {
      const thumbnail = book.thumbnail
      const title = book.title
      const description = book.abstract.replace(/<[^>]*>?/gm, '')
      const authors = book.author
      return (
        <div key={book.id}>
          <article >
            <div className="">
              <div className="max-w-none">
                <div className="space-y-12">

                  <div className="post">
                    <div className="my-4">
                      <div className="space-y-2">
                        <div className="bg-gray-100 h-96 flex items-center justify-center">
                          <img
                            className="rounded-lg"
                            src={thumbnail}
                            alt={`Book cover thumbnail for ${title} by ${authors}`}
                          />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">
                          {title} by {authors}
                        </h1>
                        <p className="text-gray-500">
                          {description}
                        </p></div>
                      <p><Link
                        className="transition-colors duration-200 hover:text-gray-800"
                        href={book.url}
                      ><a>View on Google Books <span aria-hidden="true" className="mr-2">→</span></a></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    })}  </>
  )
}

const limit = 3
const tags = ["business"]

function tokenize(str) {
  const filter = {}
  const tokens = str.split("-")
  tokens.forEach((token) => {
    if (tags.includes(token)) {
      filter["tag"] = token
    }
  })
  return filter
}

export const getStaticProps = async (context) => {
  let title = context.params.id.replace(/-/g, " ").split(" ")
  title = title.map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(' ')

  const filter = tokenize(context.params.id)
  const books = getLists(filter)
  return { props: { books, title } }
}

function buildSearchPath(filter) {
  const { tag, limit } = filter;
  let path = `top ${limit} books to learn ${tag}`
  path = path.replace(/ /g, "-")

  return path;
}

function generateAllPaths() {
  const paths = []
  tags.forEach((tag) => {
    paths.push(buildSearchPath({ tag, limit }))

  })
  return paths
}

export const getStaticPaths = async () => {
  const ids = generateAllPaths()
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  console.log("generating paths", paths);
  return {
    paths, fallback: false
  }
}

export default book
