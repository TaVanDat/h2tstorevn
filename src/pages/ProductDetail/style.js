import styled from "styled-components";

const CardWrapper = styled.div`
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
        border: 1px solid #f7f7f8;
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

export { CardWrapper, ProductImg };
