'use client';

import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { AccountButton, AppMenuList } from '@/widgets';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Stack, VStack } from '~/styled-system/jsx';
import MenuIcon from '../assets/menu.svg';

export const MobileAppMenu = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Stack>
      <Image
        onClick={handleToggle}
        src={MenuIcon}
        alt="menu-button"
        width={MenuIcon.width}
        height={MenuIcon.height}
      />
      <Dialog open={open}>
        <DialogOverlay onClick={handleToggle} />
        <DialogContent
          onEscapeKeyDown={handleToggle}
          width="100%"
          height="100%"
        >
          <X onClick={handleToggle} />
          <VStack width="100%" gap={5}>
            <VStack width="100%" gap={5}>
              <AppMenuList onToggleModal={handleToggle} />
            </VStack>
            <div onClick={() => setOpen(false)}>
              <AccountButton />
            </div>
          </VStack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
