import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerText?: string;
}

export function ContactModal({ isOpen, onClose, triggerText = "Contact Us" }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            {triggerText}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          <p className="text-center text-gray-600 mb-8">
            Choose your preferred way to connect with us
          </p>
          
          {/* Call Options */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Phone className="w-5 h-5 text-amber-600" />
              Call Us Directly
            </h3>
            <div className="grid gap-3">
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 text-lg"
                onClick={() => {
                  window.open('tel:+917842640744');
                  onClose();
                }}
              >
                Call +91 7842640744
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 text-lg"
                onClick={() => {
                  window.open('tel:+916304746801');
                  onClose();
                }}
              >
                Call +91 6304746801
              </Button>
            </div>
          </div>
          
          {/* WhatsApp Options */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              WhatsApp Chat
            </h3>
            <div className="grid gap-3">
              <Button
                variant="outline"
                className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-4 text-lg"
                onClick={() => {
                  window.open('https://wa.me/917842640744', '_blank');
                  onClose();
                }}
              >
                WhatsApp +91 7842640744
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-4 text-lg"
                onClick={() => {
                  window.open('https://wa.me/916304746801', '_blank');
                  onClose();
                }}
              >
                WhatsApp +91 6304746801
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 text-center">
            Available 9 AM - 8 PM • Free consultation • No obligation
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  return {
    isOpen,
    openModal,
    closeModal,
    ContactModal: (props: Omit<ContactModalProps, 'isOpen' | 'onClose'>) => (
      <ContactModal {...props} isOpen={isOpen} onClose={closeModal} />
    )
  };
}