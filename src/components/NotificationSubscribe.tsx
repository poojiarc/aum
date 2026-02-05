 import { useState } from 'react';
 import { Mail, MessageCircle, Bell, CheckCircle, Loader2 } from 'lucide-react';
 
 const NotificationSubscribe = () => {
   const [email, setEmail] = useState('');
   const [whatsappOptIn, setWhatsappOptIn] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!email) return;
     
     setIsSubmitting(true);
     
     // Simulate API call
     await new Promise(resolve => setTimeout(resolve, 1500));
     
     setIsSubmitting(false);
     setIsSuccess(true);
     
     // Reset after animation
     setTimeout(() => {
       setEmail('');
       setWhatsappOptIn(false);
       setIsSuccess(false);
     }, 3000);
   };
   
   return (
     <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5">
       <div className="container mx-auto px-4">
         <div className="max-w-2xl mx-auto text-center">
           {/* Icon */}
           <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
             <Bell className="w-8 h-8 text-gold" />
           </div>
           
           {/* Heading */}
           <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
             Get Notified for Latest Updates & Offers
           </h3>
           <p className="text-muted-foreground mb-8">
             Subscribe to receive exclusive offers, new product launches, and healthy recipes!
           </p>
           
           {/* Form */}
           <form onSubmit={handleSubmit} className="space-y-4">
             {/* Email Input */}
             <div className="relative max-w-md mx-auto">
               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
               <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter your email address"
                 required
                 className="w-full pl-12 pr-4 py-3.5 border rounded-xl bg-background focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
               />
             </div>
             
             {/* WhatsApp Opt-in */}
             <label className="flex items-center justify-center gap-3 cursor-pointer group">
               <div 
                 className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
                   whatsappOptIn 
                     ? 'bg-[#25D366] border-[#25D366]' 
                     : 'border-muted-foreground/30 group-hover:border-[#25D366]'
                 }`}
                 onClick={() => setWhatsappOptIn(!whatsappOptIn)}
               >
                 {whatsappOptIn && <CheckCircle className="w-4 h-4 text-white" />}
               </div>
               <span className="flex items-center gap-2 text-sm text-muted-foreground">
                 <MessageCircle className="w-4 h-4 text-[#25D366]" />
                 Also receive updates on WhatsApp
               </span>
             </label>
             
             {/* Submit Button */}
             <button
               type="submit"
               disabled={isSubmitting || isSuccess}
               className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                 isSuccess 
                   ? 'bg-organic-green text-white'
                   : 'bg-primary text-primary-foreground hover:bg-deep-blue-light'
               } disabled:opacity-70`}
             >
               {isSubmitting ? (
                 <>
                   <Loader2 className="w-5 h-5 animate-spin" />
                   Subscribing...
                 </>
               ) : isSuccess ? (
                 <>
                   <CheckCircle className="w-5 h-5" />
                   Subscribed Successfully!
                 </>
               ) : (
                 <>
                   <Bell className="w-5 h-5" />
                   Subscribe Now
                 </>
               )}
             </button>
           </form>
           
           {/* Privacy Note */}
           <p className="text-xs text-muted-foreground mt-6">
             We respect your privacy. Unsubscribe anytime.
           </p>
         </div>
       </div>
     </section>
   );
 };
 
 export default NotificationSubscribe;