import React, {FC} from 'react';
import './NewsList.scss';
import {motion} from "framer-motion";
/*------------------------*/
interface IList {
    link: string,
    url: string
}
interface INewsList {
    image: string,
    subtitle: string,
    title: string,
    links: IList[],
    description: string
}
/*------------------------*/
const NewsListMass: INewsList[] = [
    {
        image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-40-series-announcement-news-roundup-newsfeed.jpg',
        subtitle: 'September 20, 2022',
        title: 'GeForce RTX 40 Graphics Cards: Up to 4x faster with 3rd Gen RTX architecture and NVIDIA DLSS 3 technology',
        links: [
            {
                link: 'Featured articles,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=featured-stories',
            },
            {
                link: 'Cyberpunk 2077,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=cyberpunk-2077'
            },
            {
                link: 'GeForce RTX graphics cards,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=geforce-rtx-gpus'
            },
            {
                link: 'NVIDIA DLSS',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=nvidia-dlss'
            },
        ],
        description: 'NVIDIA Ada Lovelace architecture opens up new possibilities, DLSS 3 boosts frame rates multiple times, RTX Remix and DLSS ray tracing redefines the look of classic games, and the new GeForce RTX 4090 and GeForce RTX 4080 GPUs deliver fully ray-traced gaming at the highest quality. Find out everything you need from this article.',
    },
    {
        image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/news/geforce-beyond-gtc-22-special-broadcast/geforce-beyond-special-gtc-2022-broadcast-newsfeed.jpg',
        subtitle: 'September 8, 2022',
        title: 'GeForce Beyond: GTC 2022 Special Stream with Jensen Huang',
        links: [
            {
                link: 'Featured articles,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=featured-stories',
            },
            {
                link: 'Events',
                url: 'http://www.nvidia.com/ru-ru/geforse/tags/?tag=events'
            },
        ],
        description: 'Learn about the latest technologies in gaming, content creation and graphics from NVIDIA CEO Jensen Huang during his GTC 2022 acceptance speech on September 20 at 6:00 pm (UTC).'
    },
    {
        image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/nvidia-geforce-rtx-game-on-announcement-roundup/nvidia-geforce-rtx-game-on-2021-special-event-newsfeed.jpg',
        subtitle: 'January 12, 2021',
        title: 'Announcements from CES: GeForce RTX 30 in laptops, GeForce RTX 3060 video cards, new games with DLSS and Reflex, G-SYNC displays',
        links: [
            {
                link: 'Featured articles,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=featured-stories',
            },
            {
                link: 'G-SYNC,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=g-sync'
            },
            {
                link: 'GeForce RTX graphics cards,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=geforce-rtx-gpus'
            },
            {
                link: 'Ray tracing',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=ray-tracing'
            },
        ],
        description: 'NVIDIA has introduced a host of new technologies and features to enhance your gaming experience. Read more in this recap of the special broadcast.'
    },
    {
        image: 'https://www.nvidia.com//content/dam/en-zz/Solutions/geforce/news/rtx-30-series-laptops/geforce-ampere-rtx-laptops-learn-gf-article-news-625x330-newsfeed.jpg',
        subtitle: 'January 10, 2021',
        title: 'NVIDIA Ampere 2nd Generation RTX Architecture Now Available in Laptops',
        links: [
            {
                link: 'Featured articles,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=featured-stories',
            },
            {
                link: 'GeForce RTX graphics cards,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=geforce-rtx-gpus'
            },
            {
                link: 'NVIDIA DLSS,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=nvidia-dlss'
            },
            {
                link: 'Ray tracing',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=ray-tracing'
            },
        ],
        description: 'Up to 2x higher energy efficiency, record-breaking performance and new 3rd generation Max-Q design.'
    },
    {
        image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-3060/nvidia-geforce-rtx-3060-newsfeed.jpg',
        subtitle: 'January 8, 2021',
        title: 'NVIDIA Ampere for every gamer: GeForce RTX 3060 will go on sale at the end of February.',
        links: [
            {
                link: 'Featured articles,',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=featured-stories',
            },
            {
                link: 'GeForce RTX graphics cards',
                url: 'https://www.nvidia.com/ru-ru/geforce/tags/?tag=geforce-rtx-gpus'
            },
        ],
        description: 'Get incredible performance boosts with the GeForce RTX 3060 upgrade and play top games with support for ray tracing, DLSS, and other NVIDIA Ampere technologies.'
    },
]
/*------------------------*/
const newsItems = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.5
        }
    }
};
const newsItem = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    }
};
/*------------------------*/
const NewsList: FC = () => {
    return (
        <motion.ul className='news-page-items' variants={newsItems} initial="hidden" animate="visible">
            {NewsListMass.map((list, index) => (
                <motion.li variants={newsItem} key={index} className='news-page-item'>
                    <div className="news-page-item-image">
                        <img src={list.image} alt="image"/>
                    </div>
                    <div className="news-page-item-content">
                        <div className="news-page-item-content-subtitle">
                            <p className='nvidia-xs-p'>{list.subtitle}</p>
                        </div>
                        <div className="news-page-item-content-title">
                            <p className='nvidia-2xl-bold'>{list.title}</p>
                        </div>
                        <div className="news-page-item-content-links">
                            {list.links.map((link, index) => (
                                <div key={index} className='news-page-item-content-link'>
                                    <a href={link.url} target='_blank'>{link.link}</a>
                                </div>
                            ))}
                        </div>
                        <div className="news-page-item-content-description">
                            <p className='nvidia-p'>{list.description}</p>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default NewsList;