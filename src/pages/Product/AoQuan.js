/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import useStateRef from 'react-usestateref'
import './style.css'

import queryString from 'query-string'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/common/BreadCrum';
import { useNavigate, useParams } from 'react-router'
import Containers from '../../components/common/Container';
import { Pagination, Spin } from 'antd';
import CardItem from '../../components/CardItem';

import axios from 'axios';

const AoQuan = () => {
    const navigate = useNavigate();
    const { page_name, page_link } = useParams();
    const [product, setProduct, productRef] = useStateRef([]);
    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651304496/h2tstore/';
    const urlBanner = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651304496/h2tstore/banner/';
    const ao = 'banner-ao.png';
    const quan = 'banner-quan.png';
    const sale75 = 'banner-product-qc.png';
    let banner = '';
    switch (page_link) {
        case "ao":
            banner = urlBanner + ao;
            break;
        case "quan":
            banner = urlBanner + quan;
            break;
        case "sale75":
            banner = urlBanner + sale75;
            break;

        default:
            break;
    }
    const [isLoading, setIsLoading] = useState(true);
    const [selectType, setSelectType, selectTypeRef] = useStateRef('')
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
            const response = await axios.get(`http://localhost:5000/api/v1/product/collection/${page_link}?${paramString}`)
            if (response && response.data) {
                setProduct(response.data.data.data);
                setPagination(response.data.data.pagination);
                setIsLoading(false);
            }
        } catch (error) {
            navigate('/notfound')
        }
    }
    const handleSelect = (e) => {
        setSelectType(e.target.value)
        setFilters({
            ...filters,
            page: 1,
            title: selectTypeRef.current.split('-')[0],
            type: selectTypeRef.current.split('-')[1],
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, [filters, page_link])
    return (
        <div className='pages all-product'>
            <Header />
            <BreadCrumb number={3} name={`${page_name}`} />
            <div className="banner-product-header_other"><img src={banner} alt="Tất cả sản phẩm" /></div>
            {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." />
                :
                <Containers>
                    <div className="heading-collection">
                        <div className="heading-collection_left">
                            <h1 className="title">
                                {page_name}
                            </h1>
                        </div>

                        <div className="heading-collection_right">
                            <div className="option browse-tags">
                                <label className="lb-filter hide" htmlFor="sort-by"></label>
                                <span className="custom-dropdown custom-dropdown--grey">
                                    <select className="sort-by custom-dropdown__select" onChange={(e) => handleSelect(e)}>
                                        <option value="Price-asc" >Giá: Tăng dần</option>
                                        <option value="Price-desc" >Giá: Giảm dần</option>
                                        <option value="Name-asc" >Tên: A-Z</option>
                                        <option value="Name-desc" >Tên: Z-A</option>
                                        <option value="CreatedAt-asc" >Cũ nhất</option>
                                        <option value="CreatedAt-desc" >Mới nhất</option>
                                        {/* <option value="best-selling" >Bán chạy nhất</option> */}
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

export default AoQuan