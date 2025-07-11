import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Camera,
  Trophy,
  Medal,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedVideo !== null) {
        if (e.key === 'Escape') {
          closeVideo();
        }
        return;
      }
      
      if (selectedImage === null) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    if (selectedImage !== null || selectedVideo !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (selectedImage === null && selectedVideo === null) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [selectedImage, selectedVideo]);

  const gymImages = [
    {
      src: "images/img01.jpg",
      alt: "Modern gym interior with state-of-the-art equipment",
      // category: "Gym Interior",
    },
    {
      src: "images/img02.jpg",
      alt: "Weight training area with dumbbells and barbells",
      // category: "Weight Training",
    },
    {
      src: "images/img03.jpg",
      alt: "Cardio section with treadmills and exercise bikes",
      // category: "Cardio Zone",
    },
    {
      src: "images/img04.jpg",
      alt: "Group fitness class in action",
      // category: "Group Classes",
    },
    {
      src: "images/img05.jpg",
      alt: "Personal training session with professional trainer",
      // category: "Personal Training",
    },
    {
      src: "images/img06.jpg",
      alt: "Functional training area with kettlebells and resistance bands",
      // category: "Functional Training",
    },
    {
      src: "images/img07.jpg",
      alt: "Clean and modern locker room facilities",
      // category: "Facilities",
    },
    {
      src: "images/img23.jpg",
      alt: "Stretching and yoga area with mats",
      // category: "Yoga & Stretching",
    },
    {
      src: "images/img24.jpg",
      alt: "Olympic weightlifting platform with professional equipment",
      // category: "Olympic Lifting",
    },
    {
      src: "images/img10.jpg",
      alt: "High-intensity interval training area",
      // category: "HIIT Zone",
    },
    {
      src: "images/img11.jpg",
      alt: "Recovery and massage therapy room",
      // category: "Recovery Room",
    },
    {
      src: "images/img12.jpg",
      alt: "Nutrition consultation and supplement area",
      // category: "Nutrition Center",
    },
    {
      src: "images/img13.jpg",
      alt: "Olympic weightlifting platform with professional equipment",
      // category: "Olympic Lifting",
    },
    {
      src: "images/img19.jpg",
      alt: "High-intensity interval training area",
      // category: "HIIT Zone",
    },
    {
      src: "images/img20.jpg",
      alt: "Recovery and massage therapy room",
      // category: "Recovery Room",
    },
    {
      src: "images/img22.jpg",
      alt: "Nutrition consultation and supplement area",
      // category: "Nutrition Center",
    },
  ];

  const gymVideos = [
    {
      id: "gym-video-1",
      title: "Full Body Workout",
      description: "Intense full body workout session with our trainers",
      thumbnail: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&h=450&fit=crop",
      videoUrl: "/vid/sample-vid-1.mp4"
    },
    {
      id: "gym-video-2",
      title: "HIIT Training",
      description: "High intensity interval training for maximum fat burn",
      thumbnail: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI"
    },
    {
      id: "gym-video-3",
      title: "Strength Training",
      description: "Build muscle and increase strength with proper form",
      thumbnail: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/3PUIycMGwuU"
    },
    {
      id: "gym-video-4",
      title: "Yoga & Stretching",
      description: "Improve flexibility and reduce stress with yoga",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/X655B4ISakg"
    }
  ];

  const winners = [
    {
      name: "Mike Johnson",
      title: "Regional Bodybuilding Champion 2023",
      competition: "State Bodybuilding Championship",
      image:
        "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&h=400&fit=crop",
      achievement: "1st Place - Men's Physique",
    },
    {
      name: "Sarah Wilson",
      title: "Powerlifting Record Holder 2023",
      competition: "National Powerlifting Meet",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
      achievement: "Deadlift Record - 485 lbs",
    },
    {
      name: "David Martinez",
      title: "CrossFit Regional Champion 2023",
      competition: "CrossFit Regional Games",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      achievement: "2nd Place - Men's Elite",
    },
    {
      name: "Lisa Chen",
      title: "Figure Competition Winner 2023",
      competition: "National Figure Championship",
      image:
        "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=400&h=400&fit=crop",
      achievement: "1st Place - Women's Figure",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gymImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? gymImages.length - 1 : selectedImage - 1
      );
    }
  };

  const openVideo = (index: number) => {
    setSelectedVideo(index);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  const handleCallClick = () => {
    const phoneNumber = "+91 9148549144"; // Replace with your actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-fitness-green">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Take a virtual tour of our state-of-the-art fitness facility and see
            where your transformation begins
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 fitness-gradient-green rounded-full flex items-center justify-center">
                <Camera className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
                Studio <span className="fitness-text-gradient-green">Showcase</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our modern equipment, spacious workout areas, and premium
              facilities designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gymImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={`${image.src}?w=400&h=400&fit=crop`}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <Camera size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                      {image.category}
                    </p>
                  </div> */}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="fitness-gradient-green text-black hover:opacity-90 text-lg px-8 py-4">
                Get a Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 fitness-gradient-green rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
                Workout <span className="fitness-text-gradient-green">Videos</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our expert trainers in action and get inspired with these workout sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gymVideos.map((video, index) => (
              <Card
                key={video.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openVideo(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-fitness-black mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 fitness-gradient-green rounded-full flex items-center justify-center">
                <Trophy className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
                Our <span className="fitness-text-gradient-green">Champions</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our members who have achieved greatness in bodybuilding and
              fitness competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {winners.map((winner, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-black font-bold">
                      <Medal className="w-4 h-4 mr-1" />
                      Winner
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-fitness-black">
                    {winner.name}
                  </h3>
                  <p className="text-fitness-darkestgreen font-semibold mb-2">
                    {winner.title}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">
                        {winner.competition}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-fitness-orange" />
                      <span className="text-sm font-medium text-fitness-black">
                        {winner.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to become our next champion?
            </p>
            <Link to="/contact">
              <Button className="fitness-gradient-green text-white hover:opacity-90 text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <div className="flex items-center">
              {/* Left Navigation Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="mr-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <ArrowLeft size={24} />
              </button>

              {/* Image Container */}
              <div className="flex-1 flex justify-center">
                <div className="relative max-w-4xl w-full">
                  <img
                    src={`${gymImages[selectedImage].src}?w=1200&h=800&fit=crop`}
                    alt={gymImages[selectedImage].alt}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {gymImages[selectedImage].category}
                    </h3>
                    <p className="text-gray-200">{gymImages[selectedImage].alt}</p>
                  </div> */}
                </div>
              </div>

              {/* Right Navigation Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="ml-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <ArrowRight size={24} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="text-center mt-4">
              <div className="inline-block bg-black/50 rounded-full px-4 py-2 text-white text-sm">
                {selectedImage + 1} of {gymImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {selectedVideo !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <div className="aspect-video w-full">
              <iframe
                src={`${gymVideos[selectedVideo].videoUrl}?autoplay=1&rel=0`}
                className="w-full h-full rounded-lg"
                title={gymVideos[selectedVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">
                {gymVideos[selectedVideo].title}
              </h3>
              <p className="text-gray-300 mt-1">
                {gymVideos[selectedVideo].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Facility?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Come visit us and see why Fitness Studio is the perfect place to
            achieve your fitness goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-fitness-darkestgreen hover:bg-gray-100 text-lg px-8 py-4"
            >
              Book a Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-fitness-darkestgreen hover:bg-gray-100 text-lg px-8 py-4"
              onClick={handleCallClick}
            >
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
