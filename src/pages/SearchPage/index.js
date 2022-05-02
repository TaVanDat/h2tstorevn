/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from 'react'
import useStateRef from 'react-usestateref'
import './style.css'

import queryString from 'query-string'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/common/BreadCrum';
import { useNavigate } from 'react-router'
import Containers from '../../components/common/Container';
import { Pagination, Spin } from 'antd';
import CardItem from '../../components/CardItem';

import axios from 'axios';
import { useSearchParams } from 'react-router-dom'


const SearchPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchString, setSearchString, searchStringRef] = useStateRef('')
    const [product, setProduct, productRef] = useStateRef([]);
    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651304496/h2tstore/';
    const [isLoading, setIsLoading] = useState(true);
    const componentMounted = useRef(true);
    const [pagination, setPagination] = useState({
        page: 1,
        page_size: 15,
        totalRows: 15,
    })

    const [filters, setFilters] = useState({
        page_size: 15,
        page: 1,
        // q: searchParams.get('q'),
    })
    useEffect(() => {
        setSearchString(searchParams.get('q'))
        setFilters({
            ...filters,
            q: searchStringRef.current
        })
        setIsLoading(true);
        return () => { setSearchString('') }
    }, [searchParams])
    const fetchData = async () => {
        try {
            const paramString = queryString.stringify(filters)
            const response = await axios.get(`http://localhost:5000/api/v1/search/all?${paramString}`)
            if (response && response.data) {
                setProduct(response.data.data.data);
                setPagination(response.data.data.pagination);
                setIsLoading(false);
            }
        } catch (error) {
            navigate('/notfound')
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        searchStringRef.current ? fetchData() : setIsLoading(false);
    }, [filters])
    return (
        <div className='pages all-product'>
            <Header />
            <BreadCrumb number={3} name='Tất cả sản phẩm' />
            <div className="content-page-search">
                {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." />
                    :
                    <Containers>
                        <div className="heading-collection">
                            <div className="heading-page">
                                <h1>Tìm kiếm</h1>
                                <p className="subtxt">Có <span>{searchStringRef.current ? pagination.totalRows : 0} sản phẩm</span> cho tìm kiếm</p>
                            </div>
                        </div>
                        <p className="subtext-result">	Kết quả tìm kiếm cho  <strong>"{filters.q}"</strong>.&ensp;{productRef.current.length === 0 && <strong>Không có</strong>}</p>
                        <div className="content-product-list">
                            {productRef.current && productRef.current.map((item) => {
                                return (
                                    <CardItem key={item.Id} quantity={item.Quantity} product_id={item.Id} title={item.Name} salePrice={item.SalePrice} price={item.Price} image={item.Image && item.Image.filter((itemFilter, index,) => { if (index <= 1) return (itemFilter) }).map(itemMap => { return (url + itemMap) })} type='item' />)
                            })
                            }
                        </div>
                        {productRef.current.length !== 0 &&
                            <div className="product-pagination">
                                <Pagination
                                    size='small'
                                    total={pagination.totalRows}
                                    pageSize={pagination.page_size}
                                    showSizeChanger={false}
                                    onChange={(current) => setFilters({ ...filters, page: current })}
                                />
                            </div>
                        }
                    </Containers>
                }
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage