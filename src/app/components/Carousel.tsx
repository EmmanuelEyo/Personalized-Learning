import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/redux/store';
import { setRecentlyWatched, Video } from '@/redux/slice';
import Image from 'next/image';
import YouTube from 'react-youtube';

const Carousel: React.FC = () => {
  const dispatch = useAppDispatch();
  const videos = useSelector((state: RootState) => state.app.videos);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      const response = await fetch('/mockVideos.json');
      const data: Video[] = await response.json();
      dispatch(setRecentlyWatched(data));
    };

    fetchYouTubeVideos();
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const opts = {
    height: '180',
    width: '320',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-xl font-bold mb-4'>Continue Watching</h2>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className='p-4'>
            {playingVideo === video.id ? (
              <YouTube videoId={video.id} opts={opts} onEnd={() => setPlayingVideo(null)} />
            ) : (
              <div onClick={() => setPlayingVideo(video.id)}>
                <Image alt={video.title} src={video.thumbnail} width={320} height={180} className='w-full h-32 object-cover rounded cursor-pointer' />
                <div className='mt-2'>
                  <h3 className='text-lg font-semibold'>{video.title}</h3>
                  <p className='text-sm'>{video.category}</p>
                  <p className='text-sm'>Part: {video.part}</p>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(parseInt(video.watchedDuration) / parseInt(video.duration)) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

