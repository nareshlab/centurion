import React from 'react';
import { Brain, Mail, Phone, ChevronDown, Award, Clock, Users, BookOpen, Zap, Target, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient text-white overflow-hidden">
      {/* Header */}
      <header className="py-4 backdrop-blur-md bg-black/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 hover-3d">
            <Brain className="w-8 h-8 text-yellow-400 animate-float" />
            <span className="text-xl font-bold">BigBucks Innovation</span>
          </div>
          <div className="flex items-center gap-6">
            <img src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&auto=format&fit=crop&q=80" alt="DPIIT Logo" className="h-12 w-12 object-contain hover-3d" />
            <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&auto=format&fit=crop&q=80" alt="AICTE Logo" className="h-12 w-12 object-contain hover-3d" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative hero-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 hover-3d">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient animate-glow">#bigbucksforchange</h1>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">CENTURION 2.0</h2>
            </div>
            <div className="space-y-4 hover-3d">
              <h3 className="text-2xl md:text-4xl font-semibold text-yellow-400">120 DAYS TECH PROGRAM</h3>
              <p className="text-xl md:text-2xl">நாளைய மாற்றம் முன்னேற்றம்</p>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">YOUR WAY TO SUCCESS IN 100 DAYS + FREE 20 DAYS</p>
            </div>
            <ChevronDown className="w-8 h-8 mx-auto text-yellow-400 animate-bounce mt-12" />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: "120 Days", desc: "Comprehensive Program" },
            { icon: Users, title: "Expert Mentors", desc: "Industry Leaders" },
            { icon: BookOpen, title: "Hands-on Learning", desc: "Practical Approach" },
            { icon: Award, title: "Certification", desc: "Industry Recognition" }
          ].map((feature, i) => (
            <div key={i} className="text-center glass-effect p-6 rounded-xl hover-3d">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400 animate-float" />
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phases Section */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Program Structure</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div className="card-gradient rounded-xl p-8 hover-3d">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center phase-number">
                <span className="text-xl font-bold text-yellow-400">1</span>
              </div>
              <h4 className="text-xl font-bold text-yellow-400">PHASE 1- 60 DAYS</h4>
            </div>
            <ul className="space-y-4">
              {["JAVA", "PYTHON", "DSA", "DBMS-SQL"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 contact-item p-2 rounded">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="card-gradient rounded-xl p-8 hover-3d">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center phase-number">
                <span className="text-xl font-bold text-yellow-400">2</span>
              </div>
              <h4 className="text-xl font-bold text-yellow-400">PHASE 2- 45 DAYS</h4>
            </div>
            <ul className="space-y-4">
              {["CYBERSECURITY", "AWS CLOUD", "MERN STACK (SPRINGBOOT or Go Lang)", "AI & ML"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 contact-item p-2 rounded">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-yellow-400 font-bold text-center animate-pulse">ANY ONE</p>
          </div>

          {/* Phase 3 */}
          <div className="card-gradient rounded-xl p-8 hover-3d">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center phase-number">
                <span className="text-xl font-bold text-yellow-400">3</span>
              </div>
              <h4 className="text-xl font-bold text-yellow-400">PHASE 3- 15 DAYS</h4>
            </div>
            <ul className="space-y-4">
              {["PROJECT MANAGEMENT", "ENTREPRENEURSHIP", "PROJECT ALLOCATION", "VIVA-VOCE"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 contact-item p-2 rounded">
                  <Target className="w-4 h-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center glass-effect rounded-2xl p-12 hover-3d">
          <h3 className="text-3xl mb-8 text-gradient">Gain Insights from Industrial Experts at</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <span className="text-2xl line-through text-gray-400">COURSE FEE : ₹15899</span>
            </div>
            <div className="flex items-center justify-center price-tag">
              <span className="text-2xl font-bold">JUST </span>
              <span className="text-6xl font-bold text-yellow-400 ml-4 animate-glow">₹2849/-</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="card-gradient rounded-xl p-12 max-w-2xl mx-auto hover-3d">
          <h4 className="text-3xl font-bold mb-8 text-center text-gradient">CONTACT US</h4>
          <div className="space-y-6">
            {[
              { icon: Phone, text: "+91 86678 58430" },
              { icon: Phone, text: "+91 72003 96220" },
              { icon: Phone, text: "+91 72000 70527" },
              { icon: Mail, text: "ceo@bigbucksinnovation.com" },
              { icon: Mail, text: "bigbucksinnovation@gmail.com" }
            ].map((contact, i) => (
              <div key={i} className="flex items-center gap-4 contact-item p-3 rounded-lg">
                <contact.icon className="w-6 h-6 text-yellow-400" />
                <p>{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Register Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-gradient">REGISTER NOW</h3>
          <div className="glass-effect p-8 rounded-2xl inline-block hover-3d">
            <img 
              src="https://github.com/nareshlab/centurion/blob/main/bit.ly_3ZUYkgC.jpeg" 
              alt="Registration QR Code"
              className="w-48 h-48 mx-auto animate-glow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
