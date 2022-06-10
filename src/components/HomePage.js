import React from 'react'
import './HomePage.css'
import { Card,CardContent,CardMedia,CardActionArea,Typography} from '@mui/material'

export default function HomePage() {
    const shops=[{
        name:"Super Market",
        img:"https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/hong-kong-protests-supermarket-sales-increase-while-other-retail-sectors-feel-the-pinch/10085144-1-eng-GB/Hong-Kong-protests-Supermarket-sales-increase-while-other-retail-sectors-feel-the-pinch.jpg",
        description:"This is a super Market",
        link:'/super-market'
    },
    // {
    //     name:"Restuarant",
    //     img:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/e/d/p29410-15743151555dd62493bdda1.jpg?tr=tr:n-xlarge",
    //     description:"This is a Restuarant",
    //     link:'http://localhost:3000/restuarant'
    // },
    // {
    //     name:"Mobile Store",
    //     img:"https://pbs.twimg.com/profile_images/875574060968574976/tMwgtV8v_400x400.jpg",
    //     description:"This is a Mobile Store",
    //     link:'http://localhost:3000/mobile-store'
    // }
    ]
  return (
    <div className='homepage-container'>
        <div className='cards-container'>
            {
                shops.map((shop)=>{
                    return (
                        <div className='card' key={shop.name}>
                        <Card sx={{ width: 200 }}>
                        <CardActionArea href={shop.link}>
                          <CardMedia
                            component="img"
                            height="100"
                            image={shop.img}
                            alt={shop.name}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {shop.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {shop.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      </div>
                    )
                })
            }
        </div>

    </div>
  )
}
