"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { CheckCircle, Smile, Truck, Headphones, Sparkles, Star, MessageCircle } from "lucide-react";

export default function ToyStorePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="noiseGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ToyStore"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002652915-onugw09p.jpg"
          logoAlt="ToyStore logo"
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Welcome to ToyStore - Where Joy Comes to Play"
          description="Discover the best selection of toys for kids of all ages. From action figures to building blocks, find the perfect toy for every child."
          tag="Grand Opening"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766055280088-xsdcgai1.jpg"
          imageAlt="Colorful toys collection"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Explore Toys", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Toys"
          description="Check out our most popular toys loved by kids everywhere. Browse our curated collection of quality toys for every age."
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              name: "Adventure Action Figure",
              price: "$24.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766055254445-10ig5efq.jpg",
              imageAlt: "Action figure toy"
            },
            {
              id: "2",
              name: "Colorful Building Blocks Set",
              price: "$34.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002656277-ok2wj8vz.jpg",
              imageAlt: "Building blocks toy set"
            },
            {
              id: "3",
              name: "Sports Racing Car",
              price: "$19.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002657324-4nrm3a3n.jpg",
              imageAlt: "Toy racing car"
            },
            {
              id: "4",
              name: "Plush Buddy Collection",
              price: "$22.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002658404-2qupm9ai.jpg",
              imageAlt: "Stuffed animal toy"
            },
            {
              id: "5",
              name: "Family Game Night Pack",
              price: "$29.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002659551-5phsli3o.jpg",
              imageAlt: "Board game set"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          buttons={[
            { text: "View All Products", href: "#" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="About ToyStore"
          description="We believe every child deserves access to quality toys that spark imagination and creativity. Since our founding, we have been committed to bringing joy through carefully selected toys."
          tag="Our Story"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002665557-u3i30gmm.jpg"
          imageAlt="ToyStore shop interior"
          bulletPoints={[
            {
              title: "Quality First",
              description: "All our toys are safety tested and made with high-quality materials for kids' safety.",
              icon: CheckCircle
            },
            {
              title: "Wide Selection",
              description: "From classic toys to the latest trends, we have something for every age and interest.",
              icon: Smile
            },
            {
              title: "Fast Shipping",
              description: "Get your toys delivered quickly so the fun starts sooner.",
              icon: Truck
            },
            {
              title: "Customer Support",
              description: "Our friendly team is here to help you find the perfect toy and answer any questions.",
              icon: Headphones
            }
          ]}
          buttons={[
            { text: "Shop Now", href: "products" }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Parents Love About Us"
          description="See why thousands of families choose ToyStore for their toy needs."
          tag="Customer Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showRating={true}
          animationType="slide-up"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_mom",
              testimonial: "Amazing selection and fast delivery! My kids love the toys I got from ToyStore. Highly recommended!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002660745-egvpuylz.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@michael_dad",
              testimonial: "Great quality toys at reasonable prices. Customer service was super helpful when I had questions.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002661835-n2zogse1.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_plays",
              testimonial: "Perfect for birthday gifts! Everything arrived on time and the toys are exactly as described.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002662958-t06s4nxb.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@david_family",
              testimonial: "My whole family enjoyed the board games we got. Great quality and fun for everyone!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766002664169-87yl9yxa.jpg"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, shipping, and policies."
          tag="Help & Support"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all unused toys in original packaging. Simply contact our support team to initiate a return."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping takes 5-7 business days. Express shipping options are available at checkout for faster delivery."
            },
            {
              id: "3",
              title: "Are all toys safety certified?",
              content: "Yes, all our toys meet international safety standards and are tested for quality and durability."
            },
            {
              id: "4",
              title: "Do you offer gift wrapping?",
              content: "Yes, we offer complimentary gift wrapping for orders during special occasions. Select this option at checkout."
            },
            {
              id: "5",
              title: "Can I track my order?",
              content: "Absolutely! You'll receive a tracking number via email once your order ships. You can track it in real-time."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have a question? Our friendly team is ready to help you find the perfect toy or answer any concerns."
          ctaIcon={MessageCircle}
          ctaButton={{
            text: "Contact Us",
            href: "#"
          }}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          faqs={[
            {
              id: "1",
              title: "What are your store hours?",
              content: "We're open Monday through Sunday, 9 AM to 6 PM. Customer support is available during these hours."
            },
            {
              id: "2",
              title: "Do you ship internationally?",
              content: "Currently, we ship within the United States. International shipping options coming soon!"
            },
            {
              id: "3",
              title: "How can I subscribe to updates?",
              content: "Sign up for our newsletter to get exclusive deals, new toy arrivals, and special promotions."
            }
          ]}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="ToyStore"
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Toys", href: "#products" },
                { label: "Best Sellers", href: "#products" },
                { label: "New Arrivals", href: "#products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping Info", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Return Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 ToyStore. All rights reserved. Bringing joy to families everywhere."
        />
      </div>
    </ThemeProvider>
  );
}