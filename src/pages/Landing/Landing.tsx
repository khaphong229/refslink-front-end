import { Button } from '@/components/ui/button'
import TopImg from '@/assets/images/landing/top.png'
import { useNavigate } from 'react-router-dom'
export default function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <div className='min-h-fit'>
        <div className='grid md:grid-cols-2 items-center'>
          <div>
            <h1 className='font-bold text-3xl md:text-5xl text-primary leading-relaxed'>
              <span className='text-4xl md:text-6xl text-gradient'>Quản lý </span> link rút gọn cùng Ref
              <span className='text-gradient'>slink</span>
            </h1>
            <p className='my-4 text-primary/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloremque facilis perferendis libero
              obcaecati eligendi dolorum ea ad atque iure, harum neque excepturi, porro rerum tenetur quam facere
              pariatur debitis?
            </p>
            <Button onClick={() => navigate('/login')}>Bắt đầu ngay!</Button>
          </div>
          <div className='w-full my-3'>
            <img src={TopImg} alt='top-image' className='w-[300px] md:w-[400px] mx-auto block object-cover' />
          </div>
        </div>
      </div>
    </>
  )
}
