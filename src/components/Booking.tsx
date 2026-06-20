import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, Sparkles, CheckCircle, ShieldCheck, X } from 'lucide-react';
import { salonServices } from '../data';

interface BookingProps {
  preselectedService?: string;
  onClearPreselect?: () => void;
  onCloseModal?: () => void;
  isModalStyle?: boolean;
}

export default function Booking({
  preselectedService,
  onClearPreselect,
  onCloseModal,
  isModalStyle = false,
}: BookingProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '11:00',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Sync preselectedService
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      tempErrors.name = 'Please enter your full name (min 3 characters).';
    }

    // Indian Phone format validation
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Please enter your contact phone number.';
    } else if (phoneClean.length < 10) {
      tempErrors.phone = 'Please provide a valid contact (min 10 digits).';
    }

    if (!formData.service) {
      tempErrors.service = 'Please choose a beauty service category.';
    }

    if (!formData.date) {
      tempErrors.date = 'Please pick a preferred date.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = 'Dates in the past cannot be scheduled.';
      }
    }

    if (!formData.time) {
      tempErrors.time = 'Please choose a target time.';
    } else {
      const hour = parseInt(formData.time.split(':')[0], 10);
      if (hour < 10 || hour >= 21) {
        tempErrors.time = 'Appointments are open strictly daily from 10:00 AM to 9:00 PM.';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury API call process delay
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
      // Generate a luxury booking ID
      const randomId = 'BBOX-' + Math.floor(10000 + Math.random() * 90000);
      setBookingId(randomId);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '11:00',
    });
    setErrors({});
    setBookingSuccess(false);
    if (onClearPreselect) onClearPreselect();
    if (onCloseModal) onCloseModal();
  };

  // Prevent selecting dates before today in the HTML calendar picker
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section
      id="booking"
      className={`${
        isModalStyle
          ? 'bg-[#FAF6F1] p-6 sm:p-10'
          : 'bg-[#1A1A1A] py-24 sm:py-32 relative text-[#FAF6F1]'
      } overflow-hidden`}
    >
      <div className={`${isModalStyle ? '' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'}`}>
        {!isModalStyle && (
          /* Section Header */
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B76E79]">
              Secure Your Session
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase leading-tight">
              Reserve <span className="font-medium text-[#FAF6F1]">An Appointment</span>
            </h2>
            <div className="h-[1px] w-16 bg-[#B76E79] mx-auto mt-4" />
            <p className="font-sans font-light text-sm text-[#FAF6F1]/70 leading-relaxed pt-2">
              Book your customized salon therapy or request physical academy tours. Fill the reservation details below for immediate scheduling.
            </p>
          </div>
        )}

        {/* Dynamic Card Area */}
        <div className={`shadow-xl border ${isModalStyle ? 'border-[#1A1A1A]/10 bg-[#FAF6F1]' : 'bg-[#FAF6F1] border-[#1A1A1A]/10'} text-[#1A1A1A] p-6 sm:p-10 relative`}>
          
          <AnimatePresence mode="wait">
            {!bookingSuccess ? (
              /* Booking Form state */
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {preselectedService && (
                  <div className="bg-[#B76E79]/10 border border-[#B76E79]/20 p-4 flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#B76E79]" />
                      <span className="font-sans text-xs font-semibold text-[#1A1A1A]">
                        Scheduling: <strong className="text-[#B76E79]">{preselectedService}</strong>
                      </span>
                    </div>
                    {onClearPreselect && (
                      <button
                        type="button"
                        onClick={onClearPreselect}
                        className="text-xs text-[#1A1A1A]/60 hover:text-[#B76E79] underline cursor-pointer"
                      >
                        Reset Choice
                      </button>
                    )}
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Client Name Input */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Full Guest Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Radhika Sen"
                      className={`w-full px-4 py-3.5 border font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#B76E79] transition-all bg-[#FAF6F1] ${
                        errors.name ? 'border-red-500 bg-red-50/10' : 'border-[#1A1A1A]/15'
                      }`}
                    />
                    {errors.name && (
                      <span className="font-sans text-[10px] text-red-500">{errors.name}</span>
                    )}
                  </div>

                  {/* Client Phone Input */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 XXXXX "
                      className={`w-full px-4 py-3.5 border font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#B76E79] transition-all bg-[#FAF6F1] ${
                        errors.phone ? 'border-red-500 bg-red-50/10' : 'border-[#1A1A1A]/15'
                      }`}
                    />
                    {errors.phone && (
                      <span className="font-sans text-[10px] text-red-500">{errors.phone}</span>
                    )}
                  </div>

                  {/* Select Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Desired Beauty Service *</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 border font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#B76E79] transition-all bg-[#FAF6F1] ${
                        errors.service ? 'border-red-500 bg-red-50/10' : 'border-[#1A1A1A]/15'
                      }`}
                    >
                      <option value="">-- Choose Ritual --</option>
                      {salonServices.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.category.toUpperCase().padEnd(10, ' ')} | {service.name}
                        </option>
                      ))}
                      <option value="Academy Admissions Inquiry">ACADEMY | Class Admission / Tour</option>
                    </select>
                    {errors.service && (
                      <span className="font-sans text-[10px] text-red-500">{errors.service}</span>
                    )}
                  </div>

                  {/* Selection Date Picker */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={todayString}
                      className={`w-full px-4 py-3.5 border font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#B76E79] transition-all bg-[#FAF6F1] ${
                        errors.date ? 'border-red-500 bg-red-50/10' : 'border-[#1A1A1A]/15'
                      }`}
                    />
                    {errors.date && (
                      <span className="font-sans text-[10px] text-red-500">{errors.date}</span>
                    )}
                  </div>

                  {/* Selection Hour Picker */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B76E79]" />
                      <span>Preferred Time (10:00 AM – 9:00 PM) *</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 border font-sans text-xs focus:outline-none focus:ring-1 focus:ring-[#B76E79] transition-all bg-[#FAF6F1] ${
                        errors.time ? 'border-red-500 bg-red-50/10' : 'border-[#1A1A1A]/15'
                      }`}
                    />
                    {errors.time && (
                      <span className="font-sans text-[10px] text-red-500">{errors.time}</span>
                    )}
                  </div>
                </div>

                {/* Submitting Trigger CTA */}
                <div className="bg-[#E8DCD0]/35 border border-[#1A1A1A]/5 p-4 flex items-center space-x-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#B76E79] shrink-0" />
                  <span className="font-sans text-[11px] text-[#1A1A1A]/70 leading-relaxed font-light">
                    Reservations are completely free to request. We will coordinate secure slots and dispatch direct confirmation details within 15 minutes of scheduling.
                  </span>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#B76E79] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 font-medium cursor-pointer"
                  >
                    {isSubmitting ? 'Requesting Secure Slot...' : 'Reserve Appointment'}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Receipt state */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6 flex flex-col items-center max-w-lg mx-auto"
              >
                <div className="p-4 bg-green-50 rounded-full text-green-600 border border-green-200">
                  <CheckCircle className="w-12 h-12" />
                </div>
                
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B76E79] font-semibold">
                    Reservation Requested
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#1A1A1A] uppercase tracking-wide">
                    Appointment Saved
                  </h3>
                  <p className="font-sans text-xs text-[#1A1A1A]/70 leading-relaxed max-w-md font-light">
                    We have successfully saved your appointment request. High-priority VIP priority slots have been set!
                  </p>
                </div>

                {/* Detailed Ticket receipt */}
                <div className="bg-[#E8DCD0]/35 border border-[#1A1A1A]/10 w-full p-6 text-left space-y-4 font-sans text-xs relative">
                  {/* Decorative ticket notch */}
                  <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 bg-[#FAF6F1] border-r border-[#1A1A1A]/10 rounded-full" />
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-[#FAF6F1] border-l border-[#1A1A1A]/10 rounded-full" />

                  <div className="flex justify-between items-center pb-3 border-b border-[#1A1A1A]/10">
                    <span className="uppercase text-[10px] tracking-wider text-[#1A1A1A]/50">Reservation ID</span>
                    <strong className="font-mono text-sm tracking-wider text-[#B76E79]">{bookingId}</strong>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div>
                      <span className="block text-[10px] uppercase text-[#1A1A1A]/50">Guest Name</span>
                      <span className="font-semibold text-[#1A1A1A]">{formData.name}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-[#1A1A1A]/50">Contact Phone</span>
                      <span className="font-semibold text-[#1A1A1A]">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-[#1A1A1A]/50">Beauty Ritual</span>
                      <span className="font-semibold text-[#1A1A1A]">{formData.service}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-[#1A1A1A]/50">Date & Slot</span>
                      <span className="font-semibold text-[#1A1A1A]">
                        {formData.date} • {formData.time}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1A1A1A]/10 text-center text-[10px] text-[#1A1A1A]/50 leading-relaxed font-light">
                    We will dispatch a luxury itinerary confirmation thread and custom WhatsApp coordinates shortly! Keep your phone active.
                  </div>
                </div>

                <div className="flex space-x-3 w-full">
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Beauty%20Box%2C%20I%20just%20reserved%20appointment%20${bookingId}%20for%20${encodeURIComponent(formData.service)}.%20Please%20confirm%20my%20slot!`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-sans text-xs uppercase tracking-widest py-3 text-center transition-all duration-300 font-medium"
                  >
                    Confirm on WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-[#1A1A1A] hover:bg-[#FAF6F1] hover:text-[#1A1A1A] text-[#FAF6F1] font-sans text-xs uppercase tracking-widest py-3 border border-[#1A1A1A] transition-all cursor-pointer font-medium"
                  >
                    Book Another Slot
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
