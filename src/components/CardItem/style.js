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
  width: calc((100% - 15rem) / 5);
  .card--image {
    background: url(${(props) => props.img}) no-repeat center;
    background-size:cover;
    width: 100%;
    height: 16.4375rem;
    transition:ease-out 0.3s;

    &:hover{
        background: url(${(props) => props.imgHover}) no-repeat center;
        background-size:cover;
        cursor:pointer;
        opacity:0.6;
    animation:${fadeAway} 0.7s linear;

    }
  }
  .card--title{
    margin-top:1.4rem
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
`

export { CardWrapper, BlogWrapper };
