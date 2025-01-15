import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Link } from 'react-router-dom'
import { Google, Facebook } from 'developer-icons'

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.'
  }),
  password: z.string()
})

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='flex items-center justify-center min-h-[700px]'>
      <div className='max-w-6xl w-full'>
        <div className='w-full rounded-lg p-6 max-w-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <h3 className='text-primary text-3xl font-bold'>Đăng nhập</h3>
                <p className='text-primary/80 text-sm mt-4 leading-relaxed'>Trải nghiệm ngay!</p>
              </div>
              <div className='grid grid-cols-2 items-center gap-4'>
                <Button variant={'outline'} size={'icon'} className='w-full'>
                  <Google /> Google
                </Button>
                <Button variant={'outline'} size={'icon'} className='w-full'>
                  <Facebook /> Facebook
                </Button>
              </div>
              <div>
                <span className='text-primary/80 text-sm '>Đăng nhập bằng email</span>
              </div>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='Nhập email...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='Nhập mật khẩu...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex items-center justify-between flex-wrap gap-4'>
                <div className='flex items-center'>
                  <Checkbox id='remember-me' />
                  <label htmlFor='remember-me' className='ml-2 text-sm leading-none text-primary/80'>
                    Ghi nhớ
                  </label>
                </div>
                <div className='text-sm'>
                  <Link to={'/forgot-password'}>
                    <span className='text-primary font-semibold hover:underline'>Quên mật khẩu?</span>
                  </Link>
                </div>
              </div>
              <Button type='submit' className='w-full'>
                Đăng nhập
              </Button>
              <p className='text-sm text-primary/80 text-center'>
                Chưa có tài khoản?{' '}
                <Link to='/register'>
                  <span className='text-sm font-semibold text-primary ml-1 whitespace-nowrap hover:underline'>
                    Đăng ký
                  </span>
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
