import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const handleContactClick = () => {
    const phoneNumber = "+91 9148549144"; // Replace with your actual phone number
    
    if (isMobile()) {
      // On mobile, open phone dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop, open WhatsApp Web
      const message = "Hi! I'm interested in learning more about your services.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-fitness-green">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Get in touch with us today and start your fitness journey
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
                Get In <span className="fitness-text-gradient-green">Touch</span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose your preferred way to reach us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Phone Card */}
              <Card className="text-center p-4 hover:shadow-xl transition-all duration-300 group border-2 hover:border-fitness-orange">
                <CardContent className="p-2">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fitness-black">
                    Call Us
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-fitness-orange font-semibold">
                      Primary: <br /> +91 9148549144
                    </p>
                    {/* <p className="text-gray-600">
                      Secondary: <br /> +1 (555) 987-6543
                    </p> */}
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-green-500">
                <CardContent className="pt-0">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fitness-black">
                    {isMobile() ? 'Call Us' : 'WhatsApp'}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-fitness-orange font-semibold">
                      +91 9148549144
                    </p>
                    <p className="text-gray-600">
                      {isMobile() ? 'Tap to call' : 'Quick responses'}
                    </p>
                  </div>
                  <Button
                    onClick={handleContactClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    {isMobile() ? 'Call Now' : 'Chat Now'}
                  </Button>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-purple-500">
                <CardContent className="pt-0">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fitness-black">
                    Email Us
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-fitness-orange font-semibold text-sm">
                      fit.ferrum@gmail.com
                    </p>
                    <p className="text-gray-600 text-sm">
                      Write email to us
                    </p>
                  </div>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group border-2 hover:border-fitness-orange">
                <CardContent className="pt-0">
                  <div className="w-20 h-20 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fitness-black">
                    Visit Us
                  </h3>
                  <div className="space-y-1 mb-6">
                    <p className="text-fitness-orange font-semibold text-sm">
                      Kempapura Main Road,
                    </p>
                    <p className="text-gray-600 text-sm">
                      Bhuvaneswari Nagar
                    </p>
                    {/* <p className="text-gray-600 text-sm">Near Central Mall</p> */}
                  </div>
                  <Button className="w-full fitness-gradient text-white">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Info Grid */}
            <div className="max-w-2xl mx-auto">
              {/* Operating Hours and Social Media */}
              <div className="space-y-8">
                {/* Operating Hours Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-fitness-black flex items-center">
                      <Clock className="mr-3 text-fitness-orange" size={28} />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-fitness-black">
                          Monday - Saturday
                        </span>
                        <span className="text-fitness-orange font-semibold">
                          5:00 AM - 10:00 PM
                        </span>
                      </div>
                      {/* <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-fitness-black">
                          Saturday
                        </span>
                        <span className="text-fitness-orange font-semibold">
                          8:00 AM - 8:00 PM
                        </span>
                      </div> */}
                      <div className="flex justify-between items-center py-3">
                        <span className="font-medium text-fitness-black">
                          Sunday
                        </span>
                        <span className="text-fitness-orange font-semibold">
                          8:00 AM - 1:00 PM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-fitness-black">
                      Follow Us
                    </CardTitle>
                    <p className="text-gray-600">
                      Stay connected for updates and motivation
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://www.facebook.com/profile.php?id=61570921866016" className="flex-1">
                        <div className="flex items-center justify-center p-4 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors">
                          <Facebook size={24} className="mr-2" />
                          <span className="font-medium">Facebook</span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/fitness_ferrum/" className="flex-1">
                        <div className="flex items-center justify-center p-4 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition-colors">
                          <Instagram size={24} className="mr-2" />
                          <span className="font-medium">Instagram</span>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
              Find <span className="fitness-text-gradient">Our Location</span>
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of Health City
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6958973226806!2d77.59795297484285!3d13.055018787268118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f5e7c4a35d%3A0xc695ee31ceae20da!2sFERRUM%20FITNESS!5e0!3m2!1sen!2sin!4v1751044260010!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ferrum Fitness Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't wait any longer! Contact us today and take the first step
            towards your fitness transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://www.google.com/maps/place/FERRUM+FITNESS/@13.0550188,77.597953,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17f5e7c4a35d:0xc695ee31ceae20da!8m2!3d13.0550188!4d77.6005279!16s%2Fg%2F11y92fl3h0?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-fitness-orange hover:bg-gray-100 text-lg px-8 py-4"
              >
                Visit Studio
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
              onClick={handleContactClick}
            >
              <MessageCircle className="mr-2" size={20} />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
