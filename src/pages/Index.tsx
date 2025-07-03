import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Award, Clock, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleCallClick = () => {
    const phoneNumber = "+91 9148549144"; // Replace with your actual phone number
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // For desktop, you can keep the original behavior or open a contact page
      window.location.href = "/contact";
    }
  };

  const handleContactAction = (type: 'call' | 'whatsapp' | 'email' | 'location') => {
    const phoneNumber = "+91 9148549144"; // Replace with your actual phone number
    const email = "fit.ferrum@gmail.com"; // Replace with your actual email
    const address = "Kempapura Main Road, Bhuvaneswari Nagar Karnataka - 560024"; // Replace with your actual address
    const googleMapsUrl = "https://www.google.com/maps/place/FERRUM+FITNESS/@13.0550188,77.597953,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17f5e7c4a35d:0xc695ee31ceae20da!8m2!3d13.0550188!4d77.6005279!16s%2Fg%2F11y92fl3h0?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"; // Replace with your Google Maps URL

    switch (type) {
      case 'call':
        if (isMobile) {
          window.location.href = `tel:${phoneNumber}`;
        } else {
          window.location.href = "/contact";
        }
        break;
      case 'whatsapp':
        const message = "Hi! I'm interested in your fitness programs.";
        if (isMobile) {
          window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        } else {
          window.location.href = "/contact";
        }
        break;
      case 'email':
        window.location.href = `mailto:${email}?subject=Inquiry about Fitness Programs`;
        break;
      case 'location':
        window.open(googleMapsUrl, '_blank');
        break;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your
              <span className="block fitness-text-gradient-green">Body & Mind</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
              Join our community of fitness enthusiasts and achieve your goals with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="fitness-gradient-green text-white hover:opacity-90 text-lg px-8 py-6 w-full sm:w-auto">
                  Visit us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-none text-black hover:bg-fitness-darkgreen hover:text-white text-lg px-8 py-6"
                onClick={handleCallClick}
              >
                <Phone className="mr-2" size={20} />
                {isMobile ? 'Call Now' : 'Contact Us'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fitness-black">
                About <span className="fitness-text-gradient-green">Ferrum</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Ferrum Fitness, we believe fitness is a journey, not a destination. Our state-of-the-art facility and expert trainers are here to guide you every step of the way. Whether you're just starting out or looking to push your limits, we create a supportive community where everyone can thrive and achieve their personal best.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Expert Trainers</h3>
                  <p className="text-gray-600">
                    Certified professionals with years of experience helping people achieve their fitness goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Modern Equipment</h3>
                  <p className="text-gray-600">
                    State-of-the-art fitness equipment and facilities to support all your workout needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Proven Results</h3>
                  <p className="text-gray-600">
                    Thousands of successful transformations and satisfied members who achieved their goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours - Card Design */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fitness-black">
                Operating <span className="fitness-text-gradient-green">Hours</span>
              </h2>
              <p className="text-xl text-gray-600">We're here to serve you 7 days a week</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Weekdays Card */}
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-fitness-green">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Weekdays</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday</p>
                  <p className="text-3xl font-bold text-fitness-dakestgreen">5:00 AM - 10:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">17 hours daily</p>
                </CardContent>
              </Card>

              {/* Saturday Card */}
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-fitness-green">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Saturday</h3>
                  <p className="text-gray-600 mb-2">Weekend Sessions</p>
                  <p className="text-3xl font-bold text-fitness-dakestgreen">5:00 AM - 10:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">17 hours</p>
                </CardContent>
              </Card>

              {/* Sunday Card */}
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-fitness-green">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Sunday</h3>
                  <p className="text-gray-600 mb-2">Relaxed Sunday</p>
                  <p className="text-3xl font-bold text-fitness-dakestgreen">8:00 AM - 1:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">5 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Get In Touch Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fitness-black">
                Get In <span className="fitness-text-gradient-green">Touch</span>
              </h2>
              <p className="text-xl text-gray-600">Ready to start your fitness journey? We're here to help!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone Card */}
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-fitness-black">Call Us</h3>
                  <p className="text-fitness-dakestgreen font-bold">+91 9876543210</p>
                  <Button 
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => handleContactAction('call')}
                  >
                    {isMobile ? 'Call Now' : 'Contact Us'}
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-fitness-black">WhatsApp</h3>
                  <p className="text-fitness-dakestgreen font-bold">+91 9876543210</p>
                  <Button 
                    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleContactAction('whatsapp')}
                  >
                    {isMobile ? 'Chat on WhatsApp' : 'Contact Us'}
                  </Button>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-fitness-black">Email Us</h3>
                  <p className="text-fitness-dakestgreen font-bold text-sm">fit.ferrum@gmail.com</p>
                  <Button 
                    className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white"
                    onClick={() => handleContactAction('email')}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-fitness-black">Visit Us</h3>
                  <p className="text-fitness-dakestgreen font-bold text-sm">Kempapura Main Road, <br /> Bhuvaneswari Nagar</p>
                  <Button 
                    className="mt-4 w-full fitness-gradient text-white"
                    onClick={() => handleContactAction('location')}
                  >
                    View on Map
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
              <Button className="fitness-gradient-green text-white hover:opacity-90 text-xl px-12 py-6">
                Join Our Community Today
                <ArrowRight className="ml-2" size={24} />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fitness-gradient-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-fitness-black mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-fitness-black mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives at Fitness Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-fitness-black hover:bg-black hover:text-white text-lg px-8 py-4">
              Get a Free Tour
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-fitness-black hover:bg-black hover:text-white text-lg px-8 py-4"
                onClick={handleCallClick}
              >
                <Phone className="mr-2" size={20} />
                Call Now: (555) 123-4567
              </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
