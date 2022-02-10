import { useEffect, useState } from 'react'
import { getDataHttpServices } from '../../services/getDataHttpServices'
import { useProductAction, useProductList } from '../../provider/ProductListProvider';
import { CircularProgress } from '@mui/material'
import ReactSelect from 'react-select'
import Product from './Product';
import { toast } from 'react-toastify';
import shopHeader from '../../assets/img/orange-back.jpg'
import './shop.scss'
import { Link, Route, Routes } from 'react-router-dom';
import ProductInfo from '../productInfo/ProductInfo';

const options = [
    { value: '', label: 'Default' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'jewelery', label: 'Jewelery' },
    { value: "men's clothing", label: 'Mens clothing' },
    { value: "women's clothing", label: 'Womens clothing' }
]

function Shop() {

    const [selectValue, setSelectValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [productNumber, setProductNumber] = useState(5)
    const prodocts = useProductList()
    const { getProduct } = useProductAction()

    useEffect(() => {
        getData()
    }, [selectValue])

    const getData = async () => {
        setIsLoading(true)
        try {
            const { data } = await getDataHttpServices(selectValue)
            getProduct(data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    }

    const changeHandler = (e) => {
        if (e.value === '') {
            setSelectValue('')
        }
        else {
            setSelectValue(`category/${e.value}`)
        }
    }

    const renderData = () => {
        let value = "";

        if (isLoading) {
            value = <div className='loading'>
                <h2>Loading...</h2>
                <CircularProgress />
            </div>
        }

        if (prodocts && prodocts.length > 0) {
            value = <div className='products'>
                {prodocts.slice(0, productNumber).map(item => (
                    <>
                        <Product
                            item={item}
                            key={item.id}
                        />
                    </>
                ))}
            </div>
        }

        return value
    }


    return (
        <div className='shop'>
            <div className='shop_header'>
                <img
                    src={shopHeader}
                    alt='shopHeader'
                    loading='lazy'
                />
                <div className='detail_header'>
                    <h1>Shop</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p>Sort by category</p>
                        <ReactSelect
                            options={options}
                            // value={selectValue}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
            </div>
            {renderData()}
            {productNumber !== prodocts.length && (
                <button onClick={() => setProductNumber(p => p + 5)} className='btn_loadMore'>Load More...</button>
            )}
            <Routes>
                <Route path="product-info/:id" element={<ProductInfo />} />
            </Routes>
        </div>
    )
}

export default Shop
