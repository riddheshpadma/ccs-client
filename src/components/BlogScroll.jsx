import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogBtn from './BlogBtn';


const blog_data = [
    {
        'blog_head': "Blog1",
        'blog_desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus rerum, fugit rem ut, dicta nisi quas recusandae quos facere placeat eos accusamus perferendis molestiae explicabo itaque, saepe deleniti vero.",
        'img_url': `../assets/img/flower.webp`
    },
    {
        'blog_head': "Blog1",
        'blog_desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus rerum, fugit rem ut, dicta nisi quas recusandae quos facere placeat eos accusamus perferendis molestiae explicabo itaque, saepe deleniti vero.",
        'img_url': `../assets/img/flower.webp`
    },
    {
        'blog_head': "Blog1",
        'blog_desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus rerum, fugit rem ut, dicta nisi quas recusandae quos facere placeat eos accusamus perferendis molestiae explicabo itaque, saepe deleniti vero.",
        'img_url': `../assets/img/flower.webp`
    },
    {
        'blog_head': "Blog1",
        'blog_desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus rerum, fugit rem ut, dicta nisi quas recusandae quos facere placeat eos accusamus perferendis molestiae explicabo itaque, saepe deleniti vero.",
        'img_url': `../assets/img/flower.webp`
    },
]
const BlogScroll = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,        // Ensure this is true
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        arrows: false
    };
    return (
        <div>
            <div className='blogCard'>
                <Slider {...settings}>
                    {blog_data.map((blog, index) => (
                        <div className='bg-gray-200 p-10'>
                            <div className='blogFlex1'>
                                <h2 className='blogHeading'>{blog.blog_head}</h2>
                                <div>
                                    <p className='mb-4'>{blog.blog_desc}</p>
                                    <BlogBtn btn_context='Read More' />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default BlogScroll