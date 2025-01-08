import { useState } from 'react';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string>('');
  const copyToClipboard = ({
    copyValue,
    toastText,
  }: {
    copyValue: string;
    toastText?: string;
  }) => {
    const success = copy(copyValue);
    if (success) {
      setCopiedText(copyValue);
    }
    if (success) {
      toast.success(`${toastText || 'Copied!'}`);
    } else {
      toast.error('Failed to copy');
    }
  };
  return { copyToClipboard, isCopied: !!copiedText, copiedText };
};
