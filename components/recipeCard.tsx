import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

interface Props {
    image: string;
    name: string;
}

const RecipeCard = (props: Props) => {
    return (
        <>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' margin={10} textAlign='center' p='5'>
                <Image src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt='indegrients' width={50} height={50} />
                <Box py='6'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {props.name}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default RecipeCard