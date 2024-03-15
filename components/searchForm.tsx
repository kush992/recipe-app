import React from 'react'
import { FormControl, Input, Button } from '@chakra-ui/react'
import { SearchHistoryInterface } from '../common/interface'
import SearchHistory from './searchHistory'

interface Props {
    historyArray: any[];
    query: string;
    showHistory: boolean;
    disabledButton: boolean;
	isLoading: boolean;
    onFocus: () => void;
    handleSearch: () => void;
    setQuery: (e: any) => void;
    setQueryFromHistory: (historyValue: string) => void;
}

const SearchForm = (props: Props) => {

    return (
        <>
            <FormControl className='search__form' onSubmit={props.handleSearch}>
                <div className='search__input-wrapper'>
                    <Input
                        placeholder='type to search for recipes...'
                        value={props.query}
                        onChange={props.setQuery}
                        className='search__input'
                        onFocus={props.onFocus}
                    />
                    <div className='search__history-container'>
                        {props.showHistory && (
                            props.historyArray?.slice(-10).map((item: SearchHistoryInterface, index: number) => {
                                return (
                                    <SearchHistory key={index} onClickIngredient={() => props.setQueryFromHistory(item.ingredientName)} ingredientName={item.ingredientName} />
                                )
                            })
                        )}
                    </div>
                </div>
                <Button onClick={props.handleSearch} className={`search__button ${props.disabledButton || props.isLoading ? 'disabled__button' : ''}`} disabled={props.disabledButton}>Submit</Button>
            </FormControl>
        </>
    )
}

export default SearchForm