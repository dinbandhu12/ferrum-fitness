
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, Dumbbell, Heart, Zap, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific fitness goals and needs.",
      features: ["Customized workout plans", "Nutritional guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group workouts that build community while getting you fit.",
      features: ["HIIT classes", "Yoga sessions", "Strength training", "Cardio workouts"]
    },
    {
      icon: Heart,
      title: "Cardio Training",
      description: "Improve your cardiovascular health with our state-of-the-art equipment.",
      features: ["Treadmills & bikes", "Rowing machines", "Elliptical trainers", "Heart rate monitoring"]
    },
    {
      icon: Zap,
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training.",
      features: ["Free weights", "Machine training", "Functional movement", "Progressive overload"]
    },
    {
      icon: Target,
      title: "Functional Fitness",
      description: "Train movements that help you perform better in daily activities.",
      features: ["Movement patterns", "Core stability", "Balance training", "Mobility work"]
    },
    {
      icon: Award,
      title: "Specialized Programs",
      description: "Targeted programs for specific goals and populations.",
      features: ["Weight loss programs", "Senior fitness", "Athletic training", "Rehabilitation"]
    }
  ];

  const membershipPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      popular: false,
      features: [
        "Access to gym equipment",
        "Locker room facilities",
        "Basic fitness assessment",
        "Mobile app access"
      ]
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      popular: true,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "2 personal training sessions",
        "Nutrition consultation",
        "Guest passes (2/month)"
      ]
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      popular: false,
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Priority class booking",
        "Monthly body composition analysis",
        "Supplement discounts",
        "Guest passes (5/month)"
      ]
    }
  ];

  const specialOffers = [
    {
      title: "New Member Special",
      discount: "50% OFF",
      description: "First month half price for new members",
      validUntil: "Limited time offer"
    },
    {
      title: "Student Discount",
      discount: "20% OFF",
      description: "Special rates for students with valid ID",
      validUntil: "Ongoing offer"
    },
    {
      title: "Annual Membership",
      discount: "2 MONTHS FREE",
      description: "Pay for 10 months, get 12 months access",
      validUntil: "Best value"
    },
    {
      title: "Refer a Friend",
      discount: "$25 CREDIT",
      description: "Get $25 credit for each successful referral",
      validUntil: "Unlimited referrals"
    }
  ];

  const handleCallClick = () => {
    const phoneNumber = "+15551234567"; // Replace with your actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Comprehensive fitness solutions designed to help you achieve your goals
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
              Our <span className="fitness-text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional fitness services designed to help you reach your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 fitness-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fitness-black">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
              Monthly <span className="fitness-text-gradient">Memberships</span>
            </h2>
            <p className="text-xl text-gray-600">Flexible monthly plans with no long-term commitment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-fitness-orange shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 fitness-gradient text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-fitness-black">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold fitness-text-gradient">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="text-fitness-orange flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full text-lg py-3 ${plan.popular ? 'fitness-gradient text-white' : 'border-fitness-orange text-fitness-orange hover:fitness-gradient hover:text-white'}`} variant={plan.popular ? "default" : "outline"}>
                    Choose {plan.name}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 hero-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Special <span className="text-yellow-300">Offers</span>
            </h2>
            <p className="text-xl text-gray-200">Don't miss out on these amazing deals!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
                  <div className="text-2xl font-bold text-yellow-300">{offer.discount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">{offer.description}</p>
                  <Badge className="bg-yellow-400 text-black font-semibold">
                    {offer.validUntil}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-fitness-orange hover:bg-gray-100 text-lg px-8 py-4">
              Claim Your Offer Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Choose your membership plan and start your fitness journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <Button size="lg" className="bg-white text-fitness-orange hover:bg-gray-100 text-lg px-8 py-4">
              Visit us
            </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white text-fitness-orange hover:bg-gray-100 text-lg px-8 py-4" onClick={handleCallClick}>
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
