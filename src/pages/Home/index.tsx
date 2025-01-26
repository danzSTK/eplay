import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        games={onSaleGames}
        title="Promoções"
        background="gray"
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        games={soonGames}
        title="Em breve"
        background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home

// https://fake-api-tau.vercel.app/api/eplay
