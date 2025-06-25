
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Award, Clock, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your
              <span className="block fitness-text-gradient">Body & Mind</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
              Join our community of fitness enthusiasts and achieve your goals with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="fitness-gradient text-white hover:opacity-90 text-lg px-8 py-4">
                Get Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-none text-black hover:bg-fitness-orange hover:text-white text-lg px-8 py-4">
                <Phone className="mr-2" size={20} />
                Call Now
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
                About <span className="fitness-text-gradient">Fitness Studio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Fitness Studio, we believe fitness is a journey, not a destination. Our state-of-the-art facility 
                and expert trainers are here to guide you every step of the way. Whether you're just starting out or 
                looking to push your limits, we create a supportive community where everyone can thrive and achieve 
                their personal best.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                Operating <span className="fitness-text-gradient">Hours</span>
              </h2>
              <p className="text-xl text-gray-600">We're here to serve you 7 days a week</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Weekdays Card */}
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-fitness-orange">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Weekdays</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday</p>
                  <p className="text-3xl font-bold text-fitness-orange">6:00 AM - 10:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">16 hours daily</p>
                </CardContent>
              </Card>

              {/* Saturday Card */}
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-fitness-orange">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Saturday</h3>
                  <p className="text-gray-600 mb-2">Weekend Sessions</p>
                  <p className="text-3xl font-bold text-fitness-orange">8:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">12 hours</p>
                </CardContent>
              </Card>

              {/* Sunday Card */}
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-fitness-orange">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">Sunday</h3>
                  <p className="text-gray-600 mb-2">Relaxed Sunday</p>
                  <p className="text-3xl font-bold text-fitness-orange">8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">10 hours</p>
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
                Get In <span className="fitness-text-gradient">Touch</span>
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
                  <p className="text-fitness-orange font-semibold">+1 (555) 123-4567</p>
                  <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Call Now
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
                  <p className="text-fitness-orange font-semibold">+1 (555) 123-4567</p>
                  <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white">
                    Chat Now
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
                  <p className="text-fitness-orange font-semibold text-sm">info@fitnessstudio.com</p>
                  <Button className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white">
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
                  <p className="text-fitness-orange font-semibold text-sm">123 Fitness Street</p>
                  <Button className="mt-4 w-full fitness-gradient text-white">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="fitness-gradient text-white hover:opacity-90 text-xl px-12 py-6">
                Join Our Community Today
                <ArrowRight className="ml-2" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 fitness-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives at Fitness Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-fitness-orange hover:bg-gray-100 hover:text-fitness-orange text-lg px-8 py-4">
              Get Your Free Trial
            </Button>
            <Button size="lg" className="bg-white text-fitness-orange hover:bg-gray-100 text-lg px-8 py-4">
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
