import Image from 'next/image'
import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Main() {
  return (
    <main className={styles.main}>
      <div>
        <div className='styles.left'>
          <Image src={''} alt={''}/>
        </div>
        <div className='styles.right'>
          <h1>지금 일어나고 있는 일</h1>
          <h1>지금 가입하세요.</h1>
          <Link href='i/flow/signup' className='styles.signup'>계정 만들기</Link>
          <h3>이미 트위터에 가입하셨나요??</h3>
          <Link href='i/login' className='styles.login'>로그인</Link>
        </div>
      </div>
    </main>
  )
}
