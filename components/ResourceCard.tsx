import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import Image from 'next/image';


interface Props {
    title: string;
    id: string;
    image: string;
    downloadNumber: string;
    downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }: Props) => {
    return (

        <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[365]'>
            <Link
                href={downloadLink}
                target="_blank"
            >

                <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
                    <div className='h-fit w-full'>
                        <Image
                            src={image}
                            className='h-full rounded-md object-cover'
                            width={384}
                            height={440}
                            alt='title'
                        />
                    </div>
                    <CardTitle className='text-white paragraph-semibold line-clamp-1 w-full text-left'>{title}</CardTitle>
                </CardHeader>
            </Link>
            <CardContent className='flex-between mt-4 p-0'>
                <div>
                    <Image
                        src='/downloads.svg'
                        width={20}
                        height={20}
                        alt='downloads'
                    />
                    {downloadNumber}
                </div>
                <Link
                    href={downloadLink}
                    target="_blank"
                >
                    Download Now
                    <Image
                        src="/arrow-blue.svg"
                        width={13}
                        height={10}
                        alt="arrow"
                    />
                </Link>
            </CardContent>
        </Card>

    )
}

export default ResourceCard