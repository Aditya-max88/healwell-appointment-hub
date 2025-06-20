
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">HealWell Hospital</h1>
                <p className="text-sm text-gray-600">Your Health, Our Priority</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Doctors</a>
              <a href="#booking" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Book Appointment</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-200 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-200 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Quality Healthcare
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-700 mb-8">
            When You Need It Most
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience world-class medical care with our team of expert doctors and state-of-the-art facilities. 
            Book your appointment today and take the first step towards better health.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Appointment Now!
          </Button>
        </div>
      </section>

      {/* Hospital Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hospital Information</h2>
            <p className="text-gray-600 text-lg">Get in touch with us for any medical needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  123 Wellness Lane<br />
                  Health City, HC 456<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> info@healwellhospital.com
                </p>
                <p className="text-red-600 font-semibold">
                  <strong>Emergency:</strong> 24/7 Helpline
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  <strong>Mon-Fri:</strong> 8:00 AM - 8:00 PM
                </p>
                <p className="text-gray-600">
                  <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">
                  <strong>Sunday:</strong> 10:00 AM - 4:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-gray-600 text-lg">Experienced professionals dedicated to your health</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card 
                key={doctor.id}
                className={`hover:shadow-xl transition-all duration-300 transform ${
                  hoveredDoctor === doctor.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredDoctor(doctor.id)}
                onMouseLeave={() => setHoveredDoctor(null)}
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-lg">
                    {doctor.specialty}
                  </CardDescription>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-600 font-medium">{doctor.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {doctor.experience}
                  </Badge>
                  <p className="text-gray-600">
                    <strong>Available:</strong> {doctor.availability}
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
            <p className="text-gray-600 text-lg">Schedule a consultation with our expert medical team</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-2 border-blue-100">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <CardTitle className="text-2xl text-center text-gray-800">
                  Patient Appointment Form
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Please fill out the form below to schedule your appointment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Zoho Form Integration
                  </h3>
                  <p className="text-gray-600 mb-6">
                    This section will contain your embedded Zoho appointment booking form. 
                    The form will include fields for patient information, preferred appointment time, 
                    doctor selection, and reason for visit.
                  </p>
                  <div className="bg-white p-6 rounded-lg border">
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Form Fields to Include:</strong>
                    </p>
                    <ul className="text-left text-sm text-gray-600 space-y-2">
                      <li>• Patient Name (Required)</li>
                      <li>• Email Address (Required)</li>
                      <li>• Phone Number (Required)</li>
                      <li>• Preferred Date & Time</li>
                      <li>• Doctor Selection (Dropdown)</li>
                      <li>• Reason for Visit</li>
                      <li>• Additional Notes (Optional)</li>
                    </ul>
                  </div>
                  <Button 
                    className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    disabled
                  >
                    Embed Your Zoho Form Here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from our valued patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <span className="text-xl font-bold">HealWell Hospital</span>
              </div>
              <p className="text-gray-300">
                Providing exceptional healthcare services with compassion and expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Book Appointment</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Emergency Care</li>
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Pediatrics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Wellness Lane</p>
                <p>Health City, HC 456</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: info@healwellhospital.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 HealWell Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
