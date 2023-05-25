import { useToast } from 'vue-toastification';

const toast = useToast();

export function showToast(message, options) {
  return toast.success('Success Add To Cart', {
    position: 'top-right',
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
    ...options,
  });
}
