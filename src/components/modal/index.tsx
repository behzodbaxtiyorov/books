
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
    
    <Modal title="Sozlamalar" open={true}
    //  onOk={handleOk} onCancel={handleCancel}
     >
    <Segmented block size='large' options={['Uz', 'Eng', 'Ru']} />
    <div className='flex items-center w-full mt-[30px] mb-[30px] justify-between p-2 border-[1px] rounded-[10px] border-[#A8AC8C]'>
        <p className='font-semibold texy-[17px]'> Dark mode</p>
        <Switch defaultChecked  />
    </div>

  </Modal>
    </>
  )
}

export default ModalUI