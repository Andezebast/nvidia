import React, {FC} from 'react';
import './NewsPage.scss';
import {motion} from "framer-motion";
/*----------------------*/
import NewsList from '../../component/NewsPage/NewsList/NewsList';
/*----------------------*/
const NewsPage: FC = () => {
    return (
        <div className='news-page'>
            <motion.div className="news-page-title"
                        initial={{opacity: 0, scale: 0.5, y: 500}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{duration: 1}}>
                <p className='nvidia-4xl'>Last News</p>
            </motion.div>
            <NewsList />
        </div>
    );
};

export default NewsPage;