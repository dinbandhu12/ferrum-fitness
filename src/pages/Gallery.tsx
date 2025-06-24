
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ArrowLeft, ArrowRight, Camera, Trophy, Medal, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gymImages = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      alt: "Modern gym interior with state-of-the-art equipment",
      category: "Gym Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      alt: "Weight training area with dumbbells and barbells",
      category: "Weight Training"
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
      alt: "Cardio section with treadmills and exercise bikes",
      category: "Cardio Zone"
    },
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
      alt: "Group fitness class in action",
      category: "Group Classes"
    },
    {
      src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2",
      alt: "Personal training session with professional trainer",
      category: "Personal Training"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      alt: "Functional training area with kettlebells and resistance bands",
      category: "Functional Training"
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      alt: "Clean and modern locker room facilities",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1583500178690-c6fb1515bf74",
      alt: "Stretching and yoga area with mats",
      category: "Yoga & Stretching"
    },
    {
      src: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      alt: "Olympic weightlifting platform with professional equipment",
      category: "Olympic Lifting"
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      alt: "High-intensity interval training area",
      category: "HIIT Zone"
    },
    {
      src: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
      alt: "Recovery and massage therapy room",
      category: "Recovery Room"
    },
    {
      src: "https://images.unsplash.com/photo-1506629905851-f7efd4f9b5c2",
      alt: "Nutrition consultation and supplement area",
      category: "Nutrition Center"
    }
  ];

  const winners = [
    {
      name: "Mike Johnson",
      title: "Regional Bodybuilding Champion 2023",
      competition: "State Bodybuilding Championship",
      image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&h=400&fit=crop",
      achievement: "1st Place - Men's Physique"
    },
    {
      name: "Sarah Wilson",
      title: "Powerlifting Record Holder 2023",
      competition: "National Powerlifting Meet",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
      achievement: "Deadlift Record - 485 lbs"
    },
    {
      name: "David Martinez",
      title: "CrossFit Regional Champion 2023",
      competition: "CrossFit Regional Games",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      achievement: "2nd Place - Men's Elite"
    },
    {
      name: "Lisa Chen",
      title: "Figure Competition Winner 2023",
      competition: "National Figure Championship",
      image: "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=400&h=400&fit=crop",
      achievement: "1st Place - Women's Figure"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gymImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? gymImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-300">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Take a virtual tour of our state-of-the-art fitness facility and see where your transformation begins
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 fitness-gradient rounded-full flex items-center justify-center">
                <Camera className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
                Facility <span className="fitness-text-gradient">Showcase</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our modern equipment, spacious workout areas, and premium facilities designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {gymImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={`${image.src}?w=400&h=400&fit=crop`}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onClick={() => openLightbox(index)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <Camera size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="fitness-gradient text-white hover:opacity-90 text-lg px-8 py-4">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 fitness-gradient rounded-full flex items-center justify-center">
                <Trophy className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-fitness-black">
                Our <span className="fitness-text-gradient">Champions</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our members who have achieved greatness in bodybuilding and fitness competitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {winners.map((winner, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
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
                  <h3 className="text-xl font-bold mb-2 text-fitness-black">{winner.name}</h3>
                  <p className="text-fitness-orange font-semibold mb-2">{winner.title}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">{winner.competition}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-fitness-orange" />
                      <span className="text-sm font-medium text-fitness-black">{winner.achievement}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Ready to become our next champion?</p>
            <Button className="fitness-gradient text-white hover:opacity-90 text-lg px-8 py-4">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
            >
              <ArrowRight size={24} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={`${gymImages[selectedImage].src}?w=1200&h=800&fit=crop`}
                alt={gymImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">{gymImages[selectedImage].category}</h3>
                <p className="text-gray-200">{gymImages[selectedImage].alt}</p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-full px-4 py-2 text-white text-sm">
              {selectedImage + 1} of {gymImages.length}
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
            Come visit us and see why Fitness Studio is the perfect place to achieve your fitness goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-fitness-orange hover:bg-gray-100 text-lg px-8 py-4">
              Book a Tour
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-fitness-orange text-lg px-8 py-4">
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
