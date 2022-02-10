import { useEffect, useState } from 'react'
import { getDataHttpServices } from '../../services/getDataHttpServices'
import { useProductAction, useProductList } from '../../provider/ProductListProvider';
import { CircularProgress } from '@mui/material'
import ReactSelect from 'react-select'
import Product from './Product';
import { toast } from 'react-toastify';
import shopHeader from '../../assets/img/orange-back.jpg'
import './shop.scss'

const options = [
    { value: '', label: 'Default' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


function Shop() {

    const [selectValue, setSelectValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [productNumber, setProductNumber] = useState(5)
    const prodocts = useProductList()
    const { getProduct } = useProductAction()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        try {
            const { data } = await getDataHttpServices()
            getProduct(data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            toast(error.message)
        }
    }

    const changeHandler = (e) => {
        setSelectValue(e)
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
                {prodocts && prodocts.slice(0, productNumber).map(item => (
                    <>
                        <Product
                            item={item}
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
                    <ReactSelect
                        options={options}
                        isLoading
                        value={selectValue}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            {renderData()}
            {productNumber !== prodocts.length && (
                <button onClick={() => setProductNumber(p => p + 5)} className='btn_loadMore'>Load More...</button>
            )}
        </div>
    )
}

export default Shop
