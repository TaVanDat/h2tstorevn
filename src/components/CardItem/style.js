import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeAway = keyframes`
0%
{
 opacity:0.8;
}


100%
{
  opacity:1;
}
`;
const CardWrapper = styled.div`
  width: calc(20% - 30px);
  margin: 0 15px 10px;
  
  .card--image {
    width: 100%;
    height: 16.4375rem;
    
    a{
      display:block;
      background: url(${(props) => props.img}) no-repeat center;
      background-size:cover;
      width: 100%;
      height: 100%;
      transition:ease-out 0.3s;
      position: relative;
      .pro-sale-out{
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 12px;
        line-height: 1;
        padding: 5px 10px;
        font-weight: bold;
        z-index: 9;
        color: #252a2b;
        background: #fff;
        border: 1px solid #ededed;

      }
      .pro-sale-percent{
        position: absolute;
        top: 10px;
        left: 10px;
        color: #f94c43;
        font-size: 12px;
        line-height: 1;
        padding: 5px 10px;
        font-weight: bold;
        z-index: 9;
        background: #fff;
        border: 1px solid #ededed;
      }
    &:hover{
        background: url(${(props) => props.imgHover}) no-repeat center;
        background-size:cover;
        cursor:pointer;
        opacity:0.6;
    animation:${fadeAway} 0.7s linear;

    }
    }
  }
  
  .card--title{
    margin-top:1.4rem;
    a{
      
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    }
  }
  
  .card--cost{
    padding:1rem 0;
  }

  .images__list{
      width:100%;
      display:flex;
      .images__item{
          width:15%;
          height:2.5rem;
          margin-right:1rem;
          
          img{
              width:100%;
              height:100%;
              object-fit:cover;
          }
      }
  }
`;

const BlogWrapper = styled.div`
  width:calc((100% - 10rem)/4);
  
  .blog--image{
    width:100%;
    height:12.25rem;
    transition:ease-in .2s;
    cursor:pointer;
    overflow:hidden;
    &:hover{
      filter:brightness(50%);
    }
    img{
      width:100%;
      height:100%;
      transition:linear .2s ;
      object-fit:cover;
      &:hover{
        transform:scale(1.1)
      }
    }
  }

  .blog--title{
    margin-top:1rem;
    p{
      display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
      font-weight:600;
    }
  }
  .blog--description{
    width:100% ;
    display:inline-block;
    overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
      /* background: red; */
      min-height:5rem;
      
  }
`;
const CardDetail = styled.div`
    width:9%;
    margin-right:10px;
  .product-gallery_slide{
    width: 100%;
    margin-right: 10px;
    display:flex;
    flex-direction: column;
      .product-gallery_thumb{
        line-height: 0;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 1px;
          
          img{
              width:100%;
              height:100%;
              object-fit:cover;
          }
      }
  }
`;
const ProductImg = styled.div`
    width:91%;
    margin-left:10px;
    position: relative;;
.product-img-detail {
    ${'' /* height: 16.4375rem; */}
    background: url(${(props) => props.img}) no-repeat center;
    background-size:cover;
    width: 100%;
    height: 595px;
    z-index:1;
        img{
            width:20px;height:20px;
            font-size:18px;
            position: absolute;
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            cursor:pointer;
        }
  }`


export { CardWrapper, BlogWrapper, CardDetail, ProductImg };
