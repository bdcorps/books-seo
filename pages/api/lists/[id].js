import { books } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = getSongs(null)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Book with the ID of ${id} is not found` })
  }
}

export const getLists = (filter) => {
  const filtered = books.filter(article => article.decade === filter.decade && article.location === filter.location)
  return filtered
}