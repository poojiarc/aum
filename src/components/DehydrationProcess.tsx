 import { useEffect, useRef, useState } from 'react';
 
 // Import process images
 import step1Img from '@/assets/process/step1-farm.jpg';
 import step2Img from '@/assets/process/step2-cleaning.jpg';
 import step3Img from '@/assets/process/step3-slicing.jpg';
 import step4Img from '@/assets/process/step4-drying.jpg';
 import step5Img from '@/assets/process/step5-grinding.jpg';
 
 const processSteps = [
   {
     step: 1,
     title: 'Raw Procurement',
     image: step1Img,
     points: [
       'Sourced directly from trusted farms',
       'Supporting local farmers',
       'Fresh seasonal produce',
     ],
     icon: '🌾',
   },
   {
     step: 2,
     title: 'Thorough Cleaning',
     image: step2Img,
     points: [
       'Multiple-stage cleaning',
       'Hygienic processing',
       'Zero contamination',
     ],
     icon: '💧',
   },
   {
     step: 3,
     title: 'Precision Slicing',
     image: step3Img,
     points: [
       'Uniform slicing',
       'Preserves nutrients',
       'Optimized for drying',
     ],
     icon: '🔪',
   },
   {
     step: 4,
     title: 'Solar Drying',
     image: step4Img,
     points: [
       'Below 60°C temperature',
       '0% moisture retention',
       'Maximum nutrient preservation',
     ],
     icon: '☀️',
   },
   {
     step: 5,
     title: 'Fine Powdering',
     image: step5Img,
     points: [
       'Fine milling process',
       'No chemicals added',
       'Sealed for freshness',
     ],
     icon: '⚙️',
   },
 ];
 
 const DehydrationProcess = () => {
   const [activeStep, setActiveStep] = useState(0);
   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
   
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             const index = sectionRefs.current.findIndex(ref => ref === entry.target);
             if (index !== -1) {
               setActiveStep(index);
             }
           }
         });
       },
       { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
     );
     
     sectionRefs.current.forEach((ref) => {
       if (ref) observer.observe(ref);
     });
     
     return () => observer.disconnect();
   }, []);
   
   return (
     <section id="process" className="relative bg-primary overflow-hidden">
       {/* Section Header */}
       <div className="sticky top-20 z-10 bg-gradient-to-b from-primary via-primary to-transparent pt-8 pb-16">
         <div className="container mx-auto px-4 text-center">
           <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground rounded-full text-sm font-medium mb-4">
             Our Process
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
             From Farm to <span className="text-gold-glow">Fine Powder</span>
           </h2>
           <p className="text-white/70 mt-4 max-w-2xl mx-auto">
             Discover our traditional solar-drying process that preserves maximum nutrition
           </p>
           
           {/* Progress indicator */}
           <div className="flex justify-center gap-2 mt-8">
             {processSteps.map((_, index) => (
               <div
                 key={index}
                 className={`w-12 h-1 rounded-full transition-all duration-500 ${
                   index === activeStep ? 'bg-gold w-16' : 'bg-white/30'
                 }`}
               />
             ))}
           </div>
         </div>
       </div>
       
       {/* Process Steps */}
       <div className="relative">
         {processSteps.map((step, index) => (
           <div
             key={step.step}
             ref={(el) => (sectionRefs.current[index] = el)}
             className="min-h-screen relative flex items-center"
           >
             {/* Background Image with Parallax */}
             <div 
               className="absolute inset-0 bg-cover bg-center bg-fixed"
               style={{ backgroundImage: `url(${step.image})` }}
             />
             
             {/* Dark Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
             
             {/* Content */}
             <div className="relative container mx-auto px-4 py-20">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Text Content */}
                 <div 
                   className={`space-y-6 transition-all duration-700 ${
                     index === activeStep 
                       ? 'opacity-100 translate-y-0' 
                       : 'opacity-50 translate-y-8'
                   }`}
                 >
                   {/* Step Badge */}
                   <div className="inline-flex items-center gap-3">
                     <span className="w-14 h-14 bg-gold text-primary rounded-2xl flex items-center justify-center text-2xl font-bold shadow-gold">
                       {step.step}
                     </span>
                     <span className="text-4xl">{step.icon}</span>
                   </div>
                   
                   <h3 className="font-display text-4xl md:text-5xl font-bold text-white">
                     {step.title}
                   </h3>
                   
                   <ul className="space-y-4">
                     {step.points.map((point, i) => (
                       <li 
                         key={i}
                         className="flex items-center gap-3 text-lg text-white/90"
                         style={{ 
                           transitionDelay: `${i * 100}ms`,
                         }}
                       >
                         <span className="w-6 h-6 bg-organic-green/20 rounded-full flex items-center justify-center text-organic-green text-sm">
                           ✓
                         </span>
                         {point}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Image Preview */}
                 <div className="hidden lg:block">
                   <div 
                     className={`relative rounded-3xl overflow-hidden shadow-elevated transition-all duration-700 ${
                       index === activeStep 
                         ? 'opacity-100 scale-100' 
                         : 'opacity-50 scale-95'
                     }`}
                   >
                     <img 
                       src={step.image} 
                       alt={step.title}
                       className="w-full aspect-video object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
       
       {/* Bottom Transition */}
       <div className="h-32 bg-gradient-to-b from-primary to-background" />
     </section>
   );
 };
 
 export default DehydrationProcess;