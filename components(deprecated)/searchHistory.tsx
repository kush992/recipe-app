import React from 'react'

interface Props {
    ingredientName: string;
    onClickIngredient: () => void;
}

const SearchHistory = (props: Props) => {
    return (
        <div>
            <p className='history__item' onClick={props.onClickIngredient}>{props.ingredientName}</p>
        </div>
    )
}

export default SearchHistory