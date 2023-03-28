import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { products } from '../mocks/products.json'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      )
    })
  }

  const getAllCategories = () => {
    const categories = products.map(product => product.category)
    // return Array.from(new Set(categories))
    return categories.filter((category, index) => (categories.indexOf(category) === index))
  }

  const getMaxPriceOf = (category) => {
    const newProducts = products.filter(product => (
      category === 'all'
        ? product
        : product.category === category
    ))
    const prices = newProducts?.map(product => product.price)
    const max = prices.reduce((a, b) => Math.max(a, b))
    return max
  }

  return {
    filters,
    setFilters,
    filterProducts,
    getAllCategories,
    getMaxPriceOf
  }
}
