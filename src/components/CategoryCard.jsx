import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
const CategoryCard = ({ cata: { idCategory, strCategory, strCategoryThumb, strCategoryDescription } }) => {

  const nav = useNavigate();
  return (
    <Card className="mt-6 shadow-2xl rounded-md">
      <CardHeader color="blue-gray" className="relative  bg-slate-400 rounded-xl">
        <img
          className='w-full'
          src={strCategoryThumb}
          alt="card-image"
        />
      </CardHeader>
      <CardBody className='mt-6 p-6'>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-center" >
          {strCategory}
        </Typography>
        <Typography>
          {strCategoryDescription.substring(0, 100)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 p-4 rounded-xl">
        <Button className='bg-blue-700 text-white w-full rounded-lg py-2 hover:bg-red-400' onClick={() => nav(`/category/${strCategory}`)}>Read More</Button>
      </CardFooter>
    </Card>
  )
}

export default CategoryCard