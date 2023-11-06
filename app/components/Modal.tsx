"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import DeleteButton from '../product/[id]/DeleteButton';

type Props = {
    title: string,
    children: React.ReactNode,
    id: string,
}

const Modal = ({ title, children, id }: Props) => {
    const searchParams = useSearchParams();
    const modalOpen = searchParams.get("modalOpen");
    const router = useRouter();

    const handleClose = () => {
        router.back();

    }

    return (
        modalOpen === "yes" ? (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

                <div className="relative bg-white p-4 rounded-lg max-w-lg">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <button
                            onClick={handleClose}
                            className="bg-red-600 hover:bg-red-300 text-white px-4 rounded-md focus:outline-none"
                        >
                            X
                        </button>
                    </div>

                    <div className="my-10 p-4">{children}</div>

                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={handleClose}
                            className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg focus:outline-none"
                        >
                            Cancel
                        </button>
                        <DeleteButton id={id} />
                    </div>
                </div>
            </div>
        ) : null
    );
}

export default Modal
