import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const VideoSlider = () => {
    const navigate = useNavigate();

    // 🧾 Example video list (you can change file names & IDs)
    const videos = [
        {
            _id: "6724a9e08f01b2d0c4e11a1a", // example product id
            src: "http://localhost:5000/uploads/video1.mp4",
        },
        {
            _id: "6724a9e08f01b2d0c4e11a1b",
            src: "http://localhost:5000/uploads/video2.mp4",
        },
        {
            _id: "6724a9e08f01b2d0c4e11a1c",
            src: "http://localhost:5000/uploads/video3.mp4",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    const handleVideoClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="max-w-4xl mx-auto mt-6">
            <Slider {...settings}>
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => handleVideoClick(video._id)}
                    >
                        <video
                            src={video.src}
                            className="w-full h-[500px] object-cover rounded-xl"
                            autoPlay
                            muted
                            loop
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VideoSlider;
