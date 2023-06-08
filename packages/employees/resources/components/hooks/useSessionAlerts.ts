import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { usePageProps } from '@php-beam/packages/frontend/src/hooks/usePageProps';

export const useSessionAlerts = (): void => {
    const { flash, errors, error, message } = usePageProps();

    const toast = useToast({
        position: 'top-right',
        variant: 'solid',
    });

    useEffect(() => {
        if (error || flash.error) {
            toast({
                title: 'Something went wrong.',
                description: error || flash.error,
                isClosable: true,
                status: 'error',
            });
        }

        if (flash.success) {
            toast({
                title: 'Looks good!',
                description: flash.success,
                isClosable: true,
                status: 'success',
            });
        }

        if (message) {
            toast({
                title: 'Information',
                description: message,
                isClosable: true,
                status: 'info',
            });
        }
    }, [error, message, flash.success, errors]);
}
