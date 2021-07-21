import React, { useState, useRef, useMemo } from "react";
import { Input, Text, Grid, Button } from "../elements";
import styled from "styled-components";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";


const SearchItem = (props) =>{

    // const searchWord = props.match.params.word;
    const product_list = useSelector(state=> state.product.product_list);
    const [searchWord, setSearchWord] = useState( props.match.params.word);
    const [search, setSearch] = useState(searchWord);
  
  
    function searchItems(product_list, searchWord){
        let search_list=[];
        product_list.forEach((p)=>{
        if(p.productName.indexOf(searchWord)===-1){
            return;
        }
        //배열에 추가
        search_list.push(p)
    })

    return search_list;
    }
 
  const search_list = useMemo(() => searchItems(product_list, searchWord),[searchWord]);


    return(
        <React.Fragment>
            <Grid width="1050px" margin="0 auto" textalign="center" padding="55px 0 46px" >
                <Text weight="800" size="30px" color="#333" >상품검색</Text>
            </Grid>
            <Grid width="1050px" margin="0 auto">
                <SearchBox>
                    <Grid float="left" width="210px"
                        height="95px" padding="38px 0 0 27px"
                    >검색조건</Grid>
                    <Grid float="right" width="840px"
                    padding="25px 20px 0 0 "
                    >
                        <Input 
                         _onChange={(e)=>{
                            setSearch(e.target.value);
                         }}
                         onSubmit = {(e)=>{
                            setSearchWord(e.target.value);
                         }}
                       
                        value={search}
                        border_radius="0px" width="603px" height="45px"
                        margin="0 20px 0 0" padding="0 0 0 20px"
                        border="1px solid #ccc" fontsize="14px"
                        ></Input>
                        <Button 
                        border="none"width="175px" height="45px"
                        background_color="#5f0080" font_color="#fff"
                      
                        >검색하기</Button>
                    </Grid>
                </SearchBox>

                <Grid padding="0 29px">
                    <Text padding="132px 12px 12px 28px">총 {search_list.length}개의 상품이 검색되었습니다.</Text>
                    <GridBox>
                        {
                            search_list.map((p)=>{
                                return(<Product key={p.productId} isSearch {...p}></Product>)
                            })
                        }
                    </GridBox>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


const SearchBox = styled.div`
overflow: hidden;
border-top: 2px solid #5f0080;
border-bottom: 1px solid #5f0080;
height: 97px;
`;

const GridBox = styled.div`
border-top: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 25px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1050px;
`;

export default SearchItem;
