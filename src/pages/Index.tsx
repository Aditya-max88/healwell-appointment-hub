
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Star, Heart, Shield, Award, Globe } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  const translations = {
    en: {
      hospitalName: "HealWell Hospital",
      tagline: "Your Health, Our Priority ✨",
      nav: {
        home: "Home",
        booking: "Book Appointment",
        contact: "Contact"
      },
      hero: {
        title: "Quality Healthcare",
        subtitle: "When You Need It Most 💙",
        description: "Experience world-class medical care with our team of expert doctors and state-of-the-art facilities. Book your appointment today and take the first step towards better health! 🌟",
        button: "🚀 Book Your Appointment Now!"
      },
      hospitalInfo: {
        title: "Hospital Information",
        subtitle: "Get in touch with us for any medical needs 📞",
        location: {
          title: "Our Location 📍",
          address: "123 Wellness Lane<br />Health City, HC 456<br />United States 🇺🇸"
        },
        contact: {
          title: "Contact Us 📱",
          phone: "Phone:",
          email: "Email:",
          emergency: "🚨 Emergency: 24/7 Helpline"
        },
        hours: {
          title: "Working Hours ⏰",
          weekdays: "Mon-Fri: 8:00 AM - 8:00 PM",
          saturday: "Saturday: 9:00 AM - 6:00 PM",
          sunday: "Sunday: 10:00 AM - 4:00 PM"
        }
      },
      booking: {
        title: "Book Your Appointment",
        subtitle: "Schedule a consultation with our expert medical team 🩺",
        formTitle: "🏥 Patient Appointment Form",
        formSubtitle: "Please fill out the form below to schedule your appointment ✨"
      },
      testimonials: {
        title: "What Our Patients Say",
        subtitle: "Real experiences from our valued patients 💝",
        reviews: [
          {
            review: "Excellent care and very professional staff. Dr. Smith was thorough and caring.",
            name: "Maria Rodriguez"
          },
          {
            review: "Quick appointment booking and great facilities. Highly recommend!",
            name: "John Williams"
          },
          {
            review: "The online booking system is so convenient. Thank you for the excellent service!",
            name: "Sarah Chen"
          }
        ]
      },
      trust: {
        title: "Why Choose HealWell Hospital? 🌟",
        excellence: {
          title: "Certified Excellence",
          subtitle: "JCI Accredited Healthcare"
        },
        award: {
          title: "Award Winning",
          subtitle: "Best Hospital 2023"
        },
        care: {
          title: "Compassionate Care",
          subtitle: "10,000+ Happy Patients"
        }
      },
      footer: {
        description: "Providing exceptional healthcare services with compassion and expertise. 💙",
        quickLinks: "Quick Links",
        services: "Services",
        contactInfo: "Contact Info",
        copyright: "© 2024 HealWell Hospital. All rights reserved. | Privacy Policy | Terms of Service ✨",
        servicesList: {
          emergency: "🚨 Emergency Care",
          cardiology: "❤️ Cardiology",
          neurology: "🧠 Neurology",
          pediatrics: "👶 Pediatrics"
        }
      }
    },
    te: {
      hospitalName: "హీల్‌వెల్ హాస్పిటల్",
      tagline: "మీ ఆరోగ్యం, మా ప్రాధాన్యత ✨",
      nav: {
        home: "హోమ్",
        booking: "అపాయింట్‌మెంట్ బుక్ చేయండి",
        contact: "సంప్రదించండి"
      },
      hero: {
        title: "నాణ్యమైన ఆరోగ్య సేవ",
        subtitle: "మీకు అవసరమైనప్పుడు 💙",
        description: "నిపుణ వైద్యుల బృందం మరియు అత్యాధునిక సౌకర్యాలతో ప్రపంచ స్థాయి వైద్య సేవను అనుభవించండి. మీ అపాయింట్‌మెంట్‌ను ఈరోజే బుక్ చేసి, మెరుగైన ఆరోగ్యం వైపు మొదటి అడుగు వేయండి! 🌟",
        button: "🚀 ఇప్పుడే మీ అపాయింట్‌మెంట్ బుక్ చేయండి!"
      },
      hospitalInfo: {
        title: "హాస్పిటల్ సమాచారం",
        subtitle: "ఏదైనా వైద్య అవసరాల కోసం మాతో సంప్రదించండి 📞",
        location: {
          title: "మా స్థానం 📍",
          address: "123 వెల్నెస్ లేన్<br />హెల్త్ సిటీ, HC 456<br />యునైటెడ్ స్టేట్స్ 🇺🇸"
        },
        contact: {
          title: "మాతో సంప్రదించండి 📱",
          phone: "ఫోన్:",
          email: "ఇమెయిల్:",
          emergency: "🚨 అత్యవసరం: 24/7 హెల్ప్‌లైన్"
        },
        hours: {
          title: "పని గంటలు ⏰",
          weekdays: "సోమ-శుక్ర: ఉదయం 8:00 - రాత్రి 8:00",
          saturday: "శనివారం: ఉదయం 9:00 - సాయంత్రం 6:00",
          sunday: "ఆదివారం: ఉదయం 10:00 - సాయంత్రం 4:00"
        }
      },
      booking: {
        title: "మీ అపాయింట్‌మెంట్ బుక్ చేయండి",
        subtitle: "మా నిపుణ వైద్య బృందంతో సంప్రదింపు షెడ్యూల్ చేయండి 🩺",
        formTitle: "🏥 రోగి అపాయింట్‌మెంట్ ఫారం",
        formSubtitle: "మీ అపాయింట్‌మెంట్ షెడ్యూల్ చేయడానికి దయచేసి దిగువ ఫారం పూరించండి ✨"
      },
      testimonials: {
        title: "మా రోగులు చెప్పేది",
        subtitle: "మా విలువైన రోగుల నిజమైన అనుభవాలు 💝",
        reviews: [
          {
            review: "అద్భుతమైన సంరక్షణ మరియు చాలా వృత్తిపరమైన సిబ్బంది. డాక్టర్ చాలా శ్రద్ధగా చూసుకున్నారు.",
            name: "మరియా రోడ్రిగ్జ్"
          },
          {
            review: "త్వరగా అపాయింట్‌మెంట్ బుకింగ్ మరియు గొప్ప సౌకర్యాలు. చాలా సిఫార్సు చేస్తాను!",
            name: "జాన్ విలియమ్స్"
          },
          {
            review: "ఆన్‌లైన్ బుకింగ్ సిస్టమ్ చాలా సౌకర్యవంతంగా ఉంది. అద్భుతమైన సేవకు ధన్యవాదాలు!",
            name: "సారా చెన్"
          }
        ]
      },
      trust: {
        title: "హీల్‌వెల్ హాస్పిటల్‌ను ఎందుకు ఎంచుకోవాలి? 🌟",
        excellence: {
          title: "ధృవీకృత శ్రేష్ఠత",
          subtitle: "JCI గుర్తింపు పొందిన ఆరోగ్య సేవ"
        },
        award: {
          title: "అవార్డు గెలుచుకున్న",
          subtitle: "ఉత్తమ హాస్పిటల్ 2023"
        },
        care: {
          title: "దయతో కూడిన సంరక్షణ",
          subtitle: "10,000+ సంతోషకరమైన రోగులు"
        }
      },
      footer: {
        description: "దయ మరియు నైపుణ్యంతో అసాధారణమైన ఆరోగ్య సేవలను అందిస్తోంది. 💙",
        quickLinks: "త్వరిత లింక్‌లు",
        services: "సేవలు",
        contactInfo: "సంప్రదింపు సమాచారం",
        copyright: "© 2024 హీల్‌వెల్ హాస్పిటల్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి. | గోప్యతా విధానం | సేవా నిబంధనలు ✨",
        servicesList: {
          emergency: "🚨 అత్యవసర సంరక్షణ",
          cardiology: "❤️ కార్డియాలజీ",
          neurology: "🧠 న్యూరాలజీ",
          pediatrics: "👶 పీడియాట్రిక్స్"
        }
      }
    },
    hi: {
      hospitalName: "हीलवेल अस्पताल",
      tagline: "आपका स्वास्थ्य, हमारी प्राथमिकता ✨",
      nav: {
        home: "होम",
        booking: "अपॉइंटमेंट बुक करें",
        contact: "संपर्क करें"
      },
      hero: {
        title: "गुणवत्तापूर्ण स्वास्थ्य सेवा",
        subtitle: "जब आपको इसकी सबसे ज्यादा जरूरत हो 💙",
        description: "विशेषज्ञ डॉक्टरों की हमारी टीम और अत्याधुनिक सुविधाओं के साथ विश्व स्तरीय चिकित्सा देखभाल का अनुभव करें। आज ही अपना अपॉइंटमेंट बुक करें और बेहतर स्वास्थ्य की दिशा में पहला कदम उठाएं! 🌟",
        button: "🚀 अभी अपना अपॉइंटमेंट बुक करें!"
      },
      hospitalInfo: {
        title: "अस्पताल की जानकारी",
        subtitle: "किसी भी चिकित्सा आवश्यकता के लिए हमसे संपर्क करें 📞",
        location: {
          title: "हमारा स्थान 📍",
          address: "123 वेलनेस लेन<br />हेल्थ सिटी, HC 456<br />संयुक्त राज्य अमेरिका 🇺🇸"
        },
        contact: {
          title: "हमसे संपर्क करें 📱",
          phone: "फोन:",
          email: "ईमेल:",
          emergency: "🚨 आपातकाल: 24/7 हेल्पलाइन"
        },
        hours: {
          title: "कार्य समय ⏰",
          weekdays: "सोम-शुक्र: सुबह 8:00 - रात 8:00",
          saturday: "शनिवार: सुबह 9:00 - शाम 6:00",
          sunday: "रविवार: सुबह 10:00 - शाम 4:00"
        }
      },
      booking: {
        title: "अपना अपॉइंटमेंट बुक करें",
        subtitle: "हमारी विशेषज्ञ चिकित्सा टीम के साथ परामर्श का समय निर्धारित करें 🩺",
        formTitle: "🏥 रोगी अपॉइंटमेंट फॉर्म",
        formSubtitle: "कृपया अपना अपॉइंटमेंट शेड्यूल करने के लिए नीचे दिया गया फॉर्म भरें ✨"
      },
      testimonials: {
        title: "हमारे मरीज़ क्या कहते हैं",
        subtitle: "हमारे बहुमूल्य मरीज़ों के वास्तविक अनुभव 💝",
        reviews: [
          {
            review: "उत्कृष्ट देखभाल और बहुत पेशेवर कर्मचारी। डॉक्टर बहुत सावधान और देखभाल करने वाले थे।",
            name: "मारिया रोड्रिगेज"
          },
          {
            review: "त्वरित अपॉइंटमेंट बुकिंग और बेहतरीन सुविधाएं। अत्यधिक अनुशंसा करता हूं!",
            name: "जॉन विलियम्स"
          },
          {
            review: "ऑनलाइन बुकिंग सिस्टम बहुत सुविधाजनक है। उत्कृष्ट सेवा के लिए धन्यवाद!",
            name: "सारा चेन"
          }
        ]
      },
      trust: {
        title: "हीलवेल अस्पताल क्यों चुनें? 🌟",
        excellence: {
          title: "प्रमाणित उत्कृष्टता",
          subtitle: "JCI मान्यता प्राप्त स्वास्थ्य सेवा"
        },
        award: {
          title: "पुरस्कार विजेता",
          subtitle: "सर्वश्रेष्ठ अस्पताल 2023"
        },
        care: {
          title: "दयालु देखभाल",
          subtitle: "10,000+ खुश मरीज़"
        }
      },
      footer: {
        description: "करुणा और विशेषज्ञता के साथ असाधारण स्वास्थ्य सेवाएं प्रदान करना। 💙",
        quickLinks: "त्वरित लिंक",
        services: "सेवाएं",
        contactInfo: "संपर्क जानकारी",
        copyright: "© 2024 हीलवेल अस्पताल। सभी अधिकार सुरक्षित। | गोपनीयता नीति | सेवा की शर्तें ✨",
        servicesList: {
          emergency: "🚨 आपातकालीन देखभाल",
          cardiology: "❤️ कार्डियोलॉजी",
          neurology: "🧠 न्यूरोलॉजी",
          pediatrics: "👶 बाल चिकित्सा"
        }
      }
    },
    ur: {
      hospitalName: "ہیل ویل ہسپتال",
      tagline: "آپ کی صحت، ہماری ترجیح ✨",
      nav: {
        home: "ہوم",
        booking: "ملاقات بک کریں",
        contact: "رابطہ کریں"
      },
      hero: {
        title: "معیاری صحت کی دیکھ بھال",
        subtitle: "جب آپ کو اس کی سب سے زیادہ ضرورت ہو 💙",
        description: "ماہر ڈاکٹروں کی ہماری ٹیم اور جدید ترین سہولات کے ساتھ عالمی معیار کی طبی دیکھ بھال کا تجربہ کریں۔ آج ہی اپنی ملاقات بک کریں اور بہتر صحت کی طرف پہلا قدم اٹھائیں! 🌟",
        button: "🚀 اب اپنی ملاقات بک کریں!"
      },
      hospitalInfo: {
        title: "ہسپتال کی معلومات",
        subtitle: "کسی بھی طبی ضرورت کے لیے ہم سے رابطہ کریں 📞",
        location: {
          title: "ہمارا مقام 📍",
          address: "123 ویلنیس لین<br />ہیلتھ سٹی، HC 456<br />ریاستہائے متحدہ امریکہ 🇺🇸"
        },
        contact: {
          title: "ہم سے رابطہ کریں 📱",
          phone: "فون:",
          email: "ای میل:",
          emergency: "🚨 ایمرجنسی: 24/7 ہیلپ لائن"
        },
        hours: {
          title: "کام کے اوقات ⏰",
          weekdays: "پیر تا جمعہ: صبح 8:00 - رات 8:00",
          saturday: "ہفتہ: صبح 9:00 - شام 6:00",
          sunday: "اتوار: صبح 10:00 - شام 4:00"
        }
      },
      booking: {
        title: "اپنی ملاقات بک کریں",
        subtitle: "ہماری ماہر طبی ٹیم کے ساتھ مشاورت کا وقت مقرر کریں 🩺",
        formTitle: "🏥 مریض ملاقات فارم",
        formSubtitle: "اپنی ملاقات کا وقت مقرر کرنے کے لیے براہ کرم نیچے دیا گیا فارم بھریں ✨"
      },
      testimonials: {
        title: "ہمارے مریض کیا کہتے ہیں",
        subtitle: "ہمارے قیمتی مریضوں کے حقیقی تجربات 💝",
        reviews: [
          {
            review: "بہترین دیکھ بھال اور بہت پیشہ ور عملہ۔ ڈاکٹر بہت محتاط اور خیال رکھنے والے تھے۔",
            name: "ماریا روڈریگیز"
          },
          {
            review: "فوری ملاقات بکنگ اور بہترین سہولات۔ انتہائی تجویز کرتا ہوں!",
            name: "جان ولیمز"
          },
          {
            review: "آن لائن بکنگ سسٹم بہت آسان ہے۔ بہترین خدمات کے لیے شکریہ!",
            name: "سارہ چن"
          }
        ]
      },
      trust: {
        title: "ہیل ویل ہسپتال کیوں منتخب کریں؟ 🌟",
        excellence: {
          title: "تصدیق شدہ بہترین",
          subtitle: "JCI تسلیم شدہ صحت کی دیکھ بھال"
        },
        award: {
          title: "ایوارڈ یافتہ",
          subtitle: "بہترین ہسپتال 2023"
        },
        care: {
          title: "ہمدردانہ دیکھ بھال",
          subtitle: "10,000+ خوش مریض"
        }
      },
      footer: {
        description: "ہمدردی اور مہارت کے ساتھ غیر معمولی صحت کی خدمات فراہم کرنا۔ 💙",
        quickLinks: "فوری لنکس",
        services: "خدمات",
        contactInfo: "رابطہ کی معلومات",
        copyright: "© 2024 ہیل ویل ہسپتال۔ تمام حقوق محفوظ ہیں۔ | رازداری کی پالیسی | خدمات کی شرائط ✨",
        servicesList: {
          emergency: "🚨 ایمرجنسی کیئر",
          cardiology: "❤️ کارڈیالوجی",
          neurology: "🧠 نیورولوجی",
          pediatrics: "👶 بچوں کی طب"
        }
      }
    }
  };

  const testimonials = [
    {
      rating: 5,
    },
    {
      rating: 5,
    },
    {
      rating: 4,
    },
  ];

  const t = translations[currentLanguage as keyof typeof translations];

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

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
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{t.hospitalName}</h1>
                <p className="text-sm text-gray-600 font-medium">{t.tagline}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold hover:scale-105 transform duration-200">{t.nav.home}</a>
                <a href="#booking" className="text-gray-700 hover:text-pink-600 transition-colors font-semibold hover:scale-105 transform duration-200">{t.nav.booking}</a>
                <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold hover:scale-105 transform duration-200">{t.nav.contact}</a>
              </nav>
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <Select value={currentLanguage} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-32 h-10 text-base font-medium border-2 border-purple-200 hover:border-purple-400 focus:border-purple-500 bg-white/90">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-purple-200 shadow-xl z-[60]">
                    <SelectItem value="en" className="text-base py-3 hover:bg-purple-50 focus:bg-purple-100">English</SelectItem>
                    <SelectItem value="te" className="text-base py-3 hover:bg-purple-50 focus:bg-purple-100 font-noto">తెలుగు</SelectItem>
                    <SelectItem value="hi" className="text-base py-3 hover:bg-purple-50 focus:bg-purple-100 font-noto">हिंदी</SelectItem>
                    <SelectItem value="ur" className="text-base py-3 hover:bg-purple-50 focus:bg-purple-100 font-noto">اردو</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
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
            {t.hero.title}
          </h2>
          <h3 className="text-3xl md:text-4xl text-gray-700 mb-8 font-semibold">
            {t.hero.subtitle}
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.hero.button}
          </Button>
        </div>
      </section>

      {/* Hospital Information */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">{t.hospitalInfo.title}</h2>
            <p className="text-gray-600 text-xl">{t.hospitalInfo.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-700">{t.hospitalInfo.location.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.hospitalInfo.location.address }}>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-teal-50 to-green-50 border-2 border-teal-200">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-teal-700">{t.hospitalInfo.contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-lg">
                  <strong>{t.hospitalInfo.contact.phone}</strong> +1 (123) 456-7890
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>{t.hospitalInfo.contact.email}</strong> info@healwellhospital.com
                </p>
                <p className="text-red-600 font-bold text-lg pulse-emergency">
                  <strong>{t.hospitalInfo.contact.emergency}</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-700">{t.hospitalInfo.hours.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 text-lg">
                  <strong>{t.hospitalInfo.hours.weekdays}</strong>
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>{t.hospitalInfo.hours.saturday}</strong>
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>{t.hospitalInfo.hours.sunday}</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-white via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">{t.booking.title}</h2>
            <p className="text-gray-600 text-xl">{t.booking.subtitle}</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl border-4 border-gradient-to-r from-purple-200 to-pink-200 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-t-lg">
                <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.booking.formTitle}
                </CardTitle>
                <CardDescription className="text-center text-gray-700 text-lg">
                  {t.booking.formSubtitle}
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
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6">{t.testimonials.title}</h2>
            <p className="text-gray-600 text-xl">{t.testimonials.subtitle}</p>
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
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{t.testimonials.reviews[index].review}"</p>
                  <p className="font-bold text-gray-800 text-lg">- {t.testimonials.reviews[index].name} 😊</p>
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
            <h3 className="text-3xl font-bold text-white mb-8">{t.trust.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center text-white">
                <Shield className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">{t.trust.excellence.title}</h4>
                <p className="text-blue-100">{t.trust.excellence.subtitle}</p>
              </div>
              <div className="text-center text-white">
                <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">{t.trust.award.title}</h4>
                <p className="text-blue-100">{t.trust.award.subtitle}</p>
              </div>
              <div className="text-center text-white">
                <Heart className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">{t.trust.care.title}</h4>
                <p className="text-blue-100">{t.trust.care.subtitle}</p>
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
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t.hospitalName}</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-purple-400">{t.footer.quickLinks}</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#home" className="hover:text-purple-400 transition-colors text-lg">🏠 {t.nav.home}</a></li>
                <li><a href="#booking" className="hover:text-pink-400 transition-colors text-lg">📅 {t.nav.booking}</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors text-lg">📞 {t.nav.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-400">{t.footer.services}</h4>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>{t.footer.servicesList.emergency}</li>
                <li>{t.footer.servicesList.cardiology}</li>
                <li>{t.footer.servicesList.neurology}</li>
                <li>{t.footer.servicesList.pediatrics}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-teal-400">{t.footer.contactInfo}</h4>
              <div className="space-y-3 text-gray-300 text-lg">
                <p>📍 123 Wellness Lane</p>
                <p>🏙️ Health City, HC 456</p>
                <p>📞 Phone: +1 (123) 456-7890</p>
                <p>📧 Email: info@healwellhospital.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p className="text-lg">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
