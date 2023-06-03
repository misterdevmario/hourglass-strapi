'use client'
import Carousel from '@/components/carousel/Carousel';
import Modal from '@/components/modal/Modal'
import { useModal } from '@/components/modal/useModal'
import { useInfo } from "@/context/Context";


const Edit = () => {
  const { info } = useInfo();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpenActivities, openActivities, closeActivities] = useModal(true)
  return (
    <div>
    
        <Modal isOpen={isOpenActivities} closeModal={closeActivities}>
            Hola
        </Modal>
        <Carousel activities = {info.activities} />

    </div>
  )
}

export default Edit