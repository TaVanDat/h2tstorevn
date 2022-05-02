import React from 'react'
import PropTypes from 'prop-types'


import './style.css'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const BreadCrumb = (props) => {
    return (
        <div className='breadcrumb'>
            {props.number ?

                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/'>Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/collections/all'>Danh mục</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>{props.name}</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                :
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/'>Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span>{props.name}</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            }

        </div>
    )
}


BreadCrumb.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
}

export default BreadCrumb