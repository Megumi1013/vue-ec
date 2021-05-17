export type Product = {
  id?: number
  name: string
  description: string | null
  price: number
  is_disabled: boolean
  created_at: string
  updated_at: string
}

export type Review = {
  id?: number
  item_id: number
  name: string
  content: string
  star: number
  created_at: string
  updated_at: string
}
