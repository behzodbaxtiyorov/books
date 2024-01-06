
import { Modal, Segmented, Switch } from 'antd';


  

const ModalUI = () => {
    
    
    //   const handleOk = () => {
    //     setIsModalOpen(false);
    //   };
    
    //   const handleCancel = () => {
    //     setIsModalOpen(false);
    //   };
    
  return (
    <>
    
    <Modal title="Sozlamalar" open={false}
    //  onOk={handleOk} onCancel={handleCancel}
     >
    <div className='mt-[30px]'>
    <Segmented block size='large' options={['Uz', 'Eng', 'Ru']} />
    </div>
    <div className='flex items-center w-full mt-[30px] mb-[30px] border-[1px] border-[#C8AC8C] rounded-[10px] justify-between px-3 py-2 '>
        <p className='font-semibold texy-[17px]'> Dark mode</p>
        <div className='bg-[#F5F5F5] flex items-center justify-center w-fit h-fit rounded-full'>
        <Switch onChange={() => {
          document.documentElement.classList.toggle("dark");
        }}/>
        </div>
    </div>

  </Modal>
    </>
  )
}

export default ModalUI