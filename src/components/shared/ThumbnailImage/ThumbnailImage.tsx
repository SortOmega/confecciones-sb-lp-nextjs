'use client';
import Image, { ImageProps } from 'next/image';
import { dynamicDialogService } from '@/src/services';
import { ImageVisualizer } from '../ImageVisualizer/ImageVisualizer';


export type ThumbnailImageProps = Omit<ImageProps, 'src' | 'onClick'> & {
    srcThumbnail: string;
    srcHighRes: string;
};

export const ThumbnailImage = ({ srcThumbnail, srcHighRes, ...imageProps }: ThumbnailImageProps) => {
    const handleOpenDialog = () => {
        dynamicDialogService.open(
            'mainModal',

                <ImageVisualizer
                    src={srcHighRes}
                    alt={imageProps.alt as string}
                    className="image-preview"
                    autoHeight={true}
                />,
            {
                draggable: true,
                centerContent: false,
                fullscreenToggle: true,
                showCloseButton: true,
                defaultFullscreen: true,
                header: <span className="text-sm font-bold text-gray-200">Vista previa de la imagen</span>,
            },
        );
    }



    return (
        <Image
            {...imageProps}
            src={srcThumbnail}
            alt={imageProps.alt as string}
            width={imageProps.width || 512}
            height={imageProps.height || 512}
            onClick={handleOpenDialog}
        />
    );
};
