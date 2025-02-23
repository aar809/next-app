import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
// import '../styles/globals.css';
import './globals.css'; // Adjusted to match the location

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
