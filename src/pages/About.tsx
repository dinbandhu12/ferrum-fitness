import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  Star,
  Calendar,
  Dumbbell,
  Trophy,
  Medal,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const certifications = [
    "NASM Certified Personal Trainer",
    "ACE Group Fitness Instructor",
    "Precision Nutrition Level 1",
    "Functional Movement Screen (FMS)",
    "CPR/AED Certified",
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Members Trained" },
    { icon: Award, number: "8+", label: "Years Experience" },
    { icon: Target, number: "95%", label: "Success Rate" },
    { icon: Heart, number: "1000+", label: "Lives Changed" },
  ];

  const additionalTrainers = [
    {
      name: "Marcus Thompson",
      role: "Strength & Conditioning Coach",
      experience: "6 Years Experience",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
      specialization: "Olympic Weightlifting & Powerlifting",
      certifications: ["USAW Level 2", "NSCA-CSCS", "Mobility Specialist"],
      achievements: "Former competitive powerlifter with 1500+ total",
    },
    {
      name: "Emma Rodriguez",
      role: "Functional Fitness Trainer",
      experience: "5 Years Experience",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&crop=face",
      specialization: "CrossFit & Functional Movement",
      certifications: ["CrossFit Level 3", "FMS Certified", "Nutrition Coach"],
      achievements: "Regional CrossFit Games competitor and coach",
    },
    {
      name: "Jake Wilson",
      role: "HIIT & Cardio Specialist",
      experience: "4 Years Experience",
      image:
        "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&h=400&fit=crop&crop=face",
      specialization: "High-Intensity Training & Fat Loss",
      certifications: [
        "ACSM Certified",
        "Kettlebell Instructor",
        "TRX Certified",
      ],
      achievements: "Transformed 200+ clients through HIIT programs",
    },
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
            Meet Your <span className="text-fitness-green">Trainers</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Dedicated to helping you achieve your fitness goals with
            professional expertise and personal care
          </p>
        </div>
      </section>

      {/* Lead Trainer Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Trainer Image */}
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=face"
                    alt="Professional fitness trainer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 fitness-gradient-green rounded-full flex items-center justify-center shadow-xl">
                  <Star className="text-white" size={32} />
                </div>
              </div>

              {/* Trainer Info */}
              <div>
                <Badge className="fitness-gradient-green text-black mb-4 px-4 py-2 text-sm">
                  Lead Fitness Trainer
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-fitness-black">
                  Sarah Johnson
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  With over 8 years of experience in the fitness industry, I'm
                  passionate about helping individuals transform their lives
                  through fitness. My approach combines scientific training
                  methods with personalized motivation to ensure every client
                  achieves their goals.
                </p>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-fitness-lightGray rounded-lg"
                    >
                      <achievement.icon
                        className="text-fitness-darkestgreen mx-auto mb-2"
                        size={32}
                      />
                      <div className="text-2xl font-bold text-fitness-black">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button className="fitness-gradient-green text-white hover:opacity-90 text-lg px-8 py-4">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Trainers Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
                Our Expert <span className="fitness-text-gradient-green">Team</span>
              </h2>
              <p className="text-xl text-gray-600">
                Meet our specialized trainers who bring diverse expertise to
                help you reach your specific fitness goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalTrainers.map((trainer, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="fitness-gradient-green text-black">
                        {trainer.experience}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-fitness-black">
                      {trainer.name}
                    </h3>
                    <p className="text-fitness-darkgreen font-semibold mb-3">
                      {trainer.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {trainer.specialization}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-fitness-black mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-fitness-orange" />
                          Certifications
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {trainer.certifications.map((cert, certIndex) => (
                            <Badge
                              key={certIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-600">
                          {trainer.achievements}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full mt-4 fitness-gradient-green text-white hover:opacity-90">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
                My <span className="fitness-text-gradient-green">Story</span>
              </h2>
            </div>

            <Card className="p-8 md:p-12 shadow-lg">
              <CardContent className="p-0">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    My fitness journey began during my college years when I
                    struggled with low self-confidence and poor health habits.
                    After discovering the transformative power of regular
                    exercise and proper nutrition, I not only changed my body
                    but completely transformed my mindset and outlook on life.
                  </p>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    This personal transformation inspired me to pursue a career
                    in fitness, where I could help others experience the same
                    life-changing benefits. I founded Fitness Studio with the
                    vision of creating a welcoming, supportive environment where
                    people of all fitness levels could thrive.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Today, I'm proud to have helped hundreds of clients achieve
                    their goals, from weight loss and muscle building to
                    improved athletic performance and overall wellness. Every
                    success story motivates me to continue pushing the
                    boundaries of what's possible in fitness training.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
                Training{" "}
                <span className="fitness-text-gradient-green">Philosophy</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My approach to fitness is built on four core principles that
                ensure sustainable, long-term success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mb-6">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">
                    Goal-Oriented Training
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every workout is designed with your specific goals in mind.
                    Whether you want to lose weight, build muscle, or improve
                    athletic performance, we create a customized plan that gets
                    results.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mb-6">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">
                    Holistic Wellness
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    True fitness goes beyond the gym. I focus on nutrition,
                    recovery, stress management, and lifestyle factors to ensure
                    your transformation is complete and sustainable.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mb-6">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">
                    Community Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fitness is a journey best shared with others. I foster a
                    supportive community where members motivate each other and
                    celebrate victories together.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 fitness-gradient-green rounded-full flex items-center justify-center mb-6">
                    <Calendar className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fitness-black">
                    Progressive Programming
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your workouts evolve as you get stronger. I continuously
                    adjust your program to challenge you appropriately and
                    prevent plateaus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-fitness-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fitness-black">
              Certifications &{" "}
              <span className="fitness-text-gradient-green">Qualifications</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Committed to staying current with the latest fitness science and
              training methodologies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-0 text-center">
                    <div className="w-12 h-12 fitness-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold text-fitness-black">{cert}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your fitness goals and create
            lasting, positive changes in your life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-fitness-darkestgreen hover:bg-gray-100 text-lg px-8 py-4"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-fitness-darkestgreen hover:bg-gray-100 text-lg px-8 py-4"
              onClick={handleCallClick}
            >
              Call Now: +91 9148549144
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
