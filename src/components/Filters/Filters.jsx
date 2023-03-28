import { useEffect, useId, useState } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

export function Filters () {
  const [maxPrice, setMaxPrice] = useState()

  const priceFilterId = useId()
  const categoryFilteredId = useId()

  const { filters, setFilters, getAllCategories, getMaxPriceOf } = useFilters()

  useEffect(() => {
    setMaxPrice(getMaxPriceOf('all'))
  }, [])

  const onChangeMinPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const onChangeCategory = event => {
    const category = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category,
      minPrice: 0
    }))
    setMaxPrice(getMaxPriceOf(category))
  }

  const filteredCategories = getAllCategories()

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceFilterId}> Precio</label>
        <input
          type='range'
          name='price'
          id={priceFilterId}
          min='0'
          max={maxPrice}
          // max='1000'
          value={filters.minPrice}
          onChange={onChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <select
          name='category'
          id={categoryFilteredId}
          onChange={onChangeCategory}
        >
          <option value='all'>Seleccionar Categoria</option>
          {
              filteredCategories?.map(category => (
                <option key={category}> {category} </option>
              ))
            }
        </select>
      </div>
    </section>
  )
}
