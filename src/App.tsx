import React from 'react';
import { ChevronRight, Wand2, Gamepad2, Box, Clapperboard, Users, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import ShowreelSection from './components/ShowreelSection';
import Footer from './components/Footer';
import TeamMember from './components/TeamMember';
import SoftwareGrid from './components/SoftwareGrid';
import Chatbot from './components/Chatbot';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Character Animation",
    description: "Bring your characters to life with fluid, expressive animations that capture emotion and personality.",
    image: "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c7?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        title: "Facial Animation",
        description: "Detailed facial expressions and lip-sync for realistic character performances"
      },
      {
        title: "Body Mechanics",
        description: "Natural movement and weight distribution for believable character motion"
      },
      {
        title: "Custom Rigging",
        description: "Specialized character rigs optimized for your specific needs"
      }
    ],
    ctaLink: "/services/character-animation",
    ctaText: "Explore Character Animation"
  },
  {
    title: "Game Art & Animation",
    description: "Create stunning game assets and animations optimized for real-time rendering and gameplay.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        title: "Real-time Animation",
        description: "Optimized animations for game engines and interactive experiences"
      },
      {
        title: "Asset Creation",
        description: "High-quality 3D models and textures for games"
      },
      {
        title: "Animation Sets",
        description: "Complete animation libraries for character movement and actions"
      }
    ],
    ctaLink: "/services/game-art",
    ctaText: "Explore Game Art"
  },
  {
    title: "Product Animation",
    description: "Showcase your products with dynamic 3D animations that highlight features and functionality.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        title: "Product Visualization",
        description: "Photorealistic 3D rendering and animation of products"
      },
      {
        title: "Technical Animation",
        description: "Detailed animation of product features and mechanisms"
      },
      {
        title: "Marketing Content",
        description: "Engaging animations for advertising and social media"
      }
    ],
    ctaLink: "/services/product-animation",
    ctaText: "Explore Product Animation"
  },
  {
    title: "Motion Graphics",
    description: "Tell your story through engaging motion graphics and visual effects that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    features: [
      {
        title: "2D/3D Integration",
        description: "Seamless combination of 2D and 3D elements"
      },
      {
        title: "Visual Effects",
        description: "Custom VFX for enhanced visual impact"
      },
      {
        title: "Brand Animation",
        description: "Dynamic animation of logos and brand elements"
      }
    ],
    ctaLink: "/services/motion-graphics",
    ctaText: "Explore Motion Graphics"
  }
];

const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400",
    name: "David Chen",
    role: "Lead Animator",
    bio: "10+ years of experience in character animation and rigging for AAA games and feature films."
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    name: "Sarah Martinez",
    role: "VFX Supervisor",
    bio: "Award-winning VFX artist specializing in dynamic simulations and particle effects."
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    name: "Michael Park",
    role: "Technical Director",
    bio: "Expert in pipeline development and technical animation solutions."
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    name: "Emma Wilson",
    role: "Art Director",
    bio: "Passionate about creating stunning visual styles and maintaining artistic excellence."
  }
];

const software = [
  {
    name: "Blender",
    description: "Open-source 3D creation suite",
    logo: "https://download.blender.org/branding/blender_logo_socket.png"
  },
  {
    name: "Maya",
    description: "Industry-standard 3D animation software",
    logo: "https://seeklogo.com/images/A/autodesk-maya-logo-A8D58F0B41-seeklogo.com.png"
  },
  {
    name: "After Effects",
    description: "Motion graphics and visual effects",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png"
  },
  {
    name: "Houdini",
    description: "Procedural VFX and simulation",
    logo: "https://www.sidefx.com/images/icons/houdini.png"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">
              Comprehensive animation solutions for every creative need
            </p>
          </div>
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className="service-section">
                <ServiceSection {...service} reversed={index % 2 === 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Our Team</h2>
            </div>
            <p className="text-xl text-gray-400">
              Meet our talented team of animation experts and creative professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section id="software" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Tools</h2>
            <p className="text-xl text-gray-400">
              We use industry-leading software to deliver exceptional results
            </p>
          </div>
          <SoftwareGrid software={software} />
        </div>
      </section>

      <ShowreelSection />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;