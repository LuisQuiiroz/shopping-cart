import { Cart } from './components/Cart/Cart'
import { Filters } from './components/Filters/Filters'
import { Footer } from './components/Footer/Footer'
import { Product } from './components/Product/Product'
import { CartProvider } from './context/cart'
import { useFilters } from './hooks/useFilters'
import { products } from './mocks/products.json'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <h1>Carrito de compras</h1>
      <Filters />
      <Cart />
      <Product products={filteredProducts} />
      {/* <Footer /> */}
    </CartProvider>
  )
}

export default App
