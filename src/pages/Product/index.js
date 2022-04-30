/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
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


const AllProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct, productRef] = useStateRef([]);
    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651304496/h2tstore/'
    const banner = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651304496/h2tstore/banner/banner-all.png';
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        page_size: 15,
        totalRows: 15,
    })
    const [filters, setFilters] = useState({
        page_size: 15,
        page: 1,
    })
    const fetchData = async () => {
        try {
            const paramString = queryString.stringify(filters)
            const response = await axios.get(`http://localhost:5000/api/v1/product/list?${paramString}`)
            if (response && response.data) {
                setProduct(response.data.data.data);
                setPagination(response.data.data.pagination);
                setIsLoading(false);
                // console.log(productRef.current)
            }
        } catch (error) {
            navigate('/notfound')
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, [filters])
    return (
        <div className='pages all-product'>
            <Header />
            <BreadCrumb number={3} name='Tất cả sản phẩm' />
            <div className="banner-product-header">
                <img src={banner} alt="Tất cả sản phẩm" title='Tất cả sản phẩm' />
            </div>
            {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." />
                :
                <Containers>
                    <div className="heading-collection">
                        <div className="heading-collection_left">
                            <h1 className="title">
                                Tất cả sản phẩm
                            </h1>
                        </div>

                        <div className="heading-collection_right">
                            <div className="option browse-tags">
                                <label className="lb-filter hide" htmlFor="sort-by"></label>
                                <span className="custom-dropdown custom-dropdown--grey">
                                    <select className="sort-by custom-dropdown__select">
                                        <option value="price-ascending" data-filter="&amp;sortby=(price:product=asc)">Tăng dần</option>
                                        <option value="price-descending" data-filter="&amp;sortby=(price:product=desc)">Giảm dần</option>
                                        <option value="title-ascending" data-filter="&amp;sortby=(title:product=asc)">A-Z</option>
                                        <option value="title-descending" data-filter="&amp;sortby=(price:product=desc)">Z-A</option>
                                        <option value="created-ascending" data-filter="&amp;sortby=(updated_at:product=desc)">Cũ nhất</option>
                                        <option value="created-descending" data-filter="&amp;sortby=(updated_at:product=asc)">Mới nhất</option>
                                        <option value="best-selling" data-filter="&amp;sortby=(sold_quantity:product=desc)">Bán chạy nhất</option>
                                        <option value="quantity-descending">Tồn kho: Giảm dần</option>
                                    </select>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="content-product-list">
                        {productRef.current && productRef.current.map((item) => {
                            return (
                                <CardItem key={item.Id} quantity={item.Quantity} product_id={item.Id} title={item.Name} salePrice={item.SalePrice} price={item.Price} image={item.Image && item.Image.filter((itemFilter, index,) => { if (index <= 1) return (itemFilter) }).map(itemMap => { return (url + itemMap) })} type='item' />)
                        })
                        }
                    </div>
                    <div className="product-pagination">
                        <Pagination
                            size='small'
                            total={pagination.totalRows}
                            pageSize={pagination.page_size}
                            showSizeChanger={false}
                            onChange={(current) => setFilters({ ...filters, page: current })}
                        />
                    </div>
                </Containers>
            }
            <Footer />
        </div>
    )
}

export default AllProduct