
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Star, Heart, Shield, Award } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [hoveredDoctor, setHoveredDoctor] = useState<number | null>(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Smith",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      availability: "Mon-Fri: 9 AM - 5 PM",
      experience: "15+ years",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Dr. Michael Johnson",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      availability: "Tue-Sat: 10 AM - 6 PM",
      experience: "12+ years",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824750493-58b4463a5fa5?w=300&h=300&fit=crop&crop=face",
      availability: "Mon-Wed-Fri: 8 AM - 4 PM",
      experience: "10+ years",
      rating: 4.9,
    },
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      review: "Excellent care and very professional staff. Dr. Smith was thorough and caring.",
      rating: 5,
    },
    {
      name: "John Williams",
      review: "Quick appointment booking and great facilities. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      review: "The online booking system is so convenient. Thank you for the excellent service!",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-gradient-to-r from-purple-400 to-pink-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="text-white w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">HealWell Hospital</h1>
                <p className="text-sm text-gray-600 font-medium">Your Health, Our Priority ✨</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200">Home</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold hover:scale-105 transform duration-200">Doctors</a>
              <a href="#booking" className="text-gray-700 hover:text-pink-600 transition-colors font-semibold hover:scale-105 transform duration-200">Book Appointment</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold hover:scale-105 transform duration-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-teal-600/15"></div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full animate-pulse opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-float">
            Quality Healthcare
          </h2>
          <h3 className="text-3xl md:text-4xl text-gray-700 mb-8 font-semibold">
            When You Need It Most 💙
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience world-class medical care with our team of expert doctors and state-of-the-art facilities. 
            Book your appointment today and take the first step towards better health! 🌟
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Book Your Appointment Now!
          </Button>
        </div>
      </section>

      {/* Hospital Information */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">Hospital Information</h2>
            <p className="text-gray-600 text-xl">Get in touch with us for any medical needs 📞</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-700">Our Location 📍</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  123 Wellness Lane<br />
                  Health City, HC 456<br />
                  United States 🇺🇸
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-green-50 border-2 border-teal-200">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-teal-700">Contact Us 📱</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-lg">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>Email:</strong> info@healwellhospital.com
                </p>
                <p className="text-red-600 font-bold text-lg pulse-emergency">
                  <strong>🚨 Emergency:</strong> 24/7 Helpline
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-700">Working Hours ⏰</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-lg">
                  <strong>Mon-Fri:</strong> 8:00 AM - 8:00 PM
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>Sunday:</strong> 10:00 AM - 4:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Meet Our Expert Doctors</h2>
            <p className="text-gray-600 text-xl">Experienced professionals dedicated to your health 👩‍⚕️👨‍⚕️</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {doctors.map((doctor) => (
              <Card 
                key={doctor.id}
                className={`hover:shadow-2xl transition-all duration-500 transform ${
                  hoveredDoctor === doctor.id ? 'scale-110 -translate-y-4' : 'hover:scale-105 hover:-translate-y-2'
                } bg-gradient-to-br from-white via-blue-50 to-purple-50 border-2 border-blue-200`}
                onMouseEnter={() => setHoveredDoctor(doctor.id)}
                onMouseLeave={() => setHoveredDoctor(null)}
              >
                <CardHeader className="text-center">
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-400 to-purple-400 shadow-xl">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-bold text-xl">
                    {doctor.specialty}
                  </CardDescription>
                  <div className="flex items-center justify-center space-x-2 mt-3">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-700 font-bold text-lg">{doctor.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-400 to-teal-400 text-white text-lg px-4 py-2">
                    ✨ {doctor.experience}
                  </Badge>
                  <p className="text-gray-700 text-lg">
                    <strong>Available:</strong> {doctor.availability}
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    📅 Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">Book Your Appointment</h2>
            <p className="text-gray-600 text-xl">Schedule a consultation with our expert medical team 🩺</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl border-4 border-gradient-to-r from-purple-200 to-pink-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-t-lg">
                <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🏥 Patient Appointment Form
                </CardTitle>
                <CardDescription className="text-center text-gray-700 text-lg">
                  Please fill out the form below to schedule your appointment ✨
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-inner">
                  <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-2xl border-4 border-gradient-to-r from-purple-300 to-pink-300">
                    <iframe
                      src="https://forms.zohopublic.in/hackatho1/form/AppointmentBookingForm/formperma/dbT-VwRZ7DqNoMpFLv20fyOdOjdqGUd1qvIbhfRCK3o"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Appointment Booking Form"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6">What Our Patients Say</h2>
            <p className="text-gray-600 text-xl">Real experiences from our valued patients 💝</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.review}"</p>
                  <p className="font-bold text-gray-800 text-lg">- {testimonial.name} 😊</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Why Choose HealWell Hospital? 🌟</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center text-white">
                <Shield className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">Certified Excellence</h4>
                <p className="text-blue-100">JCI Accredited Healthcare</p>
              </div>
              <div className="text-center text-white">
                <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">Award Winning</h4>
                <p className="text-blue-100">Best Hospital 2023</p>
              </div>
              <div className="text-center text-white">
                <Heart className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">Compassionate Care</h4>
                <p className="text-blue-100">10,000+ Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="text-white font-bold w-6 h-6" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">HealWell Hospital</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Providing exceptional healthcare services with compassion and expertise. 💙
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-purple-400">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#home" className="hover:text-purple-400 transition-colors text-lg">🏠 Home</a></li>
                <li><a href="#doctors" className="hover:text-blue-400 transition-colors text-lg">👩‍⚕️ Our Doctors</a></li>
                <li><a href="#booking" className="hover:text-pink-400 transition-colors text-lg">📅 Book Appointment</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors text-lg">📞 Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-400">Services</h4>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>🚨 Emergency Care</li>
                <li>❤️ Cardiology</li>
                <li>🧠 Neurology</li>
                <li>👶 Pediatrics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-teal-400">Contact Info</h4>
              <div className="space-y-3 text-gray-300 text-lg">
                <p>📍 123 Wellness Lane</p>
                <p>🏙️ Health City, HC 456</p>
                <p>📞 Phone: +1 (123) 456-7890</p>
                <p>📧 Email: info@healwellhospital.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p className="text-lg">&copy; 2024 HealWell Hospital. All rights reserved. | Privacy Policy | Terms of Service ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
